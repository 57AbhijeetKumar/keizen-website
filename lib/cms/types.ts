// Content entities shared by every CMS adapter implementation (local fixtures today,
// Strapi/Sanity/Payload later). Pages and components must only depend on these types,
// never on a specific CMS SDK's shape.

export interface SeoMeta {
  title: string;
  description: string;
  ogImage?: string;
  canonicalPath?: string;
}

export interface MediaAsset {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface ProductSeries {
  slug: string;
  name: string;
  group?: string; // e.g. "Kaizen Standard Series", "Katakshi Series"
  order: number;
}

export interface Specification {
  label: string;
  value: string;
  unit?: string;
}

export interface Download {
  title: string;
  fileUrl: string;
  fileType: "pdf" | "doc" | "other";
  sizeLabel?: string;
}

export interface Application {
  slug: string;
  name: string;
  summary: string;
  image?: MediaAsset;
}

export interface Industry {
  slug: string;
  name: string;
  summary: string;
  image?: MediaAsset;
}

export interface Product {
  slug: string;
  name: string;
  seriesSlug: string;
  tagline: string;
  description: string;
  heroImage: MediaAsset;
  gallery: MediaAsset[];
  specifications: Specification[];
  applicationSlugs: string[];
  industrySlugs: string[];
  advantages: string[];
  downloads: Download[];
  videoUrl?: string;
  relatedProductSlugs: string[];
  faqSlugs: string[];
  seo: SeoMeta;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industrySlug?: string;
  summary: string;
  results: string[];
  image?: MediaAsset;
  publishedAt: string;
}

export interface Testimonial {
  id: string;
  authorName: string;
  authorRole: string;
  authorCompany: string;
  quote: string;
  avatar?: MediaAsset;
  relatedTo?: { type: "product" | "industry" | "global"; slug?: string };
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  coverImage?: MediaAsset;
  author: string;
  publishedAt: string;
  seo: SeoMeta;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
  relatedTo?: { type: "product" | "global"; slug?: string };
}

// Single source of truth for lead sources — `lib/validations/lead.ts` builds its
// zod enum from this array so the two never drift apart.
export const LEAD_SOURCES = [
  "contact-page",
  "product-enquiry",
  "get-quote-modal",
  "brochure-download",
  "newsletter",
] as const;

export type LeadSource = (typeof LEAD_SOURCES)[number];

export interface LeadInput {
  name: string;
  email: string;
  phone: string;
  message: string;
  source: LeadSource;
  productSlug?: string;
}

export interface CompanySettings {
  legalName: string;
  address: string;
  phoneNumbers: string[];
  emails: string[];
  whatsappNumber: string;
  socialLinks: Partial<Record<"linkedin" | "instagram" | "facebook" | "twitter", string>>;
  businessHours: { day: string; hours: string }[];
  mapEmbedUrl?: string;
}
