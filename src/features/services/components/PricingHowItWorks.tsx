import Image from "next/image";
import { Container } from "@/components/ui";
import { PRICING_STEPS } from "../data";

export function PricingHowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3ea] pb-4 pt-16 lg:pb-6 lg:pt-24">
      {/* Top left — rings + cartoon cat (same as Meet The Team) */}
      <div className="pointer-events-none absolute left-4 top-8 z-0 sm:left-6 sm:top-10 lg:left-12 lg:top-12">
        <Image
          src="/rings-orange.png"
          alt=""
          width={160}
          height={160}
          className="absolute -left-2 -top-4 h-auto w-24 object-contain opacity-80 lg:w-32"
          aria-hidden
        />
        <Image
          src="/categories-cartoon-cat.png"
          alt=""
          width={120}
          height={120}
          className="relative z-10 h-auto w-16 object-contain lg:w-20"
          aria-hidden
        />
      </div>

      {/* Bottom right — faint stripes */}
      <Image
        src="/why-choose-stripes.png"
        alt=""
        width={180}
        height={180}
        className="pointer-events-none absolute -bottom-8 -right-8 z-0 h-auto w-40 object-contain opacity-[0.08] mix-blend-multiply sm:w-48 lg:-bottom-6 lg:-right-4 lg:w-56"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4a84b]">
            How Pricing Works
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#112239] sm:text-4xl lg:text-5xl">
            Simple, transparent, no surprise fees.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[#112239]/10">
          {PRICING_STEPS.map((step) => (
            <div key={step.title} className="px-4 text-center md:px-8 lg:px-10">
              <h3 className="font-serif text-lg font-bold text-[#112239]">
                {step.title}
              </h3>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-[#112239]/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-1.5 lg:mt-16">
          <div className="h-1 w-16 rounded-full bg-[#d4a84b]" />
          <div className="h-1 w-1.5 rounded-full bg-[#d4a84b]/40" />
          <div className="h-1 w-1.5 rounded-full bg-[#d4a84b]/40" />
          <div className="h-1 w-1.5 rounded-full bg-[#d4a84b]/40" />
        </div>
      </Container>
    </section>
  );
}
