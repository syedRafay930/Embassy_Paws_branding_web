// src/components/ui/Select.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/utils/cn";

export type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  label?: string;
  required?: boolean;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
};

export function Select({
  label,
  required,
  options,
  value,
  onChange,
  placeholder = "Select option",
  error,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Selected option ka label nikalne ke liye
  const selectedLabel = options.find((opt) => opt.value === value)?.label;

  // Bahar click karne par dropdown band ho jaye
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {label && (
        <label className="block text-xs font-semibold text-navy mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between rounded-xl border bg-white p-3 text-sm text-navy outline-none transition",
          error ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-gold",
          isOpen && "border-gold ring-1 ring-gold"
        )}
      >
        <span className={cn("truncate", !selectedLabel && "text-gray-400")}>
          {selectedLabel || placeholder}
        </span>
        <svg
          className={cn("w-4 h-4 text-gray-500 transition-transform duration-200", isOpen && "rotate-180")}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}

      {/* Dropdown Options List (Mobile Responsive Menu) */}
      {isOpen && (
        <div className="absolute z-50 mt-2 w-full max-h-60 overflow-y-auto rounded-xl border border-gray-100 bg-white p-1.5 shadow-xl animate-in fade-in zoom-in-95 duration-150">
          {options.length === 0 ? (
            <div className="px-3 py-2 text-xs text-gray-400">No options available</div>
          ) : (
            options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full text-left rounded-lg px-3 py-2.5 text-sm transition-colors",
                  value === opt.value ? "bg-gold/10 font-semibold text-navy" : "text-navy hover:bg-gray-50"
                )}
              >
                {opt.label}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}