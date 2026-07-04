import type { Industry } from "@/lib/cms/types";

export const ALL_INDUSTRIES: Industry[] = [
  {
    slug: "automotive",
    name: "Automotive",
    summary:
      "VIN plates, engine component marking, transmission part identification and EV battery cell coding — built to survive under-hood conditions: oil, heat, vibration and decades of service. Mercury with KAI-TRACK satisfies Tier-1 supplier traceability and poke-yoke audit requirements.",
    image: { url: "/images/stock/automotive.jpg", alt: "Robotic arms on an automotive assembly line" },
  },
  {
    slug: "electronics",
    name: "Electronics & EV",
    summary:
      "PCB identification, connector body marking, EV battery cell coding and fine component labelling where heat-affected zones are unacceptable. Venus UV laser at 354 nm marks without generating heat — no micro-cracking, no discolouration, no delamination on sensitive substrates.",
    image: { url: "/images/stock/electronics.jpg", alt: "Close-up of a populated printed circuit board with laser-marked identification" },
  },
  {
    slug: "industrial-fabrication",
    name: "Industrial Fabrication",
    summary:
      "Laser cutting, welding, cleaning and marking for sheet metal fabrication, structural components, castings and forgings. Kai-Cut, Kai-Weld and Kai-Clean work alongside Pluto and Neptune to cover the full fabrication process — one supplier for every laser application on the shop floor.",
    image: { url: "/images/stock/fabrication.jpg", alt: "Industrial metalworking workshop with laser marking and fabrication equipment" },
  },
  {
    slug: "pharma-medical-devices",
    name: "Pharma & Medical Devices",
    summary:
      "UDI-compliant device marking, vial and blister pack coding, and biocompatible surface marking on surgical instruments and implants. Annealing marking on stainless steel and titanium satisfies Class II and III device requirements — the mark is permanent, smooth and does not compromise the corrosion-resistant oxide layer.",
    image: { url: "/images/stock/pharma.jpg", alt: "Gloved clinician handling a laser-marked medical device" },
  },
];
