// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { Button, Container } from "@/components/ui";
// import { MAIN_NAV, ROUTES } from "@/constants";
// import {
//   setMobileNavOpen,
//   toggleMobileNav,
//   useAppDispatch,
//   useAppSelector,
// } from "@/store";
// import { cn } from "@/utils/cn";

// export function Header() {
//   const dispatch = useAppDispatch();
//   const isOpen = useAppSelector((state) => state.ui.isMobileNavOpen);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     function onScroll() {
//       setIsScrolled(window.scrollY > 24);
//     }

//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header className="fixed inset-x-0 top-0 z-50 pt-4 sm:pt-5">
//       <Container>
//         <div
//           className={cn(
//             "flex items-center justify-between gap-3 rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-5 lg:px-6",
//             "backdrop-blur-2xl backdrop-saturate-150",
//             isScrolled
//               ? "border-white/25 bg-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.18)]"
//               : "border-white/20 bg-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
//           )}
//         >
//           <Link href={ROUTES.HOME} className="relative z-10 shrink-0">
//             <Image
//               src="/Logo.svg"
//               alt="Embassy Paws"
//               width={163}
//               height={40}
//               priority
//               className="h-8 w-auto sm:h-9"
//             />
//           </Link>

//           <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
//             {MAIN_NAV.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/95 transition hover:text-gold"
//               >
//                 {item.label}
//               </a>
//             ))}
//           </nav>

//           <div className="hidden items-center gap-4 lg:flex">
//             <a
//               href={ROUTES.LOGIN}
//               className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/95 transition hover:text-gold"
//             >
//               Login
//             </a>
//             <Button
//               href={ROUTES.CONTACT}
//               variant="gold"
//               size="sm"
//               rounded="full"
//               className="px-5 normal-case tracking-normal"
//             >
//               Request a quote
//             </Button>
//           </div>

//           <button
//             type="button"
//             aria-label={isOpen ? "Close menu" : "Open menu"}
//             aria-expanded={isOpen}
//             className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur lg:hidden"
//             onClick={() => dispatch(toggleMobileNav())}
//           >
//             <span className="sr-only">Menu</span>
//             <div className="flex w-5 flex-col gap-1.5">
//               <span
//                 className={cn(
//                   "h-0.5 w-full bg-white transition",
//                   isOpen && "translate-y-2 rotate-45",
//                 )}
//               />
//               <span
//                 className={cn(
//                   "h-0.5 w-full bg-white transition",
//                   isOpen && "opacity-0",
//                 )}
//               />
//               <span
//                 className={cn(
//                   "h-0.5 w-full bg-white transition",
//                   isOpen && "-translate-y-2 -rotate-45",
//                 )}
//               />
//             </div>
//           </button>
//         </div>
//       </Container>

//       <div
//         className={cn(
//           "absolute inset-x-0 top-full mt-2 transition lg:hidden",
//           isOpen ? "visible opacity-100" : "invisible opacity-0",
//         )}
//       >
//         <Container>
//           <div className="rounded-3xl border border-white/20 bg-white/15 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-2xl">
//             {MAIN_NAV.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="block rounded-xl px-3 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/15"
//                 onClick={() => dispatch(setMobileNavOpen(false))}
//               >
//                 {item.label}
//               </a>
//             ))}
//             <a
//               href={ROUTES.LOGIN}
//               className="mt-1 block rounded-xl px-3 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/15"
//               onClick={() => dispatch(setMobileNavOpen(false))}
//             >
//               Login
//             </a>
//             <Button
//               href={ROUTES.CONTACT}
//               variant="gold"
//               rounded="full"
//               className="mt-2 w-full normal-case tracking-normal"
//               onClick={() => dispatch(setMobileNavOpen(false))}
//             >
//               Request a quote
//             </Button>
//           </div>
//         </Container>
//       </div>
//     </header>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { Button, Container } from "@/components/ui";
import { MAIN_NAV, ROUTES } from "@/constants";
import {
  setMobileNavOpen,
  toggleMobileNav,
  useAppDispatch,
  useAppSelector,
} from "@/store";
import { cn } from "@/utils/cn";

export function Header() {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const isOpen = useAppSelector((state) => state.ui.isMobileNavOpen);
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > 653) {
        if (currentScrollY > lastScrollY.current) {
          setIsHidden(true); 
        } else {
          setIsHidden(false); 
        }
      } else {
        setIsHidden(false); 
      }

      lastScrollY.current = currentScrollY;
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed inset-x-0 top-0 z-50 pt-4 sm:pt-5 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
        isHidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <Container>
        <div
          className={cn(
            "flex items-center justify-between gap-3 rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-5 lg:px-6",
            "backdrop-blur-2xl backdrop-saturate-150",
            isScrolled
              ? "border-gray-200 bg-white/90 shadow-sm"
              : "border-white/20 bg-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
          )}
        >
          <Link href={ROUTES.HOME} className="relative z-10 shrink-0">
            <Image
              src="/Logo.svg"
              alt="Embassy Paws"
              width={163}
              height={40}
              priority
              className={cn("h-8 w-auto sm:h-9 transition-all duration-300", isScrolled ? "brightness-0" : "")} 
            />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {MAIN_NAV.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-[11px] font-semibold uppercase tracking-[0.14em] transition",
                    isActive ? "text-gold" : isScrolled ? "text-navy hover:text-gold" : "text-white/95 hover:text-gold"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href={ROUTES.LOGIN}
              className={cn(
                "text-[11px] font-semibold uppercase tracking-[0.14em] transition hover:text-gold",
                pathname === ROUTES.LOGIN ? "text-gold" : isScrolled ? "text-navy" : "text-white/95"
              )}
            >
              Login
            </Link>
            <Button
              href={ROUTES.CONTACT}
              variant="gold"
              size="sm"
              rounded="full"
              className="px-5 normal-case tracking-normal shadow-sm"
            >
              Request a quote
            </Button>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className={cn(
              "relative z-10 flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur lg:hidden transition-colors duration-300",
              isScrolled ? "border-gray-200 bg-gray-50 text-navy" : "border-white/30 bg-white/10 text-white"
            )}
            onClick={() => dispatch(toggleMobileNav())}
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={cn(
                  "h-0.5 w-full transition-all duration-300",
                  isScrolled ? "bg-navy" : "bg-white",
                  isOpen && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full transition-all duration-300",
                  isScrolled ? "bg-navy" : "bg-white",
                  isOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full transition-all duration-300",
                  isScrolled ? "bg-navy" : "bg-white",
                  isOpen && "-translate-y-2 -rotate-45",
                )}
              />
            </div>
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "absolute inset-x-0 top-full mt-2 transition lg:hidden",
          isOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-2",
        )}
      >
        <Container>
          <div className={cn(
            "rounded-3xl border p-4 shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-2xl transition-colors duration-300",
            isScrolled ? "bg-white/95 border-gray-200" : "bg-white/15 border-white/20"
          )}>
            {MAIN_NAV.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "block rounded-xl px-3 py-3 text-sm font-semibold uppercase tracking-wider transition-colors",
                    isActive ? "text-gold" : isScrolled ? "text-navy hover:bg-black/5" : "text-white hover:bg-white/15"
                  )}
                  onClick={() => dispatch(setMobileNavOpen(false))}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={ROUTES.LOGIN}
              className={cn(
                "mt-1 block rounded-xl px-3 py-3 text-sm font-semibold uppercase tracking-wider transition-colors",
                pathname === ROUTES.LOGIN ? "text-gold" : isScrolled ? "text-navy hover:bg-black/5" : "text-white hover:bg-white/15"
              )}
              onClick={() => dispatch(setMobileNavOpen(false))}
            >
              Login
            </Link>
            <Button
              href={ROUTES.CONTACT}
              variant="gold"
              rounded="full"
              className="mt-2 w-full normal-case tracking-normal shadow-sm"
              onClick={() => dispatch(setMobileNavOpen(false))}
            >
              Request a quote
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}