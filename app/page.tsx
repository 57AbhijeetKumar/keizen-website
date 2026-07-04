import type { Metadata } from "next";
import { Award, Cpu, Gauge, HandCoins, LifeBuoy, ShieldCheck } from "lucide-react";
import { HomeHero } from "@/components/sections/home-hero";
import { StatsBar } from "@/components/sections/stats-bar";
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
  title: "Laser Marking Machine Manufacturer in India | Kaizen Laser",
  description:
    "Kaizen Laser manufactures industrial laser marking, engraving, welding, cutting and traceability systems in Noida, India — PLC-controlled, Class 1 safe, built for high-volume production lines.",
  path: "/",
});

const STATS = [
  { value: "500+", label: "Machines Installed" },
  { value: "50+", label: "Customers Served" },
  { value: "9", label: "Machine Models" },
  { value: "Pan-India", label: "Service Network" },
];

const WHY_CHOOSE_US_ITEMS = [
  {
    icon: Award,
    title: "German & Singaporean Laser Modules",
    description:
      "We don't cut corners on the laser source. Pluto and Mercury run German-standard modules; Venus runs a Singaporean-standard module — both with documented 50,000+ hour rated lifespans and proven in Indian production conditions.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Enclosed Class 1 Safety",
    description:
      "Every standard enclosed machine meets Class 1 laser safety requirements. Your operators work without laser PPE, your HSE team isn't called, and your production line stays compliant.",
  },
  {
    icon: Cpu,
    title: "PLC Control — Not PC Dependent",
    description:
      "An industrial PLC runs the machine, not a laptop sitting on the production floor. Your line keeps marking even when the office network is down or an operator's PC is restarted.",
  },
  {
    icon: Gauge,
    title: "Poke-Yoke & Traceability Ready",
    description:
      "Mercury and KAI-TRACK are engineered for automotive-level error-proofing — part-presence sensor, door interlock, scan-verify-mark cycle. One system covers safety, marking and traceability.",
  },
  {
    icon: LifeBuoy,
    title: "Service Across India",
    description:
      "Service engineers in Delhi-NCR, Pune, Bengaluru, Chennai and Tata Nagar. Same-day response for critical breakdowns — because a stalled production line costs more than the machine.",
  },
  {
    icon: HandCoins,
    title: "Made in India, Priced for India",
    description:
      "We manufacture in Noida and pass that cost advantage to you. Imported laser quality at a fraction of the import price — no currency risk, no long freight lead times, no overseas warranty headaches.",
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

      <StatsBar stats={STATS} />

      <FeaturedProducts products={FEATURED_PRODUCTS} priority />

      <TopicTeaser
        heading="Applications"
        description="Marking, engraving, welding, cutting and cleaning — one manufacturer, every process."
        items={FEATURED_APPLICATIONS}
        hrefBase="/applications"
        viewAllHref="/applications"
      />

      <TopicTeaser
        heading="Industries We Serve"
        description="Built for the tolerances, traceability requirements and compliance standards of regulated production."
        items={FEATURED_INDUSTRIES}
        hrefBase="/industries"
        viewAllHref="/industries"
      />

      <WhyChooseUs
        heading="Why manufacturers choose Kaizen"
        description="A laser system is only as good as its source, its controls, its safety, and the team behind it."
        items={WHY_CHOOSE_US_ITEMS}
      />

      <CtaBanner
        heading="Get the right machine for your application."
        description="Send us your part material, size and production volume — we'll recommend the right system, explain the specs, and give you a price within 24 hours. No obligation."
        primaryHref="/contact"
        primaryLabel="Request a Free Consultation"
        secondaryHref="/downloads"
        secondaryLabel="Download Product Catalog"
      />

      <section className="container-page py-16 sm:py-20">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-section font-heading font-semibold">
            Frequently asked questions
          </h2>
          <p className="mt-2 text-muted-foreground">
            Common questions from buyers about our machines, safety, integration and support.
          </p>
        </AnimatedSection>
        <div className="mx-auto mt-8 max-w-2xl">
          <FaqAccordion items={HOME_FAQS} />
        </div>
      </section>
    </main>
  );
}
