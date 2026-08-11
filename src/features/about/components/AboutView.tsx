import { Footer, Header } from "@/components/layout";
import { ImpactStatsSection } from "@/features/home";
import { ABOUT_IMPACT_STATS } from "../data";
import { AboutHeroSection } from "./AboutHeroSection";
import { CtaSection } from "./CtaSection";
import { OurStorySection } from "./OurStorySection";
import { TeamSection } from "./TeamSection";
import { ValuesSection } from "./ValuesSection";

export function AboutView() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <AboutHeroSection />
        <OurStorySection />
        <ValuesSection />
        <TeamSection />
        <ImpactStatsSection stats={ABOUT_IMPACT_STATS} />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
