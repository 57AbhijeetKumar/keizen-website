"use client";

import { useRef, useEffect } from "react";

export function VideoShowreel() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {
      // Autoplay blocked — still shows first frame
    });
  }, []);

  return (
    <section className="relative h-[420px] overflow-hidden sm:h-[520px] lg:h-[600px]">
      {/* Background video */}
      <video
        ref={videoRef}
        src="/videos/showreel.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />

      {/* Content */}
      <div className="relative z-10 container-page flex h-full flex-col justify-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
          Made in India · Noida, Uttar Pradesh
        </p>
        <h2 className="max-w-2xl text-3xl font-heading font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
          Precision Laser Marking & Automation Systems
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/75 sm:text-base">
          From standalone fiber laser workstations to fully enclosed safety cabinets with poke-yoke — every machine assembled, tested and dispatched from our Noida facility.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/products"
            className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
          >
            View Our Range
          </a>
          <a
            href="/contact"
            className="inline-flex items-center rounded-lg border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
