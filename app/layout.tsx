import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AiChat } from "@/components/shared/ai-chat";
import { BackToTop } from "@/components/shared/back-to-top";
import { siteConfig, siteMeta } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo/metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Only used in product spec tables — don't preload it on every page.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        {children}
        <Footer />
        <AiChat />
        <BackToTop />
      </body>
    </html>
  );
}
