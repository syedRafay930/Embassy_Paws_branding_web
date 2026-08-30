import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";

type DestinationCardProps = {
  id: string;
  route: string;
  city: string;
  timeline: string;
  image: string;
  className?: string;
};

export function DestinationCard({ id, route, city, timeline, image, className }: DestinationCardProps) {
  return (
    <Link href={`/destinations/${id}`} className="group block outline-none">
      <article 
        className={cn(
          "relative flex aspect-[4/5] w-full flex-col overflow-hidden rounded-[1.5rem] bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl", 
          className
        )}
      >
        <Image
          src={image}
          alt={city}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Top Right Cutout Arrow */}
        <div className="absolute -right-1 -top-1 z-20 rounded-bl-[1.25rem] bg-white p-2.5 sm:p-3">
          {/* Inverse radius curve for bottom-left of the cutout */}
          <div className="absolute -bottom-4 right-0 h-4 w-4 rounded-tr-[1rem] bg-transparent shadow-[4px_-4px_0_0_#ffffff]" aria-hidden="true" />
          <div className="absolute -left-4 top-0 h-4 w-4 rounded-tr-[1rem] bg-transparent shadow-[4px_-4px_0_0_#ffffff]" aria-hidden="true" />
          
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-white transition group-hover:bg-gold-soft sm:h-9 sm:w-9">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>

        {/* Bottom Gradient Overlay & Text */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end bg-gradient-to-t from-navy/90 via-navy/40 to-transparent p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
            {route}
          </p>
          <h3 className="mt-1 font-serif text-2xl font-bold text-white sm:text-3xl">
            {city}
          </h3>
          
          <div className="mt-3 flex w-fit items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 backdrop-blur-md">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-white">
              <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
            </svg>
            <span className="text-[11px] font-semibold text-white sm:text-xs">
              {timeline}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}