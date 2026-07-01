import type { FAQ } from "@/lib/cms/types";

export const ALL_FAQS: FAQ[] = [
  {
    id: "fiber-vs-dot-peen",
    question: "What's the difference between fiber laser marking and dot peen marking?",
    answer:
      "Fiber laser marking uses a focused beam to alter the surface of a material with no physical contact, producing fine, high-contrast marks at high speed. Dot peen marking uses a pin to physically stamp the surface — better suited to oily, uneven, or coated parts where a laser mark may not show as clearly.",
    relatedTo: { type: "global" },
  },
  {
    id: "is-laser-marking-safe",
    question: "Is laser marking safe for operators?",
    answer:
      "Our standard machines are enclosed Class 1 systems, meaning the laser is fully contained during operation and safe for operators without additional protective equipment.",
    relatedTo: { type: "global" },
  },
  {
    id: "integration-with-line",
    question: "Can the system integrate with our existing production line or PLC?",
    answer:
      "Yes. Our machines support PLC-based control and I/O signals for line integration, and our traceability software (KAI-TRACK) can interface with third-party scanners and vision systems already on your line.",
    relatedTo: { type: "global" },
  },
  {
    id: "materials-supported",
    question: "What materials can be marked, engraved, welded or cut?",
    answer:
      "Fiber laser systems work on metals and most plastics. CO2-based options extend that to organic materials such as wood, leather, and certain packaging. Tell us your material and application and we'll recommend the right system.",
    relatedTo: { type: "global" },
  },
  {
    id: "installation-training",
    question: "Do you provide installation and operator training?",
    answer:
      "Yes — every system ships with on-site installation and hands-on operator training as part of the standard package.",
    relatedTo: { type: "global" },
  },
  {
    id: "service-policy",
    question: "What is your service and support policy?",
    answer:
      "We follow a zero-downtime support policy with dedicated service engineers and spare-part availability, so a breakdown doesn't stall your production line.",
    relatedTo: { type: "global" },
  },
  {
    id: "lead-time",
    question: "What's the typical lead time for delivery and installation?",
    answer:
      "Lead time depends on configuration and current order volume. Share your application details through the enquiry form and our team will confirm an accurate timeline.",
    relatedTo: { type: "global" },
  },
];
