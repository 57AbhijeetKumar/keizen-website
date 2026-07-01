import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { MediaAsset } from "@/lib/cms/types";

interface ProductCardProps {
  slug: string;
  name: string;
  tagline: string;
  heroImage: MediaAsset;
  seriesName?: string;
  /** Set only for cards rendered in the first viewport (e.g. homepage's first grid row). */
  priority?: boolean;
}

/** No price, no rating, no "% off" badge — this is a lead-gen catalog, not a storefront. */
export function ProductCard({
  slug,
  name,
  tagline,
  heroImage,
  seriesName,
  priority = false,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-premium hover:border-accent/50"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
        <Image
          src={heroImage.url}
          alt={heroImage.alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-premium group-hover:scale-105"
          priority={priority}
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        {seriesName ? (
          <Badge variant="secondary" className="w-fit">
            {seriesName}
          </Badge>
        ) : null}
        <h3 className="font-heading text-lg font-semibold text-foreground">
          {name}
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{tagline}</p>
        <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-accent">
          View specifications
          <ArrowRight className="h-3.5 w-3.5 transition-premium group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
