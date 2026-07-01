"use client";

import { useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import type { MediaAsset } from "@/lib/cms/types";

/**
 * Main image + thumbnail strip + lightbox. Built on shadcn's Dialog instead of
 * pulling in a dedicated lightbox library — keeps the bundle smaller for a
 * feature that's just "show this image bigger".
 */
export function ProductGallery({ images }: { images: MediaAsset[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (images.length === 0) return null;
  const active = images[activeIndex];

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        onClick={() => setLightboxOpen(true)}
        className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface-2"
        aria-label={`Open full-size image: ${active.alt}`}
      >
        <Image
          src={active.url}
          alt={active.alt}
          fill
          sizes="(min-width: 1024px) 40vw, 90vw"
          className="object-contain transition-premium group-hover:scale-105"
          priority
        />
        <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/70 text-foreground opacity-0 transition-premium group-hover:opacity-100">
          <Expand className="h-4 w-4" aria-hidden="true" />
        </span>
      </button>

      {images.length > 1 ? (
        <div className="flex gap-3 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={`${image.url}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show image ${index + 1} of ${images.length}`}
              aria-current={index === activeIndex}
              className={`group relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border transition-premium ${
                index === activeIndex ? "border-accent" : "border-border opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover transition-premium group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      ) : null}

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl border-border bg-surface p-2">
          <DialogTitle className="sr-only">{active.alt}</DialogTitle>
          <div className="relative aspect-square w-full sm:aspect-video">
            <Image
              src={active.url}
              alt={active.alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
