import { ALL_PRODUCTS } from "@/lib/cms/local/products";
import { ALL_APPLICATIONS } from "@/lib/cms/local/applications";
import { ALL_INDUSTRIES } from "@/lib/cms/local/industries";
import { ALL_FAQS } from "@/lib/cms/local/faqs";

export interface SearchResult {
  type: "Product" | "Application" | "Industry" | "FAQ";
  title: string;
  description: string;
  href: string;
}

/**
 * Simple substring search over the static fixtures — genuinely functional
 * (not a UI mockup), even though it isn't a full-text search index. Revisit
 * if/when content moves to a real headless CMS with its own search API.
 */
export function search(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: SearchResult[] = [];

  for (const product of ALL_PRODUCTS) {
    if (`${product.name} ${product.tagline} ${product.description}`.toLowerCase().includes(q)) {
      results.push({
        type: "Product",
        title: product.name,
        description: product.tagline,
        href: `/products/${product.slug}`,
      });
    }
  }

  for (const application of ALL_APPLICATIONS) {
    if (`${application.name} ${application.summary}`.toLowerCase().includes(q)) {
      results.push({
        type: "Application",
        title: application.name,
        description: application.summary,
        href: `/applications/${application.slug}`,
      });
    }
  }

  for (const industry of ALL_INDUSTRIES) {
    if (`${industry.name} ${industry.summary}`.toLowerCase().includes(q)) {
      results.push({
        type: "Industry",
        title: industry.name,
        description: industry.summary,
        href: `/industries/${industry.slug}`,
      });
    }
  }

  for (const faq of ALL_FAQS) {
    if (`${faq.question} ${faq.answer}`.toLowerCase().includes(q)) {
      results.push({
        type: "FAQ",
        title: faq.question,
        description: faq.answer,
        href: `/faq`,
      });
    }
  }

  return results;
}
