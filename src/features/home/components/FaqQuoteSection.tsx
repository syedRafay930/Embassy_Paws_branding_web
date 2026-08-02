"use client";

import { useState } from "react";
import {
  Button,
  Container,
  Input,
  SectionHeading,
  Textarea,
} from "@/components/ui";
import { toggleFaqIndex, useAppDispatch, useAppSelector } from "@/store";
import { FAQS } from "../data";
import { cn } from "@/utils/cn";

export function FaqQuoteSection() {
  const dispatch = useAppDispatch();
  const openFaqIndex = useAppSelector((state) => state.ui.openFaqIndex);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <section id="faq" className="bg-navy py-16 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            title="Frequently Asked Questions"
            align="left"
            tone="light"
            className="mb-8"
          />
          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.question}
                  className={cn(
                    "overflow-hidden rounded-xl transition",
                    isOpen ? "bg-gold text-navy" : "bg-white/5 text-white",
                  )}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold sm:text-base"
                    aria-expanded={isOpen}
                    onClick={() => dispatch(toggleFaqIndex(index))}
                  >
                    <span>{faq.question}</span>
                    <span className="text-xl leading-none" aria-hidden>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <p className="px-5 pb-5 text-sm leading-relaxed text-navy/80">
                      {faq.answer}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        <div id="contact" className="rounded-2xl bg-white p-6 sm:p-8">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-lg font-bold text-navy">
              EP
            </div>
            <h3 className="text-2xl font-bold text-navy">Get A Free Quote!</h3>
            <p className="mt-2 text-sm text-muted">
              Tell us about your pet&apos;s journey and we&apos;ll get back to you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              required
            />
            <Input
              type="tel"
              placeholder="Phone number"
              value={form.phone}
              onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
            />
            <Textarea
              rows={4}
              placeholder="Message"
              value={form.message}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, message: e.target.value }))
              }
            />
            <Button type="submit" variant="gold" className="w-full" size="lg">
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
