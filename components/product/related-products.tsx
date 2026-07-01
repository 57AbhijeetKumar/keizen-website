import { AnimatedSection } from "@/components/shared/animated-section";
import { ProductGrid, type ProductGridItem } from "@/components/product/product-grid";

/**
 * Cross-sell block for product detail pages. Unlike the old site, the caller
 * must pass genuinely related products (same series/application) — never a
 * generic "you may also like" fallback unrelated to the current product.
 */
export function RelatedProducts({ products }: { products: ProductGridItem[] }) {
  if (products.length === 0) return null;

  return (
    <section className="container-page py-16">
      <AnimatedSection>
        <h2 className="text-section font-heading font-semibold">
          Related products
        </h2>
      </AnimatedSection>
      <div className="mt-8">
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
