import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import { ROUTES } from "@/constants";

export function HowItWorksHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#857445] via-[#9a8554] to-[#716135] pt-28 lg:pt-32">
      {/* Giant faint paw — top left watermark */}
      <Image
        src="/know-us-paw-bg.png"
        alt=""
        width={420}
        height={420}
        className="pointer-events-none absolute -left-10 -top-10 z-0 h-auto w-56 object-contain opacity-25 brightness-200 sm:w-72 lg:-left-8 lg:-top-8 lg:w-[22rem]"
        aria-hidden
        priority
      />

      <Container className="relative z-10">
        <div className="grid items-end gap-10 lg:grid-cols-2 lg:gap-8 xl:gap-12">
          {/* Left — text (lifted toward top) */}
          <div className="relative self-start pb-6 pt-2 sm:pt-4 lg:pb-10 lg:pt-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
              <Link href={ROUTES.HOME} className="transition hover:text-white">
                Home
              </Link>
              /How It Works
            </p>

            <h1 className="mt-3 font-serif text-[2rem] font-bold leading-[1.15] text-white sm:text-5xl lg:text-[4rem]">
              <span className="block whitespace-nowrap">Three Views, One</span>
              <span className="block whitespace-nowrap">Seamless Journey</span>
            </h1>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85 sm:text-base lg:mt-5">
              From the moment you plan a trip to the moment your pet lands,
              Embassy Paws portal keeps everyone on the same page.
            </p>

            {/* Small paw — darkened so it reads on the gold ground */}
            <Image
              src="/why-choose-paws.png"
              alt=""
              width={80}
              height={60}
              className="pointer-events-none mt-6 h-auto w-14 object-contain brightness-0 opacity-40 sm:w-16 lg:absolute lg:bottom-auto lg:right-0 lg:top-[calc(100%+0.5rem)] lg:mt-0 lg:w-[4.5rem]"
              aria-hidden
            />
          </div>

          {/* Right — hero image flush to section bottom, enlarged + nudged */}
          <div className="relative mx-auto w-full max-w-md self-end sm:max-w-lg sm:translate-x-4 lg:mx-0 lg:max-w-none lg:w-[130%] lg:translate-x-6 xl:w-[135%] xl:translate-x-10">
            <Image
              src="/73ee484b6868848a1423718a2d0a60eb8ee4aead.png"
              alt="A grey cat being gently pet under the chin"
              width={1100}
              height={850}
              className="h-auto w-full object-contain object-bottom mix-blend-lighten lg:scale-125"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
