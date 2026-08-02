import { cn } from "@/utils/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-md border border-navy/15 bg-white px-4 py-3 text-sm text-navy placeholder:text-muted/70 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30",
        className,
      )}
      {...props}
    />
  );
}
