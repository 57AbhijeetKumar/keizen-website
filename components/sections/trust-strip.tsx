import { MapPin, ShieldCheck, Wrench, Zap } from "lucide-react";

const ITEMS = [
  {
    icon: Wrench,
    label: "Made in India",
    desc: "Designed & manufactured at Noida Sector-63",
  },
  {
    icon: MapPin,
    label: "Pan-India Service",
    desc: "Delhi NCR · Pune · Bengaluru · Chennai · Jamshedpur",
  },
  {
    icon: Zap,
    label: "Same-Day Response",
    desc: "Critical breakdown support in all service cities",
  },
  {
    icon: ShieldCheck,
    label: "Class 1 Laser Safe",
    desc: "Enclosed systems — operators need no PPE",
  },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface-2">
      <div className="container-page">
        <div className="grid grid-cols-2 divide-x divide-border lg:grid-cols-4">
          {ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 px-4 py-5 text-center sm:flex-row sm:items-start sm:text-left sm:px-6 sm:py-6"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                <item.icon className="h-5 w-5 text-accent" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{item.label}</p>
                <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
