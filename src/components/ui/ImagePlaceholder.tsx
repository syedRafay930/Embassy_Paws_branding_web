import { cn } from "@/utils/cn";

type ImagePlaceholderProps = {
  label?: string;
  className?: string;
  rounded?: "md" | "lg" | "xl" | "full" | "none";
};

const roundedMap = {
  none: "",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

export function ImagePlaceholder({
  label,
  className,
  rounded = "lg",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-1 border-2 border-dashed border-navy/25 bg-cream-warm/80 text-center text-navy/70",
        roundedMap[rounded],
        className,
      )}
      role="img"
      aria-label={label ? `insert image here: ${label}` : "insert image here"}
    >
      <span className="px-3 text-sm font-semibold uppercase tracking-wide">
        insert image here
      </span>
      {label ? (
        <span className="max-w-[90%] px-3 text-xs text-navy/50">{label}</span>
      ) : null}
    </div>
  );
}
