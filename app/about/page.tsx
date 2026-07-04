import type { Metadata } from "next";
import { CheckCircle, HandCoins, LifeBuoy, Lightbulb, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { ValueProps } from "@/components/sections/value-props";
import { CtaBanner } from "@/components/sections/cta-banner";
import { AnimatedSection } from "@/components/shared/animated-section";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About Kaizen Laser | Industrial Laser Manufacturer in Noida, India",
  description:
    "Kaizen Laser and Automation is an Indian manufacturer of laser marking, welding, cutting and traceability systems based in Noida — proudly Made in India, serving Automotive, Electronics and Industrial sectors.",
  path: "/about",
});

const VALUES = [
  {
    icon: Sparkles,
    title: "Quality Without Compromise",
    description:
      "Every machine that leaves our Noida facility is assembled, tested and calibrated against stringent in-house quality checks. We use German and Singaporean laser modules — not commodity sources — because the laser is the one component that cannot fail mid-production.",
  },
  {
    icon: Lightbulb,
    title: "Solutions Sized to Your Application",
    description:
      "We configure systems to the specific part, material and production volume in front of us — not a standard catalogue item pushed regardless of fit. Economical pricing is built into how we manufacture, not achieved by cutting quality.",
  },
  {
    icon: Truck,
    title: "Delivery on Time, Every Time",
    description:
      "We know that a delayed installation costs more than the machine. Our skilled production team commits to the agreed delivery timeline and communicates proactively when anything changes — no surprises at dispatch.",
  },
  {
    icon: LifeBuoy,
    title: "Service Across India",
    description:
      "Service doesn't end at delivery and sign-off. We have service support in Delhi-NCR, Pune, Bengaluru, Chennai and Tata Nagar — dedicated engineers who know our machines and can reach your line when it matters.",
  },
  {
    icon: HandCoins,
    title: "Indian Manufacturing, Indian Pricing",
    description:
      "We manufacture in Noida under the Make in India initiative. No import duties, no currency risk, no six-week freight delays. You get international-grade laser technology at a price point built for Indian industry.",
  },
  {
    icon: ShieldCheck,
    title: "Safety and Compliance Built In",
    description:
      "Our enclosed systems ship as Class 1 laser-safe cabinets. Mercury and KAI-TRACK are designed to meet automotive-industry poke-yoke and traceability audit requirements — not retrofitted after the fact.",
  },
];

const CERTIFICATIONS = [
  "ISO 9001 Quality Management",
  "Class 1 Laser Safety (IEC 60825-1)",
  "CE Marked Systems Available",
  "Make in India",
];

const RANGE = [
  "Fiber Laser Marking Machine",
  "UV Laser Marking Machine",
  "CO₂ Laser Marking Machine",
  "Enclosed Safety-Cabinet Laser",
  "Compact Inline / Robot Laser",
  "Dot Peen Marking Machine",
  "Laser Welding System",
  "Laser Cutting System",
  "Laser Cleaning System",
  "KAI-TRACK Traceability Software",
  "Line Integration & IoT 4.0",
  "AI-Based Vision Inspection",
  "Customised Conveyor Systems",
  "Jigs & Fixtures",
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="About Us"
        title="Indian-made laser systems for Indian production lines"
        description="Kaizen Laser and Automation designs and manufactures industrial laser marking, engraving, welding, cutting and traceability systems in Noida, UP — proudly Made in India, serving Automotive, Electronics, Pharma and Industrial sectors nationwide."
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      {/* Who we are */}
      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-section font-heading font-semibold">Who we are</h2>
            <div className="mt-4 flex flex-col gap-4 text-muted-foreground">
              <p>
                Kaizen Laser and Automation (KLAA) is an Indian manufacturer of industrial laser machines
                and automation systems, based in Noida, Uttar Pradesh. We build systems that mark metal
                and plastic parts permanently — from standard fiber laser workstations to fully enclosed
                safety cabinets with poke-yoke, robotic integration and complete line traceability.
              </p>
              <p>
                Our manufacturing unit in Noida Sector-63 assembles, tests and calibrates every machine
                before dispatch. We use German-standard and Singaporean-standard laser modules in our
                systems — not commodity sources — because the laser source determines the life, reliability
                and mark quality of the machine over its entire production career.
              </p>
              <p>
                We are a strong supporter of the Make in India initiative. Our engineering, manufacturing,
                installation and service teams are all India-based — meaning faster response, no import
                delays, and pricing that reflects our cost structure rather than import duties and
                international margins.
              </p>
              <p>
                Customer satisfaction is not a slogan — it is the measure we use to evaluate every
                project. We invest in service coverage across the country, clear communication before
                and after sale, and systems that are built right the first time so they don't need
                constant attention after installation.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="bg-surface-2 border-y border-border">
        <div className="container-page py-12">
          <AnimatedSection className="mx-auto max-w-3xl">
            <h2 className="text-section font-heading font-semibold text-center mb-8">
              Standards & Compliance
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface p-4 text-center"
                >
                  <CheckCircle className="h-6 w-6 text-accent" aria-hidden="true" />
                  <p className="text-xs font-medium text-foreground leading-snug">{cert}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="container-page py-16 sm:py-20">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-section font-heading font-semibold">What we stand for</h2>
          <p className="mt-2 text-muted-foreground">
            The principles behind every machine we build and every installation we complete.
          </p>
        </AnimatedSection>
        <div className="mt-10">
          <ValueProps items={VALUES} />
        </div>
      </section>

      {/* Full Range */}
      <section className="container-page py-16 sm:py-20 border-t border-border">
        <AnimatedSection className="mx-auto max-w-3xl">
          <h2 className="text-section font-heading font-semibold">Our complete manufacturing range</h2>
          <p className="mt-3 text-muted-foreground">
            From a single laser workstation to a complete factory-floor traceability system — everything
            is manufactured, installed and supported by the same team in India.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {RANGE.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </section>

      <CtaBanner
        heading="Have a question before you buy?"
        description="Talk to our team about your application, material and volume. We give straight answers — no pressure, no inflated quotes."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/products"
        secondaryLabel="Browse Our Machines"
      />
    </main>
  );
}
