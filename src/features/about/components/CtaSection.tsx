import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/ui";
import { ROUTES } from "@/constants";

type CtaSectionProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  leftImageSrc?: string;
  leftImageAlt?: string;
  rightImageSrc?: string;
  rightImageAlt?: string;
  topLeftDecoration?: ReactNode;
};

export function CtaSection({
  title = "Ready to plan your pet's journey?",
  description = "Let's talk through routes, requirements, and timing.",
  buttonText = "Get a Quote",
  buttonHref = ROUTES.CONTACT,
  leftImageSrc = "/ee667f470775750b30ee5b41c22eac55fb8d8367.jpg",
  leftImageAlt = "A small white dog running through grass",
  rightImageSrc = "/e0f95fa70d884792cc202e07d8e8d2c29a9e85de.jpg",
  rightImageAlt = "A cat and dog cuddling together",
  topLeftDecoration,
}: CtaSectionProps) {
  return (
    <section className="overflow-x-hidden bg-[#f7f3ea] py-12 sm:py-16 lg:py-24">
      <div
        className={
          topLeftDecoration
            ? "relative mx-2 w-[calc(100%-1rem)] overflow-visible rounded-[2rem] bg-[#112239] px-5 py-10 sm:mx-3 sm:w-[calc(100%-1.5rem)] sm:px-10 sm:py-16 lg:px-16 lg:py-20 xl:px-20"
            : "relative mx-2 w-[calc(100%-1rem)] overflow-hidden rounded-[2rem] bg-[#112239] px-5 py-10 sm:mx-3 sm:w-[calc(100%-1.5rem)] sm:overflow-visible sm:px-10 sm:py-16 lg:px-16 lg:py-20 xl:px-20"
        }
      >
        {topLeftDecoration}

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-10">
          {/* Left — text & button */}
          <div className="relative z-10">
            <h2 className="font-serif text-[1.7rem] font-bold leading-tight text-white sm:text-4xl lg:whitespace-nowrap lg:text-[2.75rem]">
              {title}
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75 sm:text-[15px]">
              {description}
            </p>

            <div className="relative mt-8 inline-block sm:mt-10">
              <Button
                href={buttonHref}
                variant="white"
                rounded="xl"
                sparkle
                sparkleColor="gold"
                className="px-6 py-3 font-serif text-[15px] font-semibold normal-case tracking-normal text-[#112239] sm:px-8"
              >
                {buttonText}
              </Button>

              <Image
                src="/Bones.png"
                alt=""
                width={90}
                height={70}
                className="pointer-events-none absolute left-full top-1/2 ml-2 hidden h-auto w-14 -translate-y-1/2 -rotate-12 object-contain opacity-70 sm:ml-3 sm:block sm:w-20"
                aria-hidden
              />
            </div>
          </div>

          {/* Right — overlapping photos */}
          <div className="relative mt-4 h-[240px] w-full sm:mt-8 sm:h-[380px] lg:mt-0 lg:h-[400px]">
            <Image
              src="/why-choose-stripes.png"
              alt=""
              width={200}
              height={200}
              className="pointer-events-none absolute -top-8 right-2 z-0 h-auto w-32 object-contain opacity-60 sm:-top-12 sm:right-8 sm:w-44 lg:-right-4 lg:-top-16 lg:w-48"
              aria-hidden
            />

            <div className="absolute bottom-2 left-0 z-[5] w-[55%] overflow-hidden rounded-[1.5rem] shadow-xl sm:rounded-[2rem] lg:bottom-6 lg:left-4">
              <div className="relative aspect-[4/3] w-full sm:aspect-square">
                <Image
                  src={leftImageSrc}
                  alt={leftImageAlt}
                  fill
                  className="object-cover object-[center_20%]"
                  sizes="(max-width: 1024px) 50vw, 300px"
                />
              </div>
            </div>

            <div className="absolute -top-4 right-0 z-10 w-[55%] overflow-hidden rounded-[1.5rem] shadow-2xl sm:-top-10 sm:-right-4 sm:rounded-[2rem] lg:-right-8 lg:-top-12">
              <div className="relative aspect-[4/3] w-full sm:aspect-square">
                <Image
                  src={rightImageSrc}
                  alt={rightImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 300px"
                />
              </div>
            </div>

            <Image
              src="/why-choose-badge.png"
              alt="Pet Friendly"
              width={120}
              height={120}
              className="absolute left-[61%] top-[46%] z-20 h-20 w-20 -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-xl sm:h-28 sm:w-28 lg:left-[50%] lg:top-[48%] lg:h-32 lg:w-32"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
