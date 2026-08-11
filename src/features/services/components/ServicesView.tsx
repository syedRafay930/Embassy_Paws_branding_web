import { Footer, Header } from "@/components/layout";
import { ServicesHeroSection } from "./ServicesHeroSection";

export function ServicesView() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <ServicesHeroSection />
      </main>
      <Footer />
    </>
  );
}
