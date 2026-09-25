import { FaAward, FaBriefcase, FaGraduationCap } from "react-icons/fa6";
import { certifications, education, experience } from "@/lib/content";
import { Reveal, SectionHeading } from "./ui";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-6 sm:py-36">
      <SectionHeading label="Experience & education" title="Where the numbers" dim="started to matter" />

      <ol className="relative mt-16 space-y-6 border-l border-white/10 pl-6 sm:pl-10">
        <li className="relative"><Reveal>
            <span className="absolute top-8 -left-[31px] grid h-3 w-3 place-items-center rounded-full bg-accent shadow-[0_0_16px_#2dd4bf] sm:-left-[47px]" />
            <article className="glass rounded-3xl p-7 sm:p-9">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
                    <FaBriefcase className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{experience.role}</h3>
                    <p className="text-sm text-muted">{experience.org}</p>
                  </div>
                </div>
                <p className="font-mono text-xs text-white/60 sm:text-right">
                  {experience.period}
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> · </span>
                  <span className="text-faint">{experience.duration}</span>
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {experience.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-white/70 sm:text-base">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-white/50" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal></li>

        <li className="relative"><Reveal delay={0.08}>
            <span className="absolute top-8 -left-[31px] h-3 w-3 rounded-full border border-white/40 bg-ink sm:-left-[47px]" />
            <article className="glass rounded-3xl p-7 sm:p-9">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5">
                    <FaGraduationCap className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{education.school}</h3>
                    <p className="text-sm text-muted">{education.degree}</p>
                  </div>
                </div>
                <p className="font-mono text-xs text-white/60">{education.period}</p>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="mb-4 text-xs tracking-[0.2em] text-faint uppercase">Certifications</p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {certifications.map((c) => (
                    <li
                      key={c}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm"
                    >
                      <FaAward className="h-4 w-4 shrink-0 text-accent" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal></li>
      </ol>
    </section>
  );
}

