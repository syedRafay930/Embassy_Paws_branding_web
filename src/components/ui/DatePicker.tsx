// src/components/ui/DatePicker.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/utils/cn";

type DatePickerProps = {
  value: string; // Format: "YYYY-MM-DD"
  onChange: (value: string) => void;
};

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function DatePicker({ value, onChange }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openUpwards, setOpenUpwards] = useState(true); // Nayi state direction ke liye
  const dropdownRef = useRef<HTMLDivElement>(null);

  const initialDate = value ? new Date(value) : new Date();
  const [currentMonth, setCurrentMonth] = useState(initialDate);

  // Dropdown band karne aur direction check karne ka logic
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Jab calendar khule, check kare ke screen mein neechay jagah hai ya nahi
//   useEffect(() => {
//     if (isOpen && dropdownRef.current) {
//       const rect = dropdownRef.current.getBoundingClientRect();
//       // Agar neechay 350px (calendar ki height) ki jagah nahi hai, toh upar kholo
//       if (rect.bottom + 350 > window.innerHeight) {
//         setOpenUpwards(true);
//       } else {
//         setOpenUpwards(false);
//       }
//     }
//   }, [isOpen]);

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const blanks = Array.from({ length: firstDayOfMonth }, () => null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const handleDateSelect = (day: number) => {
    const formattedMonth = String(month + 1).padStart(2, "0");
    const formattedDay = String(day).padStart(2, "0");
    onChange(`${year}-${formattedMonth}-${formattedDay}`);
    setIsOpen(false);
  };

  const displayValue = value
    ? new Date(value).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    : "";

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Trigger Input */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between rounded-md border bg-white px-4 py-3 text-sm cursor-pointer transition outline-none",
          isOpen ? "border-gold ring-2 ring-gold/30" : "border-navy/15 hover:border-navy/30",
          !displayValue && "text-muted/70"
        )}
      >
        <span className={displayValue ? "text-navy" : "text-gray-400"}>
          {displayValue || "Select a date"}
        </span>
        <svg className="h-5 w-5 text-navy/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>

      {/* Custom Calendar Dropdown */}
      {isOpen && (
        <div 
          className={cn(
            "absolute left-0 z-50 w-[320px] rounded-xl border border-navy/15 bg-white p-4 shadow-xl animate-in fade-in zoom-in-95 duration-200",
            openUpwards ? "bottom-full mb-1.5" : "top-full mt-1.5" // Dynamic Direction Class
          )}
        >
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-4">
            <button 
              type="button" 
              onClick={handlePrevMonth}
              className="p-1.5 rounded-md text-navy hover:bg-gray-100 transition"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <div className="font-bold text-navy">
              {MONTHS[month]} {year}
            </div>
            <button 
              type="button" 
              onClick={handleNextMonth}
              className="p-1.5 rounded-md text-navy hover:bg-gray-100 transition"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {DAYS.map((d) => (
              <div key={d} className="text-center text-xs font-semibold text-navy/50">
                {d}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {blanks.map((_, i) => (
              <div key={`blank-${i}`} className="h-9 w-9" />
            ))}
            {days.map((day) => {
              const currentDateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
              const isSelected = value === currentDateString;
              const isToday = new Date().toISOString().split("T")[0] === currentDateString;

              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => handleDateSelect(day)}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full text-sm transition-colors",
                    isSelected
                      ? "bg-gold text-navy font-bold shadow-sm" 
                      : isToday
                      ? "bg-navy/5 font-semibold text-navy hover:bg-navy/10"
                      : "text-navy hover:bg-gray-100"
                  )}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}