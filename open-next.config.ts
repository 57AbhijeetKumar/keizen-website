import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// No incremental cache override: every page is prerendered at build time and
// nothing uses ISR, so there's no runtime page cache to persist (and no R2
// bucket to pay for or manage).
export default defineCloudflareConfig({});
