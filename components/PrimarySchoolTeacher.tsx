"use client";

import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { SparkIcon } from "@/lib/icons";

export default function PrimarySchoolTeacher() {
  return (
    <section id="teacher" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow="Chapter" title="Primary School Teacher" />
      <Reveal>
        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-edge/70 bg-void/20 p-10 text-center">
          <SparkIcon width={20} height={20} className="text-ink-faint" />
          <p className="text-sm text-ink-faint">More on this chapter coming soon.</p>
        </div>
      </Reveal>
    </section>
  );
}
