// src/features/quote/components/StepThreeRoute.tsx
import { QuoteFormData } from "@/types/quote";
import { Button, Input } from "@/components/ui"; 
import { DatePicker } from "@/components/ui/DatePicker";

type Props = {
  formData: QuoteFormData;
  errors: Partial<Record<keyof QuoteFormData, string>>; // Errors prop
  updateForm: (data: Partial<QuoteFormData>) => void;
  onNext: () => void;
  onPrev: () => void;
  validateStep: () => boolean; // Validation check prop
};

export function StepThreeRoute({ formData, errors, updateForm, onNext, onPrev, validateStep }: Props) {
  
  // Next dabane par pehle validate karein
  const handleNextClick = () => {
    if (validateStep()) {
      onNext();
    }
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center">
        <p className="text-sm font-medium text-navy/70">Talk to Experts</p>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy mt-1">Get Instant Free Quotation</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
        {/* FROM BOX */}
        <div className="bg-[#EAECEF] rounded-[1.25rem] p-4 flex flex-col gap-3 border border-[#D9DEE5]/50 shadow-sm">
          <h4 className="font-serif font-bold text-navy text-lg px-1">From</h4>
          
          <div>
            <Input 
              placeholder="Country (e.g. United States)" 
              value={formData.fromCountry} 
              onChange={(e) => updateForm({ fromCountry: e.target.value })} 
              className={errors.fromCountry ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""}
            />
            {errors.fromCountry && <p className="mt-1 text-xs font-medium text-red-500">{errors.fromCountry}</p>}
          </div>

          <div>
            <Input 
              placeholder="State (e.g. New York)" 
              value={formData.fromState} 
              onChange={(e) => updateForm({ fromState: e.target.value })} 
              className={errors.fromState ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""}
            />
            {errors.fromState && <p className="mt-1 text-xs font-medium text-red-500">{errors.fromState}</p>}
          </div>

          <div>
            <Input 
              placeholder="City (e.g. NYC)" 
              value={formData.fromCity} 
              onChange={(e) => updateForm({ fromCity: e.target.value })} 
              className={errors.fromCity ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""}
            />
            {errors.fromCity && <p className="mt-1 text-xs font-medium text-red-500">{errors.fromCity}</p>}
          </div>
        </div>
        
        {/* TO BOX */}
        <div className="bg-[#EAECEF] rounded-[1.25rem] p-4 flex flex-col gap-3 border border-[#D9DEE5]/50 shadow-sm">
          <h4 className="font-serif font-bold text-navy text-lg px-1">To</h4>
          
          <div>
            <Input 
              placeholder="Country (e.g. Spain)" 
              value={formData.toCountry} 
              onChange={(e) => updateForm({ toCountry: e.target.value })} 
              className={errors.toCountry ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""}
            />
            {errors.toCountry && <p className="mt-1 text-xs font-medium text-red-500">{errors.toCountry}</p>}
          </div>

          <div>
            <Input 
              placeholder="State (e.g. Madrid)" 
              value={formData.toState} 
              onChange={(e) => updateForm({ toState: e.target.value })} 
              className={errors.toState ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""}
            />
            {errors.toState && <p className="mt-1 text-xs font-medium text-red-500">{errors.toState}</p>}
          </div>

          <div>
            <Input 
              placeholder="City (e.g. Madrid City)" 
              value={formData.toCity} 
              onChange={(e) => updateForm({ toCity: e.target.value })} 
              className={errors.toCity ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""}
            />
            {errors.toCity && <p className="mt-1 text-xs font-medium text-red-500">{errors.toCity}</p>}
          </div>
        </div>
      </div>

      <div>
         <label className="text-xs font-semibold text-navy mb-1 block">
           Relocation Date <span className="text-red-500">*</span>
         </label>
         <DatePicker 
           value={formData.relocationDate} 
           onChange={(val) => updateForm({ relocationDate: val })} 
         />
         {errors.relocationDate && <p className="mt-1 text-xs font-medium text-red-500">{errors.relocationDate}</p>}
      </div>

      <div className="flex justify-between mt-2">
        <button 
          type="button" 
          onClick={onPrev} 
          className="px-6 py-2.5 rounded-xl border border-gray-200 text-navy font-bold hover:bg-gray-50 transition"
        >
          Back
        </button>
        {/* onClick mein handleNextClick laga diya */}
        <Button onClick={handleNextClick} variant="gold">
          Next
        </Button>
      </div>
    </div>
  );
}