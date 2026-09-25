"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Respect the visitor's "reduce motion" setting everywhere (movement is skipped, fades stay). */
export default function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
