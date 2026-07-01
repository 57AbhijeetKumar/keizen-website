import type { Metadata } from "next";
import {
  Cable,
  Cpu,
  Eye,
  Network,
  ScanLine,
  TextCursorInput,
  Workflow,
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { ValueProps } from "@/components/sections/value-props";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { CtaBanner } from "@/components/sections/cta-banner";
import { AnimatedSection } from "@/components/shared/animated-section";
import { cms } from "@/lib/cms";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Traceability Solutions | Kaizen Laser",
  description:
    "Kaizen Laser's traceability solutions cover line integration, machine interlinking, AI vision, OCR and the KAI-TRACK software platform.",
  path: "/traceability",
});

const SERVICES = [
  {
    icon: Cable,
    title: "Line Integration",
    description: "Connect production lines so data flows cleanly between stations instead of staying siloed.",
  },
  {
    icon: Network,
    title: "Machine Interlinking",
    description: "Let machines communicate with each other for synchronized, hand-off-free operation.",
  },
  {
    icon: Workflow,
    title: "Complete Traceability",
    description: "Track a part from inward material to dispatch, with a permanent laser-marked code at every step.",
  },
  {
    icon: Cpu,
    title: "Machine Parameter Feeding",
    description: "Feed marking and process parameters to machines automatically for consistent output, run to run.",
  },
  {
    icon: Eye,
    title: "AI-Based Vision System",
    description: "Use vision inspection to catch marking or assembly defects before a part moves downstream.",
  },
  {
    icon: ScanLine,
    title: "Scanner Integration",
    description: "Works with third-party scanners (Keyence, Cognex, Datalogic and others) already on your line.",
  },
  {
    icon: TextCursorInput,
    title: "OCR",
    description: "Convert printed or marked text into digital data automatically, no manual entry required.",
  },
];

export default async function TraceabilityPage() {
  const products = await cms.getProducts();
  const series = await cms.getProductSeries();
  const traceabilityProducts = products
    .filter((product) => product.applicationSlugs.includes("part-marking-traceability"))
    .map((product) => {
      const productSeries = series.find((s) => s.slug === product.seriesSlug);
      return {
        slug: product.slug,
        name: product.name,
        tagline: product.tagline,
        heroImage: product.heroImage,
        seriesName: productSeries?.name,
      };
    });

  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Traceability"
        title="Complete traceability, from inward material to dispatch"
        description="KAI-TRACK ties our laser-marked codes, line integration, and third-party scanners into one traceability system — not just a machine that marks a part."
        breadcrumbs={[{ label: "Traceability", href: "/traceability" }]}
      />

      <section className="container-page py-16 sm:py-20">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-section font-heading font-semibold">What KAI-TRACK covers</h2>
        </AnimatedSection>
        <div className="mt-10">
          <ValueProps items={SERVICES} />
        </div>
      </section>

      {traceabilityProducts.length > 0 ? (
        <FeaturedProducts
          products={traceabilityProducts}
          heading="Machines built for traceability"
          description="Every one of these systems marks the permanent codes a traceability program depends on."
        />
      ) : null}

      <CtaBanner
        heading="Map your line's traceability gap"
        description="Tell us what you're tracking today (or not) — we'll show you where KAI-TRACK fits."
        primaryHref="/contact"
        primaryLabel="Talk to a Specialist"
      />
    </main>
  );
}
