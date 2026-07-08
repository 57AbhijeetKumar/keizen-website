import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { BackToTop } from "@/components/shared/back-to-top";
import { AiChat } from "@/components/shared/ai-chat";
import { siteConfig, siteMeta } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo/metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  robots: { index: true, follow: true },
  ...buildMetadata({
    title: "Kaizen Laser | Precision Laser Marking & Engraving Systems",
    description: siteMeta.description,
    path: "/",
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/* Makes every Framer Motion animation site-wide respect the OS-level
            prefers-reduced-motion setting — the global CSS rule in globals.css
            only covers CSS transitions/animations, not Framer Motion's own
            JS-driven ones (AnimatedSection, StatsCounter, etc.). */}
        <MotionConfig reducedMotion="user">
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton phoneNumber={siteConfig.whatsappNumber} />
          <AiChat />
          <BackToTop />
        </MotionConfig>
      </body>
    </html>
  );
}
