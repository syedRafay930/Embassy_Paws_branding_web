import Image from "next/image";
import { Button, Container } from "@/components/ui";
import { ROUTES } from "@/constants";
import { WHY_CHOOSE_POINTS } from "../data";

export function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3ea] py-16 lg:py-24">
      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — image composition with gap; stripes overlap top of both photos */}
        <div className="relative mx-auto flex w-full max-w-lg items-end justify-center gap-5 pt-8 sm:gap-7 sm:pt-10 lg:mx-0 lg:max-w-none">
          {/* Stripes — sit on top of both pictures */}
          <Image
            src="/why-choose-stripes.png"
            alt=""
            width={220}
            height={220}
            className="pointer-events-none absolute left-1/2 top-0 z-20 h-32 w-32 -translate-x-1/2 object-contain mix-blend-multiply opacity-95 sm:h-40 sm:w-40 lg:h-44 lg:w-44"
            aria-hidden
          />

          {/* Image 1 — puppies */}
          <div className="relative z-10 w-[46%] shrink-0 pt-6">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-lg">
              <Image
                src="/why-choose-puppies.jpg"
                alt="Woman holding two French Bulldog puppies"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 45vw, 260px"
              />
            </div>
          </div>

          {/* Image 2 — cat, slightly higher, no border */}
          <div className="relative z-10 mb-8 w-[46%] shrink-0 sm:mb-12">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-lg">
              <Image
                src="/why-choose-cat.jpg"
                alt="Orange cat being gently petted"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 45vw, 260px"
              />
            </div>
          </div>

          {/* Pet Friendly badge — between images */}
          <Image
            src="/why-choose-badge.png"
            alt="Pet Friendly"
            width={120}
            height={120}
            className="absolute left-1/2 top-[52%] z-30 h-20 w-20 -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-md sm:h-24 sm:w-24 lg:h-28 lg:w-28"
          />
        </div>

        {/* Right — text & features */}
        <div className="relative pb-32 lg:pb-20">
          <Image
            src="/why-choose-paws.png"
            alt=""
            width={120}
            height={80}
            className="pointer-events-none absolute -right-2 -top-4 z-0 h-auto w-20 object-contain mix-blend-multiply opacity-90 sm:-right-4 sm:w-28 lg:right-0"
            aria-hidden
          />

          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            Why Choose Us
          </p>
          <h2 className="mt-3 max-w-md font-serif text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-[2.6rem]">
            Why Pet Parents Trust Us With Every Journey
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
            Every trip is planned with care, clarity, and compassion — so you
            and your pet can travel with confidence from the first step to the
            final destination.
          </p>

          <ul className="mt-8 space-y-3">
            {WHY_CHOOSE_POINTS.map((point, index) => (
              <li
                key={`${point}-${index}`}
                className="flex items-start gap-3 text-sm font-medium text-navy sm:text-base"
              >
                <span
                  className="mt-1.5 h-2.5 w-2.5 shrink-0 bg-navy"
                  aria-hidden
                />
                {point}
              </li>
            ))}
          </ul>

          <div className="relative mt-8 inline-block">
            <Button
              href={ROUTES.ABOUT}
              variant="navy"
              rounded="xl"
              sparkle
              className="normal-case tracking-normal font-serif"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Container>

      {/* Jumping dog — lower body covered by gold section below */}
      <Image
        src="/why-choose-jumping-dog.png"
        alt=""
        width={320}
        height={280}
        className="pointer-events-none absolute bottom-0 right-0 z-[5] h-auto w-44 object-contain sm:w-56 lg:right-2 lg:w-64 xl:right-6 xl:w-72"
        aria-hidden
        priority
      />
    </section>
  );
}
