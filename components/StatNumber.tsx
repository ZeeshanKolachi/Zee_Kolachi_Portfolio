"use client";

import { useCountUp } from "@/lib/hooks";
import type { Stat } from "@/content/site";

/** Renders one credential stat with a count-up animation on scroll-in. */
export default function StatNumber({
  stat,
  className = "",
}: {
  stat: Stat;
  className?: string;
}) {
  const { value, ref } = useCountUp(stat.value);
  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {stat.prefix}
      {value}
      {stat.suffix}
    </span>
  );
}
