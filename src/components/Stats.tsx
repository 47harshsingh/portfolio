"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/content";
import { SectionHeading } from "./ui";

function Counter({ value, decimals }: { value: number; decimals: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const format = (n: number) =>
    n.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  const [text, setText] = useState(format(value));

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (v) => setText(format(v)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, value]);

  return <span ref={ref}>{text}</span>;
}

export default function Stats() {
  return (
    <section aria-labelledby="numbers" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-6 sm:py-36">
      <SectionHeading id="numbers" label="By the numbers" title="Numbers that" dim="make sense" />
      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-ink p-7 sm:p-8">
            <p className="text-metal font-mono text-4xl font-semibold tracking-tight whitespace-nowrap sm:text-5xl lg:text-[2.5rem]">
              {s.prefix}
              <Counter value={s.value} decimals={s.decimals} />
              {s.suffix}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
