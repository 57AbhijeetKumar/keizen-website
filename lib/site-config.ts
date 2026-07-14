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
    youtube: "https://www.youtube.com/@KaizenLaserandAutomation",
  },
  businessHours: [
    { day: "Monday – Saturday", hours: "10:00 AM – 7:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  // Official Google Maps embed tied to the verified business listing —
  // shows "KAIZEN LASER AND AUTOMATION" on the pin.
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.5711430655182!2d77.38554987342127!3d28.621232045931496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce506bc796b0d%3A0x3b23304962d28c!2sKAIZEN%20LASER%20AND%20AUTOMATION!5e0!3m2!1sen!2sin!4v1784005561511!5m2!1sen!2sin",
};

export const siteMeta = {
  name: "Kaizen Laser",
  // Using Vercel URL until a custom domain is purchased and connected.
  // Once the domain is ready: update this one value and redeploy.
  url: "https://keizen-website.vercel.app",
  description:
    "Kaizen Laser designs and manufactures industrial laser marking, engraving, welding, cutting and traceability systems.",
};
