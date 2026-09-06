import { QuoteFormData } from "@/types/quote";
import { Button, Input } from "@/components/ui"; 
import { PhoneInput } from "@/components/ui/PhoneInput";

type Props = {
  formData: QuoteFormData;
  errors: Partial<Record<keyof QuoteFormData, string>>; 
  updateForm: (data: Partial<QuoteFormData>) => void;
  onNext: () => void;
  validateStep: () => boolean; // Yeh prop yahan add karna zaroori tha
};

export function StepOnePersonal({ formData, errors, updateForm, onNext, validateStep }: Props) {
  
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

      <div className="flex flex-col gap-4 mt-2">
        
        {/* Full Name Field */}
        <div>
          <label className="text-xs font-semibold text-navy mb-1 block">
            Full Name <span className="text-red-500">*</span>
          </label>
          <Input 
            required
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(e) => updateForm({ fullName: e.target.value })}
            className={errors.fullName ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""}
          />
          {/* Inline Error Message */}
          {errors.fullName && <p className="mt-1 text-xs font-medium text-red-500">{errors.fullName}</p>}
        </div>
        
        {/* Mobile Number Field */}
        <div>
          <label className="text-xs font-semibold text-navy mb-1 block">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <PhoneInput 
            value={formData.mobileNumber} 
            onChange={(val) => updateForm({ mobileNumber: val })} 
            error={!!errors.mobileNumber} 
          />
          {/* Inline Error Message */}
          {errors.mobileNumber && <p className="mt-1 text-xs font-medium text-red-500">{errors.mobileNumber}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label className="text-xs font-semibold text-navy mb-1 block">
            Email <span className="text-red-500">*</span>
          </label>
          <Input 
            type="email"
            required
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) => updateForm({ email: e.target.value })}
            className={errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""}
          />
          {/* Inline Error Message */}
          {errors.email && <p className="mt-1 text-xs font-medium text-red-500">{errors.email}</p>}
        </div>

      </div>

      <div className="flex justify-end mt-4">
        {/* Yahan onNext ki jagah handleNextClick laga diya */}
        <Button onClick={handleNextClick} variant="gold">
          Next
        </Button>
      </div>
    </div>
  );
}