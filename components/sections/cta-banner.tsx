import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/animated-section";

interface CtaBannerProps {
  heading: string;
  description?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

/** Reusable conversion banner — used at the bottom of Home, product, and content pages. */
export function CtaBanner({
  heading,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CtaBannerProps) {
  return (
    <section className="container-page py-16">
      <AnimatedSection className="bg-gradient-mesh relative overflow-hidden rounded-3xl border border-border px-8 py-14 text-center sm:px-16">
        <h2 className="text-display font-heading font-semibold">{heading}</h2>
        {description ? (
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            {description}
          </p>
        ) : null}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" nativeButton={false} render={<Link href={primaryHref} />}>
            {primaryLabel}
            <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Button>
          {secondaryHref && secondaryLabel ? (
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<Link href={secondaryHref} />}
            >
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </AnimatedSection>
    </section>
  );
}
