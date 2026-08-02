"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui";
import { cn } from "@/utils/cn";

const PET_TYPES = [
  "Dog",
  "Cat",
  "Rabbit",
  "Bird",
  "Small Mammal",
  "Other",
] as const;

export function AssessmentSection() {
  const [selectedPet, setSelectedPet] = useState<string>("Dog");
  // Progress state for the interactive slider
  const [progress, setProgress] = useState<number>(28);

  return (
    <section className="relative overflow-hidden bg-navy-deep py-16 sm:py-20 lg:py-24">
      <Container className="relative z-10">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
          {/* Left: quiz */}
          <div className="relative max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
              Check My Pet&apos;s Readiness
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold leading-[1.2] text-white sm:text-4xl lg:text-[2.75rem]">
              Is your pet ready to travel?
              <br />
              Find out in 90 seconds.
            </h2>

            {/* Interactive Progress Bar */}
            <div className="relative mt-8 max-w-md py-4">
              <div className="h-[3px] w-full rounded-full bg-white/90">
                <div
                  className="relative h-full rounded-full bg-gold"
                  style={{ width: `${progress}%` }}
                >
                  <span className="absolute -right-5 top-1/2 z-10 -translate-y-1/2">
                    <Image
                      src="/Figure.png"
                      alt=""
                      width={56}
                      height={56}
                      className="pointer-events-none h-11 w-11 object-contain drop-shadow-md sm:h-12 sm:w-12"
                      aria-hidden
                    />
                  </span>
                </div>
              </div>
              
              {/* Invisible Native Range Input for seamless dragging */}
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
                className="absolute inset-0 z-20 h-full w-full cursor-grab opacity-0 active:cursor-grabbing"
                aria-label="Adjust progress"
              />
            </div>

            {/* Beige card */}
            <div className="relative mt-10 overflow-visible lg:mt-12">
              <div className="relative overflow-visible rounded-[20px] bg-[#f3ebe0] px-6 py-8 shadow-lg sm:px-8 sm:py-10">
                <p className="text-base font-semibold text-navy sm:text-lg">
                  What type of pet are you relocating?
                </p>

                {/* Single line buttons with hidden horizontal scroll */}
                <div className="relative z-10 mt-6 flex flex-nowrap items-center gap-2.5 overflow-x-auto pb-4 pr-16 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {PET_TYPES.map((pet) => {
                    const isActive = selectedPet === pet;
                    return (
                      <button
                        key={pet}
                        type="button"
                        onClick={() => setSelectedPet(pet)}
                        className={cn(
                          "shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition",
                          isActive
                            ? "border-navy bg-navy text-white"
                            : "border-navy/20 bg-white text-navy hover:border-navy/40",
                        )}
                      >
                        {pet}
                      </button>
                    );
                  })}
                </div>

                {/* Bones Graphic */}
                <Image
                  src="/Bones.png"
                  alt=""
                  width={160}
                  height={160}
                  className="pointer-events-none absolute -bottom-10 -right-8 z-20 w-28 object-contain sm:-bottom-14 sm:-right-12 sm:w-40"
                  aria-hidden
                />
              </div>
            </div>
          </div>

          {/* Right: media + copy */}
          <div className="grid grid-cols-[1.15fr_0.85fr] items-start gap-4 sm:gap-5">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl sm:rounded-3xl">
              <Image
                src="/cta-cat.png"
                alt="Planning a trip with a pet and a map"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 55vw, 360px"
                priority
              />
            </div>

            <div className="flex flex-col gap-5 pt-2 sm:pt-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl">
                <Image
                  src="/assessment-pet-carrier.png"
                  alt="Fluffy dog sitting on a pet carrier"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 40vw, 260px"
                />
              </div>

              <p className="text-xs leading-relaxed text-white/80 sm:text-[13px]">
                Every pet has unique travel requirements and considerations. Let
                us know what type of companion you&apos;ll be relocating so we
                can tailor the journey to their specific needs.
              </p>

              {/* Paw Graphic - Sized up and slightly nudged left via padding to center relative to text */}
              <div className="mt-4 flex w-full justify-center pr-10 sm:pr-16 lg:mt-6">
                <Image
                  src="/paw-steps.png"
                  alt=""
                  width={160}
                  height={160}
                  className="pointer-events-none w-32 object-contain opacity-90 sm:w-40"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}