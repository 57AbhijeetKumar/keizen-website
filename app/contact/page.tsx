import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact Kaizen Laser | Get a Quote",
  description:
    "Contact Kaizen Laser for a quote on industrial laser marking, engraving, welding, cutting and traceability systems.",
  path: "/contact",
});

export default function ContactPage() {
  // Falls back to a generic search embed only if a real place embed isn't configured.
  const mapEmbedUrl =
    siteConfig.mapEmbedUrl ??
    `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`;
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber.replace(/[^\d]/g, "")}`;

  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Contact Us"
        title="Get a quote within 24 hours."
        description="Tell us your application, material, part size and production volume. Our team responds the same business day — usually faster. No obligation, no sales pressure."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      {/* Likely still above-the-fold right after PageHero — see PageHero for why this isn't AnimatedSection. */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="font-heading text-lg font-semibold">Send a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">We respond within one business day — typically the same day.</p>
              <div className="mt-4">
                <ContactForm />
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary-foreground transition-premium hover:bg-accent-2"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${siteConfig.phoneNumbers[0].replace(/\s/g, "")}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-premium hover:border-accent hover:text-accent"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Us
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Kaizen Laser and Automation location"
                src={mapEmbedUrl}
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="font-heading text-lg font-semibold">Office details</h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                  {siteConfig.legalName}
                  <br />
                  {siteConfig.address}
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                  {siteConfig.phoneNumbers.join(" / ")}
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                  {siteConfig.emails.join(" / ")}
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="font-heading text-lg font-semibold">Business hours</h2>
              <ul className="mt-4 flex flex-col gap-2 text-sm">
                {siteConfig.businessHours.map((entry) => (
                  <li key={entry.day} className="flex justify-between text-muted-foreground">
                    <span className="text-foreground">{entry.day}</span>
                    {entry.hours}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
