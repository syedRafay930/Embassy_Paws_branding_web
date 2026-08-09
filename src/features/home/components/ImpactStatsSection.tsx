import { Container } from "@/components/ui";
import { IMPACT_STATS } from "../data";
import { cn } from "@/utils/cn";

const toneFill = {
  gold: "#d4a84b",
  blue: "#9ec9e0",
  peach: "#e8a878",
  tan: "#d4a84b",
} as const;

function StatShape({
  shape,
  fill,
}: {
  shape: "starburst" | "scallop" | "blob" | "softburst";
  fill: string;
}) {
  // Added preserveAspectRatio="none" to all SVGs to allow horizontal stretching
  if (shape === "starburst") {
    return (
      <svg viewBox="0 0 200 200" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
        <polygon
          points="100,8 112,48 148,28 132,64 176,72 140,96 176,128 132,136 148,172 112,152 100,192 88,152 52,172 68,136 24,128 60,96 24,72 68,64 52,28 88,48"
          fill={fill}
        />
        <polygon
          points="100,22 110,54 140,38 128,68 164,74 134,94 164,122 128,130 140,162 110,146 100,178 90,146 60,162 72,130 36,122 66,94 36,74 72,68 60,38 90,54"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
        />
      </svg>
    );
  }

  if (shape === "scallop") {
    return (
      <svg viewBox="0 0 200 200" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
        <path
          d="M40 70c8-18 28-28 50-28h20c22 0 42 10 50 28 8 8 14 20 14 34v8c0 14-6 26-14 34-8 18-28 28-50 28H90c-22 0-42-10-50-28-8-8-14-20-14-34v-8c0-14 6-26 14-34z"
          fill={fill}
        />
        <path
          d="M48 74c7-14 24-22 42-22h20c18 0 35 8 42 22 6 7 12 17 12 30v8c0 13-6 23-12 30-7 14-24 22-42 22H90c-18 0-35-8-42-22-6-7-12-17-12-30v-8c0-13 6-23 12-30z"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
        />
      </svg>
    );
  }

  if (shape === "blob") {
    return (
      <svg viewBox="0 0 200 200" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
        <path
          d="M100 18c22 0 38 10 52 24 14 14 24 30 24 52s-10 38-24 52c-14 14-30 24-52 24s-38-10-52-24C34 132 24 116 24 94s10-38 24-52C62 28 78 18 100 18z"
          fill={fill}
        />
        <ellipse
          cx="100"
          cy="100"
          rx="68"
          ry="68"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
        />
      </svg>
    );
  }

  // softburst
  return (
    <svg viewBox="0 0 200 200" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
      <path
        d="M100 14c10 22 28 28 46 22 4 20 18 34 38 38-4 18 2 36 18 48-16 12-22 30-18 48-20 4-34 18-38 38-18-6-36 0-46 22-10-22-28-28-46-22-4-20-18-34-38-38 4-18-2-36-18-48 16-12 22-30 18-48 20-4 34-18 38-38 18 6 36 0 46-22z"
        fill={fill}
      />
      <path
        d="M100 30c8 16 22 22 36 18 4 16 14 26 30 30-2 14 2 28 14 38-12 10-16 24-14 38-16 4-26 14-30 30-14-4-28 2-36 18-8-16-22-22-36-18-4-16-14-26-30-30 2-14-2-28-14-38 12-10 16-24 14-38 16-4 26-14 30-30 14 4 28-2 36-18z"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
      />
    </svg>
  );
}

export function ImpactStatsSection() {
  return (
    <section className="bg-[#f7f3ea] py-12 sm:py-16">
      <Container>
        <div className="grid grid-cols-2 items-center justify-items-center gap-6 md:grid-cols-4 md:gap-4 lg:gap-8">
          {IMPACT_STATS.map((stat) => (
            <div
              key={stat.label}
              className={cn(
                // Changed from square (h-36 w-36) to rectangle widths to stretch the shapes horizontally
                "relative flex h-28 w-44 items-center justify-center sm:h-32 sm:w-48 lg:h-36 lg:w-56",
                stat.offset,
              )}
            >
              <StatShape shape={stat.shape} fill={toneFill[stat.tone]} />
              
              {/* New Horizontal Text Layout aligned perfectly with the design */}
              <div className="relative z-10 flex items-center justify-center gap-1.5 px-2 text-navy sm:gap-2">
                {/* Large Number */}
                <span className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem]">
                  {stat.value}
                </span>
                
                {/* Thin Slash Separator */}
                <span className="text-2xl font-light text-navy/50 sm:text-3xl">
                  /
                </span>
                
                {/* Wrapped Text Label */}
                <span className="w-16 text-left text-[10px] font-semibold leading-[1.1] sm:w-20 sm:text-[11px] lg:text-xs">
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