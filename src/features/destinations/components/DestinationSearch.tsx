import { Container } from "@/components/ui";

export function DestinationSearch() {
  return (
    <div className="relative z-30 -mt-8 flex justify-center px-4 sm:-mt-10 lg:-mt-12">
      <div className="flex w-full max-w-4xl flex-col gap-3 rounded-2xl bg-white p-3 shadow-xl sm:flex-row sm:items-center sm:rounded-full sm:p-4">
        
        <div className="flex flex-1 items-center rounded-xl sm:rounded-full border border-gray-200 bg-gray-50 px-4 py-3 sm:py-2">
          <input 
            type="text" 
            placeholder="From (e.g. Chicago)" 
            className="w-full bg-transparent text-sm text-navy outline-none placeholder:text-navy/40"
          />
        </div>

        <div className="flex flex-1 items-center rounded-xl sm:rounded-full border border-gray-200 bg-gray-50 px-4 py-3 sm:py-2">
          <input 
            type="text" 
            placeholder="To (e.g. Madrid)" 
            className="w-full bg-transparent text-sm text-navy outline-none placeholder:text-navy/40"
          />
        </div>

        <button className="whitespace-nowrap rounded-xl sm:rounded-full bg-navy px-8 py-3 text-sm font-semibold text-white transition hover:bg-navy-deep sm:py-3">
          Search Route
        </button>
      </div>
    </div>
  );
}