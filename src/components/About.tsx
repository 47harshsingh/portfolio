import { about } from "@/lib/content";
import { Reveal, SectionHeading } from "./ui";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-6 sm:py-36">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <SectionHeading label="About me" title="Did the change work?" dim="Why? What next?" />
        <div className="space-y-6 text-base leading-relaxed text-white/70 sm:text-lg">
          {about.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
