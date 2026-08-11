import Image from "next/image";
import { Container } from "@/components/ui";
import { WEB_DASHBOARD_POINTS } from "../data";

export function HowItWorksStep1() {
  return (
    <section className="overflow-x-hidden bg-[#f7f3ea] py-16 lg:overflow-visible lg:py-24">
      <Container>
        {/* Changed to 12-column grid to give the image more natural space without forcing it out */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-20">
          
          {/* Left — copy (Takes 5 out of 12 columns) */}
          <div className="lg:col-span-5">
            <p className="font-serif text-6xl font-bold leading-none text-[#d4a84b] lg:text-7xl">
              01
            </p>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4a84b]">
              Web Dashboard
            </p>
            <h2 className="mt-4 max-w-lg font-serif text-3xl font-bold leading-tight text-[#112239] lg:text-4xl">
              Plan And Track Every Trip From One Screen
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#112239]/70 sm:text-base">
              Log in from any browser to see every booking, document, and travel
              milestone for your pet in one place — no app install required.
            </p>

            <ul className="mt-6 space-y-3">
              {WEB_DASHBOARD_POINTS.map((point) => (
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

          {/* Right — mockup + floating assets (Takes 7 out of 12 columns) */}
          <div className="relative w-full pb-10 lg:col-span-7 lg:pb-8">
            <Image
              src="/paws-orange.png"
              alt=""
              width={200}
              height={200}
              className="pointer-events-none absolute -left-12 top-6 -z-10 h-auto w-28 object-contain opacity-30 mix-blend-screen sm:w-36 lg:w-40"
              aria-hidden
            />

            {/* Removed the w-[132%] hack. Now it naturally fills its 7-column space without cutting off */}
            <div className="relative w-full">
              <div className="overflow-hidden rounded-2xl shadow-2xl lg:rounded-[2rem]">
                <Image
                  src="/f80cb55d61d5d90ad69aca24622f9b4964298fb4.png"
                  alt="Embassy Paws web dashboard showing trip progress, documents, and tasks"
                  width={1200}
                  height={900}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>

              {/* Floating Web-Live Badge */}
              <div className="absolute top-1/2 left-3 z-10 flex -translate-y-1/2 items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-md sm:-left-8">
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-green-500"
                  aria-hidden
                />
                <span className="text-xs font-bold text-[#112239]">
                  Web - Live
                </span>
              </div>
            </div>

            {/* Floating Bone */}
            <div className="pointer-events-none absolute -bottom-2 -right-4 z-10 sm:-bottom-8 sm:-right-8 lg:-right-4">
              <Image
                src="/Bones.png"
                alt=""
                width={120}
                height={90}
                className="h-auto w-16 -rotate-12 object-contain mix-blend-multiply sm:w-20 lg:w-24"
                aria-hidden
              />
              <span
                className="absolute -left-3 top-1 text-xs text-[#112239]"
                aria-hidden
              >
                ✦
              </span>
              <span
                className="absolute -right-1 -top-2 text-sm text-[#112239]"
                aria-hidden
              >
                ✦
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}