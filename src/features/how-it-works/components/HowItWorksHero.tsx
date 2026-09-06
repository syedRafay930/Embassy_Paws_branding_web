"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import { ROUTES } from "@/constants";
import { FadeIn } from "@/components/ui/animations/FadeIn";

export function HowItWorksHero() {
  return (
    <section className="relative grid w-full grid-cols-1 items-end overflow-hidden rounded-b-[2rem] bg-gold pt-24 sm:rounded-b-[2.5rem] lg:block lg:pt-32">
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/5 to-transparent" />
      {/* Giant faint paw — top left watermark */}
      <div className="pointer-events-none absolute -left-10 -top-10 z-0 h-auto w-56 opacity-25 brightness-200 sm:w-72 lg:-left-8 lg:-top-8 lg:w-[22rem]">
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

      <Container className="relative z-20 col-start-1 row-start-1 shrink-0">
        <div className="max-w-xl pb-12 pt-4 sm:pb-16 sm:pt-10 lg:pb-36 lg:pt-16">
          <FadeIn direction="up" delay={0.2}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
              <Link href={ROUTES.HOME} className="transition hover:text-white">
                Home
              </Link>
              /How It Works
            </p>
            <h1 className="mt-3 font-serif text-[2.5rem] font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[4rem]">
              <span className="block whitespace-nowrap">Three Views, One</span>
              <span className="block whitespace-nowrap">Seamless Journey</span>
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/85 sm:text-base lg:mt-6">
              From the moment you plan a trip to the moment your pet lands,
              Embassy Paws portal keeps everyone on the same page.
            </p>
          </FadeIn>

          {/* Small paw — darkened so it reads on the gold ground */}
          {/* <FadeIn direction="up" delay={0.4} className="pointer-events-none mt-6 h-auto w-14 opacity-40 brightness-0 sm:w-16 lg:absolute lg:bottom-auto lg:right-0 lg:top-[calc(100%+0.5rem)] lg:mt-0 lg:w-[4.5rem]">
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
      </Container>

      {/* Right — hero image (Web view mein height control karne ke liye max-h add ki hai) */}
      <FadeIn direction="left" delay={0.3} className="relative z-10 col-start-1 row-start-1 mt-auto w-[95%] max-w-[480px] self-end justify-self-end opacity-30 blur-[2px] sm:w-[80%] sm:max-w-[560px] lg:absolute lg:bottom-0 lg:right-0 lg:w-[50%] lg:max-w-[900px] lg:max-h-[440px] lg:opacity-100 lg:blur-none">
        {/* Mobile Specific Overlay taake text parhne mein koi mushkil na ho */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#857445] via-[#857445]/70 to-transparent lg:hidden" />
        
        <Image
          src="/73ee484b6868848a1423718a2d0a60eb8ee4aead.png"
          alt="A grey cat being gently pet under the chin"
          width={1100}
          height={850}
          className="h-auto max-h-full w-full object-contain object-right-bottom mix-blend-lighten lg:scale-110"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </FadeIn>
    </section>
  );
}