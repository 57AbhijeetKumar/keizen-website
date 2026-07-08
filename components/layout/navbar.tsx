import Link from "next/link";
import { Phone, Search } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  PRIMARY_NAV_LINKS,
  PRODUCTS_MENU,
  RESOURCES_MENU,
  type MegaMenu,
} from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

// Panel width/columns scale with how many groups the menu actually has, instead of
// a fixed 3-column/640px layout that left Resources (1 group) mostly empty.
const PANEL_LAYOUT_BY_GROUP_COUNT: Record<number, string> = {
  1: "sm:grid-cols-1 sm:w-72",
  2: "sm:grid-cols-2 sm:w-96",
  3: "sm:grid-cols-3 sm:w-[640px]",
};

function MegaMenuPanel({ menu }: { menu: MegaMenu }) {
  const layoutClasses =
    PANEL_LAYOUT_BY_GROUP_COUNT[menu.groups.length] ?? "sm:grid-cols-3 sm:w-[640px]";

  return (
    <div className={`grid grid-cols-1 gap-6 p-4 ${layoutClasses}`}>
      {menu.groups.map((group) => (
        <div key={group.heading}>
          <p className="px-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {group.heading}
          </p>
          <ul className="mt-2 flex flex-col">
            {group.links.map((link) => (
              <li key={link.href}>
                <NavigationMenuLink closeOnClick render={<Link href={link.href} />}>
                  <div>
                    <p className="font-medium text-foreground">{link.label}</p>
                    {link.description ? (
                      <p className="text-xs text-muted-foreground">
                        {link.description}
                      </p>
                    ) : null}
                  </div>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function Navbar() {
  return (
    <header className="glass-panel sticky top-0 z-40 w-full border-b">
      <div className="container-page flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden lg:block" aria-label="Primary">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{PRODUCTS_MENU.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaMenuPanel menu={PRODUCTS_MENU} />
                </NavigationMenuContent>
              </NavigationMenuItem>

              {PRIMARY_NAV_LINKS.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    render={<Link href={link.href} />}
                    className="h-9 rounded-lg px-2.5 py-1.5 text-sm font-medium hover:bg-surface-2"
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuTrigger>{RESOURCES_MENU.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaMenuPanel menu={RESOURCES_MENU} />
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/search"
            aria-label="Search"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-premium hover:text-accent md:flex"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href={`tel:${siteConfig.phoneNumbers[0].replace(/\s/g, "")}`}
            className="hidden items-center gap-1.5 text-sm font-medium text-muted-foreground transition-premium hover:text-accent md:flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phoneNumbers[0]}
          </a>

          {/* WhatsApp icon-only — mobile only (hidden on md+) */}
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^\d]/g, "")}?text=${encodeURIComponent("Hi, I'd like to enquire about your laser marking systems.")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white transition-premium hover:opacity-90 md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>

          {/* WhatsApp with label — desktop only (md+) */}
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^\d]/g, "")}?text=${encodeURIComponent("Hi, I'd like to enquire about your laser marking systems.")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="hidden items-center gap-1.5 rounded-lg bg-[#25D366] px-3 py-1.5 text-sm font-medium text-white transition-premium hover:opacity-90 md:flex"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>

          <Button
            size="lg"
            className="hidden sm:inline-flex"
            nativeButton={false}
            render={<Link href="/contact" />}
          >
            Get a Quote
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
