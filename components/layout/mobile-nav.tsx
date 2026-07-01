"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Logo } from "@/components/layout/logo";
import {
  PRIMARY_NAV_LINKS,
  PRODUCTS_MENU,
  RESOURCES_MENU,
  type MegaMenu,
} from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

function MobileMegaMenu({ menu }: { menu: MegaMenu }) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg px-2 py-2.5 text-left text-sm font-medium text-foreground hover:bg-surface-2">
        {menu.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="flex flex-col gap-4 px-2 py-2">
          {menu.groups.map((group) => (
            <div key={group.heading}>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {group.heading}
              </p>
              <ul className="mt-1 flex flex-col">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <SheetClose
                      nativeButton={false}
                      render={<Link href={link.href} />}
                      className="block rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-surface-2 hover:text-foreground"
                    >
                      {link.label}
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" aria-label="Open menu" />}
        className="lg:hidden"
      >
        <Menu className="h-5 w-5" aria-hidden="true" />
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-sm">
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <Logo />
        </SheetHeader>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-2" aria-label="Primary">
          <MobileMegaMenu menu={PRODUCTS_MENU} />
          {PRIMARY_NAV_LINKS.map((link) => (
            <SheetClose
              key={link.href}
              nativeButton={false}
              render={<Link href={link.href} />}
              className="rounded-lg px-2 py-2.5 text-sm font-medium text-foreground hover:bg-surface-2"
            >
              {link.label}
            </SheetClose>
          ))}
          <MobileMegaMenu menu={RESOURCES_MENU} />
        </nav>

        <SheetFooter className="gap-3 border-t border-border">
          <Button size="lg" nativeButton={false} render={<Link href="/contact" />}>
            Get a Quote
          </Button>
          <a
            href={`tel:${siteConfig.phoneNumbers[0].replace(/\s/g, "")}`}
            className="flex items-center justify-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phoneNumbers[0]}
          </a>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
