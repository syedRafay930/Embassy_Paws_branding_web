"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import { ROUTES } from "@/constants";
import { FadeIn } from "@/components/ui/animations/FadeIn";

export function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#112239] pt-28 lg:pt-32">
      {/* Giant faint paw — top left watermark (Mobile par hidden, tablet/desktop par visible) */}
      <div className="pointer-events-none absolute -left-10 -top-10 z-0 hidden h-auto w-56 opacity-[0.08] brightness-200 sm:block sm:w-72 lg:-left-8 lg:-top-8 lg:w-[22rem]">
        <FadeIn direction="right" delay={0.1}>
          <Image
            src="/know-us-paw-bg.png"
            alt=""
            width={420}
            height={420}
            className="h-full w-full object-contain"
            aria-hidden
            priority
          />
        </FadeIn>
      </div>

      <Container className="relative z-10">
        <div className="grid items-end lg:grid-cols-2 lg:gap-8 xl:gap-12">
          {/* Left — text (lifted toward top) */}
          <div className="relative z-20 col-start-1 row-start-1 self-start pb-6 pt-2 sm:pt-4 lg:pb-10 lg:pt-6">
            <FadeIn direction="up" delay={0.2}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
                <Link href={ROUTES.HOME} className="transition hover:text-white/80">
                  Home
                </Link>
                /About Us
              </p>

              <h1 className="mt-3 max-w-xl font-serif text-[2rem] font-bold leading-[1.15] text-white sm:text-5xl lg:text-[4rem]">
                The Team Behind
                <br />
                Every Safe Journey
              </h1>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 sm:text-base lg:mt-5">
                We&apos;re pet parents, vets, and travel specialists who believe
                every animal deserves a calm, well-cared-for trip — wherever the
                destination.
              </p>
            </FadeIn>

            {/* Small gold paw accent (Mobile aur desktop dono par apni jagah mojood rahay ga) */}
            {/* <FadeIn direction="up" delay={0.4} className="pointer-events-none hidden mt-6 h-auto w-14 opacity-80 sm:w-16 lg:absolute lg:bottom-auto lg:right-0 lg:top-[calc(100%+0.5rem)] lg:mt-0 lg:w-[4.5rem]">
              <Image
                src="/why-choose-paws.png"
                alt=""
                width={80}
                height={60}
                className="h-full w-full object-contain"
                aria-hidden
              />
            </FadeIn> */}
          </div>

          {/* Right — hero image flush to section bottom, enlarged + nudged */}
          <FadeIn direction="left" delay={0.3} className="relative z-10 col-start-1 row-start-1 self-end mx-auto w-full max-w-md opacity-25 blur-[2px] sm:max-w-lg sm:translate-x-4 lg:col-start-2 lg:mx-0 lg:w-[130%] lg:max-w-none lg:translate-x-6 lg:opacity-100 lg:blur-none xl:w-[135%] xl:translate-x-10">
            {/* Mobile Specific Overlay taake text parhne mein koi mushkil na ho */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#112239] via-[#112239]/80 to-transparent lg:hidden" />

            <Image
              src="/77a8621e53d2cda93dac1905e6162abfe105fd41.png"
              alt="Two children hugging a Golden Retriever"
              width={1100}
              height={850}
              className="h-auto w-full object-contain object-bottom mix-blend-lighten lg:scale-125"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}