"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { profile } from "@/lib/content";

function Word({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {word}
    </motion.span>
  );
}

/** Giant sentence whose words light up one by one as you scroll. */
export default function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = profile.statement.split(" ");

  return (
    <section aria-label="What I believe" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-6 sm:py-40">
      <div ref={ref}>
        <p className="text-4xl leading-[1.08] font-bold tracking-tight sm:text-6xl lg:text-7xl">
          {words.map((w, i) => (
            <Word
              key={i}
              word={w}
              progress={scrollYProgress}
              range={[i / words.length, (i + 1) / words.length]}
            />
          ))}
        </p>
      </div>
    </section>
  );
}
