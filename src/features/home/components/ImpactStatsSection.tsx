"use client";

import Image from "next/image";
import { Container } from "@/components/ui";
import { cn } from "@/utils/cn";
import { StaggerContainer, StaggerItem } from "@/components/ui/animations/Stagger";
import { AnimatedCounter } from "@/components/ui/animations/AnimatedCounter";
import type { ImpactStat, ImpactStatTone } from "../data";

const bgImages: Record<ImpactStatTone, string> = {
  gold: "/stat-gold.svg",
  blue: "/stat-blue.svg",
  peach: "/stat-peach.svg",
  tan: "/stat-tan.svg",
};

type ImpactStatsSectionProps = {
  stats: ImpactStat[];
};

export function ImpactStatsSection({ stats }: ImpactStatsSectionProps) {
  return (
    <section className="bg-[#f7f3ea] pb-8 pt-2 sm:pb-10 sm:pt-3 lg:pb-12 lg:pt-12">
      <Container>
        {/* StaggerContainer grid par apply kiya hai */}
        <StaggerContainer className="grid grid-cols-2 items-center justify-items-center gap-x-4 gap-y-8 md:grid-cols-4 lg:gap-x-8">
          {stats.map((stat, index) => (
            <StaggerItem key={stat.label}>
              {/* Note: Tailwind ki translate classes inner div par rakhi hain taake animation unhein override na kare */}
              <div
                className={cn(
                  "relative flex h-24 w-full max-w-[10.5rem] items-center justify-center sm:h-32 sm:max-w-none sm:w-48 lg:h-[130px] lg:w-[220px]",
                  index % 2 !== 0
                    ? "translate-y-6 lg:translate-y-10"
                    : "-translate-y-2 lg:-translate-y-4",
                )}
              >
                <div className="absolute inset-0 z-0 drop-shadow-sm">
                  <Image
                    src={bgImages[stat.tone]}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="relative z-10 flex items-center justify-center gap-1 px-4 text-navy sm:gap-1.5 lg:gap-1">
                  {/* Number count up animation yahan lagayi hai */}
                  <AnimatedCounter 
                    value={stat.value} 
                    className="font-serif text-2xl font-bold tracking-tight sm:text-3xl lg:text-[2.1rem]" 
                  />

                  <span className="text-xl font-light text-navy/40 sm:text-2xl lg:text-[2rem]">
                    /
                  </span>

                  <span className="w-14 text-left text-[9px] font-semibold leading-tight sm:w-16 sm:text-[10px] lg:w-[70px] lg:text-[11px]">
                    {stat.label}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}