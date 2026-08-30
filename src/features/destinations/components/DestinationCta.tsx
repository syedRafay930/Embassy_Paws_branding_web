import Image from "next/image";
import Link from "next/link";

// Custom SVG Bone Icon Component
function BoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-5 5c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c0 .28.22.5.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5l5-5Z" />
    </svg>
  );
}

export function DestinationCta() {
  return (
    // pb-24 ya pb-32 taake chotay dog ko overlap karne ki space milay
    <section className="bg-[#FAFAFA] pb-24 pt-10 sm:pb-32">
      
      {/* 
        Width made full to stretch across the entire screen
      */}
      <div className="relative w-full bg-navy">
        
        {/* Background Decorative Lines (Full Width Wrapper) */}
        <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 sm:h-56 sm:w-56 lg:h-72 lg:w-72">
          <svg viewBox="0 0 200 200" className="h-full w-full" fill="none" aria-hidden="true">
            <defs>
              <pattern id="diagonal-lines" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="8" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.4" />
              </pattern>
            </defs>
            <circle cx="160" cy="40" r="100" fill="url(#diagonal-lines)" />
          </svg>
        </div>

        {/* Inner Content Container */}
        <div className="relative mx-auto flex w-full max-w-[1440px] flex-col px-6 py-12 sm:px-12 lg:flex-row lg:items-center lg:px-24 lg:py-16 xl:px-32">
          
          {/* Banner Content */}
          <div className="relative z-20 w-full max-w-xl lg:w-3/5">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 sm:text-xs">
              Don't see your route?
            </p>
            
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              We cover 100+ routes across 87 countries.
            </h2>
            
            <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
              If your destination isn't listed, get in touch — chances are we've already relocated a pet there.
            </p>
            
            <div className="relative mt-8 inline-block">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-navy transition hover:bg-cream sm:text-base"
              >
                Ask about your route
              </Link>

              {/* Decorative Bone Icons (SVG directly in code) */}
              <div className="pointer-events-none absolute -bottom-10 -right-12 flex items-end gap-1 opacity-80 sm:-bottom-14 sm:-right-20">
                <BoneIcon className="h-8 w-8 -rotate-12 text-[#C29E75] sm:h-12 sm:w-12" />
                <BoneIcon className="mb-2 h-5 w-5 rotate-45 text-[#C29E75] sm:h-7 sm:w-7" />
              </div>
            </div>
          </div>

          {/* Jumping Dog Image (Responsive and bound to inner container) */}
          <div className="pointer-events-none absolute -bottom-12 -right-2 z-30 h-[180px] w-[180px] sm:-bottom-16 sm:right-4 sm:h-[260px] sm:w-[260px] lg:-bottom-20 lg:right-10 lg:h-[320px] lg:w-[320px] xl:-bottom-24 xl:right-20 xl:h-[380px] xl:w-[380px]">
            <Image
              src="/destinations/jumping-dog.png" 
              alt="Happy jumping dog"
              fill
              className="object-contain object-bottom lg:object-right-bottom"
            />
          </div>

        </div>
      </div>
    </section>
  );
}