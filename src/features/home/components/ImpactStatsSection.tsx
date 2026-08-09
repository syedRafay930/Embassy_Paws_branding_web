"use client";

import Image from "next/image";
import { Container } from "@/components/ui";
import { IMPACT_STATS } from "../data";
import { cn } from "@/utils/cn";

// Map the tones to the exported SVG files in your public folder
const bgImages = {
  gold: "/stat-gold.svg",
  blue: "/stat-blue.svg",
  peach: "/stat-peach.svg",
  tan: "/stat-tan.svg",
} as const;

export function ImpactStatsSection() {
  return (
    <section className="bg-[#f7f3ea] py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Added gap-y-12 to ensure enough vertical space for the zigzag effect */}
        <div className="grid grid-cols-2 items-center justify-items-center gap-x-4 gap-y-12 md:grid-cols-4 lg:gap-x-8">
          {IMPACT_STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "relative flex h-28 w-44 items-center justify-center sm:h-32 sm:w-48 lg:h-[130px] lg:w-[220px]",
                // ZIGZAG LOGIC: Push every second item down, and pull others slightly up
                index % 2 !== 0 
                  ? "translate-y-6 lg:translate-y-10" 
                  : "-translate-y-2 lg:-translate-y-4"
              )}
            >
              {/* Background Shape Image */}
              <div className="absolute inset-0 z-0 drop-shadow-sm">
                <Image
                  src={bgImages[stat.tone as keyof typeof bgImages]}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Foreground Text Content - Tightened spacing to fit inside SVG */}
              <div className="relative z-10 flex items-center justify-center gap-1 px-4 text-navy sm:gap-1.5 lg:gap-1">
                {/* Large Number - Reduced size slightly to prevent overflow */}
                <span className="font-serif text-2xl font-bold tracking-tight sm:text-3xl lg:text-[2.1rem]">
                  {stat.value}
                </span>
                
                {/* Thin Slash Separator */}
                <span className="text-xl font-light text-navy/40 sm:text-2xl lg:text-[2rem]">
                  /
                </span>
                
                {/* Wrapped Text Label - Fixed width and tighter leading */}
                <span className="w-14 text-left text-[9px] font-semibold leading-tight sm:w-16 sm:text-[10px] lg:w-[70px] lg:text-[11px]">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}