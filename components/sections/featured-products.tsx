import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ProductGrid, type ProductGridItem } from "@/components/product/product-grid";

interface FeaturedProductsProps {
  products: ProductGridItem[];
  heading?: string;
  description?: string;
  /** Set only when this is the first content section on the page (e.g. homepage). */
  priority?: boolean;
}

export function FeaturedProducts({
  products,
  heading = "Our machines",
  description = "From compact inline heads to fully enclosed safety cabinets — every Kaizen machine ships with PLC-based control, on-site installation and pan-India after-sales support.",
  priority = false,
}: FeaturedProductsProps) {
  return (
    <section className="container-page py-16 sm:py-20">
      <AnimatedSection className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-section font-heading font-semibold">{heading}</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">{description}</p>
        </div>
        <Link
          href="/products"
          className="inline-flex items-center gap-1 text-sm font-medium text-accent"
        >
          View all products
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </AnimatedSection>

      <div className="mt-8">
        <ProductGrid products={products} priority={priority} />
      </div>
    </section>
  );
}
