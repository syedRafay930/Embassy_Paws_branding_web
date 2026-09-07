"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/ui/animations/Stagger";

const RESOURCES = [
  {
    number: "01",
    title: "Document Prep",
    description:
      "Health certificates, import permits, and microchip verification — handled and endorsed for you.",
  },
  {
    number: "02",
    title: "Flight & Crate Booking",
    description:
      "Airline-approved crates and pet-friendly routes booked around your pet's comfort.",
  },
  {
    number: "03",
    title: "Vet Compliance",
    description:
      "Vaccination and health checks confirmed against destination-country requirements.",
  },
  {
    number: "04",
    title: "Customs Clearance",
    description:
      "We coordinate with customs on both ends so nothing holds your pet up at the border.",
  },
  {
    number: "05",
    title: "Airport Escort",
    description:
      "A coordinator meets your pet planeside — curb to carousel, on both ends of the trip.",
  },
  {
    number: "06",
    title: "24/7 Support",
    description:
      "Real-time updates and a human to call, from booking through touchdown.",
  },
] as const;

export function ResourcesSection() {
  return (
    <section id="features" className="relative bg-[#f7f3ea] py-12 sm:py-16 lg:py-24">
      <div className="relative mx-2 w-[calc(100%-1rem)] overflow-visible rounded-[2rem] bg-[#112239] px-5 py-12 sm:mx-3 sm:w-[calc(100%-1.5rem)] sm:px-10 sm:py-16 lg:px-16 lg:py-20 xl:px-20">
        
        {/* Header Text Animation */}
        <FadeIn direction="up">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
            Resources
          </p>
          <h2 className="mt-2 font-serif text-[1.75rem] font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Everything You Need, In One Place
          </h2>
        </FadeIn>

        <div className="relative mt-10 pb-10 pt-16 sm:mt-16 sm:pt-20 lg:mt-20 lg:pt-24">
          
          {/* Cards ki Stagger Animation */}
          <StaggerContainer className="relative z-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {RESOURCES.map((item, index) => {
              const isThirdCard = index === 2;

              return (
                <StaggerItem 
                  key={item.number} 
                  className={isThirdCard ? "z-20" : "z-10"}
                >
                  <article
                    className="relative overflow-visible rounded-[20px] bg-[#f3ebe0] p-6 shadow-sm sm:p-8 h-full"
                  >
                    {isThirdCard ? (
                      <Image
                        src="/resources-puppy.png"
                        alt="Puppy peeking over the card"
                        width={400}
                        height={300}
                        className="pointer-events-none absolute bottom-full left-1/2 z-30 h-auto w-[160px] -translate-x-1/2 translate-y-6 object-contain drop-shadow-2xl sm:w-[240px] sm:translate-y-8 lg:w-[280px] lg:translate-y-9"
                        aria-hidden
                        priority
                      />
                    ) : null}

                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#d4a84b] font-serif text-sm font-bold text-[#112239]">
                      {item.number}
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#112239] sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#112239]/70">
                      {item.description}
                    </p>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Bottom Bone Animation - Wrapped in a plain div to protect Tailwind's transform classes */}
          <div className="pointer-events-none absolute bottom-0 left-[25%] z-0 h-auto w-24 -translate-x-1/2 rotate-[-15deg] opacity-40 sm:w-32 lg:w-40">
            <FadeIn direction="up" delay={0.6}>
              <Image
                src="/resources-bone.png"
                alt=""
                width={180}
                height={140}
                className="h-full w-full object-contain"
                aria-hidden
              />
            </FadeIn>
          </div>
          
        </div>
      </div>
    </section>
  );
}