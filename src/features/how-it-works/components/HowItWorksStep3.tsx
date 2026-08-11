import Image from "next/image";
import { Container } from "@/components/ui";
import { ADMIN_PORTAL_POINTS } from "../data";

export function HowItWorksStep3() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3ea] py-16 lg:py-24">
      {/* Bottom left rings */}
      <Image
        src="/rings-orange.png"
        alt=""
        width={200}
        height={200}
        className="pointer-events-none absolute -bottom-10 -left-10 z-0 h-auto w-32 object-contain opacity-40 mix-blend-multiply sm:w-40 lg:w-48"
        aria-hidden
      />

      {/* Bottom right stripes */}
      <Image
        src="/why-choose-stripes.png"
        alt=""
        width={180}
        height={180}
        className="pointer-events-none absolute -bottom-6 right-4 z-0 hidden h-auto w-32 object-contain opacity-10 mix-blend-multiply sm:block sm:right-10 sm:w-40"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-20">
          <div className="lg:col-span-5">
            <p className="font-serif text-6xl font-bold leading-none text-[#d4a84b] lg:text-7xl">
              03
            </p>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4a84b]">
              Admin Portal
            </p>
            <h2 className="mt-4 max-w-lg font-serif text-3xl font-bold leading-tight text-[#112239] lg:text-4xl">
              Your Team Sees The Same Trip, From The Other Side
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#112239]/70 sm:text-base">
              Coordinators manage every booking, crate approval, and document
              review from an admin view built for speed — updates here appear
              instantly for the pet parent.
            </p>

            <ul className="mt-6 space-y-3">
              {ADMIN_PORTAL_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[#112239]/80"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#112239]"
                    aria-hidden
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative w-full pb-10 lg:col-span-7 lg:pb-0">
            <div className="relative w-full">
              <div className="overflow-hidden rounded-2xl shadow-2xl lg:rounded-3xl">
                <Image
                  src="/4ec624533748cdf2cae73e0e59a1d94ebcc4cdea.png"
                  alt="Embassy Paws admin operations dashboard"
                  width={1400}
                  height={900}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>

              <div className="absolute bottom-10 left-3 z-10 flex items-center gap-1.5 rounded-full bg-white px-4 py-2 shadow-md sm:bottom-16 sm:-left-6">
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-green-500"
                  aria-hidden
                />
                <span className="text-xs font-bold text-[#112239]">
                  Staff Access
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
