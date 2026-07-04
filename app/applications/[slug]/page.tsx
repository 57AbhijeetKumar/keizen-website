import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { CtaBanner } from "@/components/sections/cta-banner";
import { cms } from "@/lib/cms";
import { buildMetadata } from "@/lib/seo/metadata";

export async function generateStaticParams() {
  const applications = await cms.getApplications();
  return applications.map((application) => ({ slug: application.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const application = await cms.getApplicationBySlug(slug);
  if (!application) return {};

  return buildMetadata({
    title: `${application.name} | Kaizen Laser`,
    description: application.summary,
    path: `/applications/${application.slug}`,
  });
}

export default async function ApplicationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const application = await cms.getApplicationBySlug(slug);
  if (!application) notFound();

  const products = await cms.getProducts();
  const series = await cms.getProductSeries();
  const relatedProducts = products
    .filter((product) => product.applicationSlugs.includes(application.slug))
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
      <div className="container-page py-16 sm:py-20">
        <Breadcrumbs
          items={[
            { label: "Applications", href: "/applications" },
            { label: application.name, href: `/applications/${application.slug}` },
          ]}
        />

        {/* Above-the-fold (LCP candidate) — see PageHero for why this isn't AnimatedSection. */}
        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-display font-heading font-semibold">{application.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{application.summary}</p>
          </div>
          {application.image ? (
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border">
              <Image
                src={application.image.url}
                alt={application.image.alt}
                fill
                priority
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
      </div>

      {relatedProducts.length > 0 ? (
        <FeaturedProducts
          products={relatedProducts}
          heading="Machines for this application"
          description={`Systems from our range configured for ${application.name.toLowerCase()}.`}
        />
      ) : null}

      <CtaBanner
        heading={`Need ${application.name.toLowerCase()} for your production line?`}
        description="Tell us your part, material and volume — we'll recommend the right system."
        primaryHref="/contact"
        primaryLabel="Get a Quote"
      />
    </main>
  );
}
