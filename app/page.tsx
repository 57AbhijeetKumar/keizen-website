import type { Metadata } from "next";
import { Cpu, Gauge, LifeBuoy, ShieldCheck } from "lucide-react";
import { HomeHero } from "@/components/sections/home-hero";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { TopicTeaser } from "@/components/sections/topic-teaser";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { JsonLd } from "@/components/shared/json-ld";
import {
  FEATURED_APPLICATIONS,
  FEATURED_INDUSTRIES,
  FEATURED_PRODUCTS,
  HOME_FAQS,
} from "@/lib/cms/local/home-content";
import { siteConfig, siteMeta } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Kaizen Laser | Industrial Laser Marking, Engraving & Traceability Systems",
  description:
    "Kaizen Laser designs and manufactures industrial laser marking, engraving, welding, cutting and traceability systems — PLC-controlled, Class 1 safe, built for high-volume production.",
  path: "/",
});

const WHY_CHOOSE_US_ITEMS = [
  {
    icon: Cpu,
    title: "PLC-based control",
    description:
      "Our machines run on industrial PLC control rather than a bare PC link, so your line isn't dependent on a single computer staying online.",
  },
  {
    icon: ShieldCheck,
    title: "Class 1 laser safety",
    description:
      "Standard machines are fully enclosed Class 1 systems — safe for operators with no extra protective equipment required.",
  },
  {
    icon: Gauge,
    title: "Built for high volume",
    description:
      "From single-part marking to continuous production lines, our systems are sized to your throughput, not the other way around.",
  },
  {
    icon: LifeBuoy,
    title: "Zero-downtime support",
    description:
      "Dedicated service engineers and spare-part availability mean a breakdown doesn't have to stall your production line.",
  },
];

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteMeta.url,
    logo: `${siteMeta.url}/favicon.ico`,
    description: siteMeta.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
    },
    contactPoint: siteConfig.phoneNumbers.map((phone) => ({
      "@type": "ContactPoint",
      telephone: phone,
      contactType: "sales",
    })),
    sameAs: Object.values(siteConfig.socialLinks),
  };

  return (
    <main className="flex-1">
      <JsonLd data={organizationJsonLd} />

      <HomeHero />

      <FeaturedProducts products={FEATURED_PRODUCTS} priority />

      <TopicTeaser
        heading="Applications"
        description="One platform, many processes — marking, engraving, welding and more."
        items={FEATURED_APPLICATIONS}
        hrefBase="/applications"
        viewAllHref="/applications"
      />

      <TopicTeaser
        heading="Industries we serve"
        description="Built for the tolerances and compliance needs of regulated production."
        items={FEATURED_INDUSTRIES}
        hrefBase="/industries"
        viewAllHref="/industries"
      />

      <WhyChooseUs
        heading="Why manufacturers choose Kaizen"
        description="A laser system is only as good as what's behind it — controls, safety, and support."
        items={WHY_CHOOSE_US_ITEMS}
      />

      <CtaBanner
        heading="Talk to a laser specialist"
        description="Tell us your material and application — we'll recommend the right system and walk you through specs, pricing and lead time."
        primaryHref="/contact"
        primaryLabel="Get a Quote"
        secondaryHref="/downloads"
        secondaryLabel="Browse Brochures"
      />

      <section className="container-page py-16 sm:py-20">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-section font-heading font-semibold">
            Frequently asked questions
          </h2>
          <p className="mt-2 text-muted-foreground">
            Common questions about our machines, safety and support.
          </p>
        </AnimatedSection>
        <div className="mx-auto mt-8 max-w-2xl">
          <FaqAccordion items={HOME_FAQS} />
        </div>
      </section>
    </main>
  );
}
