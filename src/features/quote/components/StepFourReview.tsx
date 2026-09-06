"use client";

import { useState } from "react";
import { QuoteFormData } from "@/types/quote";
import { Button } from "@/components/ui";

type Props = {
  formData: QuoteFormData;
  onPrev: () => void;
  onSuccess: () => void;
};

export function StepFourReview({ formData, onPrev, onSuccess }: Props) {
  const [loading, setLoading] = useState(false);
  const [isSuccessState, setIsSuccessState] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit quote request.");
      }

      // Celebration state active karein
      setIsSuccessState(true);

      // 600ms ka chota sa pause taake celebration animation feel ho, phir step 5 par jayein
      setTimeout(() => {
        onSuccess();
      }, 600);

    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className={`flex flex-col gap-6 transition-all duration-300 ${isSuccessState ? "scale-[0.99] opacity-90" : "scale-100 opacity-100"}`}>
      <div className="text-center">
        <p className="text-sm font-medium text-navy/70 animate-pulse">Talk to Experts</p>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy mt-1">
          {isSuccessState ? "Woohoo! 🎉" : "Great News!"}
        </h2>
      </div>

      {/* Summary Box */}
      <div className="bg-[#F8F3E6] border border-[#E5D5AE] rounded-xl p-5 flex flex-col sm:flex-row justify-between gap-4 mt-2 shadow-inner">
        <div className="flex flex-col gap-1 text-sm text-navy/80">
          <p>Route</p>
          <p>Estimated timeline</p>
          <p>Breed handling</p>
          <p>Recommended tier</p>
        </div>
        <div className="flex flex-col gap-1 text-sm font-semibold text-navy">
          <p>{formData.fromCity || "New York"} → {formData.toCity || "Madrid"}</p>
          <p>8-10 weeks</p>
          <p>Private path required</p>
          <p>Tier 3 - Private aviation</p>
        </div>
      </div>

      {/* Tiers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="border border-gold/40 rounded-xl p-4 bg-white shadow-sm">
          <h4 className="font-bold text-navy flex items-center gap-2"><span>📦</span> In-cabin</h4>
          <p className="text-xs text-navy/70 mt-2 mb-3">Small pet under the seat on your flight. Booked by phone.</p>
          <button type="button" className="text-xs font-semibold border border-gray-200 rounded px-3 py-1.5 hover:bg-gray-50">See airport security steps</button>
        </div>
        <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
          <h4 className="font-bold text-navy flex items-center gap-2"><span>✈️</span> Manifest cargo</h4>
          <p className="text-xs text-navy/70 mt-2 mb-3">Dedicated animal handling on its own air waybill — the professional standard.</p>
          <button type="button" className="text-xs font-semibold border border-gray-200 rounded px-3 py-1.5 hover:bg-gray-50">Size your travel crate</button>
        </div>
        <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
          <h4 className="font-bold text-navy flex items-center gap-2"><span>🛫</span> Private aviation</h4>
          <p className="text-xs text-navy/70 mt-2 mb-3">Pet flies in the cabin, all sizes. High-ticket premium tier.</p>
        </div>
      </div>

      {error && <p className="text-xs text-red-500 text-center font-medium animate-bounce">{error}</p>}

      <div className="flex justify-between mt-4">
        <button 
          type="button"
          onClick={onPrev} 
          disabled={loading}
          className="px-6 py-2.5 rounded-xl border border-gray-200 text-navy font-bold hover:bg-gray-50 disabled:opacity-50 transition"
        >
          Back
        </button>

        <Button 
          onClick={handleSubmit} 
          variant="gold" 
          className={`transition-all duration-300 ${isSuccessState ? "bg-emerald-600 text-white scale-105" : ""}`}
          disabled={loading}
        >
          {isSuccessState ? "Success! 🎉" : loading ? "Sending Email..." : "Submit Quote Request"}
        </Button>
      </div>
    </div>
  );
}