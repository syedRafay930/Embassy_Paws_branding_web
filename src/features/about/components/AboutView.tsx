import { Footer, Header } from "@/components/layout";
import { AboutHeroSection } from "./AboutHeroSection";
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
      </main>
      <Footer />
    </>
  );
}
