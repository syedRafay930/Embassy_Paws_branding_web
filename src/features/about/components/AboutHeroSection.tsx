import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import { ROUTES } from "@/constants";

export function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#112239] pt-28 lg:pt-32">
      {/* Giant faint paw — top left watermark */}
      <Image
        src="/know-us-paw-bg.png"
        alt=""
        width={420}
        height={420}
        className="pointer-events-none absolute -left-10 -top-10 z-0 h-auto w-56 object-contain opacity-[0.08] brightness-200 sm:w-72 lg:-left-8 lg:-top-8 lg:w-[22rem]"
        aria-hidden
        priority
      />

      <Container className="relative z-10">
        <div className="grid items-end gap-10 lg:grid-cols-2 lg:gap-8 xl:gap-12">
          {/* Left — text (lifted toward top) */}
          <div className="relative self-start pb-6 pt-2 sm:pt-4 lg:pb-10 lg:pt-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              <Link href={ROUTES.HOME} className="transition hover:text-white/80">
                Home
              </Link>
              /About Us
            </p>

            <h1 className="mt-3 max-w-xl font-serif text-4xl font-bold leading-[1.12] text-white sm:text-5xl lg:text-[4rem]">
              The Team Behind
              <br />
              Every Safe Journey
            </h1>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 sm:text-base lg:mt-5">
              We&apos;re pet parents, vets, and travel specialists who believe
              every animal deserves a calm, well-cared-for trip — wherever the
              destination.
            </p>

            {/* Small gold paw accent */}
            <Image
              src="/why-choose-paws.png"
              alt=""
              width={80}
              height={60}
              className="pointer-events-none mt-6 h-auto w-14 object-contain opacity-80 sm:w-16 lg:absolute lg:bottom-auto lg:right-0 lg:top-[calc(100%+0.5rem)] lg:mt-0 lg:w-[4.5rem]"
              aria-hidden
            />
          </div>

          {/* Right — hero image flush to section bottom, enlarged + nudged */}
          <div className="relative mx-auto w-[115%] max-w-none translate-x-2 self-end sm:w-[120%] sm:translate-x-4 lg:mx-0 lg:w-[130%] lg:translate-x-6 xl:w-[135%] xl:translate-x-10">
            <Image
              src="/77a8621e53d2cda93dac1905e6162abfe105fd41.png"
              alt="Two children hugging a Golden Retriever"
              width={1100}
              height={850}
              className="h-auto w-full scale-110 object-contain object-bottom mix-blend-lighten sm:scale-[1.15] lg:scale-125"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
