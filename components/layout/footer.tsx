import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { LinkedInIcon, YouTubeIcon } from "@/components/shared/icons";
import { Logo } from "@/components/layout/logo";
import { FOOTER_LINK_GROUPS } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-accent bg-charcoal text-white/65">
      <div className="container-page grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1.3fr_2fr]">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="text-sm font-medium text-white">Mark Permanently. Trace Completely.</p>
          <p className="max-w-sm text-sm">
            {siteConfig.legalName} designs and manufactures industrial laser
            marking, engraving, welding, cutting and traceability systems —
            Made in India, installed across industries.
          </p>

          <ul className="flex flex-col gap-2 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
              {siteConfig.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
              <a href={`tel:${siteConfig.phoneNumbers[0].replace(/\s/g, "")}`} className="hover:text-white">
                {siteConfig.phoneNumbers.join(" / ")}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
              <a href={`mailto:${siteConfig.emails[0]}`} className="hover:text-white">
                {siteConfig.emails.join(" / ")}
              </a>
            </li>
          </ul>

          <div className="flex gap-2">
            {siteConfig.socialLinks.linkedin ? (
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kaizen Laser on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-premium hover:border-white hover:text-white"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            ) : null}
            {siteConfig.socialLinks.youtube ? (
              <a
                href={siteConfig.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kaizen Laser on YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-premium hover:border-white hover:text-white"
              >
                <YouTubeIcon className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.heading}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
                {group.heading}
              </h2>
              <ul className="mt-3 flex flex-col gap-2 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container-page flex flex-col gap-2 border-t border-white/10 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {siteConfig.legalName}. All rights reserved.
        </p>
        <p>Proudly Made in India.</p>
      </div>
    </footer>
  );
}
