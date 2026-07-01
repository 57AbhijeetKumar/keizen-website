import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { GalleryGrid } from "@/components/content/gallery-grid";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Gallery | Kaizen Laser",
  description: "Real sample-work photography from Kaizen Laser's marking and engraving systems.",
  path: "/gallery",
});

const GALLERY_IMAGES = [
  { url: "/images/real/marking-sample-1.webp", alt: "Laser-engraved part numbers on stainless steel pipe fittings" },
  { url: "/images/real/marking-sample-2.webp", alt: "Laser-marked serial number on a brushed metal surface" },
  { url: "/images/real/marking-sample-3.webp", alt: "Laser-engraved barcode and lot numbers on a metal bearing housing" },
  { url: "/images/real/marking-sample-4.webp", alt: "Laser-engraved part code on a turned metal component" },
  { url: "/images/real/marking-sample-5.webp", alt: "Laser-marked data matrix code and part number on a metal bracket" },
];

export default function GalleryPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Gallery"
        title="How each process works"
        description="Real sample-work photography from Kaizen Laser's marking and engraving systems."
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }]}
      />

      <section className="container-page py-16 sm:py-20">
        <GalleryGrid images={GALLERY_IMAGES} />
      </section>
    </main>
  );
}
