import type { Metadata } from "next";
import Image from "next/image";
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
    description: "Connect production lines so data flows cleanly between stations — from inward material to dispatch.",
  },
  {
    icon: Network,
    title: "Machine Interlinking",
    description: "Link machines via QR codes marked by our lasers so each station reads and writes to a shared record.",
  },
  {
    icon: Workflow,
    title: "Complete Traceability",
    description: "Track every part from inward material to dispatch with a permanent laser-marked code at every step.",
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
    description: "Works with Keyence, Cognex, and Datalogic scanners already on your line — no rip-and-replace.",
  },
  {
    icon: TextCursorInput,
    title: "OCR",
    description: "Convert printed or marked text into digital data automatically — no manual entry required.",
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
        eyebrow="Traceability Solutions"
        title="One system from inward material to dispatch — no gaps."
        description="KAI-TRACK integrates laser-marked codes, line PLCs, third-party scanners and your ERP into a single traceability platform. Not just a machine that marks a part — a system that proves every part was marked, verified and recorded correctly."
        breadcrumbs={[{ label: "Traceability", href: "/traceability" }]}
      />

      <section className="container-page py-16 sm:py-20">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-section font-heading font-semibold">What KAI-TRACK delivers</h2>
          <p className="mt-2 text-muted-foreground">Every capability below ships as part of the platform — no separate modules, no add-on licensing.</p>
        </AnimatedSection>
        <div className="mt-10">
          <ValueProps items={SERVICES} />
        </div>
      </section>

      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container-page">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-section font-heading font-semibold">KAI-TRACK Software Platform</h2>
            <p className="mt-4 text-muted-foreground">
              KAI-TRACK is Kaizen&apos;s proprietary traceability software. It ties laser-marked part codes,
              line PLC signals, barcode and vision scanner data, and your ERP or SAP system into one
              unified platform — giving you real-time visibility from the inward material gate to dispatch,
              with grade logging, shift reporting and audit trail built in.
            </p>
            <p className="mt-3 text-muted-foreground">
              Implementation does not require a separate IT integration project. KAI-TRACK is designed
              to connect to your existing infrastructure — whether that is a Keyence scanner already on
              the line, an SAP instance in the plant, or a Cognex vision system at the inspection station.
            </p>
            <ul className="mt-5 inline-flex flex-wrap justify-center gap-2 text-xs font-medium">
              {["ERP Integration", "SAP Integration", "Cloud Data Sync", "Keyence", "Cognex", "Datalogic"].map((item) => (
                <li key={item} className="rounded-full border px-3 py-1 bg-background">
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection className="mx-auto mt-10 max-w-4xl">
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
              <Image
                src="/images/real/kai-track-screenshot.webp"
                alt="KAI-TRACK software dashboard showing PLC status, laser start status, scanning data and marked part grade on a Mercury Laser Marking Machine"
                width={1023}
                height={499}
                className="w-full object-cover"
              />
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              KAI-TRACK live dashboard — real-time PLC status, part scan verification, grade logging and shift reporting.
            </p>
          </AnimatedSection>
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
        heading="Find the traceability gap in your line."
        description="Tell us what you are marking and tracking today — or what audit or customer requirement is driving the project. We will map a KAI-TRACK solution to your specific line, PLC and scanner setup."
        primaryHref="/contact"
        primaryLabel="Talk to a Traceability Specialist"
        secondaryHref="/products/mercury-laser-marking-machine"
        secondaryLabel="View Mercury — Traceability Ready"
      />
    </main>
  );
}
