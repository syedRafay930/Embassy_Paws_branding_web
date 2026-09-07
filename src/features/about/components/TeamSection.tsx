"use client";

import Image from "next/image";
import { Container } from "@/components/ui";
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/ui/animations/Stagger";

const TEAM = [
  {
    name: "Maria Alvarez",
    role: "Founder & Lead Coordinator",
    image: "/464d183453956ce68067bb962233a9b44f864dea.svg",
    shape: "blue" as const,
  },
  {
    name: "Dr. James Okoro",
    role: "Veterinary Compliance",
    image: "/de8767104cb470b9d28410e6e36e13f62510e93d.svg",
    shape: "coral" as const,
  },
  {
    name: "Priya Nandan",
    role: "Airline & Crate Specialist",
    image: "/8d32cd648abdb3dd119f154cf706ab6a13297987.svg",
    shape: "teal" as const,
  },
  {
    name: "Priya Nandan",
    role: "Airline & Crate Specialist",
    image: "/51d00ea90b2aaf4c5995ea414107a97b2f8e59c2.svg",
    shape: "pink" as const,
  },
] as const;

export function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3ea] pb-4 pt-16 lg:pb-6 lg:pt-24">
      {/* ================= FLOATING DECORATIONS ================= */}

      {/* Top left — rings + cartoon cat */}
      <FadeIn direction="right" delay={0.2} className="pointer-events-none absolute left-2 top-6 z-0 sm:left-6 sm:top-8 lg:left-10 lg:top-10">
        <Image
          src="/rings-orange.png"
          alt=""
          width={160}
          height={160}
          className="absolute -left-2 -top-4 h-auto w-24 object-contain opacity-80 sm:w-28 lg:w-32"
          aria-hidden
        />
        <Image
          src="/categories-cartoon-cat.png"
          alt=""
          width={120}
          height={120}
          className="relative z-10 h-auto w-14 object-contain sm:w-16 lg:w-20"
          aria-hidden
        />
      </FadeIn>

      {/* Top right — faint stripes + orange squiggle */}
      <FadeIn direction="left" delay={0.3} className="pointer-events-none absolute -right-6 top-6 z-0 sm:right-0 sm:top-10">
        {/* Faint background stripes */}
        <Image
          src="/why-choose-stripes.png"
          alt=""
          width={180}
          height={180}
          className="absolute -right-10 -top-6 h-auto w-32 object-contain opacity-[0.12] sm:-right-4 sm:-top-4 sm:w-40 lg:w-48"
          aria-hidden
        />
        {/* Orange Squiggle */}
        <Image
          src="/950a51fa7ea02ad86dd8509e597d6afdf1133fe3.png"
          alt=""
          width={80}
          height={80}
          className="relative z-10 mr-10 mt-6 h-auto w-8 object-contain sm:mr-16 sm:mt-10 sm:w-10 lg:w-12"
          aria-hidden
        />
      </FadeIn>

      {/* Bottom left — faint stripes + orange squiggle */}
      <FadeIn direction="right" delay={0.4} className="pointer-events-none absolute -left-10 bottom-12 z-0 sm:-left-4 sm:bottom-16">
        {/* Faint background stripes */}
        <Image
          src="/why-choose-stripes.png"
          alt=""
          width={180}
          height={180}
          className="absolute -bottom-10 -left-6 h-auto w-32 scale-x-[-1] object-contain opacity-[0.12] sm:-left-4 sm:w-40 lg:w-48"
          aria-hidden
        />
        {/* Orange Squiggle */}
        <Image
          src="/950a51fa7ea02ad86dd8509e597d6afdf1133fe3.png"
          alt=""
          width={80}
          height={80}
          className="relative z-10 mb-10 ml-12 h-auto w-8 rotate-[80deg] object-contain sm:mb-16 sm:ml-16 sm:w-10 lg:w-12"
          aria-hidden
        />
      </FadeIn>

      {/* ================= MAIN CONTENT ================= */}

      <Container className="relative z-10">
        <FadeIn direction="up">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4a84b]">
              Meet The Team
            </p>
            <h2 className="mt-3 font-serif text-2xl font-bold leading-tight text-[#112239] sm:text-4xl lg:text-[2.75rem]">
              Pet Lovers, Vets &amp; Travel Specialists
            </h2>
          </div>
        </FadeIn>

        {/* Team Grid */}
        <StaggerContainer delayChildren={0.2} className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-8 lg:mt-16 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-[#112239]/10">
          {TEAM.map((member, index) => (
            <StaggerItem key={`${member.name}-${member.shape}-${index}`} className="flex flex-col items-center">
              <li
                className="flex w-full flex-col items-center px-4 text-center list-none lg:px-6"
              >
                <div className="relative flex h-44 w-44 items-end justify-center sm:h-48 sm:w-48">
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    width={220}
                    height={220}
                    className="relative z-10 h-full w-full object-contain object-bottom"
                    sizes="200px"
                    unoptimized
                  />
                </div>

                <h3 className="mt-6 font-serif text-lg font-bold text-[#112239]">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{member.role}</p>
              </li>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom slider / ribbon indicator (Built with pure CSS!) */}
        <FadeIn direction="up" delay={0.4}>
          <div className="mt-8 flex h-8 items-center justify-center gap-1.5 lg:mt-10">
            <div className="h-1 w-16 rounded-full bg-[#d4a84b]"></div>
            {/* <div className="h-1 w-1.5 rounded-full bg-[#d4a84b]/40"></div> */}
            {/* <div className="h-1 w-1.5 rounded-full bg-[#d4a84b]/40"></div> */}
            {/* <div className="h-1 w-1.5 rounded-full bg-[#d4a84b]/40"></div> */}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}