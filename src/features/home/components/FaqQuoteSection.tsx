"use client";

import { Container, SectionHeading } from "@/components/ui";
import { toggleFaqIndex, useAppDispatch, useAppSelector } from "@/store";
import { FAQS } from "../data";
import { cn } from "@/utils/cn";
import { ContactForm } from "@/features/contact/components/ContactForm"; 
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/ui/animations/Stagger";

export function FaqQuoteSection() {
  const dispatch = useAppDispatch();
  const openFaqIndex = useAppSelector((state) => state.ui.openFaqIndex);

  return (
    <section id="faq" className="bg-navy py-16 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        
        {/* Left Side: FAQs */}
        <div>
          <FadeIn direction="up">
            <SectionHeading
              title="Frequently Asked Questions"
              align="left"
              tone="light"
              className="mb-8"
            />
          </FadeIn>
          
          <StaggerContainer delayChildren={0.2} className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <StaggerItem key={faq.question}>
                  <div
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
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Right Side: Contact Form */}
        <FadeIn direction="left" delay={0.3} id="contact">
          <ContactForm />
        </FadeIn>
        
      </Container>
    </section>
  );
}