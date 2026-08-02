import Image from "next/image";
import Link from "next/link";
import { Container, ImagePlaceholder } from "@/components/ui";
import {
  FOOTER_QUICK_LINKS,
  FOOTER_SERVICE_LINKS,
  ROUTES,
} from "@/constants";

export function Footer() {
  return (
    <footer className="bg-cream">
      <div className="bg-gold">
        <Container className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-3 text-sm font-semibold uppercase tracking-wide text-navy">
          {FOOTER_QUICK_LINKS.map((item) => (
            <a key={item.label} href={item.href} className="hover:underline">
              {item.label}
            </a>
          ))}
        </Container>
      </div>

      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link href={ROUTES.HOME}>
            <Image
              src="/Logo.svg"
              alt="Embassy Paws"
              width={163}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Embassy Paws makes every pet journey joyful, safe, and full of love —
            from boarding to international relocation.
          </p>
          <div className="mt-5 space-y-2 text-sm text-navy">
            <p>
              <span className="font-semibold">Phone:</span> +1 (555) 014-2828
            </p>
            <p>
              <span className="font-semibold">Email:</span> hello@embassypaws.com
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-navy">
            Useful Links
          </h3>
          <ul className="mt-4 space-y-2">
            {FOOTER_QUICK_LINKS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-muted transition hover:text-navy"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-navy">
            Our Services
          </h3>
          <ul className="mt-4 space-y-2">
            {FOOTER_SERVICE_LINKS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-muted transition hover:text-navy"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-navy">
            Follow Us
          </h3>
          <div className="mt-4 flex gap-3">
            {["Fb", "Ig", "X", "Yt"].map((label) => (
              <span
                key={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-xs font-semibold text-white"
                aria-hidden
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </Container>

      <Container className="pb-8">
        <ImagePlaceholder
          label="Footer – group of pets strip"
          className="h-40 w-full sm:h-48"
          rounded="xl"
        />
        <p className="mt-6 text-center text-xs text-muted">
          © {new Date().getFullYear()} Embassy Paws. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
