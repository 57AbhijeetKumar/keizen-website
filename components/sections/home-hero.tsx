import Image from "next/image";
import Link from "next/link";
import { preload } from "react-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_IMAGE = {
  url: "/images/real/machine-1.webp",
  alt: "Kaizen Pluto fiber laser marking machine — industrial workstation",
};

/**
 * Optional background video. Keep it a short, silent 10–20s loop: `src` at
 * 1080p (~1 MB) for desktop, `mobileSrc` at 720p (~0.5 MB) for phones. The
 * poster is its first frame, so the hero looks finished before the video
 * loads (and when it can't play). Set to null to use HERO_IMAGE.
 */
const HERO_VIDEO: { src: string; mobileSrc: string; poster: string } | null = {
  src: "/videos/hero.mp4",
  mobileSrc: "/videos/hero-720.mp4",
  poster: "/videos/hero-poster.webp",
};

/**
 * Single-message hero — deliberately not a carousel: one headline, one
 * supporting line, two actions. Server-rendered because it's the LCP element.
 */
export function HomeHero() {
  // The poster is the LCP image — fetch it alongside the HTML, not after the
  // <video> element is parsed.
  if (HERO_VIDEO) preload(HERO_VIDEO.poster, { as: "image", fetchPriority: "high" });

  return (
    <section className="relative overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        {HERO_VIDEO ? (
          <video
            className="h-full w-full object-cover opacity-60"
            poster={HERO_VIDEO.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            {/* Browsers that ignore `media` take the first source (desktop). */}
            <source src={HERO_VIDEO.src} type="video/mp4" media="(min-width: 768px)" />
            <source src={HERO_VIDEO.mobileSrc} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={HERO_IMAGE.url}
            alt={HERO_IMAGE.alt}
            fill
            className="object-cover object-center opacity-60"
            sizes="100vw"
            preload
          />
        )}
        {/* Charcoal fade from the left keeps the text legible over any footage */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/10" />
      </div>

      <div className="relative z-10 container-page flex min-h-[520px] flex-col justify-center py-20 sm:min-h-[600px] lg:min-h-[660px]">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            <span className="h-0.5 w-8 bg-safety" aria-hidden="true" />
            Made in India · Manufactured in Noida
          </p>

          <h1 className="mt-5 text-hero font-bold text-white">
            Laser marking &amp; traceability systems built for production.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
            Fiber, UV and CO₂ laser machines with PLC control, Class 1 safety
            and on-site support across India.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              className="h-12 px-6 text-base"
              nativeButton={false}
              render={<Link href="/contact" />}
            >
              Get a Quote
              <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 border-white/40 bg-transparent px-6 text-base text-white hover:border-white hover:bg-white/10 hover:text-white"
              nativeButton={false}
              render={<Link href="/products" />}
            >
              View Machines
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
