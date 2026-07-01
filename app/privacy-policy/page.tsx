import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Kaizen Laser",
  description: "How Kaizen Laser collects, uses and protects information submitted through this website.",
  path: "/privacy-policy",
});

const LAST_UPDATED = "29 June 2026";

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Last updated ${LAST_UPDATED}.`}
        breadcrumbs={[{ label: "Privacy Policy", href: "/privacy-policy" }]}
      />

      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          {/* Draft template — confirm with legal counsel before this page is treated as final. */}
          <p className="rounded-xl border border-dashed border-border bg-surface px-4 py-3 text-sm text-muted-foreground">
            This is a draft privacy policy for review. It describes what this website actually does today and should
            be confirmed by legal counsel before being treated as final.
          </p>

          <div className="prose mt-8 flex flex-col gap-6 text-sm leading-relaxed text-muted-foreground [&_h2]:mt-2 [&_h2]:font-heading [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground">
            <section>
              <h2>1. Who we are</h2>
              <p className="mt-2">
                This website is operated by {siteConfig.legalName}, {siteConfig.address}. For any privacy-related
                questions, contact us at {siteConfig.emails[0]}.
              </p>
            </section>

            <section>
              <h2>2. Information we collect</h2>
              <p className="mt-2">
                We collect the information you submit directly through our contact, enquiry, brochure-request and
                newsletter forms — typically your name, email address, phone number, and the contents of your
                message. We do not require account creation and do not process payments on this site.
              </p>
            </section>

            <section>
              <h2>3. How we use your information</h2>
              <p className="mt-2">
                We use the information you submit to respond to your enquiry, provide quotes or product information,
                and — only if you opt in — send occasional product and traceability updates. We do not sell your
                information to third parties.
              </p>
            </section>

            <section>
              <h2>4. Data retention</h2>
              <p className="mt-2">
                We retain enquiry and contact information for as long as needed to respond to you and maintain our
                business records, and delete it on request where we&apos;re not required to keep it for legal or
                accounting reasons.
              </p>
            </section>

            <section>
              <h2>5. Your rights</h2>
              <p className="mt-2">
                You can ask us what information we hold about you, request a correction, or ask us to delete it, by
                emailing {siteConfig.emails[0]}.
              </p>
            </section>

            <section>
              <h2>6. Changes to this policy</h2>
              <p className="mt-2">
                We may update this policy as the website changes. The &ldquo;last updated&rdquo; date above will
                always reflect the most recent revision.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
