"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { StaggerGrid, StaggerItem } from "@/components/shared/stagger-grid";
import type { MediaAsset } from "@/lib/cms/types";

/**
 * Sample-work gallery. Every image must carry real `alt` text describing the
 * material/application (the old site's sample images had none) — that text
 * doubles as the lightbox caption here.
 */
export function GalleryGrid({ images }: { images: MediaAsset[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  const showPrev = () =>
    setOpenIndex((current) =>
      current === null ? null : (current - 1 + images.length) % images.length
    );
  const showNext = () =>
    setOpenIndex((current) => (current === null ? null : (current + 1) % images.length));

  return (
    <>
      <StaggerGrid className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <StaggerItem key={`${image.url}-${index}`}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative aspect-square w-full overflow-hidden rounded-xl border border-border bg-surface-2 transition-premium hover:border-accent/50"
              aria-label={`Open image: ${image.alt}`}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-premium group-hover:scale-105"
              />
            </button>
          </StaggerItem>
        ))}
      </StaggerGrid>

      <Dialog open={openIndex !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <DialogContent className="max-w-4xl border-border bg-surface p-2">
          {openIndex !== null ? (
            <>
              <DialogTitle className="sr-only">{images[openIndex].alt}</DialogTitle>
              <div className="relative aspect-video w-full">
                <Image
                  src={images[openIndex].url}
                  alt={images[openIndex].alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <p className="px-2 pb-1 text-sm text-muted-foreground">
                {images[openIndex].alt}
              </p>
              {images.length > 1 ? (
                <div className="flex justify-between px-2 pb-2">
                  <button
                    type="button"
                    onClick={showPrev}
                    aria-label="Previous image"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-premium hover:border-accent/50"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Next image"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-premium hover:border-accent/50"
                  >
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              ) : null}
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
