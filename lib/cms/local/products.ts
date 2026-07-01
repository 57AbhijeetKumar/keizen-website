import type { Product } from "@/lib/cms/types";

/**
 * TODO(launch-blocker): every `specifications` value below is an illustrative
 * placeholder (approved for layout review, not for publishing) — replace with
 * real datasheet figures from Kaizen Laser before this goes live. Same for
 * `downloads: []`: no real brochure/datasheet PDFs exist yet, so this is
 * intentionally empty rather than linking to a file that 404s.
 */

/**
 * Real photos of Kaizen's own marking output (from the live site's homepage
 * feature showcase), not specific to the model pictured on this particular
 * page — used only for the marking/engraving product lines, where the
 * process shown is genuinely the same.
 */
const markingGallery = () => [
  { url: "/images/real/marking-sample-2.webp", alt: "Laser-marked serial number on a metal surface" },
  { url: "/images/real/marking-sample-5.webp", alt: "Laser-marked data matrix code and part number on a metal bracket" },
];

export const ALL_PRODUCTS: Product[] = [
  {
    slug: "pluto-laser-marking-machine",
    name: "Pluto",
    seriesSlug: "kaizen-standard-series",
    tagline: "Entry fiber laser marking machine for everyday part marking.",
    description:
      "Pluto is our entry-level fiber laser marking system, built for workshops and production lines that need reliable, permanent part marking without the cost of a high-power system. It runs on the same PLC-based control as every Kaizen machine, so it integrates cleanly into an existing line.",
    heroImage: { url: "/images/real/products/pluto.webp", alt: "Pluto fiber laser marking machine" },
    gallery: markingGallery(),
    specifications: [
      { label: "Laser Source", value: "Fiber laser" },
      { label: "Laser Power", value: "20", unit: "W" },
      { label: "Wavelength", value: "1064", unit: "nm" },
      { label: "Marking Area", value: "110 x 110", unit: "mm" },
      { label: "Marking Speed", value: "Up to 7,000", unit: "mm/s" },
      { label: "Control System", value: "PLC + touchscreen HMI" },
    ],
    applicationSlugs: ["part-marking-traceability", "deep-engraving", "annealing-marking"],
    industrySlugs: ["automotive", "electronics"],
    advantages: [
      "Lowest cost of entry in the Standard Series",
      "Class 1 enclosed cabinet — no operator PPE required",
      "PLC control, not just a bare PC link",
    ],
    downloads: [],
    relatedProductSlugs: ["venus-laser-marking-machine", "mercury-laser-marking-machine"],
    faqSlugs: ["fiber-vs-dot-peen", "is-laser-marking-safe", "materials-supported"],
    seo: {
      title: "Pluto Fiber Laser Marking Machine | Kaizen Laser",
      description:
        "Pluto is Kaizen Laser's entry fiber laser marking machine — PLC-controlled, Class 1 safe, built for permanent part marking on metals and plastics.",
    },
  },
  {
    slug: "venus-laser-marking-machine",
    name: "Venus",
    seriesSlug: "kaizen-standard-series",
    tagline: "Variable-power fiber laser marking machine for electronics and EV components.",
    description:
      "Venus is built for electronics, electrical and EV manufacturing, where marking power needs to scale with delicate components — it runs anywhere from 3W to 15W, keeping the same enclosed, operator-safe cabinet and PLC control as the rest of the Standard Series.",
    heroImage: { url: "/images/real/products/venus.jpg", alt: "Venus fiber laser marking machine" },
    gallery: markingGallery(),
    specifications: [
      { label: "Laser Source", value: "Fiber laser" },
      { label: "Laser Power", value: "3–15", unit: "W" },
      { label: "Wavelength", value: "1064", unit: "nm" },
      { label: "Marking Speed", value: "5,000–12,000", unit: "mm/s" },
      { label: "Control System", value: "PLC + touchscreen HMI" },
    ],
    applicationSlugs: ["part-marking-traceability", "deep-engraving", "annealing-marking"],
    industrySlugs: ["automotive", "electronics"],
    advantages: [
      "Variable power (3–15W) suited to delicate electronics and EV components",
      "Same Class 1 enclosed safety cabinet as the rest of the Standard Series",
      "Expandable with rotary axis and camera positioning",
    ],
    downloads: [],
    relatedProductSlugs: ["pluto-laser-marking-machine", "neptune-laser-marking-machine"],
    faqSlugs: ["fiber-vs-dot-peen", "integration-with-line", "materials-supported"],
    seo: {
      title: "Venus Fiber Laser Marking Machine | Kaizen Laser",
      description:
        "Venus is Kaizen Laser's variable-power (3–15W) fiber laser marking machine for electronics, electrical and EV components, with PLC control and Class 1 safety.",
    },
  },
  {
    slug: "neptune-laser-marking-machine",
    name: "Neptune",
    seriesSlug: "kaizen-standard-series",
    tagline: "High-power fiber laser marking machine for demanding production.",
    description:
      "Neptune is the flagship of the Standard Series — highest laser power, largest marking field, and the fastest cycle times for high-volume manufacturers.",
    heroImage: { url: "/images/real/products/neptune.webp", alt: "Neptune fiber laser marking machine" },
    gallery: markingGallery(),
    specifications: [
      { label: "Laser Source", value: "Fiber laser" },
      { label: "Laser Power", value: "50", unit: "W" },
      { label: "Wavelength", value: "1064", unit: "nm" },
      { label: "Marking Area", value: "200 x 200", unit: "mm" },
      { label: "Marking Speed", value: "Up to 10,000", unit: "mm/s" },
      { label: "Control System", value: "PLC + touchscreen HMI" },
    ],
    applicationSlugs: ["part-marking-traceability", "deep-engraving", "annealing-marking"],
    industrySlugs: ["automotive", "electronics", "industrial-fabrication"],
    advantages: [
      "Highest power in the Standard Series",
      "Sized for continuous high-volume production",
      "Supports deep engraving as well as fine marking",
    ],
    downloads: [],
    relatedProductSlugs: ["venus-laser-marking-machine", "jupiter-laser-marking-machine"],
    faqSlugs: ["fiber-vs-dot-peen", "integration-with-line", "lead-time"],
    seo: {
      title: "Neptune High-Power Fiber Laser Marking Machine | Kaizen Laser",
      description:
        "Neptune is Kaizen Laser's high-power fiber laser marking machine for demanding, high-volume production lines.",
    },
  },
  {
    slug: "mercury-laser-marking-machine",
    name: "Mercury",
    seriesSlug: "standalone-systems",
    tagline: "Compact desktop marking system for low-volume production.",
    description:
      "Mercury packs Kaizen's PLC-controlled marking platform into a compact desktop footprint — ideal for tool rooms, labs, and lower-volume marking jobs that don't need a full production cabinet.",
    heroImage: { url: "/images/real/products/mercury.webp", alt: "Mercury compact desktop marking system" },
    gallery: markingGallery(),
    specifications: [
      { label: "Laser Source", value: "Fiber laser" },
      { label: "Laser Power", value: "20", unit: "W" },
      { label: "Wavelength", value: "1064", unit: "nm" },
      { label: "Marking Area", value: "100 x 100", unit: "mm" },
      { label: "Footprint", value: "450 x 400", unit: "mm" },
      { label: "Control System", value: "PLC + touchscreen HMI" },
    ],
    applicationSlugs: ["part-marking-traceability", "annealing-marking"],
    industrySlugs: ["electronics"],
    advantages: [
      "Smallest footprint in the range",
      "Fits tool rooms and lab benches",
      "Same software and code support as production machines",
    ],
    downloads: [],
    relatedProductSlugs: ["pluto-laser-marking-machine", "jupiter-laser-marking-machine"],
    faqSlugs: ["fiber-vs-dot-peen", "materials-supported"],
    seo: {
      title: "Mercury Compact Desktop Laser Marking System | Kaizen Laser",
      description:
        "Mercury is a compact desktop fiber laser marking system from Kaizen Laser, built for low-volume marking and lab use.",
    },
  },
  {
    slug: "jupiter-laser-marking-machine",
    name: "Jupiter",
    seriesSlug: "standalone-systems",
    tagline: "Heavy-duty industrial marking system for high-volume lines.",
    description:
      "Jupiter is built for round-the-clock industrial use — a heavier-duty frame, larger marking field, and line-integration options for high-volume manufacturers.",
    heroImage: { url: "/images/real/products/jupiter.webp", alt: "Jupiter heavy-duty industrial marking system" },
    gallery: markingGallery(),
    specifications: [
      { label: "Laser Source", value: "Fiber laser" },
      { label: "Laser Power", value: "50", unit: "W" },
      { label: "Wavelength", value: "1064", unit: "nm" },
      { label: "Marking Area", value: "220 x 220", unit: "mm" },
      { label: "Duty Cycle", value: "24/7 continuous" },
      { label: "Control System", value: "PLC + touchscreen HMI" },
    ],
    applicationSlugs: ["part-marking-traceability", "deep-engraving"],
    industrySlugs: ["automotive", "industrial-fabrication"],
    advantages: [
      "Heavy-duty frame for continuous production use",
      "Line-integration ready (conveyor, robot cell)",
      "Largest marking field in the Standalone range",
    ],
    downloads: [],
    relatedProductSlugs: ["neptune-laser-marking-machine", "mercury-laser-marking-machine"],
    faqSlugs: ["integration-with-line", "lead-time"],
    seo: {
      title: "Jupiter Heavy-Duty Industrial Laser Marking System | Kaizen Laser",
      description:
        "Jupiter is Kaizen Laser's heavy-duty industrial marking system, built for continuous high-volume production lines.",
    },
  },
  {
    slug: "mars-dot-peen-marking-machine",
    name: "Mars",
    seriesSlug: "standalone-systems",
    tagline: "Dot peen marking machine for oily, uneven or coated parts.",
    description:
      "Mars uses physical stylus impact rather than a laser beam to leave a permanent, tamper-proof mark for part identification and traceability — the right choice for cast, oily, or coated metal and plastic parts where a laser mark wouldn't show clear contrast. It's built to integrate directly into an existing production line regardless of part shape or surface finish.",
    heroImage: { url: "/images/real/products/mars.webp", alt: "Mars dot peen marking machine" },
    gallery: markingGallery(),
    specifications: [
      { label: "Marking Method", value: "Pneumatic dot peen" },
      { label: "Stylus Material", value: "Tungsten carbide" },
      { label: "Marking Area", value: "120 x 80", unit: "mm" },
      { label: "Marking Depth", value: "Up to 0.3", unit: "mm" },
      { label: "Stroke Frequency", value: "Up to 400", unit: "Hz" },
      { label: "Control System", value: "PLC + touchscreen HMI" },
    ],
    applicationSlugs: ["part-marking-traceability"],
    industrySlugs: ["automotive", "industrial-fabrication"],
    advantages: [
      "Works on oily, uneven and coated surfaces",
      "No fume extraction required, unlike laser marking",
      "Low running cost per part",
    ],
    downloads: [],
    relatedProductSlugs: ["pluto-laser-marking-machine", "jupiter-laser-marking-machine"],
    faqSlugs: ["fiber-vs-dot-peen", "materials-supported"],
    seo: {
      title: "Mars Dot Peen Marking Machine | Kaizen Laser",
      description:
        "Mars is Kaizen Laser's dot peen marking machine, built for oily, uneven or coated parts where laser marking isn't ideal.",
    },
  },
  {
    slug: "kai-weld-laser-welding",
    name: "Kai-Weld",
    seriesSlug: "katakshi-series",
    tagline: "Laser welding systems for precision metal joining.",
    description:
      "Kai-Weld brings low-heat-distortion laser welding to sheet metal and component assembly, where traditional welding risks warping or discolouring thin material. Power is customized to the application, from 1kW up to 6kW.",
    heroImage: { url: "/images/real/products/katakshi.webp", alt: "Katakshi series laser welding system" },
    gallery: [],
    specifications: [
      { label: "Laser Source", value: "Fiber laser" },
      { label: "Laser Power", value: "1,500", unit: "W" },
      { label: "Wavelength", value: "1064", unit: "nm" },
      { label: "Weld Penetration Depth", value: "Up to 3", unit: "mm" },
      { label: "Working Distance", value: "150", unit: "mm" },
      { label: "Cooling", value: "Closed-loop water chiller" },
    ],
    applicationSlugs: ["laser-welding"],
    industrySlugs: ["industrial-fabrication", "automotive"],
    advantages: [
      "Low heat distortion on thin sheet metal",
      "Handheld and fixed-mount configurations available",
      "Faster cycle time than TIG welding for comparable joints",
    ],
    downloads: [],
    relatedProductSlugs: ["kai-cut-laser-cutting", "kai-clean-laser-cleaning"],
    faqSlugs: ["integration-with-line", "lead-time"],
    seo: {
      title: "Kai-Weld Laser Welding System | Kaizen Laser",
      description:
        "Kai-Weld is Kaizen Laser's precision laser welding system for low-heat-distortion metal joining.",
    },
  },
  {
    slug: "kai-cut-laser-cutting",
    name: "Kai-Cut",
    seriesSlug: "katakshi-series",
    tagline: "Laser cutting systems for clean, repeatable metal cuts.",
    description:
      "Kai-Cut delivers clean-edge laser cutting for sheet metal fabrication, removing the secondary finishing work that mechanical cutting often leaves behind. Power is customized to the application, from 1kW up to 6kW.",
    heroImage: { url: "/images/real/products/katakshi.webp", alt: "Katakshi series laser cutting system" },
    gallery: [],
    specifications: [
      { label: "Laser Source", value: "Fiber laser" },
      { label: "Laser Power", value: "2,000", unit: "W" },
      { label: "Cutting Thickness (Mild Steel)", value: "Up to 12", unit: "mm" },
      { label: "Cutting Thickness (Stainless Steel)", value: "Up to 8", unit: "mm" },
      { label: "Positioning Accuracy", value: "±0.02", unit: "mm" },
      { label: "Cooling", value: "Closed-loop water chiller" },
    ],
    applicationSlugs: ["laser-cutting"],
    industrySlugs: ["industrial-fabrication", "automotive"],
    advantages: [
      "Clean edges with minimal secondary finishing",
      "Repeatable accuracy across batch runs",
      "Lower running cost than plasma cutting for thin-to-mid gauge sheet",
    ],
    downloads: [],
    relatedProductSlugs: ["kai-weld-laser-welding", "kai-clean-laser-cleaning"],
    faqSlugs: ["materials-supported", "lead-time"],
    seo: {
      title: "Kai-Cut Laser Cutting System | Kaizen Laser",
      description:
        "Kai-Cut is Kaizen Laser's laser cutting system for clean, repeatable cuts on sheet metal.",
    },
  },
  {
    slug: "kai-clean-laser-cleaning",
    name: "Kai-Clean",
    seriesSlug: "katakshi-series",
    tagline: "Laser cleaning systems for rust, paint and oxide removal.",
    description:
      "Kai-Clean removes rust, paint, and oxide layers without abrasives, chemicals, or media disposal — a faster, cleaner alternative to sandblasting for surface prep and restoration.",
    heroImage: { url: "/images/real/products/katakshi.webp", alt: "Katakshi series laser cleaning system" },
    gallery: [],
    specifications: [
      { label: "Laser Source", value: "Fiber laser" },
      { label: "Laser Power", value: "100", unit: "W" },
      { label: "Wavelength", value: "1064", unit: "nm" },
      { label: "Cleaning Width", value: "Up to 100", unit: "mm" },
      { label: "Cleaning Speed", value: "Up to 8", unit: "m²/hr" },
      { label: "Control System", value: "Handheld + PLC cabinet" },
    ],
    applicationSlugs: ["laser-cleaning"],
    industrySlugs: ["industrial-fabrication"],
    advantages: [
      "No abrasive media or chemical waste to dispose of",
      "Won't damage the base material like sandblasting can",
      "Handheld for spot work or fixed-mount for production lines",
    ],
    downloads: [],
    relatedProductSlugs: ["kai-weld-laser-welding", "kai-cut-laser-cutting"],
    faqSlugs: ["materials-supported"],
    seo: {
      title: "Kai-Clean Laser Cleaning System | Kaizen Laser",
      description:
        "Kai-Clean is Kaizen Laser's laser cleaning system for non-abrasive rust, paint and oxide removal.",
    },
  },
];
