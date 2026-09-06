'use client'; 

import { useState, useRef, useEffect } from "react";
import { Container } from "@/components/ui";
import { DestinationCard } from "./DestinationCard";
import { DESTINATIONS } from "../data";
import { FadeIn } from "@/components/ui/animations/FadeIn";

function chunkArray<T>(array: T[], size: number): T[][] {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export function DestinationGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const rows = chunkArray(DESTINATIONS, 3);
  const gridRef = useRef<HTMLDivElement>(null);

  // Bahar click karne par card band karne ka logic
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (gridRef.current && !gridRef.current.contains(event.target as Node)) {
        setExpandedId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="bg-[#FAFAFA] pb-16 pt-16 sm:pb-20 sm:pt-20">
      <Container>
        {/* Sirf main section par FadeIn lagaya hai jesa aapne kaha tha */}
        <FadeIn direction="up" delay={0.7}>
          <div ref={gridRef} className="flex flex-col gap-6 lg:gap-8">
            
            {rows.map((row, rowIndex) => {
              const hasExpandedInRow = row.some(d => d.id === expandedId);

              return (
                <div 
                  key={rowIndex} 
                  className="flex w-full flex-col gap-6 lg:flex-row lg:gap-8"
                >
                  {row.map((dest) => (
                    <DestinationCard
                      key={dest.id}
                      data={dest}
                      isExpanded={expandedId === dest.id}
                      isCollapsed={hasExpandedInRow && expandedId !== dest.id}
                      onToggle={() => {
                        if (expandedId !== dest.id) setExpandedId(dest.id);
                      }}
                    />
                  ))}
                </div>
              );
            })}
            
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}