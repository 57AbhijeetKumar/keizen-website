import type { ReactNode } from "react";
import Image from "next/image";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/layout/breadcrumbs";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: ReactNode;
  /** Background/right-panel image URL. */
  image?: string;
}

/**
 * Compact hero used on every sub-page (About, Products listing, Industries, Contact...).
 * Layout: dark charcoal left panel with text + machine image visible on the right.
 * On mobile the image collapses behind a dark overlay to keep text legible.
 *
 * Deliberately NOT wrapped in AnimatedSection — this is always the LCP candidate.
 * See home-hero.tsx for the full explanation.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
  image = "/images/real/machine-1.webp",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-charcoal">
      {/* Machine image — occupies right half on desktop, full-bleed on mobile */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[48%]">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden="true"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Mobile: dark overlay so text is always legible */}
        <div className="absolute inset-0 bg-charcoal/85 lg:hidden" />
        {/* Desktop: blend the left edge of the image into the charcoal background */}
        <div className="absolute inset-y-0 left-0 hidden w-48 bg-gradient-to-r from-charcoal to-transparent lg:block" />
      </div>

      {/* Content — constrained to left half on desktop */}
      <div className="relative z-10 container-page py-16 sm:py-24">
        {breadcrumbs ? (
          <Breadcrumbs
            items={breadcrumbs}
            className="[&>li>a]:text-white/50 [&>li>a:hover]:text-accent [&>li>span]:text-white/80"
          />
        ) : null}
        <div className="mt-4 max-w-xl">
          {eyebrow ? (
            <p className="text-sm font-medium uppercase tracking-wide text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-display mt-3 font-heading font-semibold text-white">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 text-lg text-white/70">{description}</p>
          ) : null}
          {actions ? <div className="mt-8 flex gap-4">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}
