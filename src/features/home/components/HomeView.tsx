import { Footer, Header } from "@/components/layout";
import { AssessmentSection } from "./AssessmentSection";
import { CategoriesSection } from "./CategoriesSection";
import { CtaBannerSection } from "./CtaBannerSection";
import { DevicePortalSection } from "./DevicePortalSection";
import { FaqQuoteSection } from "./FaqQuoteSection";
import { Hero } from "./Hero";
import { ImpactStatsSection } from "./ImpactStatsSection";
import { IMPACT_STATS } from "../data";
import { KnowUsSection } from "./KnowUsSection";
import { ResourcesSection } from "./ResourcesSection";
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
        <ImpactStatsSection stats={IMPACT_STATS} />
        <ResourcesSection />
        <CategoriesSection />
        <CtaBannerSection />
        <ReviewsSection />
        <FaqQuoteSection />
      </main>
      <Footer />
    </>
  );
}
