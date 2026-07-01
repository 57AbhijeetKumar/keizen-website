"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/lib/motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  /** Forwarded to the element tag rendered — defaults to a generic div. */
  as?: "div" | "section" | "li";
  delay?: number;
}

/**
 * Scroll-reveal wrapper used across the site instead of bespoke per-component
 * transitions. Animates once when ~20% of the element enters the viewport.
 *
 * `MotionConfig reducedMotion="user"` (set in app/layout.tsx) does NOT
 * suppress this — that prop only short-circuits layout/drag animations, not
 * whileInView variant animations (confirmed by testing, not assumed). So
 * `useReducedMotion()` is checked explicitly here and skips straight to the
 * visible state with no transition when the OS preference is set.
 */
export function AnimatedSection({
  children,
  className,
  variants = fadeUp,
  as = "div",
  delay = 0,
}: AnimatedSectionProps) {
  const MotionTag = motion[as];
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionTag
      className={className}
      initial={prefersReducedMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={prefersReducedMotion ? { duration: 0 } : { delay }}
    >
      {children}
    </MotionTag>
  );
}
