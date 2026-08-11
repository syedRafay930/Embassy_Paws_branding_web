import Image from "next/image";
import { MOBILE_APP_POINTS } from "../data";

export function HowItWorksStep2() {
  return (
    <section className="overflow-x-hidden bg-[#f7f3ea] py-12 sm:py-16 lg:py-24">
      <div className="relative mx-2 w-[calc(100%-1rem)] overflow-visible rounded-[2rem] bg-[#d4a84b] px-5 py-14 sm:mx-3 sm:w-[calc(100%-1.5rem)] sm:px-10 sm:py-16 lg:px-16 lg:py-20 xl:px-20">
          {/* Peeking dog — bottom right */}
          <Image
            src="/know-us-cartoon-dog.png"
            alt=""
            width={220}
            height={140}
            className="pointer-events-none absolute -bottom-3 -right-17 z-20 h-auto w-28 object-contain sm:-bottom-4 sm:-right-6 sm:w-36 lg:-bottom-16 lg:-right-4 lg:w-48"
            aria-hidden
          />

          <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left — phone mockup */}
            <div className="relative flex w-full justify-center">
              <div className="relative">
                <Image
                  src="/swirl-arrow-right-icon 1.svg"
                  alt=""
                  width={293}
                  height={376}
                  unoptimized
                  className="pointer-events-none absolute top-1/2 -left-16 z-20 h-auto w-20 -translate-y-1/2 sm:-left-20 sm:w-24 lg:-left-64 lg:w-32"
                  aria-hidden
                />
                <Image
                  src="/b62b9554354a1a66584ea642dc49983e8e07671e.png"
                  alt="Embassy Paws mobile app home screen"
                  width={420}
                  height={860}
                  className="h-auto w-full max-w-[240px] rounded-[1.75rem] shadow-2xl sm:max-w-[280px] lg:max-w-[300px]"
                  sizes="(max-width: 1024px) 280px, 300px"
                />

                <div className="absolute top-14 -right-6 z-10 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-md sm:top-16 sm:-right-10 lg:-right-16">
                  <span
                    className="h-2 w-2 shrink-0 rounded-full bg-green-500"
                    aria-hidden
                  />
                  <span className="whitespace-nowrap text-xs font-bold text-[#112239]">
                    iOS &amp; Android
                  </span>
                </div>
              </div>
            </div>

            {/* Right — copy */}
            <div className="pb-6 lg:pb-8">
              <p className="font-serif text-6xl font-bold leading-none text-white lg:text-7xl">
                02
              </p>
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
                Mobile App - Customer Portal
              </p>
              <h2 className="mt-4 max-w-lg font-serif text-3xl font-bold leading-tight text-white lg:text-4xl">
                The Same Trip, Always In Your Pocket
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
                The mobile app mirrors your dashboard in real time, with push
                alerts so you never miss a vaccination deadline or a gate change.
              </p>

              <ul className="mt-6 space-y-3">
                {MOBILE_APP_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-relaxed text-white lg:text-base"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-white"
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </section>
  );
}
