import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions | Kaizen Laser",
  description: "Terms of use for the Kaizen Laser website.",
  path: "/terms",
});

const LAST_UPDATED = "29 June 2026";

export default function TermsPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description={`Last updated ${LAST_UPDATED}.`}
        breadcrumbs={[{ label: "Terms & Conditions", href: "/terms" }]}
      />

      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          {/* Draft template — confirm with legal counsel before this page is treated as final. */}
          <p className="rounded-xl border border-dashed border-border bg-surface px-4 py-3 text-sm text-muted-foreground">
            This is a draft terms page for review. It should be confirmed by legal counsel before being treated as
            final — particularly the governing-law and liability sections.
          </p>

          <div className="prose mt-8 flex flex-col gap-6 text-sm leading-relaxed text-muted-foreground [&_h2]:mt-2 [&_h2]:font-heading [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground">
            <section>
              <h2>1. Use of this website</h2>
              <p className="mt-2">
                This website is provided by {siteConfig.legalName} to share information about our products and
                services and to let you contact us. By using this site, you agree to use it only for lawful
                purposes.
              </p>
            </section>

            <section>
              <h2>2. Product information</h2>
              <p className="mt-2">
                Specifications, images and descriptions on this website are provided for general information.
                Exact specifications, pricing, and availability are confirmed directly with our sales team and may
                differ from what&apos;s shown here.
              </p>
            </section>

            <section>
              <h2>3. Enquiries and quotes</h2>
              <p className="mt-2">
                Submitting an enquiry or quote request through this website does not create a binding order. Orders
                are governed by the separate commercial terms agreed with our sales team at the time of purchase.
              </p>
            </section>

            <section>
              <h2>4. Intellectual property</h2>
              <p className="mt-2">
                The content, design and branding on this website belong to {siteConfig.legalName} and may not be
                copied or reused without our written permission.
              </p>
            </section>

            <section>
              <h2>5. Limitation of liability</h2>
              <p className="mt-2">
                We make reasonable efforts to keep this website accurate and available, but we don&apos;t guarantee
                it will be error-free or uninterrupted, and we&apos;re not liable for decisions made solely on the
                basis of information published here rather than a confirmed quote.
              </p>
            </section>

            <section>
              <h2>6. Contact</h2>
              <p className="mt-2">
                Questions about these terms can be sent to {siteConfig.emails[0]}.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
