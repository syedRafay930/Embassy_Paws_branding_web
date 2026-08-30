import Link from "next/link";
import { Container } from "@/components/ui";

function PawIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <ellipse cx="6.5" cy="7" rx="2.2" ry="2.8" />
      <ellipse cx="12" cy="5.2" rx="2.2" ry="2.8" />
      <ellipse cx="17.5" cy="7" rx="2.2" ry="2.8" />
      <ellipse cx="4.8" cy="12.2" rx="2" ry="2.5" />
      <path d="M12 10.2c-3.2 0-5.6 2.5-5.6 5.1 0 1.9 1.5 3.1 3.2 3.1.9 0 1.6-.3 2.4-.9.8.6 1.5.9 2.4.9 1.7 0 3.2-1.2 3.2-3.1 0-2.6-2.4-5.1-5.6-5.1z" />
    </svg>
  );
}

type HeroProps = {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
};

export function BlogDetailHero({ title, category, date, readTime, author }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden rounded-b-[2rem] bg-gold pt-28 sm:rounded-b-[2.5rem] lg:pt-32">
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/5 to-transparent" />

      {/* Decorative Watermark Paws */}
      <PawIcon className="absolute -left-12 -top-10 z-0 h-64 w-64 -rotate-12 text-black/10 sm:h-80 sm:w-80 lg:-left-16 lg:-top-16 lg:h-[28rem] lg:w-[28rem]" />
      <PawIcon className="absolute bottom-12 right-[15%] z-0 h-16 w-16 text-black/25 sm:bottom-16 lg:right-[20%] lg:h-20 lg:w-20" />

      <Container className="relative z-20 flex flex-col items-center text-center">
        {/* Bottom padding thori barha di hai taake image overlap karne par text hide na ho */}
        <div className="max-w-4xl pb-20 pt-4 sm:pb-24 sm:pt-8 lg:pb-32 lg:pt-10">
          
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/80 sm:text-[11px] lg:tracking-[0.2em]">
            <Link href="/" className="transition hover:text-white">Home</Link>
            {" / "}
            <Link href="/blogs" className="transition hover:text-white">Blogs</Link>
            {" / "}
            <span className="line-clamp-1 sm:inline">{title}</span>
          </p>

          <h1 className="mt-6 font-serif text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>

          <p className="mt-6 text-xs font-medium text-white/90 sm:text-sm">
            {category} <br className="sm:hidden" />
            <span className="hidden sm:inline"> • </span>
            {date} • {readTime} • By {author}
          </p>

        </div>
      </Container>
    </section>
  );
}