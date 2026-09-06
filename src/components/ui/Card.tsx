import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";
export type CardProps = {
  title: string;
  description: string;
  image: string;
  href?: string; // Agar yeh pass karenge toh poora card clickable ho jayega
  category?: string; // Blog ke liye
  date?: string; // Blog ke liye
  readTime?: string; // Blog ke liye
  price?: string; // Services ke liye
  className?: string;
};

export function Card({
  title,
  description,
  image,
  href,
  category,
  date,
  readTime,
  price,
  className,
}: CardProps) {
  // Card ka inner structure
  const CardContent = (

    <article
      className={cn(
        "group flex h-full flex-col rounded-[1.5rem] bg-[#efe8da] p-4 sm:p-5 transition-transform duration-300 hover:scale-[1.02]",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
        {/* Category Badge for Blogs */}
        {category && (
          <div className="absolute left-0 top-3 z-20 rounded-r-full bg-[#efe8da] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[#C29E75] shadow-sm sm:px-4 sm:text-[10px]">
            {category}
          </div>
        )}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Overlapping Title Box */}
      <div className="relative z-10 -mt-5 w-fit max-w-[90%] rounded-tr-xl bg-[#efe8da] pr-4 pt-2 sm:-mt-6">
        <h3 className="font-serif text-lg font-bold leading-tight text-[#112239]">
          {title}
        </h3>
      </div>

      {/* Price for Services */}
      {price && (
        <p className="mt-1 text-sm font-bold text-[#d4a84b]">{price}</p>
      )}

      {/* Description */}
      <p
        className={cn(
          "mt-3 text-[13px] leading-relaxed text-[#112239]/70",
          !price && "line-clamp-2" // Blog descriptions ko 2 lines tak mehdood rakhega
        )}
      >
        {description}
      </p>

      {/* Footer for Blogs (Date & Read Time) */}
      {(date || readTime) && (
        <div className="mt-auto pt-4 text-[11px] font-bold text-[#112239] sm:pt-5 sm:text-[13px]">
          {date} {date && readTime && <span className="mx-1 text-[#C29E75]">•</span>} {readTime}
        </div>
      )}
    </article>
  );

  // Agar href prop mili hai toh Link wrap kardo taake routing chalay
  if (href) {
    return (
      <Link href={href} className="block h-full outline-none">
        {CardContent}
      </Link>
    );
  }

  // Warna simple article return kardo
  return CardContent;
}