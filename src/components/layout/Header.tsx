"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  const isOpen = useAppSelector((state) => state.ui.isMobileNavOpen);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 24);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4 sm:pt-5">
      <Container>
        <div
          className={cn(
            "flex items-center justify-between gap-3 rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-5 lg:px-6",
            "backdrop-blur-2xl backdrop-saturate-150",
            isScrolled
              ? "border-white/25 bg-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.18)]"
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
              className="h-8 w-auto sm:h-9"
            />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {MAIN_NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/95 transition hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={ROUTES.LOGIN}
              className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/95 transition hover:text-gold"
            >
              Login
            </a>
            <Button
              href={ROUTES.CONTACT}
              variant="gold"
              size="sm"
              rounded="full"
              className="px-5 normal-case tracking-normal"
            >
              Request a quote
            </Button>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur lg:hidden"
            onClick={() => dispatch(toggleMobileNav())}
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={cn(
                  "h-0.5 w-full bg-white transition",
                  isOpen && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-white transition",
                  isOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-white transition",
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
          isOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <Container>
          <div className="rounded-3xl border border-white/20 bg-white/15 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-2xl">
            {MAIN_NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-xl px-3 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/15"
                onClick={() => dispatch(setMobileNavOpen(false))}
              >
                {item.label}
              </a>
            ))}
            <a
              href={ROUTES.LOGIN}
              className="mt-1 block rounded-xl px-3 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/15"
              onClick={() => dispatch(setMobileNavOpen(false))}
            >
              Login
            </a>
            <Button
              href={ROUTES.CONTACT}
              variant="gold"
              rounded="full"
              className="mt-2 w-full normal-case tracking-normal"
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
