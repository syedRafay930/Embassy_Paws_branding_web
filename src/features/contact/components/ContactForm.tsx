"use client";

import { Input, Button } from "@/components/ui";
import { PhoneInput } from "@/components/ui/PhoneInput";
// Textarea agar alag component hai toh usay bhi import karein, yahan native textarea ki misaal hai
import { useContactForm } from "../hooks/useContactForm";

export function ContactForm() {
  const { form, errors, loading, success, updateForm, handleSubmit } = useContactForm();

  return (
    <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
      
      {/* Header Section */}
      <div className="mb-6 text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-lg font-bold text-navy shadow-sm">
          EP
        </div>
        <h3 className="text-2xl font-bold text-navy">Get A Free Quote!</h3>
        <p className="mt-2 text-sm text-muted/80">
          Tell us about your pet&apos;s journey and we&apos;ll get back to you.
        </p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Name Field */}
        <div>
          <Input
            placeholder="Name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
            className={errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""}
          />
          {errors.name && <p className="mt-1 text-xs font-medium text-red-500">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <Input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => updateForm({ email: e.target.value })}
            className={errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""}
          />
          {errors.email && <p className="mt-1 text-xs font-medium text-red-500">{errors.email}</p>}
        </div>

        {/* Phone Field using your Custom PhoneInput */}
        <div>
          <PhoneInput
            value={form.phone}
            onChange={(val) => updateForm({ phone: val })}
            error={!!errors.phone}
          />
          {errors.phone && <p className="mt-1 text-xs font-medium text-red-500">{errors.phone}</p>}
        </div>

        {/* Message Field */}
        <div>
          <textarea
            rows={4}
            placeholder="Message"
            value={form.message}
            onChange={(e) => updateForm({ message: e.target.value })}
            className={`w-full rounded-md border bg-white px-4 py-3 text-sm text-navy placeholder:text-muted/70 outline-none transition focus:ring-2 ${
              errors.message 
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" 
                : "border-navy/15 focus:border-gold focus:ring-gold/30"
            }`}
          />
          {errors.message && <p className="mt-1 text-xs font-medium text-red-500">{errors.message}</p>}
        </div>

        {/* Success Message */}
        {success && (
          <div className="rounded-lg bg-emerald-50 p-3 text-center text-sm font-medium text-emerald-600">
            Thank you! We have received your request.
          </div>
        )}

        {/* Submit Button */}
        <Button 
          type="submit" 
          variant="gold" 
          className="w-full font-bold uppercase tracking-wide" 
          size="lg"
          disabled={loading}
        >
          {loading ? "SENDING..." : "SUBMIT"}
        </Button>
      </form>

    </div>
  );
}