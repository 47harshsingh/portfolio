"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import { FaChartBar, FaDatabase, FaFileExcel, FaFlask, FaBullhorn, FaMicrophoneLines } from "react-icons/fa6";
import { SiDuckdb, SiGmail, SiGoogleads, SiGooglecalendar, SiMeta, SiN8N, SiPython } from "react-icons/si";
import { agent } from "@/lib/content";
import { Reveal, SectionHeading } from "./ui";

function Card({
  className = "",
  children,
  delay = 0,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className={className}>
      <div className="glass group relative h-full overflow-hidden rounded-3xl p-7 transition-colors duration-500 hover:border-white/20 sm:p-8">
        {children}
      </div>
    </Reveal>
  );
}

function CardTitle({ Icon, title, top }: { Icon: IconType; title: string; top?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
        <Icon className="h-4 w-4 text-white/85" />
      </span>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      {top && (
        <span className="ml-auto rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-accent uppercase">
          Top skill
        </span>
      )}
    </div>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/65">
          {t}
        </li>
      ))}
    </ul>
  );
}

const routeIcon = { gmail: SiGmail, calendar: SiGooglecalendar, fireflies: FaMicrophoneLines } as const;

/** Stacked notification cards cycling through real routes from the n8n project. */
function RouteFeed() {
  const reduce = useReducedMotion();
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setTick((t) => t + 1), 2600);
    return () => clearInterval(id);
  }, [reduce]);

  const n = agent.routes.length;
  return (
    <ul className="relative mt-8 h-[196px]">
      {agent.routes.map((r, i) => {
        const pos = (i - tick + n * 1000) % n; // 0 = front
        const Icon = routeIcon[r.app as keyof typeof routeIcon];
        return (
          <motion.li
            key={r.prompt}
            animate={{ y: pos * 64, scale: 1 - pos * 0.04, opacity: 1 - pos * 0.3, zIndex: n - pos }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute inset-x-0 top-0 flex items-start gap-3 rounded-2xl border border-white/10 bg-[#111113] p-4 shadow-2xl"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/5">
              <Icon className="h-4 w-4 text-white/85" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm text-white/90">“{r.prompt}”</p>
              <p className="mt-1 truncate font-mono text-[11px] text-accent">{r.route}</p>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-6 sm:py-36">
      <SectionHeading label="Skills & stack" title="The tools behind" dim="the answers" />

      <div className="mt-16 grid gap-4 md:grid-cols-6">
        <Card className="md:col-span-4">
          <CardTitle Icon={FaFlask} title="A/B Testing & Experiment Analysis" top />
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
            Designing and reading experiments end to end — from writing the plan before the data exists to sizing the
            follow-up test.
          </p>
          <Tags
            items={[
              "Pre-registration",
              "Power & sample size",
              "Confidence intervals",
              "Bootstrap",
              "Interaction tests",
              "FDR correction",
              "SRM checks",
              "Simulation validation",
            ]}
          />
        </Card>

        <Card className="md:col-span-2" delay={0.05}>
          <CardTitle Icon={FaDatabase} title="SQL" top />
          <p className="mt-4 text-sm leading-relaxed text-muted">Querying and shaping data for analysis.</p>
          <div className="mt-6 flex items-center gap-3 text-white/60">
            <SiDuckdb className="h-6 w-6" />
            <span className="text-sm">DuckDB</span>
          </div>
        </Card>

        <Card className="md:col-span-3 md:row-span-2" delay={0.1}>
          <CardTitle Icon={SiN8N} title="Workflow Automation" top />
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Multi-agent assistants in n8n with LLM APIs. Real routes from my assistant:
          </p>
          <RouteFeed />
          <Tags items={["n8n", "LLM APIs", "Gmail", "Google Calendar", "Fireflies"]} />
        </Card>

        <Card className="md:col-span-3" delay={0.15}>
          <CardTitle Icon={SiPython} title="Python" />
          <Tags items={["pandas", "SciPy", "statsmodels", "matplotlib", "Jupyter"]} />
        </Card>

        <Card className="md:col-span-3" delay={0.2}>
          <CardTitle Icon={FaChartBar} title="BI & Spreadsheets" />
          <div className="mt-6 flex flex-wrap gap-6 text-white/65">
            <span className="flex items-center gap-2 text-sm">
              <FaChartBar className="h-5 w-5" /> Power BI
            </span>
            <span className="flex items-center gap-2 text-sm">
              <FaFileExcel className="h-5 w-5" /> Excel
            </span>
          </div>
        </Card>

        <Card className="md:col-span-6" delay={0.25}>
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <CardTitle Icon={FaBullhorn} title="Marketing Analytics" />
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
                Tracking cost per result, CTR and ROAS to move budget between campaigns.
              </p>
            </div>
            <div className="flex gap-6 text-white/60">
              <span className="flex items-center gap-2 text-sm">
                <SiMeta className="h-5 w-5" /> Meta Ads
              </span>
              <span className="flex items-center gap-2 text-sm">
                <SiGoogleads className="h-5 w-5" /> Google Ads
              </span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
