"use client";

import { Button, Container } from "@/components/ui";
import { HERO_HIGHLIGHTS, ROUTES } from "@/constants";

function PawIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 text-gold"
      fill="currentColor"
      aria-hidden
    >
      <ellipse cx="6.5" cy="7" rx="2.2" ry="2.8" />
      <ellipse cx="12" cy="5.2" rx="2.2" ry="2.8" />
      <ellipse cx="17.5" cy="7" rx="2.2" ry="2.8" />
      <ellipse cx="4.8" cy="12.2" rx="2" ry="2.5" />
      <path d="M12 10.2c-3.2 0-5.6 2.5-5.6 5.1 0 1.9 1.5 3.1 3.2 3.1.9 0 1.6-.3 2.4-.9.8.6 1.5.9 2.4.9 1.7 0 3.2-1.2 3.2-3.1 0-2.6-2.4-5.1-5.6-5.1z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-navy">
      <video
        className="absolute inset-0 h-full w-full scale-x-[-1] object-cover"
        src="/hero_section.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-label="Embassy Paws hero background video"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />

      <Container className="relative flex min-h-[100svh] flex-col justify-center pb-28 pt-32">
        <div className="animate-fade-up max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/90 sm:text-[13px]">
            Greetings from Pet-Travels
          </p>

          <h1 className="mt-4 font-serif text-[2.1rem] font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.65rem]">
            <span className="block sm:whitespace-nowrap">
              Travel The World Together
            </span>
            <span className="block sm:whitespace-nowrap">With Your Pet</span>
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/85 sm:text-base">
            <span className="block lg:whitespace-nowrap">
              Safe, comfortable, and stress-free travel solutions designed for
              you and your furry
            </span>
            <span className="block">companion.</span>
          </p>

          <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            {HERO_HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-white"
              >
                <PawIcon />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button
              href={ROUTES.CONTACT}
              variant="cream"
              size="lg"
              sparkle
              rounded="xl"
            >
              Plan Your Journey
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-4 flex gap-3 sm:left-6 lg:left-8">
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur transition hover:bg-black/75"
            aria-label="Previous slide"
          >
            <span aria-hidden className="text-lg leading-none">
              ←
            </span>
          </button>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur transition hover:bg-black/75"
            aria-label="Next slide"
          >
            <span aria-hidden className="text-lg leading-none">
              →
            </span>
          </button>
        </div>
      </Container>
    </section>
  );
}
