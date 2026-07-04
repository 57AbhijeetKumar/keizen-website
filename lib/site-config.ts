import type { CompanySettings } from "@/lib/cms/types";

/**
 * Real company contact details, used by chrome components (Navbar, Footer,
 * WhatsAppButton) that render on every page and can't wait on a Suspense
 * boundary for content. This is exactly the shape `CmsAdapter.getCompanySettings()`
 * will return once Phase 8 wires a real backend — swap the import there, not here.
 */
export const siteConfig: CompanySettings = {
  legalName: "Kaizen Laser and Automation",
  address: "Plot No. E-86, Noida Sector-63, Noida, Gautam Budh Nagar, UP 201301",
  phoneNumbers: ["+91 79066 13074", "+91 77199 66792"],
  emails: ["info@kaizenlaser.in", "sales@kaizenlaser.in"],
  whatsappNumber: "+91 77199 66792",
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/kaizenlaserandautomation/",
  },
  businessHours: [
    { day: "Monday – Saturday", hours: "10:00 AM – 7:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  // Pinned from the owner's live GPS location shared via maps.app.goo.gl —
  // exact office coordinates: 28.621238, 77.386262 (Noida Sector-63).
  mapEmbedUrl:
    "https://maps.google.com/maps?q=28.621238,77.386262&z=17&output=embed",
};

export const siteMeta = {
  name: "Kaizen Laser",
  url: "https://www.kaizenlaser.in",
  description:
    "Kaizen Laser designs and manufactures industrial laser marking, engraving, welding, cutting and traceability systems.",
};
