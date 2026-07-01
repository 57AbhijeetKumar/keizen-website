import type { CmsAdapter } from "@/lib/cms/adapter";
import { ALL_PRODUCTS } from "@/lib/cms/local/products";
import { ALL_SERIES } from "@/lib/cms/local/series";
import { ALL_APPLICATIONS } from "@/lib/cms/local/applications";
import { ALL_INDUSTRIES } from "@/lib/cms/local/industries";
import { ALL_FAQS } from "@/lib/cms/local/faqs";
import { siteConfig } from "@/lib/site-config";

/**
 * Static-fixture implementation of `CmsAdapter`. This is what every page
 * currently talks to. Swapping to Strapi/Sanity/Payload later means writing a
 * new file that implements the same `CmsAdapter` interface and changing the
 * single export in `lib/cms/index.ts` — no page or component changes.
 */
export const localCmsAdapter: CmsAdapter = {
  async getProductSeries() {
    return ALL_SERIES;
  },
  async getProducts() {
    return ALL_PRODUCTS;
  },
  async getProductBySlug(slug) {
    return ALL_PRODUCTS.find((product) => product.slug === slug) ?? null;
  },
  async getApplications() {
    return ALL_APPLICATIONS;
  },
  async getApplicationBySlug(slug) {
    return ALL_APPLICATIONS.find((application) => application.slug === slug) ?? null;
  },
  async getIndustries() {
    return ALL_INDUSTRIES;
  },
  async getIndustryBySlug(slug) {
    return ALL_INDUSTRIES.find((industry) => industry.slug === slug) ?? null;
  },
  async getCaseStudies() {
    return [];
  },
  async getCaseStudyBySlug() {
    return null;
  },
  async getTestimonials() {
    return [];
  },
  async getBlogPosts() {
    return [];
  },
  async getBlogPostBySlug() {
    return null;
  },
  async getFaqs(filter) {
    if (!filter?.relatedToSlug) {
      return ALL_FAQS.filter((faq) => faq.relatedTo?.type === "global");
    }
    return ALL_FAQS.filter((faq) => faq.relatedTo?.slug === filter.relatedToSlug);
  },
  async getCompanySettings() {
    return siteConfig;
  },
  async submitLead() {
    // Handled by lib/leads/submit-lead.ts directly today (see its TODO).
    // Implemented here too so this adapter satisfies the full CmsAdapter contract.
  },
};
