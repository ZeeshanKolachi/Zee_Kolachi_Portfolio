import { NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "@/lib/assistant";

export const runtime = "nodejs";

interface ChatTurn {
  from: "user" | "bot";
  text: string;
}

const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

// Gemini 2.5 Flash spends "thinking" tokens from the same maxOutputTokens
// budget, which can leave little or nothing for the visible reply. Disable
// thinking on models that support it (2.5 Pro cannot turn it off).
const THINKING_OFF =
  MODEL.includes("2.5") && !MODEL.includes("pro")
    ? { thinkingConfig: { thinkingBudget: 0 } }
    : {};

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY;

  // No key configured → tell the client to use its scripted fallback.
  if (!apiKey) {
    return NextResponse.json(
      { fallback: true, error: "AI not configured" },
      { status: 200 }
    );
  }

  let message = "";
  let history: ChatTurn[] = [];
  try {
    const body = await req.json();
    message = typeof body.message === "string" ? body.message.slice(0, 1000) : "";
    history = Array.isArray(body.history) ? body.history.slice(-8) : [];
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  if (!message.trim()) {
    return NextResponse.json({ error: "Empty message" }, { status: 400 });
  }

  // Build Gemini conversation: prior turns + the new user message.
  const mapped = history
    .filter((t) => t.text?.trim())
    .map((t) => ({
      role: t.from === "user" ? "user" : "model",
      parts: [{ text: t.text }],
    }));
  // Gemini requires the conversation to start with a user turn — drop any
  // leading model turns (e.g. the greeting message).
  while (mapped.length && mapped[0].role === "model") mapped.shift();

  const contents = [...mapped, { role: "user", parts: [{ text: message }] }];

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents,
        generationConfig: {
          temperature: 0.6,
          maxOutputTokens: 800,
          ...THINKING_OFF,
        },
        safetySettings: [
          { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_ONLY_HIGH" },
          { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_ONLY_HIGH" },
        ],
      }),
    });
    clearTimeout(timeout);

    if (!res.ok) {
      // Upstream error → graceful fallback to scripted assistant.
      return NextResponse.json({ fallback: true }, { status: 200 });
    }

    const data = await res.json();
    const candidate = data?.candidates?.[0];
    let text: string | undefined = candidate?.content?.parts
      ?.map((p: { text?: string }) => p.text || "")
      .join("")
      .trim();

    if (!text) {
      return NextResponse.json({ fallback: true }, { status: 200 });
    }

    // If the reply was cut off at the token limit, trim back to the last
    // complete sentence rather than showing a mid-sentence break.
    if (candidate?.finishReason === "MAX_TOKENS") {
      const lastStop = Math.max(
        text.lastIndexOf("."),
        text.lastIndexOf("!"),
        text.lastIndexOf("?")
      );
      if (lastStop > 0) text = text.slice(0, lastStop + 1);
    }

    return NextResponse.json({ text });
  } catch {
    // Network/timeout/abort → fallback.
    return NextResponse.json({ fallback: true }, { status: 200 });
  }
}
