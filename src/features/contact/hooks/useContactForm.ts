// src/features/contact/hooks/useContactForm.ts
import { useState } from "react";
import { isRequired, isValidEmail } from "@/utils/validators";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function useContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  // Agar API se koi global error aye toh usko yahan save karenge
  const [apiError, setApiError] = useState(""); 

  const updateForm = (data: Partial<ContactFormData>) => {
    setForm((prev) => ({ ...prev, ...data }));
    const changedKey = Object.keys(data)[0] as keyof ContactFormData;
    if (errors[changedKey]) {
      setErrors((prev) => ({ ...prev, [changedKey]: undefined }));
    }
    setApiError(""); // Nayi typing pe purana api error clear kar dein
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!isRequired(form.name)) newErrors.name = "Name is required";
    if (!isRequired(form.email)) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!isRequired(form.phone)) newErrors.phone = "Phone number is required";
    if (!isRequired(form.message)) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    
    if (!validate()) return; 

    setLoading(true);
    setApiError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }
      
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" }); // Form clear
      
      setTimeout(() => setSuccess(false), 4000);
    } catch (error: any) {
      console.error("Submission failed", error);
      setApiError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { form, errors, loading, success, apiError, updateForm, handleSubmit };
}