// Site information architecture. The top-level structure (which sections exist,
// what's grouped under "Resources") is a static IA decision, but the Products
// mega-menu's contents are exactly the data `getProductSeries()`/`getProducts()`
// will return once Phase 8 wires a real CMS adapter — this file is the
// placeholder for that, not a parallel source of truth to keep in sync by hand.

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  heading: string;
  links: NavLink[];
}

export interface MegaMenu {
  label: string;
  groups: NavGroup[];
}

export const PRODUCTS_MENU: MegaMenu = {
  label: "Products",
  groups: [
    {
      heading: "Kaizen Standard Series",
      links: [
        { label: "Pluto", href: "/products/pluto-laser-marking-machine", description: "Entry fiber laser marking machine" },
        { label: "Venus", href: "/products/venus-laser-marking-machine", description: "Mid-range fiber laser marking machine" },
        { label: "Neptune", href: "/products/neptune-laser-marking-machine", description: "High-power fiber laser marking machine" },
      ],
    },
    {
      heading: "Standalone Systems",
      links: [
        { label: "Mercury", href: "/products/mercury-laser-marking-machine", description: "Compact desktop marking system" },
        { label: "Jupiter", href: "/products/jupiter-laser-marking-machine", description: "Heavy-duty industrial marking system" },
        { label: "Mars", href: "/products/mars-dot-peen-marking-machine", description: "Dot peen marking machine" },
      ],
    },
    {
      heading: "Katakshi Series",
      links: [
        { label: "Kai-Weld", href: "/products/kai-weld-laser-welding", description: "Laser welding systems" },
        { label: "Kai-Cut", href: "/products/kai-cut-laser-cutting", description: "Laser cutting systems" },
        { label: "Kai-Clean", href: "/products/kai-clean-laser-cleaning", description: "Laser cleaning systems" },
      ],
    },
  ],
};

export const RESOURCES_MENU: MegaMenu = {
  label: "Resources",
  groups: [
    {
      heading: "Learn more",
      links: [
        { label: "Case Studies", href: "/case-studies", description: "Real deployments and results" },
        { label: "Gallery", href: "/gallery", description: "Sample marking and engraving work" },
        { label: "Downloads", href: "/downloads", description: "Brochures and datasheets" },
        { label: "Blog", href: "/blog", description: "Articles on laser marking & traceability" },
        { label: "FAQ", href: "/faq", description: "Common questions, answered" },
      ],
    },
  ],
};

export const PRIMARY_NAV_LINKS: NavLink[] = [
  { label: "Applications", href: "/applications" },
  { label: "Industries", href: "/industries" },
  { label: "Traceability", href: "/traceability" },
  { label: "About", href: "/about" },
];

export const FOOTER_LINK_GROUPS: NavGroup[] = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Products",
    links: PRODUCTS_MENU.groups.flatMap((group) => group.links),
  },
  {
    heading: "Resources",
    links: [
      { label: "Gallery", href: "/gallery" },
      { label: "Downloads", href: "/downloads" },
      { label: "FAQ", href: "/faq" },
      { label: "Search", href: "/search" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];
