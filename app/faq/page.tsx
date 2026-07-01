import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { AnimatedSection } from "@/components/shared/animated-section";
import { cms } from "@/lib/cms";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "FAQ | Kaizen Laser",
  description: "Common questions about Kaizen Laser's machines, safety, integration and support.",
  path: "/faq",
});

export default async function FaqPage() {
  const faqs = await cms.getFaqs();

  return (
    <main className="flex-1">
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Common questions about our machines, safety, integration and support."
        breadcrumbs={[{ label: "FAQ", href: "/faq" }]}
      />

      <section className="container-page py-16 sm:py-20">
        <AnimatedSection className="mx-auto max-w-2xl">
          {/* sr-only: keeps heading order valid (h1 above is the page title, accordion items are h3) */}
          <h2 className="sr-only">Questions</h2>
          <FaqAccordion items={faqs} />
        </AnimatedSection>
      </section>

      <CtaBanner
        heading="Still have a question?"
        description="Our team can usually answer in the same business day."
        primaryHref="/contact"
        primaryLabel="Contact Us"
      />
    </main>
  );
}
