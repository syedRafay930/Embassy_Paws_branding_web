import { cn } from "@/utils/cn";

type ButtonVariant = "gold" | "navy" | "outline" | "ghost" | "white" | "cream";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  sparkle?: boolean;
  sparkleColor?: "gold" | "white";
  rounded?: "md" | "full" | "xl";
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
};

const variantClasses: Record<ButtonVariant, string> = {
  gold: "bg-gold text-navy hover:bg-gold-soft",
  navy: "bg-navy text-white hover:bg-navy-deep",
  outline:
    "border-2 border-navy text-navy bg-transparent hover:bg-navy hover:text-white",
  ghost: "bg-transparent text-white hover:bg-white/10",
  white: "bg-white text-navy hover:bg-cream",
  cream:
    "bg-[#f5f1e9] text-[#c19a6b] hover:bg-white font-serif normal-case tracking-normal font-medium",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs tracking-wide",
  md: "px-6 py-3 text-sm tracking-wide",
  lg: "px-8 py-3.5 text-sm tracking-wider",
};

const roundedClasses = {
  md: "rounded-md",
  xl: "rounded-2xl",
  full: "rounded-full",
} as const;

/** Three texture rays on the top-right outer corner of the button. */
function BorderSparkle({ color = "gold" }: { color?: "gold" | "white" }) {
  const stroke = color === "white" ? "#ffffff" : "#c19a6b";

  return (
    <svg
      className="pointer-events-none absolute -right-2 -top-2 h-7 w-7 overflow-visible"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden
    >
      <path
        d="M14 2 L22 10"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M18 2.5 L24 8.5"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M22.5 5 L26.5 12"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Button({
  variant = "gold",
  size = "md",
  className,
  children,
  href,
  type = "button",
  disabled,
  sparkle = false,
  sparkleColor = "gold",
  rounded = "md",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "relative inline-flex items-center justify-center font-semibold uppercase transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-md disabled:opacity-50 disabled:pointer-events-none",
    roundedClasses[rounded],
    variantClasses[variant],
    sizeClasses[size],
    variant === "cream" && size === "lg" && "px-10 py-4 text-xl",
    className,
  );

  const content = (
    <>
      {children}
      {sparkle ? <BorderSparkle color={sparkleColor} /> : null}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  );
}
