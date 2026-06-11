"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient animated backdrop for the whole site.
 * - Three drifting aurora blobs (electric / neon / violet)
 * - A pointer-reactive spotlight that follows the cursor
 * - A faint film-grain layer for depth
 * All purely decorative + pointer-events-none, behind every section.
 */
export default function AuroraBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        el.style.setProperty("--mx", `${x}%`);
        el.style.setProperty("--my", `${y}%`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="aurora-root pointer-events-none fixed inset-0 -z-20 overflow-hidden"
    >
      <span className="aurora-blob aurora-blob--electric" />
      <span className="aurora-blob aurora-blob--neon" />
      <span className="aurora-blob aurora-blob--violet" />
      <span className="aurora-spotlight" />
      <span className="aurora-grain" />
    </div>
  );
}
