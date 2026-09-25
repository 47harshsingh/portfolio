"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa6";
import { profile } from "@/lib/content";
import { PillButton } from "./ui";

const LOADER_DELAY = 1.05;

export default function Hero() {
  const mx = useMotionValue(50);
  const my = useMotionValue(30);
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mx}% ${my}%, rgba(45,212,191,0.10), transparent 70%)`;

  const rise = (i: number) => ({
    initial: { opacity: 0, y: 32, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.9, delay: LOADER_DELAY + i * 0.12, ease: [0.2, 0.8, 0.2, 1] as const },
  });

  return (
    <section
      id="top"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width) * 100);
        my.set(((e.clientY - r.top) / r.height) * 100);
      }}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      {/* Background layers */}
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div
        aria-hidden
        className="absolute -top-40 -left-40 h-[70vh] w-[90vw] rotate-[-18deg] bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.16),transparent_60%)] blur-2xl"
      />
      <motion.div aria-hidden className="absolute inset-0" style={{ background: spotlight }} />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6">
        <motion.div {...rise(0)} className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] py-2 pr-4 pl-3 text-xs text-white/70 sm:text-sm">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping-soft absolute inset-0 rounded-full bg-good" />
            <span className="relative h-2 w-2 rounded-full bg-good" />
          </span>
          {profile.openTo}
        </motion.div>

        <h1 className="text-5xl leading-[0.95] font-bold tracking-tighter sm:text-7xl lg:text-[7.5rem]">
          <motion.span {...rise(1)} className="text-metal block pb-2">
            {profile.name}
          </motion.span>
          <motion.span {...rise(2)} className="block pb-2 text-white/35">
            — {profile.role}
          </motion.span>
        </h1>

        <motion.p {...rise(3)} className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          {profile.pitch}
        </motion.p>

        <motion.div {...rise(4)} className="mt-10 flex flex-wrap gap-3">
          <PillButton href="#work" variant="solid">
            See my work
          </PillButton>
          <PillButton href={`mailto:${profile.email}`} icon={<FaEnvelope className="h-3.5 w-3.5" />}>
            Email me
          </PillButton>
          <PillButton href={profile.linkedin} external icon={<FaLinkedinIn className="h-3.5 w-3.5" />}>
            LinkedIn
          </PillButton>
        </motion.div>

        <motion.dl
          {...rise(5)}
          className="mt-16 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/10 pt-6 text-sm sm:grid-cols-3"
        >
          <div>
            <dt className="text-faint">Based in</dt>
            <dd className="mt-1 text-white/80">Gwalior, India</dd>
          </div>
          <div>
            <dt className="text-faint">Stack</dt>
            <dd className="mt-1 text-white/80">SQL · Python · Power BI · Excel</dd>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <dt className="text-faint">Education</dt>
            <dd className="mt-1 text-white/80">B.Tech Computer Engineering ’26</dd>
          </div>
        </motion.dl>
      </div>
    </section>
  );
}
