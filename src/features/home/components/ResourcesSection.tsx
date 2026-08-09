"use client";

import Image from "next/image";
import { Container } from "@/components/ui";

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
    <section
      id="features"
      className="relative overflow-visible bg-[#112239] py-16 lg:py-24"
    >
      <Container className="relative z-10 overflow-visible">
        {/* Header Section */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
          Resources
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
          Everything You Need, In One Place
        </h2>

        {/* Grid Container */}
        <div className="relative mt-12 overflow-visible pb-10 sm:mt-16 lg:mt-24">
          <div className="relative z-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {RESOURCES.map((item, index) => {
              const isThirdCard = index === 2;

              return (
                <article
                  key={item.number}
                  className={`relative overflow-visible rounded-[20px] bg-[#f3ebe0] p-6 sm:p-8 shadow-sm ${
                    isThirdCard ? "z-20" : "z-10"
                  }`}
                >
                  {/* Peeking Puppy positioned ONLY on the third card */}
                  {isThirdCard && (
                    <Image
                      src="/resources-puppy.png"
                      alt="Puppy peeking over the card"
                      width={400}
                      height={300}
                      // Reduced translate-y values to lift the puppy up 
                      className="pointer-events-none absolute bottom-full left-1/2 z-30 h-auto w-[220px] -translate-x-1/2 translate-y-7 object-contain drop-shadow-2xl sm:w-[260px] sm:translate-y-8 lg:w-[300px] lg:translate-y-9 xl:translate-y-10"
                      aria-hidden
                      priority
                    />
                  )}

                  {/* Number Badge */}
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#d4a84b] font-serif text-sm font-bold text-[#112239]">
                    {item.number}
                  </div>
                  
                  {/* Text Content */}
                  <h3 className="font-serif text-lg font-bold text-[#112239] sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#112239]/70">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Bone Background Asset */}
          <Image
            src="/resources-bone.png"
            alt=""
            width={180}
            height={140}
            className="pointer-events-none absolute -bottom-22 left-[25%] z-0 h-auto w-25 -translate-x-1/2 rotate-[-15deg] object-contain opacity-40 sm:left-[25%] sm:w-32 lg:w-40"
            aria-hidden
          />
        </div>
      </Container>
    </section>
  );
}