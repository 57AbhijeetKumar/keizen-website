import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/animated-section";

interface EmptyStateProps {
  title: string;
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
}

/** Honest "not ready yet" state for sections with no real content (case studies, blog, etc.) — never filled with placeholder/fake entries. */
export function EmptyState({ title, description, ctaHref, ctaLabel }: EmptyStateProps) {
  return (
    <AnimatedSection className="mx-auto max-w-md rounded-2xl border border-dashed border-border p-10 text-center">
      <h2 className="font-heading text-lg font-semibold text-foreground">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      {ctaHref && ctaLabel ? (
        <Button className="mt-6" nativeButton={false} render={<Link href={ctaHref} />}>
          {ctaLabel}
        </Button>
      ) : null}
    </AnimatedSection>
  );
}
