import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { TopicCard } from "@/components/content/topic-card";
import { StaggerGrid, StaggerItem } from "@/components/shared/stagger-grid";
import { cms } from "@/lib/cms";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve | Kaizen Laser",
  description:
    "Industries served by Kaizen Laser's industrial laser marking, engraving, welding, cutting and traceability systems.",
  path: "/industries",
});

export default async function IndustriesPage() {
  const industries = await cms.getIndustries();

  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Industries"
        title="Built for the tolerances regulated production demands"
        description="From automotive VIN marking to UDI-compliant medical device traceability."
        breadcrumbs={[{ label: "Industries", href: "/industries" }]}
      />

      <section className="container-page py-16 sm:py-20">
        <h2 className="sr-only">All industries</h2>
        <StaggerGrid className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <StaggerItem key={industry.slug}>
              <TopicCard
                href={`/industries/${industry.slug}`}
                name={industry.name}
                summary={industry.summary}
                image={industry.image}
              />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>
    </main>
  );
}
