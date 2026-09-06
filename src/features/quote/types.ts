// src/types/quote.ts

export interface QuoteFormData {
  // Step 1: Personal Info
  fullName: string;
  mobileNumber: string;
  email: string;

  // Step 2: Pet Info
  numberOfPets: string;
  petType: string;
  petBreed: string;
  petAge: string;

  // Step 3: Route Info
  fromCountry: string;
  fromState: string;
  fromCity: string;
  
  toCountry: string;
  toState: string;
  toCity: string;
  
  relocationDate: string;
}