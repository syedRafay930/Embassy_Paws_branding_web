"use client";

import Image from "next/image";
import { Container } from "@/components/ui";
import { SERVICES_GRID } from "../data";
import { Card } from "@/components/ui/Card"; // Naya Card import kiya
import { StaggerContainer, StaggerItem } from "@/components/ui/animations/Stagger";
// import { FadeIn } from "@/components/ui/animations/FadeIn"; // Agar aap Bones wali animation on karein toh isay uncomment kar lein

export function ServicesGrid() {
  return (
    <section className="bg-[#f7f3ea] py-16 lg:py-24">
      <Container className="relative">
        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {SERVICES_GRID.map((service) => (
            <StaggerItem key={service.title}>
              {/* Naya unified Card use kar rahe hain */}
              <Card
                title={service.title}
                description={service.description}
                image={service.image}
                price={service.price}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Decorative Bones Image */}
        {/* <FadeIn direction="left" delay={0.4} className="pointer-events-none absolute top-1/2 -right-12 z-10 hidden h-auto w-24 -translate-y-1/2 lg:block"> */}
          <Image
            src="/Bones.svg"
            alt=""
            width={285}
            height={292}
            unoptimized
            className="pointer-events-none absolute top-1/2 -right-12 z-10 hidden h-auto w-24 -translate-y-1/2 lg:block"
            aria-hidden
          />
        {/* </FadeIn> */}
      </Container>
    </section>
  );
}