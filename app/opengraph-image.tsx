import { ImageResponse } from "next/og";
import { identity } from "@/content/site";

export const alt = `${identity.fullName} — ${identity.roles[0]}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#05070d",
          backgroundImage:
            "radial-gradient(900px 600px at 85% -10%, rgba(47,123,255,0.22), transparent 60%), radial-gradient(700px 500px at 0% 110%, rgba(56,245,181,0.16), transparent 55%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "76px",
              height: "76px",
              borderRadius: "20px",
              border: "2px solid rgba(56,245,181,0.45)",
              backgroundColor: "rgba(56,245,181,0.10)",
              color: "#74ffd2",
              fontSize: "44px",
              fontWeight: 700,
            }}
          >
            Z
          </div>
          <div
            style={{
              color: "#74ffd2",
              fontSize: "26px",
              letterSpacing: "10px",
              fontWeight: 600,
            }}
          >
            {identity.brand}
          </div>
        </div>

        {/* Name + roles */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#f4f7ff",
              fontSize: "84px",
              fontWeight: 700,
              lineHeight: 1.05,
            }}
          >
            {identity.fullName}
          </div>
          <div
            style={{
              marginTop: "24px",
              color: "#aab4c8",
              fontSize: "36px",
              fontWeight: 500,
            }}
          >
            Agentic AI Architect · Data Science Practitioner
          </div>
        </div>

        {/* Accent bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "260px",
              height: "8px",
              borderRadius: "999px",
              backgroundImage: "linear-gradient(90deg, #2f7bff, #38f5b5)",
            }}
          />
          <div style={{ color: "#6b7689", fontSize: "24px" }}>
            {identity.location}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
