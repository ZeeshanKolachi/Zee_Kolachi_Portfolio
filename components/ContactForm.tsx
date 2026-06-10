"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/content/site";
import { SendIcon } from "@/lib/icons";

type Status = "idle" | "sending" | "sent" | "error";

// Set NEXT_PUBLIC_FORMSPREE_ID in .env.local to a Formspree form id (e.g. "xnqkldyz").
// Until then, the form gracefully falls back to opening a prefilled email.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    // No backend configured → fall back to a prefilled mailto so the form still works.
    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${name || "a visitor"}`);
      const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ""}`);
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        form.reset();
        setStatus("sent");
      } else {
        const json = await res.json().catch(() => null);
        setError(json?.errors?.[0]?.message || "Something went wrong. Please email me directly.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please email me directly.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-neon/30 bg-neon/5 p-6">
        <p className="font-serif text-xl font-semibold text-ink">Message on its way 🚀</p>
        <p className="mt-2 text-sm text-ink-dim">
          Thanks for reaching out — I&apos;ll reply as soon as I can. For anything urgent,
          WhatsApp is fastest.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-electric-soft hover:underline"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs uppercase tracking-widest text-ink-faint">Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded-xl border border-edge bg-void/40 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-electric/60 focus:outline-none"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-widest text-ink-faint">Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="mt-1.5 w-full rounded-xl border border-edge bg-void/40 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-electric/60 focus:outline-none"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-xs uppercase tracking-widest text-ink-faint">Message</span>
        <textarea
          name="message"
          required
          rows={4}
          className="mt-1.5 w-full resize-y rounded-xl border border-edge bg-void/40 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-electric/60 focus:outline-none"
          placeholder="A line about the project, role, or question…"
        />
      </label>

      {status === "error" && (
        <p className="text-sm text-red-300">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex items-center gap-2 rounded-xl bg-electric px-5 py-3 font-semibold text-white transition-all hover:glow-electric disabled:opacity-60"
      >
        <SendIcon width={18} height={18} />
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
