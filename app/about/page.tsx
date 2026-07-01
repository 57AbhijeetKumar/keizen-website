import type { Metadata } from "next";
import { HandCoins, Lightbulb, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { ValueProps } from "@/components/sections/value-props";
import { CtaBanner } from "@/components/sections/cta-banner";
import { AnimatedSection } from "@/components/shared/animated-section";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About Kaizen Laser | Industrial Laser & Automation Manufacturer",
  description:
    "Kaizen Laser builds PLC-controlled industrial laser systems as a reliable alternative to low-cost, PC-dependent imports — backed by local installation and support.",
  path: "/about",
});

const VALUES = [
  {
    icon: Sparkles,
    title: "Excellence",
    description:
      "Every machine that leaves our facility is tested against the same standard we'd want on our own production line.",
  },
  {
    icon: Lightbulb,
    title: "Practical solutions",
    description:
      "We size systems to the application and budget in front of us, not a one-size-fits-all catalog spec.",
  },
  {
    icon: HandCoins,
    title: "Time & cost discipline",
    description:
      "We know downtime and delays cost more than the machine itself — our quoting and delivery process is built around that.",
  },
  {
    icon: ShieldCheck,
    title: "Support that doesn't disappear",
    description:
      "Service doesn't end at delivery. Dedicated engineers and spare-part availability back every system we sell.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="About Us"
        title="Built as the reliable alternative to low-cost imports"
        description="Kaizen Laser and Automation designs and manufactures industrial laser marking, engraving, welding, cutting and traceability systems for manufacturers who can't afford line downtime."
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      <section className="container-page py-16 sm:py-20">
        <AnimatedSection className="mx-auto max-w-3xl">
          <h2 className="text-section font-heading font-semibold">
            Why we exist
          </h2>
          <div className="mt-4 flex flex-col gap-4 text-muted-foreground">
            <p>
              The price gap between a reliable, feature-rich laser marking system and a budget import is large — and
              almost every machine at the affordable end is a Chinese-made unit sold through a local trader with
              little ability to support it after the sale. Buyers are often forced to choose between a system they
              can afford and one they can actually rely on.
            </p>
            <p>
              Many of those budget systems also depend on a bare PC link rather than industrial PLC control, which
              means a single computer issue can take a production line down. We build every Kaizen machine on PLC
              control specifically to avoid that failure point.
            </p>
            <p>
              We start every enquiry with the same question we&apos;d want answered ourselves:{" "}
              <em>&ldquo;What&apos;s the right laser for this application?&rdquo;</em> — and we&apos;ll tell you
              honestly if a smaller or larger system fits better than the one you asked about.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="container-page py-16 sm:py-20">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-section font-heading font-semibold">What we value</h2>
        </AnimatedSection>
        <div className="mt-10">
          <ValueProps items={VALUES} />
        </div>
      </section>

      <CtaBanner
        heading="Have a question before you buy?"
        description="Talk to our team about your application, material, and volume — no pressure, just a straight answer."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/products"
        secondaryLabel="Browse Machines"
      />
    </main>
  );
}
