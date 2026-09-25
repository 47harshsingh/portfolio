"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  label,
  title,
  dim,
  id,
  sub,
  center = false,
}: {
  label: string;
  title: string;
  /** Optional second line, shown faded. */
  dim?: string;
  id?: string;
  sub?: ReactNode;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-base text-muted sm:text-lg">{label}</p>
      <h2 id={id} className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
        <span className="text-metal pb-1">{title}</span>
        {dim && (
          <>
            <br />
            <span className="text-white/35">{dim}</span>
          </>
        )}
      </h2>
      {sub && <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{sub}</p>}
    </Reveal>
  );
}

/** Pill button whose label rolls up on hover, like the reference site. */
export function PillButton({
  href,
  children,
  variant = "glass",
  external = false,
  className = "",
  icon,
}: {
  href: string;
  children: string;
  variant?: "glass" | "solid";
  external?: boolean;
  className?: string;
  icon?: ReactNode;
}) {
  const base =
    "group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-full px-6 text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const styles =
    variant === "solid"
      ? "bg-white text-black hover:bg-white/90"
      : "border border-white/10 bg-white/[0.03] text-white hover:border-white/25 hover:bg-white/[0.07]";
  return (
    <a
      href={href}
      className={`${base} ${styles} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {icon}
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:-translate-y-full">
          {children}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:translate-y-0"
        >
          {children}
        </span>
      </span>
    </a>
  );
}
