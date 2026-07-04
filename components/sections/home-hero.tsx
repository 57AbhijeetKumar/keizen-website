"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EASE_PREMIUM } from "@/lib/motion";

interface HeroSlide {
  image: { url: string; alt: string };
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

const HERO_SLIDES: HeroSlide[] = [
  {
    image: { url: "/images/real/hero-laser.webp", alt: "Kaizen laser optics focusing a precision beam onto a metal part" },
    eyebrow: "Manufactured in India · Installed Across Industries",
    title: "Laser Marking & Traceability Systems Built for Production",
    description:
      "From standalone workstations to fully integrated inline traceability — Kaizen machines mark metals, plastics and non-metals at production speed with PLC control, poke-yoke and KAI-TRACK software built in.",
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "View Our Range", href: "/products" },
  },
  {
    image: { url: "/images/real/products/mercury.webp", alt: "Kaizen Mercury fully enclosed safety-cabinet laser marking machine with poke-yoke" },
    eyebrow: "Mercury Series · Safety-First Enclosed Cabinet",
    title: "Full Enclosure. Poke-Yoke. KAI-TRACK. All Standard.",
    description:
      "Mercury is built for lines where a wrong part cannot pass through. Safety curtains, door interlock, part-presence sensor and scan-verify-mark cycle — every safety requirement met without a separate integration project.",
    primaryCta: { label: "View Mercury", href: "/products/mercury-laser-marking-machine" },
    secondaryCta: { label: "Get a Quote", href: "/contact" },
  },
  {
    image: { url: "/images/real/install-4.webp", alt: "Kaizen inline laser marking system with conveyor installed at customer production line" },
    eyebrow: "Installed Across India · Pan-India Service Network",
    title: "Customised Systems. Installed at Your Line. Supported Everywhere.",
    description:
      "Every Kaizen installation is configured to your line — part size, conveyor speed, PLC protocol and traceability requirement. Service engineers in Delhi-NCR, Pune, Bengaluru, Chennai and Tata Nagar.",
    primaryCta: { label: "Talk to a Specialist", href: "/contact" },
    secondaryCta: { label: "Traceability Solutions", href: "/traceability" },
  },
];

const AUTOPLAY_INTERVAL_MS = 5000;
const SWIPE_THRESHOLD_PX = 60;

/**
 * `AnimatePresence initial={false}` is the load-bearing bit here: it skips
 * the enter transition for whatever's mounted on first render, so the first
 * slide (the LCP candidate) paints at its final opacity/position in the SSR
 * HTML instead of `opacity:0` — the same class of bug fixed earlier by
 * removing `whileInView` from this section entirely. Only slide *changes*
 * after hydration animate; first paint stays instant.
 */
export function HomeHero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const goTo = useCallback(
    (next: number) => setIndex((next + HERO_SLIDES.length) % HERO_SLIDES.length),
    []
  );

  useEffect(() => {
    if (prefersReducedMotion || paused || HERO_SLIDES.length < 2) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % HERO_SLIDES.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [prefersReducedMotion, paused]);

  const slide = HERO_SLIDES[index];

  return (
    <section
      className="bg-gradient-mesh relative overflow-hidden border-b border-border"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-page grid gap-6 py-10 sm:py-20 lg:py-28 md:gap-12 md:grid-cols-2 md:items-center">
        <div className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE_PREMIUM }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-accent sm:px-4 sm:py-1.5">
                {slide.eyebrow}
              </span>
              <h1 className="mt-3 text-[1.75rem] font-heading font-semibold leading-tight tracking-tight sm:mt-4 sm:text-5xl lg:text-hero">
                {slide.title}
              </h1>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:line-clamp-none sm:max-w-md sm:text-base lg:text-lg">
                {slide.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-3 sm:mt-6 sm:gap-4">
                <Button size="lg" nativeButton={false} render={<Link href={slide.primaryCta.href} />}>
                  {slide.primaryCta.label}
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  nativeButton={false}
                  render={<Link href={slide.secondaryCta.href} />}
                >
                  {slide.secondaryCta.label}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border bg-zinc-950">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={index}
                className="relative h-full w-full"
                drag={HERO_SLIDES.length > 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_event, info) => {
                  if (info.offset.x < -SWIPE_THRESHOLD_PX) goTo(index + 1);
                  else if (info.offset.x > SWIPE_THRESHOLD_PX) goTo(index - 1);
                }}
                initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: EASE_PREMIUM }}
              >
                <Image
                  src={slide.image.url}
                  alt={slide.image.alt}
                  fill
                  sizes="(min-width: 768px) 28rem, 90vw"
                  className="object-contain"
                  priority={index === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {HERO_SLIDES.length > 1 ? (
            <>
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Previous slide"
                className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow transition-premium hover:bg-background"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Next slide"
                className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow transition-premium hover:bg-background"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <div className="mt-4 flex justify-center gap-2">
                {HERO_SLIDES.map((heroSlide, slideIndex) => (
                  <button
                    key={heroSlide.image.url}
                    type="button"
                    onClick={() => goTo(slideIndex)}
                    aria-label={`Go to slide ${slideIndex + 1}`}
                    aria-current={slideIndex === index}
                    className={`h-1.5 rounded-full transition-premium ${
                      slideIndex === index ? "w-8 bg-accent" : "w-4 bg-border"
                    }`}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
