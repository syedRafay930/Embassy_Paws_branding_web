import { Footer, Header } from "@/components/layout";
import { AssessmentSection } from "./AssessmentSection";
import { CategoriesSection } from "./CategoriesSection";
import { CtaBannerSection } from "./CtaBannerSection";
import { DevicePortalSection } from "./DevicePortalSection";
import { FaqQuoteSection } from "./FaqQuoteSection";
import { FeaturesSection } from "./FeaturesSection";
import { Hero } from "./Hero";
import { ImpactStatsSection } from "./ImpactStatsSection";
import { KnowUsSection } from "./KnowUsSection";
import { ReviewsSection } from "./ReviewsSection";
import { ServicesSection } from "./ServicesSection";
import { WhyChooseUsSection } from "./WhyChooseUsSection";

export function HomeView() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <AssessmentSection />
        <KnowUsSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <DevicePortalSection />
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
