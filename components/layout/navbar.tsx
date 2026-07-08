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
