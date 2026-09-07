"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import { FadeIn } from "@/components/ui/animations/FadeIn";

function PawIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <ellipse cx="6.5" cy="7" rx="2.2" ry="2.8" />
      <ellipse cx="12" cy="5.2" rx="2.2" ry="2.8" />
      <ellipse cx="17.5" cy="7" rx="2.2" ry="2.8" />
      <ellipse cx="4.8" cy="12.2" rx="2" ry="2.5" />
      <path d="M12 10.2c-3.2 0-5.6 2.5-5.6 5.1 0 1.9 1.5 3.1 3.2 3.1.9 0 1.6-.3 2.4-.9.8.6 1.5.9 2.4.9 1.7 0 3.2-1.2 3.2-3.1 0-2.6-2.4-5.1-5.6-5.1z" />
    </svg>
  );
}

export function DestinationHero() {
  return (
    <section className="relative grid w-full grid-cols-1 items-end overflow-hidden rounded-b-[2rem] bg-gold pt-24 sm:rounded-b-[2.5rem] lg:block lg:pt-32">
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/5 to-transparent" />

      {/* Background Watermark Paws */}
      <FadeIn direction="right" delay={0.1} className="absolute -left-12 -top-10 z-0 h-64 w-64 -rotate-12 text-black/10 sm:h-80 sm:w-80 lg:-left-16 lg:-top-16 lg:h-[28rem] lg:w-[28rem]">
        <PawIcon className="h-full w-full" />
      </FadeIn>
      <PawIcon className="absolute bottom-24 left-[42%] z-0 hidden h-10 w-10 text-black/25 lg:block" />

      <Container className="relative z-20 col-start-1 row-start-1 shrink-0">
        <div className="max-w-xl pb-12 pt-4 sm:pb-16 sm:pt-10 lg:pb-36 lg:pt-16">
          <FadeIn direction="up" delay={0.2}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
              <Link href="/" className="transition hover:text-white">Home</Link>
              {" / "}
              Destinations
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <h1 className="mt-4 font-serif text-[2.5rem] font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[4rem]">
              100+ Routes, Every
              <br />
              Continent Covered
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/90 sm:text-base lg:mt-6">
              Seamless pet relocations to new places because every step networks, vet checks to airport forms sorted.
            </p>
          </FadeIn>
        </div>
      </Container>

      {/* Hero Image */}
      <FadeIn direction="up" delay={0.5} className="relative z-10 col-start-1 row-start-1 mt-auto w-[95%] max-w-[480px] self-end justify-self-end opacity-30 blur-[2px] sm:w-[80%] sm:max-w-[560px] lg:absolute lg:bottom-0 lg:right-0 lg:w-[50%] lg:max-w-[900px] lg:opacity-100 lg:blur-none">
        {/* Mobile Specific Overlay taake text parheen mein koi mushkil na ho */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-gold via-gold/70 to-transparent lg:hidden" />
        
        <Image
          src="/destinations/hero-dog-bag.png"
          alt="Person carrying dog in a travel bag"
          width={1000}
          height={800}
          className="h-auto w-full object-contain object-right-bottom drop-shadow-lg"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </FadeIn>
    </section>
  );
}