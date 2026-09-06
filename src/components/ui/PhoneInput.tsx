// src/components/ui/PhoneInput.tsx
"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { cn } from "@/utils/cn";
import { Input } from "./index"; // Aapke Input component ka path (adjust if needed)
import countryData from "@/utils/countrycode.json";

// JSON data ko type assign kar rahay hain
type Country = {
  name: string;
  code: string;
  emoji: string;
  dial_code: string;
  phoneLength: number[];
};

const COUNTRIES = countryData as Country[];

type PhoneInputProps = {
  value: string;
  onChange: (value: string) => void;
  error?: boolean; // Agar error state dikhani ho
};

export function PhoneInput({ value, onChange, error }: PhoneInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  
  // Default country Pakistan (PK) set kar rahay hain, agar na mile toh list ka pehla country
  const defaultCountry = COUNTRIES.find((c) => c.code === "PK") || COUNTRIES[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Dropdown ke bahar click karne par usay band karna
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Country search filter
  const filteredCountries = useMemo(() => {
    if (!search) return COUNTRIES;
    return COUNTRIES.filter((c) => 
      c.name.toLowerCase().includes(search.toLowerCase()) || 
      c.dial_code.includes(search)
    );
  }, [search]);

  // Number input handler jo phoneLength restrict karega
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = e.target.value.replace(/\D/g, ""); // Sirf numbers allow honge
    
    // JSON mein phoneLength array hai, hum pehli length utha rahe hain
    const maxLength = selectedCountry.phoneLength[0] || 15; // fallback length
    
    if (num.length <= maxLength) {
      onChange(`${selectedCountry.dial_code} ${num}`);
    }
  };

  // State value mein se dial code hata kar sirf number dikhane ke liye
  const displayValue = value.replace(selectedCountry.dial_code, "").trim();

  return (
    <div className="relative w-full flex gap-2" ref={dropdownRef}>
      
      {/* LEFT SIDE: Country Dropdown Trigger (Styled exactly like your Input component) */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex h-full items-center gap-1.5 rounded-md border bg-white px-3 py-3 text-sm transition outline-none",
            "border-navy/15 focus:border-gold focus:ring-2 focus:ring-gold/30 hover:border-navy/30",
            isOpen && "border-gold ring-2 ring-gold/30"
          )}
        >
          <span className="text-lg leading-none">{selectedCountry.emoji}</span>
          <span className="font-medium text-navy">{selectedCountry.dial_code}</span>
          <svg className={cn("w-3.5 h-3.5 text-navy/50 transition-transform", isOpen && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute left-0 top-full z-50 mt-1.5 w-[280px] rounded-md border border-navy/15 bg-white shadow-xl animate-in fade-in zoom-in-95 duration-150 flex flex-col">
            
            {/* Search Bar */}
            <div className="p-2 border-b border-navy/10">
              <input
                type="text"
                placeholder="Search country..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onClick={(e) => e.stopPropagation()} // Click karne par dropdown band na ho
                className="w-full rounded bg-gray-50 border border-navy/10 px-2.5 py-2 text-xs text-navy outline-none focus:border-gold transition"
              />
            </div>

            {/* Country List */}
            <div className="max-h-56 overflow-y-auto p-1.5 scrollbar-thin scrollbar-thumb-gray-200">
              {filteredCountries.length === 0 ? (
                <div className="p-3 text-center text-xs text-navy/50">No country found</div>
              ) : (
                filteredCountries.map((country: any) => (
                  <button
                    key={country._id || country.code}
                    type="button"
                    onClick={() => {
                      setSelectedCountry(country);
                      onChange(`${country.dial_code} `); // Country change hotay hi format update
                      setIsOpen(false);
                      setSearch(""); // Search reset
                    }}
                    className={cn(
                      "w-full flex items-center justify-between rounded px-2.5 py-2 text-sm transition-colors text-left",
                      selectedCountry.code === country.code ? "bg-gold/15 font-semibold text-navy" : "text-navy hover:bg-gray-50"
                    )}
                  >
                    <span className="flex items-center gap-2 truncate pr-3">
                      <span className="text-base leading-none">{country.emoji}</span>
                      <span className="truncate">{country.name}</span>
                    </span>
                    <span className="text-navy/50 text-xs shrink-0">{country.dial_code}</span>
                  </button>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* RIGHT SIDE: Aapka Apna Custom Input Component */}
      <Input
        type="tel"
        placeholder={`Enter ${selectedCountry.phoneLength[0] || 10} digits`}
        value={displayValue}
        onChange={handleNumberChange}
        className={error ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""}
      />
      
    </div>
  );
}