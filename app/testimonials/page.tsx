import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { EmptyState } from "@/components/sections/empty-state";
import { TestimonialCard } from "@/components/content/testimonial-card";
import { StaggerGrid, StaggerItem } from "@/components/shared/stagger-grid";
import { cms } from "@/lib/cms";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Customer Testimonials | Kaizen Laser",
  description: "What Kaizen Laser customers say about our laser marking, engraving and traceability systems.",
  path: "/testimonials",
});

export default async function TestimonialsPage() {
  const testimonials = await cms.getTestimonials();

  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Testimonials"
        title="What our customers say"
        description="We're collecting verified customer feedback — real quotes will appear here as they come in."
        breadcrumbs={[{ label: "Testimonials", href: "/testimonials" }]}
      />

      <section className="container-page py-16 sm:py-20">
        {testimonials.length > 0 ? (
          <StaggerGrid className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </StaggerItem>
            ))}
          </StaggerGrid>
        ) : (
          <EmptyState
            title="No published testimonials yet"
            description="We'd rather show nothing than a quote we can't verify. Check back soon, or ask us to connect you with an existing customer directly."
            ctaHref="/contact"
            ctaLabel="Ask Us Directly"
          />
        )}
      </section>
    </main>
  );
}
