import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ProductGrid, type ProductGridItem } from "@/components/product/product-grid";
import { CtaBanner } from "@/components/sections/cta-banner";
import { cms } from "@/lib/cms";
import { buildMetadata } from "@/lib/seo/metadata";

const SERIES_INFO: Record<string, string> = {
  "kaizen-standard-series": "Fiber, UV and CO₂ workstations — the right laser source for every material, from steel to glass to plastic.",
  "mercury-series": "Fully enclosed safety cabinet with poke-yoke, door interlock and KAI-TRACK traceability built in — the automotive production standard.",
  "jupiter-series": "Compact inline and robotic-integration laser for automated lines where cycle time, footprint and throughput all matter.",
  "mars-series": "Industrial dot peen for deep, permanent marks on metal — no consumables, no laser hazard zone, no PPE required.",
  "katashi-series": "Laser welding, cutting and cleaning systems for structural and precision joining applications.",
};

export const metadata: Metadata = buildMetadata({
  title: "Laser Marking, Engraving, Welding & Cutting Machines | Kaizen Laser",
  description:
    "Browse Kaizen Laser's full range of industrial laser marking, engraving, welding, cutting and cleaning machines across the Standard, Standalone and Katakshi series.",
  path: "/products",
});

export default async function ProductsPage() {
  const [products, series] = await Promise.all([
    cms.getProducts(),
    cms.getProductSeries(),
  ]);

  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Products"
        title="Laser systems for every stage of production"
        description="From entry-level marking to industrial welding and cutting — every machine ships with PLC-based control and on-site installation."
        breadcrumbs={[{ label: "Products", href: "/products" }]}
        image="/images/real/machine-2.webp"
      />

      <div className="container-page flex flex-col gap-16 py-16">
        {series
          .sort((a, b) => a.order - b.order)
          .map((group, groupIndex) => {
            const groupProducts: ProductGridItem[] = products
              .filter((product) => product.seriesSlug === group.slug)
              .map((product) => ({
                slug: product.slug,
                name: product.name,
                tagline: product.tagline,
                heroImage: product.heroImage,
                seriesName: group.name,
              }));

            if (groupProducts.length === 0) return null;

            const seriesDesc = SERIES_INFO[group.slug];
            return (
              <section key={group.slug}>
                <div className="mb-3 h-1 w-12 rounded-full bg-accent" />
                <h2 className="text-section font-heading font-semibold">{group.name}</h2>
                {seriesDesc && (
                  <p className="mt-2 max-w-2xl text-muted-foreground">{seriesDesc}</p>
                )}
                <div className="mt-6">
                  <ProductGrid products={groupProducts} priority={groupIndex === 0} />
                </div>
              </section>
            );
          })}
      </div>

      <CtaBanner
        heading="Not sure which machine fits your application?"
        description="Tell us your material, part size and volume — we'll recommend the right system."
        primaryHref="/contact"
        primaryLabel="Talk to a Specialist"
      />
    </main>
  );
}
