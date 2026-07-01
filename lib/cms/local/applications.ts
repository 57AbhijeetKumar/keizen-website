import type { Application } from "@/lib/cms/types";

export const ALL_APPLICATIONS: Application[] = [
  {
    slug: "part-marking-traceability",
    name: "Part Marking & Traceability",
    summary: "Permanent QR, Data Matrix and serial codes for full production traceability.",
    image: { url: "/images/real/marking-sample-4.webp", alt: "Laser-engraved barcode and lot numbers on a metal part" },
  },
  {
    slug: "deep-engraving",
    name: "Deep Engraving",
    summary: "Layer-by-layer laser engraving for dies, molds and branding marks.",
    image: { url: "/images/real/marking-sample-1.webp", alt: "Deep laser-engraved part numbers on stainless steel fittings" },
  },
  {
    slug: "annealing-marking",
    name: "Annealing Marking",
    summary: "Oxidation-based colour marking that leaves the surface untouched.",
    image: { url: "/images/stock/brushed-metal.jpg", alt: "Brushed stainless steel surface" },
  },
  {
    slug: "laser-welding",
    name: "Laser Welding",
    summary: "Precise, low-heat-distortion joining for sheet metal and components.",
    image: { url: "/images/stock/welding.jpg", alt: "Welding sparks flying off a metal joint" },
  },
  {
    slug: "laser-cutting",
    name: "Laser Cutting",
    summary: "Clean, repeatable cuts on metal sheet without secondary finishing.",
    image: { url: "/images/real/products/katakshi.webp", alt: "Kai-Cut laser cutting system" },
  },
  {
    slug: "laser-cleaning",
    name: "Laser Cleaning",
    summary: "Non-abrasive rust, paint and oxide removal without chemicals.",
    image: { url: "/images/real/products/katakshi.webp", alt: "Kai-Clean laser cleaning system" },
  },
];
