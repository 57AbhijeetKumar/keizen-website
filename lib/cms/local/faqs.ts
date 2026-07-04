import type { FAQ } from "@/lib/cms/types";

export const ALL_FAQS: FAQ[] = [
  {
    id: "fiber-vs-dot-peen",
    question: "What is the difference between fiber laser marking and dot peen marking?",
    answer:
      "Fiber laser marking uses a focused beam of light to alter the surface of a material without physical contact — producing fine, high-contrast marks at 10,000–14,000 mm/sec on metals and plastics. The mark depth is shallow, which is ideal for precision parts where dimensional integrity matters. Dot peen marking uses a hardened tungsten carbide pin to physically indent the surface — producing a deeper, mechanically embossed mark that survives paint, heat treatment, shot-blasting and heavy surface wear. Choose laser for fine codes, QR codes and marks on finished surfaces; choose dot peen for rough castings, forgings and parts that go through aggressive downstream processes.",
    relatedTo: { type: "global" },
  },
  {
    id: "is-laser-marking-safe",
    question: "Is laser marking safe for production line operators?",
    answer:
      "Our standard enclosed machines (Pluto, Mercury) are fully enclosed Class 1 laser systems. Class 1 means the laser is completely contained during normal operation — operators work without laser safety glasses or any additional protective equipment. The machine cannot fire unless all enclosure doors and safety interlocks are in the closed and locked state. Mercury additionally has safety curtains and a part-presence sensor that prevent the marking cycle from starting unless the correct part is properly positioned. These safety features are built in, not retrofitted.",
    relatedTo: { type: "global" },
  },
  {
    id: "integration-with-line",
    question: "Can a Kaizen laser system integrate with our existing production line or PLC?",
    answer:
      "Yes. All our machines support PLC-based I/O signals — start/stop, part present, marking complete, error output — via standard digital I/O. Communication interfaces include Ethernet, RS-232, USB and LAN depending on the model. KAI-TRACK traceability software connects to third-party scanners (Keyence, Cognex, Datalogic and others) and can push or pull data to ERP and SAP systems. We design the integration to fit your existing line architecture — we do not require you to change your PLC or scanner infrastructure to accommodate our system.",
    relatedTo: { type: "global" },
  },
  {
    id: "materials-supported",
    question: "What materials can be laser marked, engraved, welded or cut?",
    answer:
      "Fiber laser (Pluto, Mercury, Jupiter): steel, stainless steel, aluminium, copper, brass, titanium, anodised surfaces, most engineering plastics. UV laser (Venus): PCBs, EV battery components, thin plastics and coated surfaces where fiber heat would cause damage. CO₂ laser (Neptune): wood, glass, leather, rubber, ceramics, cardboard, MDF and most packaging materials. Dot peen (Mars): any metallic or rigid plastic surface. For laser welding and cutting (Kai-Weld, Kai-Cut): mild steel, stainless steel, aluminium, copper and brass sheet. Tell us your specific material and application and we will confirm suitability and recommend the right configuration.",
    relatedTo: { type: "global" },
  },
  {
    id: "installation-training",
    question: "Do you provide installation and operator training?",
    answer:
      "Yes — every system includes on-site installation and hands-on operator training as part of the standard delivery package. Our engineer commissions the machine at your facility, confirms marking quality on your actual production parts, and trains your operators on day-to-day operation, parameter adjustment and routine maintenance. Training typically takes half a day for standard machines and one to two days for systems with KAI-TRACK traceability software. We also provide a machine manual and parameter backup so your team can recover settings after any future change.",
    relatedTo: { type: "global" },
  },
  {
    id: "service-policy",
    question: "What is your after-sales service and support policy?",
    answer:
      "We have service engineers in Delhi-NCR, Pune, Bengaluru, Chennai and Tata Nagar. For critical production line breakdowns we target same-day response. For non-critical issues our standard response time is one business day. We maintain a spares inventory for all current models so common wear parts are available without a long lead time. Remote diagnostics via phone and video call resolve a significant proportion of issues without needing an on-site visit. Service contracts with defined response times are available for high-production customers who need a formal uptime guarantee.",
    relatedTo: { type: "global" },
  },
  {
    id: "lead-time",
    question: "What is the typical lead time from order to installed machine?",
    answer:
      "Lead time depends on the machine model and current production order volume. Standard models (Pluto, Venus, Neptune, Mars) typically have a shorter lead time than customised systems (Mercury, Jupiter, Katashi Series). Share your application details and required delivery date through the enquiry form and our sales team will confirm an accurate lead time within one business day. For urgent requirements, call us directly — we work with our production team to accommodate time-critical orders wherever possible.",
    relatedTo: { type: "global" },
  },
];
