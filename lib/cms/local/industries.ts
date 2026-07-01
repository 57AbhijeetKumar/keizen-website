import type { Industry } from "@/lib/cms/types";

export const ALL_INDUSTRIES: Industry[] = [
  {
    slug: "automotive",
    name: "Automotive",
    summary: "VIN, part and batch marking built to withstand under-hood conditions.",
    image: { url: "/images/stock/automotive.jpg", alt: "Robotic arms on an automotive assembly line" },
  },
  {
    slug: "electronics",
    name: "Electronics",
    summary: "Fine, low-heat marking for PCBs, connectors and small components.",
    image: { url: "/images/stock/electronics.jpg", alt: "Close-up of a populated printed circuit board" },
  },
  {
    slug: "industrial-fabrication",
    name: "Industrial Fabrication",
    summary: "Cutting, welding and marking for sheet metal and structural parts.",
    image: { url: "/images/stock/fabrication.jpg", alt: "Industrial metalworking workshop with a lathe" },
  },
  {
    slug: "pharma-medical-devices",
    name: "Pharma & Medical Devices",
    summary: "UDI-compliant, biocompatible marking for regulated production.",
    image: { url: "/images/stock/pharma.jpg", alt: "Gloved clinician handling a medical device" },
  },
];
