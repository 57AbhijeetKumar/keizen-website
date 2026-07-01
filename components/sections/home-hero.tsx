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
    image: { url: "/images/real/machine-1.webp", alt: "Kaizen fiber laser marking machine" },
    eyebrow: "Class 1 Laser Safety Certified",
    title: "Precision Laser Marking, Engraving & Traceability",
    description:
      "Kaizen Laser builds industrial fiber laser systems that mark, engrave and track parts with permanent, high-contrast accuracy — built for metals, plastics and high-volume production lines.",
    primaryCta: { label: "Get a Quote", href: "/contact" },
    secondaryCta: { label: "View Machines", href: "/products" },
  },
  {
    image: { url: "/images/real/machine-2.webp", alt: "Kaizen enclosed laser marking workstation" },
    eyebrow: "Class 1 Enclosed Cabinet",
    title: "Enclosed Workstations, Built for Production Lines",
    description:
      "For lines that need full operator safety and PLC integration, our enclosed workstation platform drops into an existing process without separate fume or beam containment.",
    primaryCta: { label: "Get a Quote", href: "/contact" },
    secondaryCta: { label: "View Machines", href: "/products" },
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
      <div className="container-page grid gap-12 py-24 sm:py-32 md:grid-cols-2 md:items-center">
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: EASE_PREMIUM }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-accent">
                {slide.eyebrow}
              </span>
              <h1 className="text-hero mt-6 font-heading font-semibold tracking-tight">
                {slide.title}
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
                {slide.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
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
          <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border bg-surface p-8">
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
