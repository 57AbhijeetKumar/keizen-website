import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ProductGallery } from "@/components/product/product-gallery";
import { SpecTable } from "@/components/product/spec-table";
import { RelatedProducts } from "@/components/product/related-products";
import { TopicCard } from "@/components/content/topic-card";
import { DownloadCard } from "@/components/content/download-card";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { JsonLd } from "@/components/shared/json-ld";
import { Badge } from "@/components/ui/badge";
import { cms } from "@/lib/cms";
import { siteMeta } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo/metadata";

export async function generateStaticParams() {
  const products = await cms.getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await cms.getProductBySlug(slug);
  if (!product) return {};

  return buildMetadata({
    title: product.seo.title,
    description: product.seo.description,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await cms.getProductBySlug(slug);
  if (!product) notFound();

  const [series, allProducts, allApplications, allIndustries, allFaqs] = await Promise.all([
    cms.getProductSeries(),
    cms.getProducts(),
    cms.getApplications(),
    cms.getIndustries(),
    cms.getFaqs(),
  ]);

  const productSeries = series.find((item) => item.slug === product.seriesSlug);
  const applications = allApplications.filter((app) => product.applicationSlugs.includes(app.slug));
  const industries = allIndustries.filter((ind) => product.industrySlugs.includes(ind.slug));
  const relatedProducts = allProducts
    .filter((item) => product.relatedProductSlugs.includes(item.slug))
    .map((item) => {
      const itemSeries = series.find((s) => s.slug === item.seriesSlug);
      return {
        slug: item.slug,
        name: item.name,
        tagline: item.tagline,
        heroImage: item.heroImage,
        seriesName: itemSeries?.name,
      };
    });
  const productFaqs = allFaqs.filter((faq) => product.faqSlugs.includes(faq.id));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${siteMeta.url}${product.heroImage.url}`,
    brand: { "@type": "Brand", name: siteMeta.name },
    category: productSeries?.name,
  };

  return (
    <main className="flex-1">
      <JsonLd data={jsonLd} />

      <div className="container-page py-16 sm:py-20">
        <Breadcrumbs
          items={[
            { label: "Products", href: "/products" },
            ...(productSeries ? [{ label: productSeries.name, href: "/products" }] : []),
            { label: product.name, href: `/products/${product.slug}` },
          ]}
        />

        {/* Above-the-fold (gallery + title are the LCP candidates) — not wrapped in
            AnimatedSection's whileInView, which would render them at opacity:0 until
            JS hydrates. See PageHero for the full explanation. */}
        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <ProductGallery images={[product.heroImage, ...product.gallery]} />
          </div>

          <div>
            {productSeries ? (
              <Badge variant="secondary" className="mb-3">
                {productSeries.name}
              </Badge>
            ) : null}
            <h1 className="text-display font-heading font-semibold">{product.name}</h1>
            <p className="mt-2 text-lg text-muted-foreground">{product.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            {product.advantages.length > 0 ? (
              <ul className="mt-6 flex flex-col gap-2">
                {product.advantages.map((advantage) => (
                  <li key={advantage} className="flex gap-2 text-sm text-foreground">
                    <span className="text-accent">—</span>
                    {advantage}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
              <h2 className="font-heading text-lg font-semibold">Request a quote</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Tell us about your application — we&apos;ll follow up with specs, pricing and lead time.
              </p>
              <div className="mt-4">
                <EnquiryForm productSlug={product.slug} productName={product.name} />
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-section font-heading font-semibold">Specifications</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Illustrative specifications — confirm exact figures with our sales team for your application.
          </p>
          <div className="mt-6 max-w-2xl">
            <SpecTable specifications={product.specifications} />
          </div>
        </section>

        {applications.length > 0 ? (
          <section className="mt-16">
            <h2 className="text-section font-heading font-semibold">Applications</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {applications.map((application) => (
                <TopicCard
                  key={application.slug}
                  href={`/applications/${application.slug}`}
                  name={application.name}
                  summary={application.summary}
                  image={application.image}
                />
              ))}
            </div>
          </section>
        ) : null}

        {industries.length > 0 ? (
          <section className="mt-16">
            <h2 className="text-section font-heading font-semibold">Industries</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <TopicCard
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  name={industry.name}
                  summary={industry.summary}
                  image={industry.image}
                />
              ))}
            </div>
          </section>
        ) : null}

        {product.downloads.length > 0 ? (
          <section className="mt-16">
            <h2 className="text-section font-heading font-semibold">Downloads</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {product.downloads.map((download) => (
                <DownloadCard key={download.fileUrl} download={download} />
              ))}
            </div>
          </section>
        ) : (
          <section className="mt-16 rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
            Datasheet not available yet —{" "}
            <Link href="/contact" className="text-accent underline underline-offset-2">
              contact us
            </Link>{" "}
            and we&apos;ll send full specifications directly.
          </section>
        )}

        {productFaqs.length > 0 ? (
          <section className="mt-16 max-w-2xl">
            <h2 className="text-section font-heading font-semibold">FAQ</h2>
            <div className="mt-6">
              <FaqAccordion items={productFaqs} />
            </div>
          </section>
        ) : null}
      </div>

      <RelatedProducts products={relatedProducts} />
    </main>
  );
}
