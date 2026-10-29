import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Every page is prerendered at build time and nothing uses ISR, so serve the
// prerendered HTML straight from Workers Static Assets (read-only, free, no R2)
// instead of re-rendering on each request. Cache interception returns cached
// pages before the Next.js server even loads, keeping CPU time minimal — the
// free plan's per-request CPU limit is small.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
