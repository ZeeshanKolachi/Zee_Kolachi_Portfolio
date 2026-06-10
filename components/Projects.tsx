"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projects, socials, type Project } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { ArrowUpRight, ChevronDown, GitHubIcon } from "@/lib/icons";

function CaseStudyRow({ label, body }: { label: string; body: string }) {
  return (
    <div className="border-l-2 border-edge pl-4">
      <p className="text-xs uppercase tracking-widest text-neon-soft">{label}</p>
      <p className="mt-1 text-sm leading-relaxed text-ink-dim">{body}</p>
    </div>
  );
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={index * 0.06} className="h-full">
      <motion.div
        layout
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-gradient-to-br from-panel/60 to-void/20 transition-colors hover:border-electric/40"
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex flex-col gap-3 p-6 text-left"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full border border-electric/30 bg-electric/10 px-2.5 py-1 text-xs font-medium text-electric-soft">
              {p.category}
            </span>
          </div>

          <h3 className="font-serif text-xl font-semibold text-ink">{p.name}</h3>
          <p className="text-sm text-ink-dim">{p.tagline}</p>

          <div className="mt-1 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-edge bg-white/[0.03] px-2 py-0.5 text-xs text-ink-faint"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-2 flex items-center justify-between border-t border-edge/60 pt-3">
            <span className="font-serif text-sm font-semibold text-neon-soft">
              {p.outcome}
            </span>
            <span className="flex items-center gap-1 text-xs text-ink-faint">
              {open ? "Hide story" : "Read story"}
              <ChevronDown
                width={16}
                height={16}
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </span>
          </div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="space-y-4 px-6 pb-6">
                <div className="rounded-xl bg-void/40 p-2 text-xs text-ink-faint">
                  Role: <span className="text-ink-dim">{p.role}</span>
                </div>
                <CaseStudyRow label="Challenge" body={p.challenge} />
                <CaseStudyRow label="Process" body={p.process} />
                <CaseStudyRow label="Result" body={p.result} />
                {(p.demo || p.repo) && (
                  <div className="flex flex-wrap gap-2">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-electric/40 bg-electric/10 px-3 py-2 text-sm font-medium text-electric-soft transition-colors hover:bg-electric/20"
                      >
                        Live demo <ArrowUpRight width={15} height={15} />
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-edge bg-white/5 px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-white/10"
                      >
                        <GitHubIcon width={15} height={15} /> View code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Reveal>
  );
}

export default function Projects() {
  const github = socials.find((s) => s.key === "github");
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Case Files"
        title="Projects, in depth"
        intro="Each file expands into the full story — the challenge, the process, and the result. Tap a card to open it."
      />

      <div className="mt-12 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} p={p} index={i} />
        ))}
      </div>

      {github && (
        <Reveal delay={0.1}>
          <div className="mt-8 flex justify-center">
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-edge bg-white/5 px-5 py-3 text-sm font-medium text-ink transition-all hover:border-electric/50 hover:bg-white/10"
            >
              <GitHubIcon width={18} height={18} />
              More on GitHub
              <ArrowUpRight
                width={15}
                height={15}
                className="text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </Reveal>
      )}
    </section>
  );
}
