import { localCmsAdapter } from "@/lib/cms/local";

/**
 * Single seam between pages and the content backend. Today this is always
 * the local fixture adapter; pointing the site at a real headless CMS later
 * is a one-line change here; no page or component needs to change.
 */
export const cms = localCmsAdapter;

export type * from "./types";
