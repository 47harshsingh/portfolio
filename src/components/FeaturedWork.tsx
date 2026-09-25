"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCircleCheck, FaRegCircle } from "react-icons/fa6";
import { SiGmail, SiGooglecalendar } from "react-icons/si";
import { FaMicrophoneLines, FaSitemap } from "react-icons/fa6";
import { abTest, agent } from "@/lib/content";
import { Reveal, SectionHeading } from "./ui";

function Chip({ children }: { children: string }) {
  return (
    <li className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70">{children}</li>
  );
}

function CiChart() {
  const { low, point, high, max } = abTest.ci;
  const pct = (v: number) => `${(v / max) * 100}%`;
  return (
    <figure
      className="rounded-2xl border border-white/10 bg-black/40 p-5"
      aria-label={`95% confidence interval for conversion lift: +${low} to +${high} percentage points, estimate +${point}`}
    >
      <figcaption className="mb-9 flex items-center justify-between text-xs text-muted">
        <span>Conversion lift · 95% CI</span>
        <span className="font-mono text-accent">+{point}pp</span>
      </figcaption>
      <div className="relative h-2 rounded-full bg-white/10">
        <motion.div
          className="absolute inset-y-0 rounded-full bg-gradient-to-r from-accent/40 via-accent to-accent/40"
          style={{ left: pct(low) }}
          initial={{ width: 0 }}
          whileInView={{ width: pct(high - low) }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
        />
        <motion.div
          className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ink bg-white shadow-[0_0_20px_rgba(45,212,191,0.8)]"
          style={{ left: pct(point) }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, type: "spring" }}
        />
        {[low, point, high].map((v) => (
          <span
            key={v}
            className="absolute bottom-5 -translate-x-1/2 font-mono text-[11px] text-white/60"
            style={{ left: pct(v) }}
          >
            +{v}
          </span>
        ))}
      </div>
      <div className="mt-3 flex justify-between font-mono text-[10px] text-faint">
        <span>0pp</span>
        <span>+1pp</span>
        <span>+2pp</span>
        <span>+3pp</span>
      </div>
    </figure>
  );
}

function AbVisual() {
  return (
    <div className="space-y-3">
      <CiChart />
      <ul className="divide-y divide-white/[0.06] overflow-hidden rounded-2xl border border-white/10 bg-black/40">
        {abTest.results.map((r) => (
          <li key={r.metric} className="flex items-center justify-between gap-4 px-5 py-4">
            <div className="min-w-0">
              <p className="text-sm text-white/85">{r.metric}</p>
              <p className="mt-0.5 font-mono text-[11px] text-faint">{r.detail}</p>
            </div>
            <div className="shrink-0 text-right">
              <p className="font-mono text-base text-white">{r.result}</p>
              <p className={`text-[11px] ${r.tone === "good" ? "text-good" : "text-warn"}`}>{r.verdict}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const agentIcon = {
  gmail: SiGmail,
  calendar: SiGooglecalendar,
  fireflies: FaMicrophoneLines,
} as const;

function AgentVisual() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-5 sm:p-6">
      <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/70">
        Chat message received
      </div>
      <div className="mx-auto h-6 w-px bg-gradient-to-b from-white/10 to-accent/60" />
      <div className="mx-auto flex w-fit items-center gap-2 rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm font-medium text-white shadow-[0_0_40px_-8px_rgba(45,212,191,0.5)]">
        <FaSitemap className="h-4 w-4 text-accent" />
        Master Orchestrator Agent
      </div>
      <div className="relative mx-auto h-8 w-[70%]">
        <div className="absolute top-0 left-1/2 h-4 w-px bg-accent/50" />
        <div className="absolute top-4 right-0 left-0 h-px bg-accent/40" />
        <div className="absolute top-4 left-0 h-4 w-px bg-accent/40" />
        <div className="absolute top-4 left-1/2 h-4 w-px bg-accent/40" />
        <div className="absolute top-4 right-0 h-4 w-px bg-accent/40" />
        <motion.span
          className="absolute top-[13px] h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_#2dd4bf]"
          animate={{ left: ["0%", "100%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <ul className="grid grid-cols-3 gap-2 sm:gap-3">
        {agent.agents.map((a) => {
          const Icon = agentIcon[a.icon as keyof typeof agentIcon];
          return (
            <li key={a.name} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
              <Icon className="mx-auto h-5 w-5 text-white/80" />
              <p className="mt-2 text-[11px] leading-tight font-medium text-white sm:text-xs">{a.name}</p>
              <p className="mt-1 text-[10px] leading-tight text-faint sm:text-[11px]">{a.tools}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const slides = [
  { ...abTest, visual: <AbVisual />, extra: abTest.recommendation },
  { ...agent, visual: <AgentVisual />, extra: undefined as string | undefined },
];

export default function FeaturedWork() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const go = (step: number) => setState(([i]) => [(i + step + slides.length) % slides.length, step]);
  const s = slides[index];

  return (
    <section id="work" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-6 sm:py-36">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading label="Featured work" title="Projects that end" dim="in a decision" />
        <Reveal className="flex items-center gap-3">
          <span className="mr-2 font-mono text-sm text-faint">
            0{index + 1} / 0{slides.length}
          </span>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous project"
            className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.03] transition hover:border-white/30 hover:bg-white/10"
          >
            <FaArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next project"
            className="grid h-12 w-12 place-items-center rounded-full bg-white text-black transition hover:bg-white/85"
          >
            <FaArrowRight className="h-4 w-4" />
          </button>
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <div className="glass relative overflow-hidden rounded-[28px]">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
          />
          <AnimatePresence mode="wait" initial={false} custom={dir}>
            <motion.article
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) go(1);
                else if (info.offset.x > 80) go(-1);
              }}
              className="relative grid cursor-grab gap-10 p-6 active:cursor-grabbing sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-12"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}: ${s.title}`}
            >
              <div>
                <p className="text-sm text-accent">{s.tag}</p>
                <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{s.title}</h3>
                <p className="mt-5 leading-relaxed text-white/70">{s.summary}</p>
                <ul className="mt-6 space-y-3">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-relaxed text-white/70">
                      <FaCircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
                {s.extra && (
                  <p className="mt-6 flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white">
                    <FaRegCircle className="mt-0.5 h-4 w-4 shrink-0 text-warn" />
                    <span>
                      <span className="text-muted">Recommendation: </span>
                      {s.extra}
                    </span>
                  </p>
                )}
                <ul className="mt-8 flex flex-wrap gap-2">
                  {s.stack.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </ul>
              </div>
              <div className="self-center">{s.visual}</div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Choose project">
          {slides.map((sl, i) => (
            <button
              key={sl.title}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={sl.title}
              onClick={() => setState([i, i > index ? 1 : -1])}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-10 bg-white" : "w-4 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
