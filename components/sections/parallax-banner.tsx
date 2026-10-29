import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ParallaxBannerProps {
  image: string;
  tagline: string;
  description?: string;
  cta?: { label: string; href: string };
  overlay?: "dark" | "darker";
  align?: "center" | "left";
}

export function ParallaxBanner({
  image,
  tagline,
  description,
  cta,
  overlay = "dark",
  align = "center",
}: ParallaxBannerProps) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Optimised, lazy-loaded image instead of a fixed CSS background, which
          bypassed resizing and forced a repaint on every scroll frame. */}
      <Image src={image} alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" />

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          overlay === "darker" ? "bg-black/75" : "bg-black/60"
        }`}
      />

      {/* Content */}
      <div
        className={`relative z-10 container-page ${
          align === "center" ? "text-center" : "max-w-2xl"
        }`}
      >
        {/* Accent line */}
        <div
          className={`mb-6 h-1 w-16 rounded-full bg-accent ${
            align === "center" ? "mx-auto" : ""
          }`}
        />

        <h2
          className={`text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl ${
            align === "center" ? "mx-auto max-w-3xl" : ""
          }`}
        >
          {tagline}
        </h2>

        {description && (
          <p
            className={`mt-5 text-base leading-relaxed text-white/75 sm:text-lg ${
              align === "center" ? "mx-auto max-w-2xl" : "max-w-xl"
            }`}
          >
            {description}
          </p>
        )}

        {cta && (
          <div className={`mt-8 ${align === "center" ? "flex justify-center" : ""}`}>
            <Link
              href={cta.href}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-accent-2"
            >
              {cta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
