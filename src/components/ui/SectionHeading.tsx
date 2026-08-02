import { cn } from "@/utils/cn";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "dark" | "light" | "gold";
  className?: string;
};

const titleTone: Record<NonNullable<SectionHeadingProps["tone"]>, string> = {
  dark: "text-navy",
  light: "text-white",
  gold: "text-gold",
};

const subtitleTone: Record<NonNullable<SectionHeadingProps["tone"]>, string> = {
  dark: "text-muted",
  light: "text-white/80",
  gold: "text-navy/70",
};

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <h2
        className={cn(
          "text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]",
          titleTone[tone],
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", subtitleTone[tone])}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
