import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Card grid whose items each fade in as they scroll into view. Items reveal
 * individually, so rows naturally cascade without a JS stagger. Pairs with
 * `StaggerItem` on each direct child. Same CSS-only `.reveal` as
 * `AnimatedSection`.
 */
export function StaggerGrid({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("reveal", className)}>{children}</div>;
}
