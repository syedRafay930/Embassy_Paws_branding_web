"use client";

import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";

const STORAGE_KEY = "hasSeenNewsletterPopup";
const SHOW_DELAY_MS = 2000;

function EnvelopeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function ButtonSparkle() {
  return (
    <svg
      className="pointer-events-none absolute -right-2 -top-2 h-7 w-7 overflow-visible"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden
    >
      <path
        d="M14 2 L22 10"
        stroke="#0f2744"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M18 2.5 L24 8.5"
        stroke="#0f2744"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M22.5 5 L26.5 12"
        stroke="#0f2744"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      if (localStorage.getItem(STORAGE_KEY) === "true") return;
    } catch {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, SHOW_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  function closePopup() {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Ignore storage failures (private mode, etc.)
    }
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      try {
        localStorage.setItem(STORAGE_KEY, "true");
      } catch {
        // Ignore storage failures
      }
      setIsOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    closePopup();
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm sm:p-6"
      onClick={closePopup}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="newsletter-popup-title"
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-[#f4efeb] px-5 pb-8 pt-16 shadow-xl sm:px-10 sm:pb-10 sm:pt-24"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Floating bird — overlaps top edge */}
        <Image
          src="/bird-letter.png"
          alt=""
          width={220}
          height={165}
          className="pointer-events-none absolute left-1/2 top-0 z-10 h-auto w-28 -translate-x-1/2 -translate-y-[55%] object-contain sm:w-44 lg:w-48"
          priority
          aria-hidden
        />

        {/* Close */}
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close newsletter popup"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-navy/70 transition hover:bg-navy/5 hover:text-navy sm:right-5 sm:top-5"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="mx-auto max-w-xl text-center">
          <h2
            id="newsletter-popup-title"
            className="font-serif text-2xl font-bold text-navy sm:text-3xl lg:text-[2rem]"
          >
            Stay One Paw Ahead
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-navy/70 sm:text-[15px]">
            Receive expert relocation tips, destination guides, travel updates,
            and helpful resources to make your pet&apos;s journey as smooth as
            possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl">
          <label
            htmlFor="newsletter-email"
            className="mb-2 block text-left text-sm font-medium text-navy"
          >
            Email <span className="text-red-500">*</span>
          </label>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
            <div className="relative min-w-0 flex-1">
              <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-navy/35">
                <EnvelopeIcon />
              </span>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Enter your email address"
                className="h-12 w-full rounded-xl border border-navy/15 bg-white py-3 pl-11 pr-4 text-sm text-navy outline-none transition placeholder:text-navy/35 focus:border-gold focus:ring-2 focus:ring-gold/30"
              />
            </div>

            <div className="relative shrink-0 self-stretch sm:self-auto">
              <button
                type="submit"
                className="relative h-12 w-full rounded-xl bg-[#d4a84b] px-7 font-serif text-base font-semibold text-navy transition hover:bg-[#c99a3f] sm:w-auto"
              >
                Subscribe
              </button>
              <ButtonSparkle />
            </div>
          </div>

          <label className="mt-4 flex cursor-pointer items-start gap-3 text-left">
            <input
              type="checkbox"
              name="consent"
              defaultChecked
              className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-navy"
            />
            <span className="text-xs leading-relaxed text-navy/65 sm:text-[13px]">
              I&apos;d like to receive relocation tips, travel updates, and
              exclusive Embassy Paws news.
            </span>
          </label>
        </form>
      </div>
    </div>
  );
}
