import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { EmptyState } from "@/components/sections/empty-state";
import { CaseStudyCard } from "@/components/content/case-study-card";
import { StaggerGrid, StaggerItem } from "@/components/shared/stagger-grid";
import { cms } from "@/lib/cms";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies | Kaizen Laser",
  description: "Deployments and results from Kaizen Laser installations.",
  path: "/case-studies",
});

export default async function CaseStudiesPage() {
  const caseStudies = await cms.getCaseStudies();

  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Case Studies"
        title="Real deployments, real results"
        description="Documented case studies are in progress with our existing customers."
        breadcrumbs={[{ label: "Case Studies", href: "/case-studies" }]}
      />

      <section className="container-page py-16 sm:py-20">
        {caseStudies.length > 0 ? (
          <>
            <h2 className="sr-only">All case studies</h2>
            <StaggerGrid className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((caseStudy) => (
                <StaggerItem key={caseStudy.slug}>
                  <CaseStudyCard caseStudy={caseStudy} />
                </StaggerItem>
              ))}
            </StaggerGrid>
          </>
        ) : (
          <EmptyState
            title="Case studies coming soon"
            description="We're documenting results from current installations. In the meantime, talk to our team about a similar application to yours."
            ctaHref="/contact"
            ctaLabel="Talk to a Specialist"
          />
        )}
      </section>
    </main>
  );
}
