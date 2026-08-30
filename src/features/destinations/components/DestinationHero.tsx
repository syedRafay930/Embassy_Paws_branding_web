import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";

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
    <section className="relative flex w-full flex-col overflow-hidden rounded-b-[2rem] bg-gold pt-24 sm:rounded-b-[2.5rem] lg:block lg:pt-32">
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/5 to-transparent" />

      {/* Background Watermark Paws */}
      <PawIcon className="absolute -left-12 -top-10 z-0 h-64 w-64 -rotate-12 text-black/10 sm:h-80 sm:w-80 lg:-left-16 lg:-top-16 lg:h-[28rem] lg:w-[28rem]" />
      <PawIcon className="absolute bottom-24 left-[42%] z-0 hidden h-10 w-10 text-black/25 lg:block" />

      <Container className="relative z-20 shrink-0">
        <div className="max-w-xl pb-4 pt-4 sm:pb-8 sm:pt-10 lg:pb-36 lg:pt-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
            <Link href="/" className="transition hover:text-white">Home</Link>
            {" / "}
            Destinations
          </p>

          <h1 className="mt-4 font-serif text-[2.5rem] font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[4rem]">
            100+ Routes, Every
            <br />
            Continent Covered
          </h1>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/90 sm:text-base lg:mt-6">
            Seamless pet relocations to new places because every step networks, vet checks to airport forms sorted.
          </p>
        </div>
      </Container>

      {/* Hero Image - Attached to bottom right */}
      <div className="relative z-10 mt-auto ml-auto w-[85%] max-w-[420px] sm:w-[70%] sm:max-w-[500px] lg:absolute lg:bottom-0 lg:right-0 lg:w-[50%] lg:max-w-[900px]">
        <Image
          src="/destinations/hero-dog-bag.png" 
          alt="Person carrying dog in a travel bag"
          width={1000}
          height={800}
          className="h-auto w-full object-contain object-right-bottom drop-shadow-lg"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>
    </section>
  );
}