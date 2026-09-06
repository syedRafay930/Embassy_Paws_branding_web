"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/animations/FadeIn";

export function OurStorySection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3ea] py-10 sm:py-14 lg:py-16 lg:px-20">
      <div className="mx-auto flex w-full max-w-[90rem] flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 xl:gap-20 xl:px-10">
        
        {/* Left — text */}
        <div className="relative w-full shrink-0 lg:w-[min(100%,26rem)] xl:w-[28rem]">
          <FadeIn direction="up">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4a84b]">
              Our Story
            </p>

            <h2 className="relative z-10 mt-3 text-[1.85rem] font-bold leading-[1.2] text-[#112239] sm:text-4xl lg:text-[2.4rem]">
              Started by pet parents who couldn&apos;t find a service they
              trusted.
            </h2>
          </FadeIn>

          {/* Floating paws — in the gap, near the heading */}
          <Image
            src="/why-choose-paws.png"
            alt=""
            width={140}
            height={100}
            className="pointer-events-none absolute right-10 top-10 z-0 h-auto w-16 object-contain opacity-80 sm:w-20 lg:-right-40 lg:top-20 lg:w-24 xl:-right-16"
            aria-hidden
          />

          <FadeIn direction="up" delay={0.2}>
            <p className="relative z-10 mt-5 text-sm leading-relaxed text-[#5c6b7a] sm:text-[15px]">
              Pet-Travels began in 2019 after our founders struggled to relocate
              their own dog internationally — juggling airline rules, customs
              paperwork, and conflicting advice from three different agencies.
            </p>

            <p className="relative z-10 mt-4 text-sm leading-relaxed text-[#5c6b7a] sm:text-[15px]">
              Today we&apos;ve grown into a team of coordinators, vets, and
              logistics specialists across 87+ countries, but the promise is the
              same one we made to our own dog: never leave a detail to chance.
            </p>
          </FadeIn>
        </div>

        {/* Right — image fills remaining width */}
        <FadeIn direction="left" delay={0.3} className="relative w-full min-w-0 flex-1">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] lg:aspect-[2/1] xl:rounded-[3rem]">
            <Image
              src="/c12ec191ca15a4f007033faa68264c57ac00439e.jpg"
              alt="Person holding a cat's paw"
              fill
              className="object-cover object-[center_28%]"
              sizes="(max-width: 1024px) 90vw, 80vw"
              priority
            />
          </div>

          {/* Circular cream cutout biting the image corner */}
          <div
            className="absolute left-0 top-0 z-10 h-[5.5rem] w-[5.5rem] -translate-x-[28%] -translate-y-[28%] rounded-full bg-[#f7f3ea] sm:h-[6.5rem] sm:w-[6.5rem] lg:h-[7.25rem] lg:w-[7.25rem]"
            aria-hidden
          />

          {/* Stamp centered in the cutout */}
          <Image
            src="/know-us-stamp.png"
            alt=""
            width={160}
            height={160}
            className="pointer-events-none absolute left-0 top-0 z-20 h-[4.25rem] w-[4.25rem] -translate-x-[18%] -translate-y-[18%] object-contain sm:h-[5rem] sm:w-[5rem] lg:h-[5.75rem] lg:w-[5.75rem]"
            aria-hidden
          />
        </FadeIn>

      </div>
    </section>
  );
}