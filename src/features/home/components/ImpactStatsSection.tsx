import { Container } from "@/components/ui";
import { IMPACT_STATS } from "../data";
import { cn } from "@/utils/cn";

const toneClasses = {
  gold: "bg-gold text-navy",
  blue: "bg-[#7eb8d8] text-navy",
  orange: "bg-orange text-white",
  tan: "bg-[#c4a574] text-navy",
} as const;

export function ImpactStatsSection() {
  return (
    <section className="bg-cream py-14 sm:py-16">
      <Container className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
        {IMPACT_STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <div
              className={cn(
                "flex h-28 w-28 items-center justify-center shadow-sm sm:h-32 sm:w-32",
                toneClasses[stat.tone],
              )}
              style={{
                borderRadius: "40% 60% 55% 45% / 55% 40% 60% 45%",
              }}
            >
              <span className="text-2xl font-extrabold sm:text-3xl">{stat.value}</span>
            </div>
            <p className="mt-3 text-sm font-semibold text-navy">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
