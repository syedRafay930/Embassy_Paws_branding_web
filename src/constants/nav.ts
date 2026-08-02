import { ROUTES } from "./routes";

export type NavItem = {
  label: string;
  href: string;
};

export const MAIN_NAV: NavItem[] = [
  { label: "Service", href: ROUTES.SERVICES },
  { label: "Destinations", href: ROUTES.DESTINATIONS },
  { label: "How It Works", href: ROUTES.HOW_IT_WORKS },
  { label: "About Us", href: ROUTES.ABOUT },
  { label: "Blogs", href: ROUTES.BLOGS },
];

export const FOOTER_QUICK_LINKS: NavItem[] = [
  { label: "Home", href: ROUTES.HOME },
  { label: "About Us", href: ROUTES.ABOUT },
  { label: "Services", href: ROUTES.SERVICES },
  { label: "Reviews", href: ROUTES.REVIEWS },
  { label: "FAQ", href: ROUTES.FAQ },
  { label: "Contact", href: ROUTES.CONTACT },
];

export const FOOTER_SERVICE_LINKS: NavItem[] = [
  { label: "Pet Boarding", href: ROUTES.BOARDING },
  { label: "Pet Relocation", href: ROUTES.RELOCATION },
  { label: "Pet Taxi", href: ROUTES.TAXI },
  { label: "Day Care & Training", href: ROUTES.SERVICES },
  { label: "Vet Support", href: "#features" },
];

export const HERO_HIGHLIGHTS = [
  "Pet Safety",
  "Easy Travel",
  "Global Support",
] as const;
