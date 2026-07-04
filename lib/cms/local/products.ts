import type { Product } from "@/lib/cms/types";

const markingGallery = () => [
  { url: "/images/real/marking-sample-2.webp", alt: "Laser-marked serial number on a metal surface" },
  { url: "/images/real/marking-sample-5.webp", alt: "Laser-marked data matrix code and part number on a metal bracket" },
];

export const ALL_PRODUCTS: Product[] = [
  // ─── KAIZEN STANDARD SERIES ───────────────────────────────────────────────

  {
    slug: "pluto-laser-marking-machine",
    name: "Pluto",
    seriesSlug: "kaizen-standard-series",
    tagline: "Industrial fiber laser marking machine for metals and plastics — 20W to 100W, Q-Switched or MOPA.",
    description:
      "Pluto is Kaizen's workhorse fiber laser marking machine, trusted across automotive, electronics and general manufacturing lines. It delivers precise, high-contrast marks at 10,000–14,000 mm/sec on steel, aluminium, copper, brass, anodised surfaces and most engineering plastics. Available in 20W, 30W, 50W and 100W configurations, and in Q-Switched or MOPA variants — MOPA giving finer control over pulse width for colour marking on stainless steel and gentle marking on heat-sensitive materials. The German-standard laser module is rated for 50,000+ hours of operation, and the machine connects to your line via Ethernet, RS-232 or USB.",
    heroImage: { url: "/images/real/products/pluto.webp", alt: "Pluto fiber laser marking machine" },
    gallery: markingGallery(),
    specifications: [
      { label: "Laser Power", value: "20 / 30 / 50 / 100", unit: "W" },
      { label: "Laser Class / Type", value: "IV / 1064 nm / Q-Switched / MOPA" },
      { label: "Marking Speed", value: "10,000–14,000", unit: "mm/sec" },
      { label: "Marking Area", value: "100×100 to 300×300", unit: "mm" },
      { label: "Cooling Type", value: "Air Cooled" },
      { label: "Power Consumption", value: "400–550", unit: "W" },
      { label: "Communication", value: "Ethernet / RS-232 / USB" },
      { label: "Dimensions", value: "800×800×1500", unit: "mm" },
      { label: "Weight", value: "200", unit: "kg" },
      { label: "Z-Axis Travel", value: "Auto / Manual" },
    ],
    applicationSlugs: ["part-marking-traceability", "deep-engraving", "annealing-marking"],
    industrySlugs: ["automotive", "electronics", "industrial-fabrication"],
    advantages: [
      "German-standard laser module — 50,000+ hour rated lifespan, proven in Indian production conditions",
      "Q-Switched and MOPA variants: MOPA enables colour marking on stainless steel and gentle marking on delicate parts",
      "Auto/manual Z-axis accommodates varying part heights without stopping the line",
      "Wide power range (20–100W) handles both everyday batch marking and heavy deep-engraving in one platform",
      "Ethernet / RS-232 / USB — integrates with any PLC or line controller without protocol adapters",
    ],
    downloads: [],
    relatedProductSlugs: ["venus-laser-marking-machine", "neptune-laser-marking-machine", "mercury-laser-marking-machine"],
    faqSlugs: ["fiber-vs-dot-peen", "is-laser-marking-safe", "materials-supported"],
    seo: {
      title: "Pluto Fiber Laser Marking Machine 20W–100W | Kaizen Laser India",
      description:
        "Pluto is Kaizen's industrial fiber laser marking machine — 20W to 100W, Q-Switched or MOPA, 10,000–14,000 mm/sec, German-standard module, for metals and plastics.",
    },
  },

  {
    slug: "venus-laser-marking-machine",
    name: "Venus",
    seriesSlug: "kaizen-standard-series",
    tagline: "UV laser marking for electronics, electricals and EV components — 3W to 15W at 354 nm.",
    description:
      "Venus is Kaizen's ultraviolet laser marking machine, specifically engineered for industries where heat-affected zones are unacceptable — Electronics, Electricals and Electric Vehicle battery components being the primary applications. It operates at 354 nm wavelength, which means the laser energy is absorbed by the material surface without generating the heat that fibre lasers produce. This makes Venus ideal for PCBs, thin plastic casings, EV battery cell casings, and connector housings where a fiber laser would cause micro-cracking or discolouration. Available in 3W, 5W, 10W and 15W configurations. The Singaporean-standard laser module ensures long life, and the water-cooled design maintains stable output power in continuous-production environments.",
    heroImage: { url: "/images/real/products/venus.webp", alt: "Venus UV laser marking machine with water chiller unit" },
    gallery: markingGallery(),
    specifications: [
      { label: "Laser Power", value: "3 / 5 / 10 / 15", unit: "W" },
      { label: "Wavelength / Type", value: "354 nm / Ultraviolet" },
      { label: "Marking Speed", value: "5,000–10,000", unit: "mm/sec" },
      { label: "Marking Area", value: "100×100 to 300×300", unit: "mm" },
      { label: "Cooling Type", value: "Water Cooled" },
      { label: "Power Consumption", value: "1,200", unit: "W" },
      { label: "Communication", value: "Ethernet / RS-232 / USB" },
      { label: "Dimensions", value: "1000×800×1500", unit: "mm" },
      { label: "Weight", value: "225", unit: "kg" },
      { label: "Z-Axis Travel", value: "Auto / Manual" },
    ],
    applicationSlugs: ["part-marking-traceability", "annealing-marking"],
    industrySlugs: ["automotive", "electronics"],
    advantages: [
      "354 nm UV wavelength — absorbed by surface without generating heat, preventing micro-cracking on sensitive parts",
      "Ideal for PCBs, EV battery cell casings, thin plastic housings and connector bodies",
      "Singaporean-standard laser module for long, stable operational life",
      "Water-cooled design maintains consistent output power across multi-shift continuous production",
      "Ultra-fine mark quality enables small-character codes on miniaturised electronic components",
    ],
    downloads: [],
    relatedProductSlugs: ["pluto-laser-marking-machine", "neptune-laser-marking-machine"],
    faqSlugs: ["fiber-vs-dot-peen", "integration-with-line", "materials-supported"],
    seo: {
      title: "Venus UV Laser Marking Machine 354nm | Kaizen Laser India",
      description:
        "Venus is Kaizen's UV laser marking machine for electronics, electricals and EV — 354 nm, 3W to 15W, water-cooled, for heat-sensitive parts and components.",
    },
  },

  {
    slug: "neptune-laser-marking-machine",
    name: "Neptune",
    seriesSlug: "kaizen-standard-series",
    tagline: "CO₂ laser marking for non-metal industries — 20W to 55W at 10.6 µm.",
    description:
      "Neptune is Kaizen's CO₂ laser marking machine for industries working with non-metallic materials. It operates at 10.6 µm wavelength — the frequency that wood, glass, leather, rubber, ceramics, cardboard and packaging materials absorb efficiently, where a fibre laser would pass through or skip. Available in NEPTUNE-20, NEPTUNE-30 and NEPTUNE-55 models. Marking speed of 5,000–12,000 mm/sec enables high-throughput marking of packaging lines, label production and component identification in non-metal fabrication. Air-cooled for simple installation without a water chiller system.",
    heroImage: { url: "/images/real/products/neptune.webp", alt: "Neptune CO2 laser marking machine" },
    gallery: markingGallery(),
    specifications: [
      { label: "Laser Power", value: "20 / 30 / 55", unit: "W" },
      { label: "Wavelength / Type", value: "10.6 µm / CO₂" },
      { label: "Marking Speed", value: "5,000–12,000", unit: "mm/sec" },
      { label: "Marking Area", value: "100×100 to 300×300", unit: "mm" },
      { label: "Cooling Type", value: "Air Cooled" },
      { label: "Power Consumption", value: "400–550", unit: "W" },
      { label: "Communication", value: "Ethernet / RS-232 / USB" },
      { label: "Dimensions", value: "800×800×1500", unit: "mm" },
      { label: "Weight", value: "200", unit: "kg" },
      { label: "Z-Axis Travel", value: "Auto / Manual" },
    ],
    applicationSlugs: ["part-marking-traceability", "deep-engraving"],
    industrySlugs: ["industrial-fabrication"],
    advantages: [
      "10.6 µm CO₂ wavelength: the correct tool for wood, glass, leather, rubber, ceramics, cardboard and packaging",
      "55W top model delivers very deep marks — durable identification that survives downstream processing",
      "Air-cooled: no water chiller required, simpler installation and lower operating cost",
      "Three power models (20W / 30W / 55W) match the machine to the material thickness and mark depth required",
      "5,000–12,000 mm/sec marking speed supports high-throughput packaging and labelling lines",
    ],
    downloads: [],
    relatedProductSlugs: ["pluto-laser-marking-machine", "venus-laser-marking-machine"],
    faqSlugs: ["fiber-vs-dot-peen", "materials-supported", "lead-time"],
    seo: {
      title: "Neptune CO₂ Laser Marking Machine for Non-Metals | Kaizen Laser India",
      description:
        "Neptune is Kaizen's CO₂ laser for non-metal industries — 10.6 µm, 20–55W, for wood, glass, leather, rubber and packaging. Air-cooled, simple installation.",
    },
  },

  // ─── MERCURY SERIES ───────────────────────────────────────────────────────

  {
    slug: "mercury-laser-marking-machine",
    name: "Mercury",
    seriesSlug: "mercury-series",
    tagline: "Fully enclosed safety-cabinet laser with poke-yoke, robotic integration and KAI-TRACK — 20W to 100W.",
    description:
      "Mercury is Kaizen's flagship safety-cabinet laser marking machine, built for production lines where a wrong part passing through is not an option. The full enclosure meets Class 1 laser safety requirements so operators need no PPE. Built-in safety curtains, door interlock and part-presence sensor prevent marking from starting unless the correct part is in the correct position. KAI-TRACK mark software is included as standard — enabling scan-verify-mark traceability without a separate software purchase or integration project. Supports robotic loading, conveyor integration and online marking. Power starts at 20W and goes to 100W in Q-Switched or MOPA variants. German-standard laser module.",
    heroImage: { url: "/images/real/products/mercury.webp", alt: "Mercury fully enclosed safety-cabinet laser marking machine" },
    gallery: markingGallery(),
    specifications: [
      { label: "Laser Power", value: "20 / 30 / 50 / 100", unit: "W" },
      { label: "Laser Class / Type", value: "IV / 1064 nm / Q-Switched / MOPA" },
      { label: "Marking Speed", value: "10,000–14,000", unit: "mm/sec" },
      { label: "Marking Area", value: "100×100 to 300×300", unit: "mm" },
      { label: "Cooling Type", value: "Air Cooled" },
      { label: "Power Consumption", value: "400–550", unit: "W" },
      { label: "Communication", value: "Ethernet / RS-232 / USB" },
      { label: "Dimensions", value: "1100×900×2000", unit: "mm" },
      { label: "Weight", value: "200", unit: "kg" },
      { label: "Z-Axis Travel", value: "Auto" },
    ],
    applicationSlugs: ["part-marking-traceability", "deep-engraving"],
    industrySlugs: ["automotive", "electronics", "industrial-fabrication"],
    advantages: [
      "Full Class 1 laser safety enclosure — operators work without laser PPE, HSE compliance met from day one",
      "Safety curtains, door interlock and part-presence sensor: the machine cannot mark unless the correct part is properly loaded",
      "KAI-TRACK software included as standard — scan-verify-mark traceability without extra software cost",
      "Robotic integration and conveyor-online marking capability for fully automated production cells",
      "Panel AC maintains stable internal temperature, protecting the laser source in hot shop-floor environments",
    ],
    downloads: [],
    relatedProductSlugs: ["pluto-laser-marking-machine", "jupiter-laser-marking-machine"],
    faqSlugs: ["is-laser-marking-safe", "integration-with-line", "materials-supported"],
    seo: {
      title: "Mercury Enclosed Safety-Cabinet Laser Marking Machine | Kaizen Laser India",
      description:
        "Mercury is Kaizen's fully enclosed Class 1 safety-cabinet laser — 20–100W, poke-yoke, part-presence sensor, KAI-TRACK software, robotic integration for automotive lines.",
    },
  },

  // ─── JUPITER SERIES ───────────────────────────────────────────────────────

  {
    slug: "jupiter-laser-marking-machine",
    name: "Jupiter",
    seriesSlug: "jupiter-series",
    tagline: "Ultra-compact fiber laser head for robot cells and inline marking — 300×300 mm footprint, 50 kg.",
    description:
      "Jupiter is Kaizen's compact laser marking head, engineered specifically for production environments where available floor space is the binding constraint — or where the laser must be mounted on a robot arm, above a conveyor, or inside an existing automation cell. At just 300×300 mm footprint and 50 kg, it fits where standard workstation machines cannot. There is no Z-axis on the base unit, as the mounting configuration is customised to the specific robot or fixture in each installation. Power from 20W to 100W (Q-Switched or MOPA). German-standard laser module. Connects via RS-232, Ethernet or LAN for direct PLC integration.",
    heroImage: { url: "/images/real/products/jupiter.webp", alt: "Jupiter compact fiber laser marking head for robot and inline applications" },
    gallery: markingGallery(),
    specifications: [
      { label: "Laser Power", value: "20 / 30 / 50 / 100", unit: "W" },
      { label: "Laser Class / Type", value: "IV / 1064 nm / Q-Switched / MOPA" },
      { label: "Marking Speed", value: "10,000–14,000", unit: "mm/sec" },
      { label: "Marking Area", value: "100×100 to 300×300", unit: "mm" },
      { label: "Cooling Type", value: "Air Cooled" },
      { label: "Power Consumption", value: "400–550", unit: "W" },
      { label: "Communication", value: "RS-232 / Ethernet / LAN" },
      { label: "Footprint", value: "300×300", unit: "mm" },
      { label: "Weight", value: "50", unit: "kg" },
      { label: "Z-Axis Travel", value: "None — customised mounting per application" },
    ],
    applicationSlugs: ["part-marking-traceability", "deep-engraving"],
    industrySlugs: ["automotive", "electronics", "industrial-fabrication"],
    advantages: [
      "300×300 mm footprint and 50 kg — mounts on a robot arm, above a conveyor or inside an existing cell",
      "No Z-axis on base unit: mounting and focal distance are configured exactly for your fixture or robot",
      "Customised mounting brackets engineered for each installation",
      "RS-232 / Ethernet / LAN for direct PLC integration without external communication adapters",
      "Same German-standard laser module and 10,000–14,000 mm/sec marking speed as the full Pluto workstation",
    ],
    downloads: [],
    relatedProductSlugs: ["mercury-laser-marking-machine", "pluto-laser-marking-machine"],
    faqSlugs: ["integration-with-line", "lead-time", "materials-supported"],
    seo: {
      title: "Jupiter Compact Inline Laser Marking Machine | Kaizen Laser India",
      description:
        "Jupiter is Kaizen's ultra-compact fiber laser head — 300×300 mm, 50 kg, robot-mountable, for inline and cell integration where floor space is limited.",
    },
  },

  // ─── MARS SERIES (DOT PEEN) ───────────────────────────────────────────────

  {
    slug: "mars-dot-peen-marking-machine",
    name: "Mars",
    seriesSlug: "mars-series",
    tagline: "Pneumatic dot peen marking — permanent, tamper-proof identification on any metal or plastic surface.",
    description:
      "Mars is Kaizen's dot peen marking machine, the right choice when the application calls for permanent, deeply indented identification that survives paint, heat treatment, shot-blasting and decades of service. Unlike laser marking, dot peen physically indents the surface with a tungsten carbide pin — the mark survives processes that would destroy or obscure a surface-level laser mark. Available in three variants: stationary (for fixed workstations), portable (for large or assembled parts) and robot-mounted (for automated lines). Marking areas from 50×50 mm (robot) to 300×300 mm (stationary). Touch-screen controller, single-phase 220V supply, pneumatic indenting. Speed of 3–6 characters per second.",
    heroImage: { url: "/images/real/products/mars.webp", alt: "Mars dot peen marking machine" },
    gallery: markingGallery(),
    specifications: [
      { label: "Marking Area", value: "100×100 / 150×150 / 300×300 (stationary), 50×90 / 120×150 (portable), 50×50 / 100×100 (robot)", unit: "mm" },
      { label: "Marking Speed", value: "3–6", unit: "characters/sec" },
      { label: "Controller", value: "Touch Screen" },
      { label: "Supply", value: "Single Phase 220V" },
      { label: "Indenting Type", value: "Pneumatic" },
    ],
    applicationSlugs: ["part-marking-traceability"],
    industrySlugs: ["automotive", "industrial-fabrication"],
    advantages: [
      "Physical indentation survives paint, heat treatment, shot-blasting and heavy surface wear — the mark cannot be removed",
      "Marks any metallic or plastic surface regardless of surface condition, coating or curvature",
      "Three variants (stationary, portable, robot-mounted) cover every production scenario",
      "Touch-screen controller: operators learn in under an hour, no specialist training required",
      "Lower cost per mark than laser for simple alphanumeric identification on rough castings and forgings",
    ],
    downloads: [],
    relatedProductSlugs: ["pluto-laser-marking-machine", "jupiter-laser-marking-machine"],
    faqSlugs: ["fiber-vs-dot-peen", "materials-supported"],
    seo: {
      title: "Mars Dot Peen Marking Machine — Stationary, Portable & Robot | Kaizen Laser India",
      description:
        "Mars is Kaizen's pneumatic dot peen marking machine — permanent, tamper-proof, survives paint and heat treatment. Stationary, portable and robot variants.",
    },
  },

  // ─── KATASHI SERIES ───────────────────────────────────────────────────────

  {
    slug: "kai-weld-laser-welding",
    name: "Kai-Weld",
    seriesSlug: "katashi-series",
    tagline: "High-power fiber laser welding — 1 kW to 6 kW, low heat distortion, precision metal joining.",
    description:
      "KAI-WELD is Kaizen's laser welding system for sheet metal fabrication, component assembly and precision metal joining. It delivers deep, narrow welds with a heat-affected zone far smaller than TIG or MIG welding — which means less distortion, no post-weld straightening on thin material, and a cleaner joint that often requires no secondary finishing. Power is configured from 1 kW up to 6 kW to match your material thickness and joint geometry. Available in manual workstation, semi-automatic and full automation configurations with robot integration. All configurations are customised to the customer's specific application before delivery.",
    heroImage: { url: "/images/real/products/katashi-weld.webp", alt: "Kai-Weld laser welding workstation" },
    gallery: [],
    specifications: [
      { label: "Laser Power", value: "1,000–6,000", unit: "W" },
      { label: "Application", value: "Laser Welding (KAI-WELD)" },
      { label: "Configuration", value: "Customised as per customer requirement" },
    ],
    applicationSlugs: ["laser-welding"],
    industrySlugs: ["industrial-fabrication", "automotive"],
    advantages: [
      "Narrow heat-affected zone: no distortion on thin sheet metal, no post-weld straightening required",
      "Faster cycle time than TIG welding for equivalent joint quality on thin-to-mid gauge material",
      "1 kW to 6 kW power range covers thin foil joining through to heavy structural welds",
      "Clean weld bead often eliminates the need for secondary grinding or polishing",
      "Full automation configuration available — robot integration for high-volume production lines",
    ],
    downloads: [],
    relatedProductSlugs: ["kai-cut-laser-cutting", "kai-clean-laser-cleaning"],
    faqSlugs: ["integration-with-line", "lead-time"],
    seo: {
      title: "Kai-Weld Laser Welding System 1kW–6kW | Kaizen Laser India",
      description:
        "KAI-WELD is Kaizen's fiber laser welding system — 1 kW to 6 kW, low heat distortion, precision metal joining, custom configuration for your application.",
    },
  },

  {
    slug: "kai-cut-laser-cutting",
    name: "Kai-Cut",
    seriesSlug: "katashi-series",
    tagline: "High-power fiber laser cutting — 1 kW to 6 kW, clean edges on metal sheet.",
    description:
      "KAI-CUT is Kaizen's laser cutting system for sheet metal fabrication. It produces clean, burr-free edges that require no secondary deburring or grinding — eliminating a process step that mechanical or plasma cutting makes unavoidable. Suitable for mild steel, stainless steel, aluminium, copper and brass sheet. Power configured from 1 kW to 6 kW covers thin-gauge detail cutting through to medium plate. Automation configurations are available for integration into production lines with material handling. All systems are configured to the customer's material range and cutting dimensions before delivery.",
    heroImage: { url: "/images/real/products/katashi-cut.webp", alt: "Kai-Cut laser cutting machine gantry bed" },
    gallery: [],
    specifications: [
      { label: "Laser Power", value: "1,000–6,000", unit: "W" },
      { label: "Application", value: "Laser Cutting (KAI-CUT)" },
      { label: "Configuration", value: "Customised as per customer requirement" },
    ],
    applicationSlugs: ["laser-cutting"],
    industrySlugs: ["industrial-fabrication", "automotive"],
    advantages: [
      "Clean, burr-free edges — eliminates the secondary deburring step that plasma and mechanical cutting require",
      "Narrow kerf width enables tighter nesting, better material utilisation and more complex cut profiles",
      "1 kW to 6 kW covers thin-gauge precision cutting through to medium plate fabrication",
      "Lower running cost per metre than plasma cutting for thin-to-mid gauge stainless steel and aluminium",
      "Automation configuration available for in-line material handling",
    ],
    downloads: [],
    relatedProductSlugs: ["kai-weld-laser-welding", "kai-clean-laser-cleaning"],
    faqSlugs: ["materials-supported", "lead-time"],
    seo: {
      title: "Kai-Cut Laser Cutting System 1kW–6kW | Kaizen Laser India",
      description:
        "KAI-CUT is Kaizen's fiber laser cutting system — 1 kW to 6 kW, clean burr-free edges on metal sheet, customised for your material and cutting application.",
    },
  },

  {
    slug: "kai-clean-laser-cleaning",
    name: "Kai-Clean",
    seriesSlug: "katashi-series",
    tagline: "High-power laser cleaning — 1 kW to 6 kW, rust, paint and oxide removal without abrasives or chemicals.",
    description:
      "KAI-CLEAN is Kaizen's laser cleaning system for surface preparation, rust removal, paint stripping and oxide removal without abrasive media, chemical solvents or disposal costs. The laser ablates only the contaminant layer — the base material underneath is not damaged, which makes it ideal for precision components and assemblies where sandblasting would risk dimensional change or surface damage. Applications include pre-weld surface preparation, mould cleaning in production, oxide removal from aluminium and stainless components, and restoration of corroded machinery parts. Power from 1 kW to 6 kW in handheld or fixed-mount automation configurations.",
    heroImage: { url: "/images/real/products/katashi-weld.webp", alt: "Katashi series laser cleaning system" },
    gallery: [],
    specifications: [
      { label: "Laser Power", value: "1,000–6,000", unit: "W" },
      { label: "Application", value: "Laser Cleaning (KAI-CLEAN)" },
      { label: "Configuration", value: "Customised as per customer requirement" },
    ],
    applicationSlugs: ["laser-cleaning"],
    industrySlugs: ["industrial-fabrication"],
    advantages: [
      "No abrasive media, chemical solvents or disposal costs — cleaner, safer and cheaper to operate than sandblasting",
      "Ablates only the contaminant layer — base material is untouched, no dimensional risk on precision parts",
      "Ideal for pre-weld surface preparation where contamination causes porosity and weld defects",
      "1 kW to 6 kW covers spot cleaning (handheld) through to production-line automated cleaning stations",
      "No consumables other than electricity — running cost per square metre drops significantly versus abrasive methods",
    ],
    downloads: [],
    relatedProductSlugs: ["kai-weld-laser-welding", "kai-cut-laser-cutting"],
    faqSlugs: ["materials-supported"],
    seo: {
      title: "Kai-Clean Laser Cleaning System 1kW–6kW | Kaizen Laser India",
      description:
        "KAI-CLEAN is Kaizen's laser cleaning system — 1 kW to 6 kW, no abrasives or chemicals, rust/paint/oxide removal on metals, handheld or automated.",
    },
  },
];
