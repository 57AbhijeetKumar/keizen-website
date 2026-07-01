import type { MetadataRoute } from "next";
import { cms } from "@/lib/cms";
import { siteMeta } from "@/lib/site-config";

/**
 * Generated entirely from real, live routes — `lib/cms` data plus the static
 * pages that actually exist. This is the direct fix for the SRS finding that
 * the old site's sitemap had ~60,000 spam URLs unrelated to the business; this
 * sitemap can never list more than what `next build` actually produced.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, applications, industries] = await Promise.all([
    cms.getProducts(),
    cms.getApplications(),
    cms.getIndustries(),
  ]);

  const now = new Date();

  type StaticRouteInput = {
    url: string;
    changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
    priority: number;
  };

  const staticRouteInputs: StaticRouteInput[] = [
    { url: "/", changeFrequency: "weekly", priority: 1 },
    { url: "/products", changeFrequency: "weekly", priority: 0.9 },
    { url: "/applications", changeFrequency: "weekly", priority: 0.8 },
    { url: "/industries", changeFrequency: "weekly", priority: 0.8 },
    { url: "/traceability", changeFrequency: "monthly", priority: 0.8 },
    { url: "/about", changeFrequency: "monthly", priority: 0.6 },
    { url: "/contact", changeFrequency: "monthly", priority: 0.7 },
    { url: "/gallery", changeFrequency: "monthly", priority: 0.5 },
    { url: "/downloads", changeFrequency: "monthly", priority: 0.5 },
    { url: "/case-studies", changeFrequency: "weekly", priority: 0.6 },
    { url: "/testimonials", changeFrequency: "weekly", priority: 0.5 },
    { url: "/faq", changeFrequency: "monthly", priority: 0.6 },
    { url: "/blog", changeFrequency: "weekly", priority: 0.5 },
    { url: "/privacy-policy", changeFrequency: "yearly", priority: 0.2 },
    { url: "/terms", changeFrequency: "yearly", priority: 0.2 },
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticRouteInputs.map((entry) => ({
    ...entry,
    url: `${siteMeta.url}${entry.url}`,
    lastModified: now,
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteMeta.url}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const applicationRoutes: MetadataRoute.Sitemap = applications.map((application) => ({
    url: `${siteMeta.url}/applications/${application.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const industryRoutes: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${siteMeta.url}/industries/${industry.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...applicationRoutes, ...industryRoutes];
}
