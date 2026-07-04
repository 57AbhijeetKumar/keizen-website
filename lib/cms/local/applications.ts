import type { Application } from "@/lib/cms/types";

export const ALL_APPLICATIONS: Application[] = [
  {
    slug: "part-marking-traceability",
    name: "Part Marking & Traceability",
    summary:
      "Permanent QR codes, Data Matrix codes, serial numbers and barcodes laser-marked directly onto parts — readable by any scanner, surviving the full product lifecycle. Combined with KAI-TRACK software for complete production traceability from inward material to dispatch.",
    image: { url: "/images/real/marking-sample-4.webp", alt: "Laser-engraved Data Matrix code and lot numbers on a metal automotive part" },
  },
  {
    slug: "deep-engraving",
    name: "Deep Engraving",
    summary:
      "Layer-by-layer laser engraving to specified depth for dies, moulds, tool identification and branding marks that must survive repeated use, cleaning chemicals and abrasive contact. MOPA fiber lasers deliver the control required for precise depth and clean side-walls.",
    image: { url: "/images/real/marking-sample-1.webp", alt: "Deep laser-engraved part numbers and logo on hardened steel tooling" },
  },
  {
    slug: "annealing-marking",
    name: "Annealing Marking",
    summary:
      "Oxide-based colour marking that produces a high-contrast black or coloured mark on stainless steel and titanium without removing material or breaking the surface. The mark is permanent, corrosion-resistant and passes medical-device and food-contact surface requirements where engraving is not permitted.",
    image: { url: "/images/stock/brushed-metal.jpg", alt: "Annealed laser mark on brushed stainless steel surface" },
  },
  {
    slug: "laser-welding",
    name: "Laser Welding",
    summary:
      "Precise, low-heat-distortion joining for thin sheet metal, sealed housings and component assemblies where TIG or MIG welding would cause warping or discolouration. Suitable for stainless steel, aluminium, mild steel and dissimilar metal joints.",
    image: { url: "/images/stock/welding.jpg", alt: "Laser welding producing a clean, narrow bead on sheet metal" },
  },
  {
    slug: "laser-cutting",
    name: "Laser Cutting",
    summary:
      "Clean, burr-free cuts on mild steel, stainless steel, aluminium and copper sheet — eliminating the secondary deburring step that plasma or mechanical cutting requires. Narrow kerf width enables tight profiles and better material utilisation.",
    image: { url: "/images/real/products/katashi-cut.webp", alt: "Kai-Cut laser cutting machine cutting sheet metal with a focused beam" },
  },
  {
    slug: "laser-cleaning",
    name: "Laser Cleaning",
    summary:
      "Non-abrasive removal of rust, paint, oxide layers, oil contamination and surface coatings without chemicals, media or disposal costs. The base material is untouched — ideal for pre-weld surface preparation, mould cleaning and restoration of precision components.",
    image: { url: "/images/real/products/katashi-weld.webp", alt: "Laser cleaning head removing surface oxide from a metal part" },
  },
];
