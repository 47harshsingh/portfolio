"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/content";
import { PillButton } from "./ui";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border px-3 pl-5 transition-all duration-500 ${
          scrolled ? "border-white/10 bg-black/60 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight" aria-label="Back to top">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-white/15 bg-white/5 text-[11px] font-bold">
            HS
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <PillButton href="#contact" variant="solid" className="h-10 px-5">
            Get in touch
          </PillButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`absolute h-px w-4 bg-white transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1"}`}
          />
          <span
            className={`absolute h-px w-4 bg-white transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1"}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 -z-10 bg-black/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex h-full flex-col justify-center gap-2 px-8" aria-label="Mobile">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                  className="text-metal py-2 text-4xl font-bold tracking-tight"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href={`mailto:${profile.email}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 break-all text-sm text-muted"
              >
                {profile.email}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
