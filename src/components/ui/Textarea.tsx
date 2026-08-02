import { cn } from "@/utils/cn";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "w-full resize-none rounded-md border border-navy/15 bg-white px-4 py-3 text-sm text-navy placeholder:text-muted/70 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30",
        className,
      )}
      {...props}
    />
  );
}
