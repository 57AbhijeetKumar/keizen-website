import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Site Under Maintenance | Kaizen Laser and Automation",
  description: "Our website is currently under maintenance. Please contact us directly.",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="bg-white rounded-2xl px-6 py-4 shadow-sm">
            <Image
              src="/logo.png"
              alt="Kaizen Laser and Automation"
              width={240}
              height={80}
              className="h-12 w-auto"
              priority
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold text-gray-900">
              Site Under Maintenance
            </h1>
            <p className="text-gray-500 leading-relaxed">
              We are currently performing scheduled maintenance on our website.
              We will be back online shortly.
            </p>
            <p className="text-gray-500 leading-relaxed">
              In the meantime, you can still reach us directly:
            </p>
          </div>

          {/* Contact options */}
          <div className="w-full flex flex-col gap-3">
            <a
              href="tel:+917906613074"
              className="flex items-center justify-center gap-3 w-full rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 shadow-sm hover:border-gray-300 hover:text-gray-900 transition-colors"
            >
              <Phone className="h-4 w-4 text-gray-400" />
              +91 79066 13074
            </a>
            <a
              href="tel:+917719966792"
              className="flex items-center justify-center gap-3 w-full rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 shadow-sm hover:border-gray-300 hover:text-gray-900 transition-colors"
            >
              <Phone className="h-4 w-4 text-gray-400" />
              +91 77199 66792
            </a>
            <a
              href="mailto:info@kaizenlaser.in"
              className="flex items-center justify-center gap-3 w-full rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 shadow-sm hover:border-gray-300 hover:text-gray-900 transition-colors"
            >
              <Mail className="h-4 w-4 text-gray-400" />
              info@kaizenlaser.in
            </a>
          </div>

          <p className="text-xs text-gray-400">
            Kaizen Laser and Automation — Noida, Uttar Pradesh
          </p>
        </div>
      </body>
    </html>
  );
}
