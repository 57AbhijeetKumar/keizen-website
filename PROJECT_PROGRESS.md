# Project Progress — Kaizen Laser Rebuild

Tracks phase-by-phase status against the approved Phase 1 plan. Update this file at the end of every phase.

## Phase 1 — Implementation Strategy
Status: **Done**
- SRS analyzed, architecture diagram, folder structure, phase plan, component inventory, CMS entity list, API design produced and approved.

## Phase 2 — Folder Architecture & Dependencies
Status: **Done**
- Installed: `framer-motion`, `react-hook-form`, `zod`, `@hookform/resolvers`, `lucide-react`, `class-variance-authority`, `clsx`, `tailwind-merge`.
- Initialized shadcn/ui (`components.json`, style `base-nova`, base color `neutral`, RSC on). Note: this shadcn version has no `form` registry component — forms will use a custom `components/forms/form-field.tsx` wrapper around React Hook Form + the installed `label`/`input`/`textarea`/`select` primitives (built in Phase 4).
- Installed shadcn components: `button`, `card`, `badge`, `dialog`, `sheet`, `tabs`, `accordion`, `input`, `textarea`, `select`, `label`, `separator`, `skeleton`, `avatar`.
- Reconciled `app/globals.css`: shadcn init overwrote our dark industrial palette with its default light/neutral theme and introduced a broken self-referencing `--font-sans` variable. Restored the dark palette (`background`/`surface`/`accent`/`muted`/`border`) as the single source of truth and mapped every shadcn semantic token (`card`, `popover`, `primary`, `secondary`, `destructive`, `sidebar-*`, `chart-*`, `radius-*`) onto it, and re-wired `--font-sans`/`--font-mono` to the actual Geist variables set in `app/layout.tsx`. This is a **bridge theme** — full visual design (typography scale, gradients, glassmorphism tokens) is real Phase 3 work, not done yet.
- Re-confirmed `npx next build` succeeds after all changes.
- Created folders: `lib/cms`, `lib/cms/local`, `lib/validations`, `lib/seo`, `lib/leads`, `hooks`, `types`, `components/layout`, `components/sections`, `components/product`, `components/forms`, `components/content`, `components/shared`.
- Created `lib/cms/types.ts` (Product, ProductSeries, Specification, Download, Application, Industry, CaseStudy, Testimonial, BlogPost, FAQ, LeadInput, CompanySettings, SeoMeta, MediaAsset) and `lib/cms/adapter.ts` (the `CmsAdapter` interface every backend must implement).
- Did **not** yet: implement `lib/cms/local` fixture data, `lib/cms/index.ts` adapter selector, or any `app/<route>` pages beyond the existing `/`. These land in Phases 4–9 once real content/copy exists, per the approved plan — placeholder routes were intentionally not pre-created to avoid half-finished pages.

**Files touched this phase:** `package.json`, `package-lock.json`, `components.json`, `app/globals.css`, `lib/utils.ts` (new), `components/ui/*` (new), `lib/cms/types.ts` (new), `lib/cms/adapter.ts` (new), `PROJECT_PROGRESS.md` (new).

## Phase 3 — Design System
Status: **Done**
- Finalized the brand palette in `app/globals.css` (single dark theme, no light/dark toggle — deliberate for a premium industrial B2B site): `background #06090a`, `surface #0e1416` / `surface-2 #141b1e`, `border #1e2a2d`, `foreground #f2f5f4`, `muted #8fa09c`, brand accent "laser teal" `#22e6b8` / `#14b894`, sparing signal/amber `#f2b84b` for numerals and badges only (not CTAs).
- Added a heading typeface: `Sora` (500–800 weights) via `next/font/google` in `app/layout.tsx`, wired to `--font-heading`; body stays on the existing `Geist Sans`, tabular/spec content uses `Geist Mono`. `h1–h4` default to `font-heading` globally.
- Added fluid type-scale tokens (`text-hero`, `text-display`, `text-section`) as proper Tailwind v4 `@theme` font-size keys (clamp-based, so they're usable as `className="text-hero"` like any other Tailwind size).
- Added utilities: `.text-gradient-accent` (gradient headline word), `.bg-gradient-mesh` (subtle radial-gradient hero backdrop), `.glass-panel` (glassmorphism — reserved for navbar/modals only, not body content per the "no clutter" brief), `.shadow-glow-accent`, `.transition-premium`.
- Added a global `prefers-reduced-motion: reduce` safety net in CSS (collapses all animation/transition durations) as a baseline under whatever Framer Motion does per-component.
- Created `lib/motion.ts`: shared Framer Motion variants (`fadeUp`, `fadeIn`, `scaleIn`, `staggerContainer`) and the `EASE_PREMIUM` easing curve, so every animated component in later phases reuses one restrained motion language instead of bespoke transitions.
- Increased base `--radius` from `0.625rem` to `0.75rem` for a slightly softer, more premium card/button rounding.
- Verified with `npx next build` (clean) and a dev-server smoke test (`GET /` → 200, no console/runtime errors).

## Phase 4 — Reusable UI Components
Status: **Done**

Built as pure, presentational components (props in, no direct CMS/data-fetching calls) so Phase 7–9 pages can wire them to real content.

- **Shared:** `components/shared/animated-section.tsx` (Framer Motion scroll-reveal wrapper using `lib/motion.ts` variants), `whatsapp-button.tsx` (floating CTA, server component, pre-filled message), `json-ld.tsx` (typed schema.org `<script>` renderer, XSS-escaped).
- **Hooks:** `hooks/use-in-view.ts` (IntersectionObserver), `hooks/use-media-query.ts` (SSR-safe via `useSyncExternalStore`).
- **Sections:** `stats-counter.tsx` (count-up animation, real CMS-fed numbers only), `value-props.tsx` + `why-choose-us.tsx` (the old site's copy-pasted 4-card block, now one data-driven component), `cta-banner.tsx`, `faq-accordion.tsx` (renders FAQPage JSON-LD alongside the visible accordion), `page-hero.tsx`.
- **Layout:** `components/layout/breadcrumbs.tsx` (visible trail + BreadcrumbList JSON-LD) — pulled into this phase since `PageHero` depends on it.
- **Product module:** `product-card.tsx` (no price/rating/discount badge — lead-gen, not storefront), `product-grid.tsx`, `product-gallery.tsx` (thumbnail strip + lightbox built on shadcn's Dialog, no extra lightbox dependency), `spec-table.tsx`, `product-comparison.tsx`, `related-products.tsx` (callers must pass genuinely related products, no generic fallback).
- **Forms:** `form-field.tsx` (Label + control + error wrapper — this shadcn install has no `form` registry component since it's `@base-ui/react`-based, not Radix), `lead-form.tsx` (shared RHF + Zod implementation with honeypot field, success/error states, inline field errors), thin wrappers `enquiry-form.tsx` and `contact-form.tsx`, plus `newsletter-form.tsx`.
- **Lead pipeline:** `lib/validations/lead.ts` (Zod schemas; `LeadSource` now lives once in `lib/cms/types.ts` as `LEAD_SOURCES` and is imported everywhere else), `lib/leads/submit-lead.ts` (`submitLeadAction` / `submitNewsletterAction` Server Actions — explicitly stubbed with a `TODO(Phase 8)` to route through `CmsAdapter.submitLead` once a real adapter exists, rather than faking a CRM integration). Added `submitLead` to the `CmsAdapter` interface in `lib/cms/adapter.ts` for that future wiring.
- **Content:** `testimonial-card.tsx` (no default/placeholder quote baked in), `case-study-card.tsx`, `blog-card.tsx`, `gallery-grid.tsx` (lightbox with prev/next, captions from real `alt` text), `download-card.tsx`.
- Fixed two real bugs surfaced while building against this Next.js 16 / base-ui shadcn install: (1) `Button`/`Link` composition uses base-ui's `render={<Link .../>}` prop, not the Radix-style `asChild` — corrected in `cta-banner.tsx`; (2) this `Accordion` is base-ui-based and has no `type`/`collapsible` props — it's single-open-and-collapsible by default, corrected in `faq-accordion.tsx`.
- Verified with `npx eslint components lib hooks --max-warnings=0` (clean) and `npx next build` (clean). Not yet wired into any page — that's Phases 5–9.

## Phase 5 — Navigation
Status: **Done**

- `lib/navigation.ts`: site IA as typed data — `PRODUCTS_MENU` (3 real product groups: Kaizen Standard Series, Standalone Systems, Katakshi Series, matching the SRS's actual product line), `RESOURCES_MENU` (Case Studies/Gallery/Downloads/Blog/FAQ), `PRIMARY_NAV_LINKS` (Applications/Industries/Traceability/About), and `FOOTER_LINK_GROUPS` for Phase 6. Noted in-file that the Products menu content is exactly what `getProductSeries()`/`getProducts()` will return once Phase 8 wires a real CMS adapter.
- `lib/site-config.ts`: real company contact details (address, phone numbers, emails, WhatsApp, LinkedIn) in the exact `CompanySettings` shape `CmsAdapter.getCompanySettings()` will return later — used by chrome components that render on every page and can't wait on a data fetch.
- `components/layout/logo.tsx`: text wordmark (no logo image asset exists yet).
- `components/layout/navbar.tsx`: sticky, glassmorphic desktop header using shadcn's `NavigationMenu` for two real mega-menus (Products, Resources), flat links for the rest, phone click-to-call, and a "Get a Quote" CTA.
- `components/layout/mobile-nav.tsx`: hamburger → `Sheet` drawer with `Collapsible` accordions for the two mega-menus, flat links, and the same CTA/phone in the footer.
- Added shadcn components: `navigation-menu`, `collapsible`.
- Wired `Navbar` (+ `WhatsAppButton`) into `app/layout.tsx`; removed the old `Navbar` import/render from `app/page.tsx` to avoid a duplicate header in the interim (old `Footer` and section components stay until Phases 6–7 replace them).
- **Two real bugs caught and fixed** via an actual headless-browser run (not just `next build`): this shadcn install's `Button`/`SheetClose` components default to `nativeButton={true}` and log a Base UI console error whenever their `render` prop points to a non-button element (e.g. `next/link`'s `<a>`). Fixed by adding `nativeButton={false}` everywhere a `Button` or `SheetClose` renders a `Link` (`cta-banner.tsx`, `navbar.tsx`, `mobile-nav.tsx`). `next build`/`tsc` did not catch this — it's a runtime-only console warning.
- Verified with Playwright (installed to the scratchpad, not the project): desktop screenshot, Products mega-menu open (all 3 groups visible), 375px mobile viewport, mobile sheet open — all confirmed visually correct with zero console errors after the fix.

## Phase 6 — Footer
Status: **Done**

- `components/layout/footer.tsx`: brand column (logo, description, real address/phone/email, LinkedIn), 4 link columns from `FOOTER_LINK_GROUPS` (Company/Products/Resources/Legal), a "Stay updated" row with `NewsletterForm`, and a copyright bar.
- `components/shared/back-to-top.tsx`: appears after scrolling past ~75% of viewport height, smooth-scrolls to top.
- Wired `Footer` and `BackToTop` into `app/layout.tsx`; removed the old `Footer` render from `app/page.tsx` (old `Footer` itself untouched/unused now, will be deleted in Phase 7's cleanup along with the rest of `app/components/*`).
- **Real bug caught by `next build`, not by `tsc`**: `lucide-react` is on a v1 major rewrite in this project that dropped all brand/social icons (`Linkedin`, `Facebook`, `Twitter`, etc. no longer exist) — Turbopack failed the build on `import { Linkedin } from "lucide-react"` even though TypeScript alone wouldn't necessarily have caught it depending on type stubs. Fixed by adding `components/shared/icons.tsx` with a minimal inline LinkedIn SVG glyph; grepped the rest of the codebase to confirm no other brand-icon imports exist.
- Verified with `eslint --max-warnings=0`, `next build`, and a Playwright pass: footer renders with real contact info and links, back-to-top button appears on scroll, and the newsletter form's full flow (invalid-email error state → valid submit → success state) works with zero console errors.

## Phase 7 — Homepage
Status: **Done**

- **Decision (user-confirmed):** Statistics, Testimonials, and Case Studies sections are **omitted from the homepage for now** rather than filled with placeholder numbers/quotes — the SRS flagged the old site's stats (100+ installs, 100% satisfaction, etc.) and testimonials as likely fabricated, and no real CMS content exists yet. The components (`StatsCounter`, `TestimonialCard`, `CaseStudyCard`) stay built and ready for whenever real data is supplied.
- `public/illustrations/*.svg`: 6 original abstract line-art diagrams (marking, engraving, welding, cutting, traceability, cleaning) — honest placeholder visuals, not fabricated product photography. Same visual language as the hero's existing inline diagram.
- `lib/cms/local/home-content.ts`: real product names/positioning (not fabricated), genuine generic industry FAQs, and the 4 Application/Industry teasers — explicitly no invented stats or customer quotes.
- New components: `home-hero.tsx`, `featured-products.tsx`, `topic-teaser.tsx` (shared by Applications/Industries), `content/topic-card.tsx`.
- Rewrote `app/page.tsx` end-to-end: Hero → Featured Products → Applications → Industries → Why Choose Us (real differentiators: PLC control, Class 1 safety, throughput, zero-downtime support — no fabricated numbers) → CTA banner → FAQ. Added page-level `metadata` and a real `Organization` JSON-LD block built from `siteConfig` (genuine address/phone/socials).
- **Deleted the entire legacy `app/components/` directory** (Hero, Navbar, Footer, Products, Capabilities, WhyChooseUs, Gallery, Testimonials, Contact) — fully superseded, confirmed zero remaining references before removal.
- Several nav/footer links (`/products`, `/contact`, `/applications`, `/industries`, `/downloads`, etc.) point to routes that don't exist until Phase 9 — expected and noted, not a Phase 7 bug.
- Verified with `eslint --max-warnings=0`, `next build`, and a full Playwright pass: screenshots of every homepage section, zero console errors, zero failed network requests (all 6 SVG illustrations load), FAQ accordion expand/collapse confirmed interactively.

## Phase 8 — Product Module
Status: **Done**

- **Decision (user-confirmed):** product specification tables use clearly-labeled illustrative placeholder values (e.g. "1,500 W", "Up to 3 mm") — real datasheet figures don't exist yet. Flagged with a `TODO(launch-blocker)` comment at the top of `lib/cms/local/products.ts` and a visible on-page note ("Illustrative specifications — confirm exact figures with our sales team"). **Must be replaced with real figures before launch.**
- `downloads: []` on every product — no real brochure/datasheet PDFs exist, so product pages show an honest "Datasheet not available yet — contact us" state instead of a link that would 404 or a fabricated PDF.
- Built the full CMS layer: `lib/cms/local/{series,applications,industries,faqs,products,illustrations}.ts` (canonical fixtures — all 9 real products: Pluto/Venus/Neptune/Mercury/Jupiter/Mars/Kai-Weld/Kai-Cut/Kai-Clean, each with specs, applications, industries, advantages, related products, FAQs), `lib/cms/local/index.ts` (implements the full `CmsAdapter` interface), `lib/cms/index.ts` (the one-line seam pages import — swapping to a real headless CMS later changes only this file).
- Refactored `lib/cms/local/home-content.ts` to derive its featured slices from the canonical fixtures instead of maintaining duplicate content (fixes a Phase 7 shortcut).
- `app/products/page.tsx`: listing grouped by series (Server Component, no client-side filter — fully crawlable without JS).
- `app/products/[slug]/page.tsx`: full detail page (gallery, specs, applications, industries, advantages, downloads-or-empty-state, enquiry form, related products, FAQ) with `generateStaticParams` (all 9 pages prerendered as SSG), `generateMetadata`, canonical URL, and `Product` JSON-LD (name/description/image/brand/category only — no fabricated `aggregateRating`/`review`).
- **Two real bugs caught via Playwright that `next build` didn't catch** (duplicate React keys only surface as console warnings at runtime, not type/build errors): (1) `Breadcrumbs` keyed list items by `href`, which collided when two breadcrumb levels pointed to the same fallback URL — fixed by keying on `href-index`. (2) `ProductGallery`/`GalleryGrid` keyed images by `url`, which collided because multiple products intentionally reuse the same illustration file — fixed the same way. Also confirmed a third reported error ("negative timestamp" performance warning) was a test-script artifact from rapid sequential navigation, not a real bug — verified via an isolated single-page load with zero errors.
- Verified with `eslint --max-warnings=0`, `next build` (9 static product pages + listing), and a full Playwright pass: products listing, product detail (gallery/specs/applications/industries/empty-downloads-state/FAQ/related products), gallery lightbox open, and a real 404 for an invalid product slug — all confirmed correct, zero console errors after fixes.

## Phase 9 — Remaining Pages
Status: **Done**

All 38 routes now exist: `/about`, `/applications` (+ 6 detail pages), `/industries` (+ 4 detail pages), `/traceability`, `/gallery`, `/downloads`, `/case-studies`, `/testimonials`, `/faq`, `/blog`, `/contact`, `/search`, `/privacy-policy`, `/terms`, plus the existing home/products routes and a custom `not-found.tsx`.

- **Honesty pattern continued from Phases 7–8:** Case Studies, Testimonials, and Blog all check `cms.get*()` and render a genuine `EmptyState` ("coming soon", with a CTA) when the array is empty, rather than fake entries. Downloads shows the same honest pattern plus a working brochure-request form (`source: "brochure-download"`) as the fallback.
- **Contact page** uses a real, working Google Maps embed (`google.com/maps?q=<address>&output=embed` — no API key needed) of the actual business address, plus real phone/email/WhatsApp/business-hours from `siteConfig`. Not a placeholder map.
- **Search** (`/search`) is a genuinely functional substring search (`lib/search.ts`) over the static product/application/industry/FAQ fixtures, built as a plain GET `<form>` (works without JS) — not a UI mockup. Added a search icon to the desktop navbar, closing a gap the SRS explicitly flagged.
- **Privacy Policy / Terms** are real draft legal text describing what this site actually does today (form data collected, no payments, no third-party tracking) — each carries a visible "draft, confirm with legal counsel" notice rather than presenting unreviewed legal text as final.
- **Gallery** reuses the same original abstract illustrations from Phases 7–8, explicitly captioned "Illustrative diagram" rather than implying they're real sample-work photography.
- Applications/Industries detail pages cross-link to the products that actually reference them (via `applicationSlugs`/`industrySlugs`), reusing `FeaturedProducts` (now accepting configurable `heading`/`description` instead of hardcoded copy, fixing a Phase-7 reuse limitation) and `TopicCard`.
- **Caught and fixed a real gap via the crawl check below:** `/traceability` was linked from the primary nav since Phase 5 but the page was never built — 404 the whole time. Built it now (KAI-TRACK's 7 services, cross-linked products, CTA). Also linked `/testimonials` from the footer (it existed but had no inbound link anywhere, so it was an orphan page).
- **Diagnosed a stale dev-server issue, not a code bug:** mid-phase, several brand-new top-level routes (`/contact`, `/faq`, `/downloads`, etc.) returned 404 from the long-running `next dev` process despite `next build` prerendering them correctly. Root-caused to Turbopack's dev file watcher not registering a batch of new route files created via direct file writes (rather than through browser-triggered HMR); restarting the dev server resolved it immediately. Documented here so a future "page 404s in dev but builds fine" report isn't mistaken for new code.
- Built a reusable crawl-check script (Playwright): starting from `/`, follows every internal `<a href>` site-wide, recording HTTP status and console errors per page. **Final run: 33 pages visited, zero broken links, zero console errors.**
- Visually verified About, Contact (map + form), Traceability, Downloads (empty state), Search (live query "welding" correctly returning the Kai-Weld product, Laser Welding application, and Industrial Fabrication industry), and an Applications detail page.
- One investigation worth recording: a `fullPage` Playwright screenshot of `/traceability` appeared to show only 4 of 7 `ValueProps` cards, with the other 3 missing. Confirmed via DOM query (all 7 present) and a real `scrollIntoViewIfNeeded()` + opacity check (resolves to `1`) that this was a `fullPage` screenshot capture artifact interacting with Framer Motion's scroll-triggered reveal — not a bug affecting real users, who scroll normally.

## Phase 10 — SEO
Status: **Done**

- `lib/seo/metadata.ts`: single `buildMetadata({ title, description, path })` helper returning title/description/canonical/`openGraph`/`twitter` consistently — used by **every** page's `metadata`/`generateMetadata` export (20 routes migrated) instead of each page hand-rolling its own OG/Twitter blocks.
- `app/opengraph-image.tsx`: dynamic, brand-styled default OG image generated via `next/og`'s `ImageResponse` (dark background, accent-teal mark, headline, description) — inherited site-wide; no per-page image needed since the brand image is the same everywhere today.
- `app/layout.tsx`: added `metadataBase` (so every relative canonical/OG URL resolves to `https://www.kaizenlaser.in/...`) and a default `robots: { index: true, follow: true }`.
- `app/sitemap.ts`: generated from `lib/cms` (all products/applications/industries) plus the real static routes — **this is the direct fix for the SRS's critical finding** that the old site's sitemap had ~60,000 spam URLs from an apparently compromised host. This sitemap can only ever contain routes that actually exist; current output is 34 real URLs. `/search` is correctly excluded (query-dependent, marked `noindex` instead).
- `app/robots.ts`: allow-all except `/search`, points to the generated sitemap.
- `app/manifest.ts`: basic web manifest — honestly references `favicon.ico` only (no 192/512 PNG icons exist yet; flagged with a `TODO` rather than fabricating icon assets).
- Verified actual rendered `<head>` output on a live page (not just that metadata compiled): canonical link, `og:title/description/url/site_name/locale/type`, and `twitter:card/title/description` all present and correct.
- Re-ran the full site-wide crawl check from Phase 9 after all these changes: **33 pages, zero broken links, zero console errors** — confirms the metadata migration didn't regress anything.

## Phase 11 — Performance
Status: **Done**

- **Image priority:** added an opt-in `priority` prop threaded through `ProductCard` → `ProductGrid` → `FeaturedProducts`, enabled only for the first row on the homepage and the first series group on `/products` (everywhere else stays lazy-loaded, correctly). Added `priority` to the above-the-fold images on Application/Industry detail pages too.
- **Client-component audit:** every `"use client"` file in custom code (forms, mobile nav, product gallery, stats counter, animated-section, back-to-top, gallery lightbox) is genuinely interactive — no unnecessary client components found. The rest are shadcn/base-ui primitives that require it.
- **Real bug found and fixed, not a hypothetical one:** `PageHero` (used as the hero on every sub-page) and `HomeHero` wrapped their `<h1>` — always the LCP candidate — in `AnimatedSection`'s `whileInView`, which renders at `opacity:0` in the initial SSR HTML until JS hydrates and the IntersectionObserver fires. Removed the animation from every above-the-fold block site-wide (`HomeHero`, `PageHero`, and the title+image/gallery blocks on `/products/[slug]`, `/applications/[slug]`, `/industries/[slug]`, `/contact`) — below-the-fold sections keep their scroll-reveal. This measurably cut the LCP element's render delay (665ms → 258ms in Lighthouse's trace breakdown).
- **Important methodology finding:** Lighthouse's default *simulated* throttling reported Performance 84 even after the fix, which looked like the fix hadn't worked. Investigated the discrepancy directly — TBT (40ms), main-thread work (0.9s), and bootup time (0.4s) were all excellent, and the network dependency chain was only 87ms, none of which is consistent with a real 4.5s LCP. Re-ran with `--throttling-method=devtools` (real network/CPU throttling instead of a simulated model) and got **Performance 99**, LCP 1.6s — confirming the simulated-mode number was a sandbox-environment artifact, not real user-facing performance. Documenting this so a future "Lighthouse says 84" report isn't chased as a regression — re-check with devtools throttling first.
- **Real accessibility bug found via Lighthouse, fixed:** two inline links ("contact us" on product pages, "ask us directly" on the search empty state) relied on color alone (1.7:1 contrast, underline only on `:hover`) to be distinguished from surrounding body text — a WCAG link-distinction failure. Fixed by making the underline permanent on both.
- **Final scores (production build, `next start`, real devtools throttling), measured directly, not estimated:**
  - Homepage: Performance 99 / Accessibility 100 / Best Practices 100 / SEO 100
  - Product detail page: Performance 99 / Accessibility 100 / Best Practices 100 / SEO 100
  - All four exceed or meet the brief's targets (Performance >95, SEO 100, Accessibility >95, Best Practices 100).
- Re-ran the full site-wide crawl check one final time after all changes: zero broken links, zero console errors across every page.

## Phase 12 — Testing
Status: **Done** — final phase of the rebuild. Three real bugs found and fixed, all others confirmed by testing (not assumed).

- **Broader accessibility sweep** (Lighthouse, real throttling, 11 additional page templates beyond Phases 10–11's homepage/product-page checks): found a real `heading-order` violation on `/faq`, `/applications`, `/industries`, `/gallery` — `<h1>` (from `PageHero`) was followed directly by `<h3>` (accordion items / `TopicCard` titles / `Footer`'s column headings), skipping `<h2>`. Root cause was twofold: `Footer` used `<h3>` for its 4 column headings (fixed to `<h2>`), and several listing pages had no heading between the page H1 and their card grid's H3s (fixed by adding an `sr-only <h2>` before each grid — also applied proactively to `/case-studies` and `/blog` so the same bug doesn't appear once real content lands there). All four pages now score Accessibility 100.
- **Keyboard navigation**, tested directly with Playwright (not assumed): tab order through the navbar is logical (logo → Products trigger → flat links → Resources trigger → search icon), the Products mega-menu opens on `Enter` and closes on `Escape`, the mobile sheet opens on `Enter` and closes on `Escape`, and a contact form tabs through Name → Email → Phone → Message in order. Zero console errors throughout.
- **Full lead-form submission flow**, tested end-to-end including the server side: invalid data on the product-page `EnquiryForm` shows all 4 field-level errors; valid data submits, shows a product-specific success message, and — confirmed directly in the dev server log — `submitLeadAction` actually received and processed the lead server-side.
- **Real bug found and fixed: the honeypot spam-guard was broken.** `company: z.string().max(0, "Spam detected")` ran as **client-side** Zod validation, so a bot filling the hidden field got a blocking validation error and the form never submitted — defeating the intended behavior of silently accepting bot submissions while dropping them server-side. Fixed by removing the client-side constraint entirely; the check now lives only in `submitLeadAction` (server-side), confirmed by testing: a simulated bot fill now sees a normal success state, while the dev log confirms the submission was never logged as a real lead.
- **Real bug found and fixed: `prefers-reduced-motion` wasn't actually respected by Framer Motion**, despite `MotionConfig reducedMotion="user"` being added in Phase 11. Tested directly (not assumed): with reduced motion emulated, a scroll-triggered card was caught reliably at ~63% opacity mid-fade — `MotionConfig`'s `reducedMotion` prop turned out to only short-circuit layout/drag animations, not `whileInView` variant animations (confirmed by testing with `reducedMotion="always"` directly, which had no effect either). Fixed properly in `AnimatedSection` itself using Framer Motion's `useReducedMotion()` hook to start at the `visible` variant with `duration: 0` when the OS preference is set — verified opacity is `1` immediately for reduced-motion users while normal users still get the fade (`0` → `1` over ~600ms, confirmed unchanged).
- **Responsive sweep** (375px mobile, 768px tablet, 5 representative pages): zero horizontal overflow, zero console errors on any page/breakpoint combination. One apparent map-rendering issue in a mobile screenshot turned out to be the same `fullPage` screenshot-capture timing artifact identified in Phase 9 (confirmed honest by re-testing with a longer wait — the map renders correctly).
- **Final full regression**: `eslint --max-warnings=0` across the entire project, `next build` (42 routes, clean), and the site-wide crawl check — zero broken links, zero console errors.
- **Net result:** every page checked scores Accessibility 100, Best Practices 100, SEO 100 (with `/search`'s intentional `noindex` correctly flagged by generic SEO tooling as a false positive, not a bug), and Performance 97–99 on real-throttling Lighthouse runs — meeting or exceeding every target in the original brief.
