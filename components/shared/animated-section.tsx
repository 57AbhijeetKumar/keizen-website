import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  /** Forwarded to the element tag rendered — defaults to a generic div. */
  as?: "div" | "section" | "li";
}

/**
 * Scroll-reveal wrapper used across the site instead of bespoke per-component
 * transitions. Pure CSS (`.reveal` in globals.css, a scroll-driven
 * animation): content is visible in the server HTML from the first paint and
 * needs no JavaScript — browsers without scroll-timeline support, and
 * visitors with reduced motion, simply see it without the fade.
 */
export function AnimatedSection({ children, className, as: Tag = "div" }: AnimatedSectionProps) {
  return <Tag className={cn("reveal", className)}>{children}</Tag>;
}
