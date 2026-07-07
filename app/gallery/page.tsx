import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { GalleryGrid } from "@/components/content/gallery-grid";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Gallery | Kaizen Laser",
  description: "Real installations, marking samples and machines from Kaizen Laser and Automation.",
  path: "/gallery",
});

const INSTALL_IMAGES = [
  { url: "/images/real/installs/install-spm-customer.jpg", alt: "Kaizen SPM laser marking machine installed at customer production site — white cabinet with Mitsubishi HMI and operator workstations" },
  { url: "/images/real/installs/install-mercury-customer.jpg", alt: "Kaizen Mercury enclosed laser marking machine installed at customer electronics production facility" },
  { url: "/images/real/installs/install-desk-laser.jpg", alt: "Kaizen laser marking machine with S&A industrial chiller installed and running at customer site" },
];

const MARKING_IMAGES = [
  { url: "/images/real/marking-sample-1.webp", alt: "Laser-marked QR code and serial number on a metal part" },
  { url: "/images/real/marking-sample-2.webp", alt: "Laser-marked data matrix and part number on metal" },
  { url: "/images/real/marking-sample-3.webp", alt: "Laser-marked part code on a metal component" },
  { url: "/images/real/marking-sample-4.webp", alt: "Laser-marked barcode and lot number on a metal surface" },
  { url: "/images/real/marking-sample-5.webp", alt: "Laser-engraved identification code on turned metal part" },
];

const WORKSHOP_IMAGES = [
  { url: "/images/real/team-machines.jpg", alt: "Kaizen Laser team with a batch of 8 Pluto laser marking machines ready for dispatch from the Noida manufacturing unit" },
  { url: "/images/real/dispatch-crate.jpg", alt: "Kaizen laser machine packed in wooden crate marked Fragile — dispatched via truck for pan-India delivery" },
  { url: "/images/real/exhibition-booth.jpg", alt: "Kaizen Mercury laser marking machine on display at industry exhibition — Kaizen Laser And Automation booth" },
];

const CONVEYOR_IMAGES = [
  { url: "/images/real/conveyors/conveyor-1.webp", alt: "Kaizen incline belt conveyor with motor drive" },
  { url: "/images/real/conveyors/conveyor-2.webp", alt: "Kaizen roller conveyor" },
  { url: "/images/real/conveyors/conveyor-3.webp", alt: "Kaizen chain conveyor system" },
];

const JIG_IMAGES = [
  { url: "/images/real/jigs/jig-1.webp", alt: "Kaizen precision metal jig for production line" },
  { url: "/images/real/jigs/jig-2.webp", alt: "Kaizen custom fixture for manufacturing" },
  { url: "/images/real/jigs/jig-3.webp", alt: "Kaizen jig and fixture — green clamping system" },
];

export default function GalleryPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Gallery"
        title="Machines, installations and real marking samples"
        description="Real photos from Kaizen Laser's manufacturing unit, customer installations, and marking output across industries."
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }]}
      />

      <section className="container-page py-16 sm:py-20">
        <h2 className="text-section font-heading font-semibold mb-8">Customer Installations</h2>
        <GalleryGrid images={INSTALL_IMAGES} />
      </section>

      <section className="container-page py-16 sm:py-20 border-t border-border">
        <h2 className="text-section font-heading font-semibold mb-8">Marking Samples</h2>
        <GalleryGrid images={MARKING_IMAGES} />
      </section>

      <section className="container-page py-16 sm:py-20 border-t border-border">
        <h2 className="text-section font-heading font-semibold mb-8">Our Workshop & Dispatch</h2>
        <GalleryGrid images={WORKSHOP_IMAGES} />
      </section>

      <section className="container-page py-16 sm:py-20 border-t border-border">
        <h2 className="text-section font-heading font-semibold mb-8">Material Handling Conveyors</h2>
        <GalleryGrid images={CONVEYOR_IMAGES} />
      </section>

      <section className="container-page py-16 sm:py-20 border-t border-border">
        <h2 className="text-section font-heading font-semibold mb-8">Jigs &amp; Fixtures</h2>
        <GalleryGrid images={JIG_IMAGES} />
      </section>
    </main>
  );
}
