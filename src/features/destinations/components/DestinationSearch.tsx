"use client";

import { Input } from "@/components/ui"; 
import { FadeIn } from "@/components/ui/animations/FadeIn";

export function DestinationSearch() {
  return (
    <FadeIn direction="up" delay={0.5} className="relative z-50">
      <div className="relative z-30 -mt-8 flex justify-center px-4 sm:-mt-10 lg:-mt-12">
        <div className="flex w-full max-w-4xl flex-col gap-3 rounded-2xl bg-white p-3 shadow-xl sm:flex-row sm:items-center sm:rounded-full sm:p-4">
          
          <div className="flex flex-1 items-center">
            <Input 
              type="text" 
              placeholder="From (e.g. Chicago)" 
              className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 text-sm text-navy outline-none sm:rounded-full sm:py-2"
            />
          </div>

          <div className="flex flex-1 items-center">
            <Input 
              type="text" 
              placeholder="To (e.g. Madrid)" 
              className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 text-sm text-navy outline-none sm:rounded-full sm:py-2"
            />
          </div>

          <button className="whitespace-nowrap rounded-xl bg-navy px-8 py-3 text-sm font-semibold text-white transition hover:bg-navy-deep sm:rounded-full sm:py-3">
            Search Route
          </button>
        </div>
      </div>
    </FadeIn>
  );
}