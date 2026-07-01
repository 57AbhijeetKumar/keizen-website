import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { TopicCard } from "@/components/content/topic-card";
import type { Application, Industry } from "@/lib/cms/types";

interface TopicTeaserProps {
  heading: string;
  description?: string;
  items: (Application | Industry)[];
  hrefBase: "/applications" | "/industries";
  viewAllHref: string;
}

/** Shared section shell for the Applications and Industries homepage teasers. */
export function TopicTeaser({
  heading,
  description,
  items,
  hrefBase,
  viewAllHref,
}: TopicTeaserProps) {
  return (
    <section className="container-page py-16 sm:py-20">
      <AnimatedSection className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-section font-heading font-semibold">{heading}</h2>
          {description ? (
            <p className="mt-2 max-w-xl text-muted-foreground">{description}</p>
          ) : null}
        </div>
        <Link
          href={viewAllHref}
          className="inline-flex items-center gap-1 text-sm font-medium text-accent"
        >
          View all
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </AnimatedSection>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <TopicCard
            key={item.slug}
            href={`${hrefBase}/${item.slug}`}
            name={item.name}
            summary={item.summary}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}
