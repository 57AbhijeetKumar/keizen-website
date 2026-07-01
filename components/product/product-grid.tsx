import { ProductCard } from "@/components/product/product-card";
import { StaggerGrid, StaggerItem } from "@/components/shared/stagger-grid";
import type { MediaAsset } from "@/lib/cms/types";

export interface ProductGridItem {
  slug: string;
  name: string;
  tagline: string;
  heroImage: MediaAsset;
  seriesName?: string;
}

interface ProductGridProps {
  products: ProductGridItem[];
  /** Set when this grid is the first content the visitor sees (e.g. right after the hero). */
  priority?: boolean;
}

/** Pure grid — filtering UI (by series/application) lives in the page that owns the data fetch. */
export function ProductGrid({ products, priority = false }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
        No products match this filter yet.
      </p>
    );
  }

  return (
    <StaggerGrid className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <StaggerItem key={product.slug}>
          <ProductCard {...product} priority={priority && index < 4} />
        </StaggerItem>
      ))}
    </StaggerGrid>
  );
}
