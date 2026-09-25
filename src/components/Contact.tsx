"use client";

import { useState } from "react";
import { FaArrowUp, FaCheck, FaCopy, FaEnvelope, FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import { nav, profile } from "@/lib/content";
import { PillButton, Reveal } from "./ui";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <>
      <section id="contact" className="relative overflow-hidden px-5 py-28 sm:px-6 sm:py-36">
        <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
        <div
          aria-hidden
          className="absolute bottom-0 left-1/2 h-[420px] w-[720px] max-w-full -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        />
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 text-base text-muted sm:text-lg">Contact</p>
          <h2 className="text-metal text-5xl leading-[1] font-bold tracking-tighter sm:text-7xl">Let’s talk.</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{profile.openTo}.</p>

          <div className="mx-auto mt-10 flex max-w-md items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1.5 pl-5">
            <FaEnvelope className="h-4 w-4 shrink-0 text-white/50" />
            <a href={`mailto:${profile.email}`} className="min-w-0 flex-1 truncate text-left text-sm text-white sm:text-base">
              {profile.email}
            </a>
            <button
              type="button"
              onClick={copy}
              className="flex h-10 shrink-0 items-center gap-2 rounded-full bg-white px-4 text-sm font-medium text-black transition hover:bg-white/85"
              aria-live="polite"
            >
              {copied ? <FaCheck className="h-3.5 w-3.5" /> : <FaCopy className="h-3.5 w-3.5" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <PillButton href={`mailto:${profile.email}`} variant="solid" icon={<FaEnvelope className="h-3.5 w-3.5" />}>
              Send an email
            </PillButton>
            <PillButton href={profile.linkedin} external icon={<FaLinkedinIn className="h-3.5 w-3.5" />}>
              Connect on LinkedIn
            </PillButton>
          </div>

          <p className="mt-10 inline-flex items-center gap-2 text-sm text-faint">
            <FaLocationDot className="h-3.5 w-3.5" /> {profile.location}
          </p>
        </Reveal>
      </section>

      <footer className="border-t border-white/[0.06] px-5 py-10 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-md border border-white/15 bg-white/5 text-xs font-bold">
              HS
            </span>
            <div>
              <p className="text-sm font-medium">{profile.name}</p>
              <p className="text-xs text-faint">© 2026 · {profile.role}</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/55" aria-label="Footer">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-white">
                {n.label}
              </a>
            ))}
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
              LinkedIn
            </a>
          </nav>
          <a
            href="#top"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
          >
            <FaArrowUp className="h-3 w-3" /> Back to top
          </a>
        </div>
      </footer>
    </>
  );
}
