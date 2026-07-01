import type { ReactNode } from "react";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/layout/breadcrumbs";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: ReactNode;
}

/**
 * Compact hero used on every sub-page (About, Products listing, Industries, Contact...).
 * Deliberately NOT wrapped in `AnimatedSection` — this is always the LCP candidate
 * (it's the first thing in the viewport on every page), and gating it behind
 * Framer Motion's `whileInView` meant it rendered at `opacity:0` in the initial
 * HTML until JS hydrated and the IntersectionObserver fired, measured at a ~4.6s
 * LCP under Lighthouse's throttled mobile run. Below-the-fold content still animates.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
}: PageHeroProps) {
  return (
    <section className="bg-gradient-mesh border-b border-border">
      <div className="container-page py-16 sm:py-24">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        <div className="mt-4 max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-medium uppercase tracking-wide text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-display mt-3 font-heading font-semibold">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 text-lg text-muted-foreground">{description}</p>
          ) : null}
          {actions ? <div className="mt-8 flex gap-4">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}
