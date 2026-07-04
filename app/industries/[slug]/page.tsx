import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { CtaBanner } from "@/components/sections/cta-banner";
import { cms } from "@/lib/cms";
import { buildMetadata } from "@/lib/seo/metadata";

export async function generateStaticParams() {
  const industries = await cms.getIndustries();
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = await cms.getIndustryBySlug(slug);
  if (!industry) return {};

  return buildMetadata({
    title: `${industry.name} | Kaizen Laser`,
    description: industry.summary,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = await cms.getIndustryBySlug(slug);
  if (!industry) notFound();

  const products = await cms.getProducts();
  const series = await cms.getProductSeries();
  const relatedProducts = products
    .filter((product) => product.industrySlugs.includes(industry.slug))
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
            { label: "Industries", href: "/industries" },
            { label: industry.name, href: `/industries/${industry.slug}` },
          ]}
        />

        {/* Above-the-fold (LCP candidate) — see PageHero for why this isn't AnimatedSection. */}
        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-display font-heading font-semibold">{industry.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{industry.summary}</p>
          </div>
          {industry.image ? (
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border">
              <Image
                src={industry.image.url}
                alt={industry.image.alt}
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
          heading="Machines used in this industry"
          description={`Systems from our range deployed in ${industry.name.toLowerCase()} production.`}
        />
      ) : null}

      <CtaBanner
        heading={`Talk to us about ${industry.name.toLowerCase()} applications`}
        description="Tell us your part, material and volume — we'll recommend the right system."
        primaryHref="/contact"
        primaryLabel="Get a Quote"
      />
    </main>
  );
}
