import type {
  Application,
  BlogPost,
  CaseStudy,
  CompanySettings,
  FAQ,
  Industry,
  LeadInput,
  Product,
  ProductSeries,
  Testimonial,
} from "./types";

// Every CMS backend (local fixtures, Strapi, Sanity, Payload...) implements this
// contract. Pages call the functions exported from `lib/cms/index.ts`, never the
// adapter directly, so swapping backends never touches a page or component.
export interface CmsAdapter {
  getProductSeries(): Promise<ProductSeries[]>;
  getProducts(): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | null>;
  getApplications(): Promise<Application[]>;
  getApplicationBySlug(slug: string): Promise<Application | null>;
  getIndustries(): Promise<Industry[]>;
  getIndustryBySlug(slug: string): Promise<Industry | null>;
  getCaseStudies(): Promise<CaseStudy[]>;
  getCaseStudyBySlug(slug: string): Promise<CaseStudy | null>;
  getTestimonials(filter?: { relatedToSlug?: string }): Promise<Testimonial[]>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | null>;
  getFaqs(filter?: { relatedToSlug?: string }): Promise<FAQ[]>;
  getCompanySettings(): Promise<CompanySettings>;
  /** Persists a validated lead (CRM webhook, email, or CMS collection — backend's choice). */
  submitLead(lead: LeadInput): Promise<void>;
}
