import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { MediaAsset } from "@/lib/cms/types";

interface TopicCardProps {
  href: string;
  name: string;
  summary: string;
  image?: MediaAsset;
}

/** Shared card shape for Applications and Industries — same fields, same layout. */
export function TopicCard({ href, name, summary, image }: TopicCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-premium hover:border-accent/50"
    >
      {image ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
          <Image
            src={image.url}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover transition-premium group-hover:scale-105"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-heading text-base font-semibold text-foreground">
          {name}
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{summary}</p>
        <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-accent">
          Learn more
          <ArrowRight className="h-3.5 w-3.5 transition-premium group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
