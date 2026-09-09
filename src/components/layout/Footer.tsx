import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import { ROUTES } from "@/constants";

const CONTACT_ITEMS = [
  {
    label: "Babylon, NY",
    href: "https://maps.app.goo.gl/K22wiuM9awwtM4Ht9",
    // href: "https://maps.google.com/?q=58+East+Madison+Street+Baltimore+MD",
    icon: "home" as const,
  },
  {
    label: "+1 (843) 232-6303",
    href: "tel:+18432326303",
    icon: "phone" as const,
  },
  {
    label: "info@embassypaws.com",
    href: "mailto:info@embassypaws.com",
    icon: "mail" as const,
  },
  {
    label: "www.embassypaws.com",
    href: "https://www.embassypaws.com",
    icon: "globe" as const,
  },
] as const;

const QUICK_LINKS = [
  { label: "About Us", href: ROUTES.ABOUT },
  { label: "Blog", href: ROUTES.BLOGS },
] as const;

const HELP_DESK_LINKS = [
  { label: "Destination Guides", href: ROUTES.DESTINATIONS },
  { label: "Services", href: ROUTES.SERVICES },
] as const;

const SOCIALS = [
  { label: "Instagram", href: "#", icon: "instagram" as const },
  { label: "Facebook", href: "#", icon: "facebook" as const },
  { label: "X", href: "#", icon: "x" as const },
  { label: "YouTube", href: "#", icon: "youtube" as const },
] as const;

function ContactIcon({ name }: { name: (typeof CONTACT_ITEMS)[number]["icon"] }) {
  const common = {
    width: 14,
    height: 14,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "home":
      return (
        <svg {...common}>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 10v10h14V10" />
          <path d="M10 20v-6h4v6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a15 15 0 0 1 0 18" />
          <path d="M12 3a15 15 0 0 0 0 18" />
        </svg>
      );
  }
}

function SocialIcon({ name }: { name: (typeof SOCIALS)[number]["icon"] }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true as const,
  };

  switch (name) {
    case "instagram":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.75">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
        </svg>
      );
    case "x":
      return (
        <svg {...common}>
          <path d="M18.9 2H21l-6.6 7.5L22 22h-6.2l-4.9-6.4L5.7 22H3.6l7-8L2 2h6.3l4.4 5.8L18.9 2zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20z" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <path d="M23 12.2s0-3.4-.4-5c-.2-1.1-1.1-2-2.2-2.2C18.2 4.5 12 4.5 12 4.5s-6.2 0-8.4.5c-1.1.2-2 1.1-2.2 2.2C1 8.8 1 12.2 1 12.2s0 3.4.4 5c.2 1.1 1.1 2 2.2 2.2 2.2.5 8.4.5 8.4.5s6.2 0 8.4-.5c1.1-.2 2-1.1 2.2-2.2.4-1.6.4-5 .4-5zM9.8 15.5V8.9l6.3 3.3-6.3 3.3z" />
        </svg>
      );
  }
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white">
      {/* Decorative: bone + sparkles — top left */}
      <Image
        src="/bone-sparkle.png"
        alt=""
        width={120}
        height={90}
        className="pointer-events-none absolute left-4 top-28 z-0 h-auto w-16 object-contain sm:left-8 sm:top-32 sm:w-20 lg:left-14 lg:top-36 lg:w-24"
        aria-hidden
      />

      {/* Decorative: rings — bottom left, behind pets */}
      <Image
        src="/rings-orange.png"
        alt=""
        width={180}
        height={180}
        className="pointer-events-none absolute bottom-24 left-2 z-0 h-auto w-28 object-contain opacity-90 sm:bottom-32 sm:left-6 sm:w-36 lg:bottom-36 lg:left-12 lg:w-44"
        aria-hidden
      />

      {/* Decorative: paw trail — middle/bottom right */}
      <Image
        src="/paws-orange.png"
        alt=""
        width={160}
        height={160}
        className="pointer-events-none absolute bottom-32 right-4 z-0 h-auto w-20 object-contain sm:bottom-40 sm:right-10 sm:w-24 lg:right-20 lg:w-28"
        aria-hidden
      />

      <Container className="relative z-10 pt-8 sm:pt-10 lg:pt-12">
        {/* Gold contact pill */}
        <div className="rounded-3xl bg-[#d4a84b] px-4 py-4 sm:rounded-full sm:px-6 sm:py-3.5 lg:px-8">
          <ul className="flex flex-col items-center gap-3 text-center sm:flex-row sm:flex-wrap sm:justify-between sm:gap-x-4 sm:gap-y-2 lg:flex-nowrap lg:justify-around">
            {CONTACT_ITEMS.map((item) => (
              <li key={item.label} className="min-w-0">
                <a
                  href={item.href}
                  className="inline-flex max-w-full items-center gap-2 text-[11px] font-medium text-white transition hover:text-white/85 sm:text-xs"
                  target={
                    item.icon === "globe" || item.icon === "home"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.icon === "globe" || item.icon === "home"
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <span className="shrink-0 opacity-95">
                    <ContactIcon name={item.icon} />
                  </span>
                  <span className="truncate">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Main grid */}
        <div className="mt-12 grid gap-10 pb-4 sm:mt-14 sm:gap-12 lg:mt-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12 lg:pb-6">
          {/* Brand */}
          <div className="relative max-w-sm">
            <Link href={ROUTES.HOME} className="inline-block">
              <Image
                src="/footer-logo.svg"
                alt="Embassy Paws — International Pet Relocation Concierge"
                width={200}
                height={72}
                className="h-14 w-auto sm:h-16"
                priority
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-[#112239]/75 sm:text-[15px]">
              The world&apos;s leading luxury international pet relocation
              service. Your pet is family — we treat them that way.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[#112239] sm:text-xl">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-[#112239]/70 transition hover:text-[#112239]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Desk */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[#112239] sm:text-xl">
              Help Desk
            </h3>
            <ul className="mt-4 space-y-2.5">
              {HELP_DESK_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-[#112239]/70 transition hover:text-[#112239]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <ul className="flex flex-wrap items-center gap-3 lg:justify-end">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#112239]/30 text-[#112239] transition hover:border-[#112239] hover:bg-[#112239] hover:text-white"
                  >
                    <SocialIcon name={social.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Animals — flush bottom anchor */}
      <div className="relative z-10 w-full pt-4 sm:pt-6">
        <Image
          src="/footer-pets.png"
          alt="Embassy Paws family of pets"
          width={1600}
          height={420}
          className="mx-auto h-auto w-full max-w-5xl object-contain object-bottom sm:max-w-6xl"
          sizes="100vw"
          priority
        />
      </div>
    </footer>
  );
}