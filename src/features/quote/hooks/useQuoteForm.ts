// src/features/quote/hooks/useQuoteForm.ts
import { useState } from "react";
import { QuoteFormData } from "@/types/quote";
import { isRequired, isValidEmail } from "@/utils/validators";

const initialData: QuoteFormData = {
  fullName: "", mobileNumber: "", email: "",
  numberOfPets: "1", petType: "", petBreed: "", petAge: "",
  fromCountry: "", fromState: "", fromCity: "",
  toCountry: "", toState: "", toCity: "", relocationDate: ""
};

export function useQuoteForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>(initialData);
  
  // Errors ki state
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);
  
  const updateForm = (data: Partial<QuoteFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    
    // Jab user type kare toh uss specific field ka error remove kar dein
    const changedKey = Object.keys(data)[0] as keyof QuoteFormData;
    if (errors[changedKey]) {
      setErrors((prev) => ({ ...prev, [changedKey]: undefined }));
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setFormData(initialData);
    setErrors({});
  };

  // Step 1 Validation
  const validateStepOne = (): boolean => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};
    
    if (!isRequired(formData.fullName)) newErrors.fullName = "Full name is required";
    if (!isRequired(formData.mobileNumber)) newErrors.mobileNumber = "Mobile number is required";
    if (!isRequired(formData.email)) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Step 2 Validation
  const validateStepTwo = (): boolean => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};
    
    if (!isRequired(formData.numberOfPets)) newErrors.numberOfPets = "Required";
    if (!isRequired(formData.petType)) newErrors.petType = "Required";
    if (!isRequired(formData.petBreed)) newErrors.petBreed = "Required";
    if (!isRequired(formData.petAge)) newErrors.petAge = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Step 3 Validation
  const validateStepThree = (): boolean => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};
    
    if (!isRequired(formData.fromCountry)) newErrors.fromCountry = "Required";
    if (!isRequired(formData.fromState)) newErrors.fromState = "Required";
    if (!isRequired(formData.fromCity)) newErrors.fromCity = "Required";
    if (!isRequired(formData.toCountry)) newErrors.toCountry = "Required";
    if (!isRequired(formData.toState)) newErrors.toState = "Required";
    if (!isRequired(formData.toCity)) newErrors.toCity = "Required";
    if (!isRequired(formData.relocationDate)) newErrors.relocationDate = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { 
    currentStep, 
    formData, 
    errors, 
    nextStep, 
    prevStep, 
    updateForm, 
    resetForm, 
    setCurrentStep,
    validateStepOne,
    validateStepTwo,
    validateStepThree
  };
}