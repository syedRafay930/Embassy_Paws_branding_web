"use client";

import Image from "next/image";
import { Button, Container } from "@/components/ui";
import { ROUTES } from "@/constants";
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/ui/animations/Stagger";
import { AnimatedCounter } from "@/components/ui/animations/AnimatedCounter";

const STATS = [
  { value: "120+", label: "Successful Journeys" },
  { value: "15+", label: "Pet Travel Experts" },
  { value: "20k", label: "Happy Pet Parents" },
] as const;

export function KnowUsSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f7f3ea] py-16 sm:py-20 lg:py-24"
    >
      <Image
        src="/know-us-paw-bg.png"
        alt=""
        width={320}
        height={320}
        className="pointer-events-none absolute left-[30%] top-6 z-0 h-[220px] w-[220px] object-contain opacity-90 sm:h-[280px] sm:w-[280px] lg:left-[35%] lg:top-8 lg:h-[340px] lg:w-[340px]"
        aria-hidden
      />

      <Container className="relative z-10">
        <FadeIn direction="up" className="relative z-20 w-full">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">
            Know Us
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-gold sm:text-4xl lg:text-[2.75rem]">
            Making Every Pet Journey <br />
            Joyful, Safe, and Full of Love
          </h2>
        </FadeIn>

        <div className="mt-12 grid items-start gap-10 lg:mt-16 lg:grid-cols-[1fr_1.1fr_1fr] lg:gap-10 xl:gap-12">
          
          {/* ================= LEFT COLUMN ================= */}
          <FadeIn direction="right" delay={0.2} className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
              <Image
                src="/know-us-mountain.png"
                alt="Pet parents with dogs overlooking a mountain landscape"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 320px"
              />
            </div>
            
            <div className="absolute -left-1 -top-1 z-10 h-14 w-20 rounded-br-[1.5rem] bg-[#f7f3ea] sm:h-16 sm:w-24 lg:h-20 lg:w-30" />
            
            <Image
              src="/know-us-stamp.png"
              alt=""
              width={140}
              height={140}
              className="pointer-events-none absolute -left-4 -top-4 z-20 h-24 w-24 object-contain drop-shadow-md sm:-left-5 sm:-top-5 sm:h-28 sm:w-28 lg:-left-4 lg:-top-8 lg:h-25 lg:w-32"
              aria-hidden
            />
          </FadeIn>

          {/* ================= CENTER COLUMN ================= */}
          <div className="relative z-20 flex flex-col items-start text-left lg:px-2 lg:pt-4">
            <FadeIn direction="up" delay={0.3}>
              <p className="font-serif text-xl font-bold leading-snug text-navy sm:text-[22px]">
                &quot;Creating unforgettable travel moments with comfort, care, and a
                whole lot of love.&quot;
              </p>
              
              <p className="mt-4 max-w-md text-sm leading-relaxed text-navy/60 sm:text-[15px]">
                Traveling with pets isn&apos;t just about reaching a destination — it&apos;s
                about ensuring they feel safe, comfortable, and cared for every
                step of the way. We specialize in creating seamless travel
                experiences for pet parents who want nothing but the best for their
                companions.
              </p>
            </FadeIn>

            {/* Stats Row */}
            <StaggerContainer delayChildren={0.4} className="mt-10 flex w-full flex-nowrap justify-between gap-2 sm:gap-4 lg:gap-6">
              {STATS.map((stat) => (
                <StaggerItem key={stat.label} className="shrink-0">
                  <AnimatedCounter value={stat.value} className="font-serif text-[28px] font-bold text-navy sm:text-[2.5rem]" />
                  <p className="mt-1 text-[11px] font-medium text-gold sm:text-[13px]">
                    {stat.label}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn direction="up" delay={0.6} className="relative mt-10 w-full">
              <Button
                href={ROUTES.ABOUT}
                variant="navy"
                rounded="xl"
                sparkle
                className="px-8 py-3 font-serif text-sm normal-case tracking-normal"
              >
                Read More
              </Button>
              
              <Image
                src="/Bones.png"
                alt=""
                width={100}
                height={80}
                className="pointer-events-none absolute bottom-0 right-0 h-auto w-24 -rotate-12 object-contain opacity-80 sm:w-28 lg:-right-6 lg:bottom-0"
                aria-hidden
              />
            </FadeIn>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <FadeIn direction="left" delay={0.4} className="relative mx-auto mt-8 w-full max-w-sm lg:mx-0 lg:mt-[-80px] lg:max-w-none">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
              <Image
                src="/know-us-beach.png"
                alt="Traveler on a beach with a cat in a backpack"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 320px"
              />
            </div>

            <div className="absolute -left-1 -top-1 z-10 h-14 w-20 rounded-br-[1.5rem] bg-[#f7f3ea] sm:h-16 sm:w-24 lg:h-20 lg:w-32" />
            
            <Image
              src="/know-us-cartoon-dog.png"
              alt=""
              width={160}
              height={100}
              className="pointer-events-none absolute -left-6 -top-6 z-20 h-auto w-28 object-contain drop-shadow-sm sm:-left-8 sm:-top-8 sm:w-36 lg:-left-12 lg:-top-10 lg:w-44"
              aria-hidden
            />

            <div className="absolute -bottom-1 -right-1 z-10 h-14 w-14 rounded-tl-[1.5rem] bg-[#f7f3ea] sm:h-16 sm:w-16 lg:h-20 lg:w-20" />

            <button
              type="button"
              className="absolute -bottom-3 -right-3 z-20 flex h-16 w-16 items-center justify-center transition hover:scale-105 sm:-bottom-4 sm:-right-4 sm:h-20 sm:w-20 lg:-bottom-5 lg:-right-5 lg:h-[5.5rem] lg:w-[5.5rem]"
              aria-label="Play video"
            >
              <Image
                src="/know-us-play.png"
                alt=""
                width={88}
                height={88}
                className="h-[100%] w-[100%] object-contain drop-shadow-md"
              />
            </button>
          </FadeIn>
          
        </div>
      </Container>
    </section>
  );
}