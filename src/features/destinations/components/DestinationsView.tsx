import { Header, Footer } from "@/components/layout";
import { DestinationHero } from "./DestinationHero";
import { DestinationSearch } from "./DestinationSearch";
import { DestinationGrid } from "./DestinationGrid";
import { DestinationCta } from "./DestinationCta"; // <-- Naya import

export function DestinationsView() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden bg-[#FAFAFA]">
        <DestinationHero />
        <DestinationSearch />
        <DestinationGrid />
        <DestinationCta /> 
      </main>
      <Footer />
    </>
  );
}