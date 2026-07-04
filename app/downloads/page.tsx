import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { DownloadCard } from "@/components/content/download-card";
import { LeadForm } from "@/components/forms/lead-form";
import { AnimatedSection } from "@/components/shared/animated-section";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Downloads | Kaizen Laser",
  description: "Brochures and datasheets for Kaizen Laser's industrial laser systems.",
  path: "/downloads",
});

export default function DownloadsPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Downloads"
        title="Brochures & datasheets"
        description="Download our company brochure below, or request a machine-specific specification sheet and our team will email it directly."
        breadcrumbs={[{ label: "Downloads", href: "/downloads" }]}
      />

      <section className="container-page flex flex-col gap-10 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-lg">
          <DownloadCard
            download={{
              title: "Kaizen Laser & Automation — Product Catalog 2026",
              fileUrl: "/api/downloads/brochure",
              fileType: "pdf",
              sizeLabel: "16 MB",
            }}
          />
        </div>

        <AnimatedSection className="mx-auto w-full max-w-lg rounded-2xl border border-border bg-surface p-6">
          <h2 className="font-heading text-lg font-semibold">Request a machine-specific spec sheet</h2>
          <div className="mt-4">
            <LeadForm
              source="brochure-download"
              submitLabel="Request spec sheet"
              successTitle="Request received"
              successDescription="We'll email the full specification sheet shortly."
            />
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
