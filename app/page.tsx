import type { Metadata } from "next";
import { Award, LifeBuoy, ShieldCheck, Gauge } from "lucide-react";
import { HomeHero } from "@/components/sections/home-hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { TopicTeaser } from "@/components/sections/topic-teaser";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { CtaBanner } from "@/components/sections/cta-banner";
import { JsonLd } from "@/components/shared/json-ld";
import {
  FEATURED_INDUSTRIES,
  FEATURED_PRODUCTS,
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
    title: "Proven laser sources",
    description:
      "German- and Singaporean-standard laser modules rated for 50,000+ hours of production use.",
  },
  {
    icon: ShieldCheck,
    title: "Class 1 safe, PLC controlled",
    description:
      "Fully enclosed machines run by an industrial PLC — operators need no laser PPE, and no shop-floor PC is required.",
  },
  {
    icon: Gauge,
    title: "Poke-yoke & traceability",
    description:
      "Part-presence sensing, door interlock and a scan-verify-mark cycle with KAI-TRACK software.",
  },
  {
    icon: LifeBuoy,
    title: "Service across India",
    description:
      "Engineers in Delhi-NCR, Pune, Bengaluru, Chennai and Tata Nagar, with same-day response for breakdowns.",
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

      <FeaturedProducts products={FEATURED_PRODUCTS} />

      <div className="bg-surface">
        <TopicTeaser
          heading="Solutions by industry"
          description="Built for the tolerances, traceability and compliance standards of regulated production."
          items={FEATURED_INDUSTRIES}
          hrefBase="/industries"
          viewAllHref="/industries"
        />
      </div>

      <WhyChooseUs
        heading="Why manufacturers choose Kaizen"
        items={WHY_CHOOSE_US_ITEMS}
      />

      <CtaBanner
        heading="Get the right machine for your application."
        description="Send us your part material, size and production volume. We'll recommend a system and send a quote within 24 hours."
        primaryHref="/contact"
        primaryLabel="Get a Quote"
        secondaryHref="/downloads"
        secondaryLabel="Download Catalogue"
      />
    </main>
  );
}
