import type { ProductGridItem } from "@/components/product/product-grid";
import { ALL_PRODUCTS } from "@/lib/cms/local/products";
import { ALL_SERIES } from "@/lib/cms/local/series";
import { ALL_APPLICATIONS } from "@/lib/cms/local/applications";
import { ALL_INDUSTRIES } from "@/lib/cms/local/industries";
import { ALL_FAQS } from "@/lib/cms/local/faqs";

/**
 * Homepage picks a slice of the canonical fixtures (`lib/cms/local/products.ts`
 * etc.) rather than maintaining its own duplicate content — see Phase 8 in
 * PROJECT_PROGRESS.md. Statistics/Testimonials/Case Studies stay off the
 * homepage entirely (no real data exists yet, see Phase 7 decision).
 */

const FEATURED_PRODUCT_SLUGS = [
  "pluto-laser-marking-machine",
  "venus-laser-marking-machine",
  "mercury-laser-marking-machine",
  "jupiter-laser-marking-machine",
  "kai-weld-laser-welding",
  "kai-cut-laser-cutting",
];

export const FEATURED_PRODUCTS: ProductGridItem[] = FEATURED_PRODUCT_SLUGS.map((slug) => {
  const product = ALL_PRODUCTS.find((item) => item.slug === slug);
  if (!product) throw new Error(`Featured product not found: ${slug}`);
  const series = ALL_SERIES.find((item) => item.slug === product.seriesSlug);
  return {
    slug: product.slug,
    name: product.name,
    tagline: product.tagline,
    heroImage: product.heroImage,
    seriesName: series?.name,
  };
});

export const FEATURED_APPLICATIONS = ALL_APPLICATIONS.slice(0, 4);
export const FEATURED_INDUSTRIES = ALL_INDUSTRIES.slice(0, 4);
export const HOME_FAQS = ALL_FAQS.filter((faq) => faq.relatedTo?.type === "global").slice(0, 6);
