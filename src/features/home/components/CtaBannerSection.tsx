"use client";

import Image from "next/image";
import { ROUTES } from "@/constants";
import { Button } from "@/components/ui";
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/ui/animations/Stagger";

export function CtaBannerSection() {
  return (
    // Outer section with exactly the same padding/background as CtaSection
    <section className="overflow-x-hidden bg-[#FAFAFA] py-12 sm:py-16 lg:py-24">
      
      <FadeIn direction="up" delay={0.2}>
        {/* Main Wrapper matching the exact structure and margins of CtaSection */}
        <div className="relative mx-2 w-[calc(100%-1rem)] overflow-hidden rounded-[2rem] bg-[#fdb56b] shadow-sm sm:mx-3 sm:w-[calc(100%-1.5rem)]">
          
          {/* Background Image */}
          <Image
            src="/home/ctabg.jpg" 
            alt="Orange kitten in a cardboard box"
            fill
            className="object-cover object-[25%_center] sm:object-[15%_center] lg:object-left"
            priority
          />

          {/* Mobile Specific Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#f9a03f]/95 via-[#f9a03f]/60 to-transparent lg:hidden" />

          {/* Content Layout */}
          <div className="relative z-10 grid min-h-[500px] px-5 py-10 sm:px-10 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-16 lg:py-20 xl:grid-cols-[0.9fr_1.1fr] xl:px-20">
            
            {/* Left side empty for the Cat (Desktop) */}
            <div className="hidden lg:block" />

            {/* Right side Content (Text & Button) */}
            <div className="flex flex-col justify-end lg:justify-center">
              <StaggerContainer delayChildren={0.3} className="max-w-xl">
                
                {/* Badge */}
                <StaggerItem>
                  <span className="inline-block rounded-full bg-[#d67b27] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white sm:text-sm">
                    Pet Travel Made Easy
                  </span>
                </StaggerItem>

                {/* Main Heading */}
                <StaggerItem>
                  <h2 className="mt-4 font-serif text-[1.7rem] font-bold leading-[1.15] text-[#3e2723] sm:text-4xl lg:text-[2.75rem]">
                    Plan a Safe & Stress-Free <br className="hidden sm:block" />
                    Journey for Your Pet
                  </h2>
                </StaggerItem>

                {/* Subheading (Bold) */}
                <StaggerItem>
                  <p className="mt-5 font-bold text-[#3e2723] sm:text-lg">
                    Get a Free Consultation on Your Pet&apos;s Travel Plan
                  </p>
                </StaggerItem>

                {/* Description Paragraph */}
                <StaggerItem>
                  <p className="mt-3 text-sm leading-relaxed text-[#3e2723]/85 sm:text-[15px]">
                    From flight bookings to documentation and safe transport, we handle everything your pet needs for a comfortable journey. Let our experts plan every detail so you and your companion can travel with complete peace of mind.
                  </p>
                </StaggerItem>

                {/* CTA Button */}
                <StaggerItem>
                  <div className="mt-8 sm:mt-10">
                    <Button
                      href={ROUTES.CONTACT}
                      rounded="xl"
                      sparkle
                      sparkleColor="white"
                      className="bg-[#3e2723] px-6 py-3 font-serif text-[15px] normal-case tracking-normal text-white transition hover:bg-[#2d1b18] sm:px-8"
                    >
                      Start Planning
                    </Button>
                  </div>
                </StaggerItem>

              </StaggerContainer>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}