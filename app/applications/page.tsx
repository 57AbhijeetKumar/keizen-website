import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { TopicCard } from "@/components/content/topic-card";
import { StaggerGrid, StaggerItem } from "@/components/shared/stagger-grid";
import { CtaBanner } from "@/components/sections/cta-banner";
import { cms } from "@/lib/cms";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Applications | Kaizen Laser",
  description:
    "Marking, engraving, welding, cutting and cleaning applications served by Kaizen Laser's industrial laser systems.",
  path: "/applications",
});

export default async function ApplicationsPage() {
  const applications = await cms.getApplications();

  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Applications"
        title="One platform, many processes"
        description="From permanent traceability codes to structural welding — see which process fits your part."
        breadcrumbs={[{ label: "Applications", href: "/applications" }]}
        image="/images/real/machine-2.webp"
      />

      <section className="container-page py-16 sm:py-20">
        <h2 className="sr-only">All applications</h2>
        <StaggerGrid className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((application) => (
            <StaggerItem key={application.slug}>
              <TopicCard
                href={`/applications/${application.slug}`}
                name={application.name}
                summary={application.summary}
                image={application.image}
              />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <CtaBanner
        heading="Not sure which process fits your part?"
        description="Share your material, part geometry and marking requirement — our engineers will confirm the right process and machine within 24 hours."
        primaryHref="/contact"
        primaryLabel="Ask Our Engineers"
        secondaryHref="/products"
        secondaryLabel="Browse All Machines"
      />
    </main>
  );
}
