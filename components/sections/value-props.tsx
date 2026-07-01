import type { LucideIcon } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { fadeUp } from "@/lib/motion";

export interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * Generic icon-grid building block. Replaces the old site's pattern of
 * copy-pasting the same 4-card markup on Home/About/Traceability — callers
 * pass page-specific data instead.
 */
export function ValueProps({ items }: { items: ValueProp[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <AnimatedSection
            key={item.title}
            as="div"
            variants={fadeUp}
            delay={index * 0.05}
            className="group rounded-2xl border border-border bg-surface p-6 transition-premium hover:border-accent/50"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </AnimatedSection>
        );
      })}
    </div>
  );
}
