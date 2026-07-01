"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, staggerContainer } from "@/lib/motion";

/**
 * Cascading reveal for card grids: the container fades each child in with a
 * short stagger instead of the whole grid popping in at once. Pairs with
 * `StaggerItem` on each direct child. Same reduced-motion handling as
 * `AnimatedSection` — one consistent shape, only `initial`/`transition` vary.
 */
export function StaggerGrid({ children, className }: { children: ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer()}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      transition={prefersReducedMotion ? { duration: 0 } : undefined}
    >
      {children}
    </motion.div>
  );
}
