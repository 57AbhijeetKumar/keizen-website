import type { Metadata } from "next";
import { siteMeta } from "@/lib/site-config";

interface PageMetadataInput {
  title: string;
  description: string;
  /** Path relative to the site root, e.g. "/about". */
  path: string;
}

/**
 * Single helper for page-level metadata so every route gets a canonical URL
 * and consistent Open Graph / Twitter Card data without copy-pasting the same
 * three blocks 30 times. The OG image itself comes from the file-convention
 * `app/opengraph-image.tsx` (inherited site-wide) rather than being set here.
 */
export function buildMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = `${siteMeta.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: siteMeta.name,
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
