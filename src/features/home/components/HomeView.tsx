import { Footer, Header } from "@/components/layout";
import { AboutSection } from "./AboutSection";
import { AppPromoSection } from "./AppPromoSection";
import { AssessmentSection } from "./AssessmentSection";
import { CategoriesSection } from "./CategoriesSection";
import { CtaBannerSection } from "./CtaBannerSection";
import { FaqQuoteSection } from "./FaqQuoteSection";
import { FeaturesSection } from "./FeaturesSection";
import { Hero } from "./Hero";
import { ImpactStatsSection } from "./ImpactStatsSection";
import { ReviewsSection } from "./ReviewsSection";
import { ServicesSection } from "./ServicesSection";
import { TrustSection } from "./TrustSection";

export function HomeView() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AssessmentSection />
        <AboutSection />
        <ServicesSection />
        <TrustSection />
        <AppPromoSection />
        <ImpactStatsSection />
        <FeaturesSection />
        <CategoriesSection />
        <CtaBannerSection />
        <ReviewsSection />
        <FaqQuoteSection />
      </main>
      <Footer />
    </>
  );
}
