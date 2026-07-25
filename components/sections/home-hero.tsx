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
    image: { url: "/images/real/machine-1.webp", alt: "Kaizen Pluto fiber laser marking machine — industrial workstation" },
    eyebrow: "Manufactured in India · Installed Across Industries",
    title: "Laser Marking & Traceability Systems Built for Production",
    description:
      "From standalone workstations to fully integrated inline traceability — Kaizen machines mark metals, plastics and non-metals at production speed with PLC control, poke-yoke and KAI-TRACK software built in.",
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "View Our Range", href: "/products" },
  },
  {
    image: { url: "/images/real/install-4.webp", alt: "Kaizen inline laser marking system with conveyor installed at customer production line" },
    eyebrow: "Mercury Series · Safety-First Enclosed Cabinet",
    title: "Full Enclosure. Poke-Yoke. KAI-TRACK. All Standard.",
    description:
      "Mercury is built for lines where a wrong part cannot pass through. Safety curtains, door interlock, part-presence sensor and scan-verify-mark cycle — every safety requirement met without a separate integration project.",
    primaryCta: { label: "View Mercury", href: "/products/mercury-laser-marking-machine" },
    secondaryCta: { label: "Get a Quote", href: "/contact" },
  },
  {
    image: { url: "/images/real/team-machines.jpg", alt: "Kaizen Laser team with a batch of 8 Pluto machines ready for dispatch" },
    eyebrow: "Installed Across India · Pan-India Service Network",
    title: "Customised Systems. Installed at Your Line. Supported Everywhere.",
    description:
      "Every Kaizen installation is configured to your line — part size, conveyor speed, PLC protocol and traceability requirement. Service engineers in Delhi-NCR, Pune, Bengaluru, Chennai and Tata Nagar.",
    primaryCta: { label: "Talk to a Specialist", href: "/contact" },
    secondaryCta: { label: "Traceability Solutions", href: "/traceability" },
  },
];

const AUTOPLAY_INTERVAL_MS = 5500;
const SWIPE_THRESHOLD_PX = 60;

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
      className="relative h-[560px] overflow-hidden sm:h-[640px] lg:h-[720px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background image — crossfades between slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={`bg-${index}`}
          className="absolute inset-0"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.7, ease: EASE_PREMIUM }}
          drag={HERO_SLIDES.length > 1 ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_e, info) => {
            if (info.offset.x < -SWIPE_THRESHOLD_PX) goTo(index + 1);
            else if (info.offset.x > SWIPE_THRESHOLD_PX) goTo(index - 1);
          }}
        >
          <Image
            src={slide.image.url}
            alt={slide.image.alt}
            fill
            className="object-cover object-center brightness-[0.55]"
            sizes="100vw"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Left-to-right gradient overlay for text legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
      {/* Bottom fade for clean edge */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Slide content */}
      <div className="relative z-10 container-page flex h-full flex-col justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`content-${index}`}
            className="max-w-2xl"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: EASE_PREMIUM }}
          >
            <span className="inline-flex items-center rounded-full border border-accent/50 bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
              {slide.eyebrow}
            </span>

            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {slide.title}
            </h1>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              {slide.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-accent text-white hover:bg-accent-2 shadow-lg"
                nativeButton={false}
                render={<Link href={slide.primaryCta.href} />}
              >
                {slide.primaryCta.label}
                <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white"
                nativeButton={false}
                render={<Link href={slide.secondaryCta.href} />}
              >
                {slide.secondaryCta.label}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev / Next arrows */}
      {HERO_SLIDES.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/60"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/60"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-accent" : "w-4 bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
