import { Footer, Header } from "@/components/layout";
import { CtaSection } from "@/features/about";
import { PricingHowItWorks } from "./PricingHowItWorks";
import { ServicesGrid } from "./ServicesGrid";
import { ServicesHeroSection } from "./ServicesHeroSection";

export function ServicesView() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <ServicesHeroSection />
        <ServicesGrid />
        <PricingHowItWorks />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
