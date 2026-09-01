import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";

type BlogCardProps = {
  id: string; // <-- Yeh naya prop add kiya hai routing ke liye
  category: string;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  className?: string;
};

export function BlogCard({ id, category, title, description, image, date, readTime, className }: BlogCardProps) {
  return (
    // Link component card ko clickable banayega aur dynamic page par le jayega
    <Link href={`/blogs/${id}`} className="block h-full outline-none">
      <article 
        className={cn(
          "group flex h-full flex-col rounded-[1.5rem] border border-black/5 bg-[#F5EFE6] p-2 sm:p-2.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl", 
          className
        )}
      >
        <div className="relative aspect-[1.4/1] w-full shrink-0 overflow-hidden rounded-[1rem]">
          
          <div className="absolute left-0 top-3 z-20 rounded-r-full bg-[#F5EFE6] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[#C29E75] shadow-sm sm:px-4 sm:text-[10px]">
            {category}
          </div>
          
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          <div className="absolute bottom-0 left-0 z-10 w-[95%] rounded-tr-[1.25rem] bg-[#F5EFE6] pr-4 pt-3 sm:w-[92%] lg:w-[94%] sm:pt-4">
            <div 
              className="absolute -right-4 bottom-0 h-4 w-4 rounded-bl-[1rem] bg-transparent shadow-[-8px_8px_0_0_#F5EFE6]" 
              aria-hidden="true" 
            />
            <h3 className="font-serif text-[1.05rem] font-bold leading-tight text-navy sm:text-[1.15rem] lg:text-[1.25rem]">
              {title}
            </h3>
          </div>
        </div>
        
        <div className="flex flex-1 flex-col px-1 pb-2 pt-1 sm:px-2 sm:pb-3">
          <p className="line-clamp-2 text-[13px] leading-relaxed text-navy/70 sm:text-sm">
            {description}
          </p>
          
          <div className="mt-auto pt-4 text-[11px] font-bold text-navy sm:pt-5 sm:text-[13px]">
            {date} <span className="mx-1 text-[#C29E75]">•</span> {readTime}
          </div>
        </div>
      </article>
    </Link>
  );
}