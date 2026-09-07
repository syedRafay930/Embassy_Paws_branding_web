// src/features/quote/components/StepTwoPet.tsx
import { QuoteFormData } from "@/types/quote";
import { Button, Select } from "@/components/ui";

type Props = {
  formData: QuoteFormData;
  errors: Partial<Record<keyof QuoteFormData, string>>; // Naya prop
  updateForm: (data: Partial<QuoteFormData>) => void;
  onNext: () => void;
  onPrev: () => void;
  validateStep: () => boolean; // Validation check prop
};

// Breed Options Maps
const dogBreeds = [
  { label: "German Shepherd", value: "German Shepherd" },
  { label: "Labrador Retriever", value: "Labrador Retriever" },
  { label: "Golden Retriever", value: "Golden Retriever" },
  { label: "Pomeranian", value: "Pomeranian" },
  { label: "Bulldog", value: "Bulldog" },
  { label: "Siberian Husky", value: "Siberian Husky" },
  { label: "Beagle", value: "Beagle" },
  { label: "Dachshund", value: "Dachshund" },
  { label: "Chihuahua", value: "Chihuahua" },
  { label: "Mixed Breed (Desi)", value: "Mixed Breed (Desi)" },
  { label: "Other", value: "Other" },
];

const catBreeds = [
  { label: "Persian", value: "Persian" },
  { label: "Siamese", value: "Siamese" },
  { label: "British Shorthair", value: "British Shorthair" },
  { label: "Russian Blue", value: "Russian Blue" },
  { label: "Bengal", value: "Bengal" },
  { label: "Ragdoll", value: "Ragdoll" },
  { label: "Mixed Breed (Desi)", value: "Mixed Breed (Desi)" },
  { label: "Other", value: "Other" },
];

export function StepTwoPet({ formData, errors, updateForm, onNext, onPrev, validateStep }: Props) {
  // Pet Type change hone par breed reset kar dena behtar hai
  const handlePetTypeChange = (type: string) => {
    updateForm({ petType: type, petBreed: "" });
  };

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
        
        {/* Number of Pets */}
        <Select
          label="Number of Pets"
          required
          value={formData.numberOfPets}
          onChange={(val) => updateForm({ numberOfPets: val })}
          error={errors.numberOfPets} // Error prop attach kar diya
          options={[
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3+", value: "3+" },
          ]}
        />

        {/* Pet Type */}
        <Select
          label="Pet Type"
          required
          placeholder="Select Pet Type"
          value={formData.petType}
          onChange={handlePetTypeChange}
          error={errors.petType}
          options={[
            { label: "Dog", value: "Dog" },
            { label: "Cat", value: "Cat" },
            { label: "Birds", value: "Birds" },
            { label: "Other", value: "Other" },
          ]}
        />

        {/* Pet Breed (Dynamic based on Pet Type) */}
        <Select
          label="Pet Breed"
          required
          placeholder={formData.petType ? "Select Pet Breed" : "Please select Pet Type first"}
          value={formData.petBreed}
          onChange={(val) => updateForm({ petBreed: val })}
          error={errors.petBreed}
          options={
            formData.petType === "Dog"
              ? dogBreeds
              : formData.petType === "Cat"
              ? catBreeds
              : []
          }
        />

        {/* Pet Age */}
        <Select
          label="Pet Age"
          required
          placeholder="Select Pet Age"
          value={formData.petAge}
          onChange={(val) => updateForm({ petAge: val })}
          error={errors.petAge}
          options={[
            { label: "Less than 1 year", value: "< 1" },
            { label: "1-3 years", value: "1-3" },
            { label: "3-5 years", value: "3-5" },
            { label: "5+ years", value: ">5" },
          ]}
        />

      </div>

      <div className="flex justify-between mt-4">
        <button 
          onClick={onPrev} 
          className="px-6 py-2.5 rounded-xl border border-gray-200 text-navy font-bold hover:bg-gray-50 transition"
        >
          Back
        </button>
        <Button onClick={handleNextClick} variant="gold">
          Next
        </Button>
      </div>
    </div>
  );
}