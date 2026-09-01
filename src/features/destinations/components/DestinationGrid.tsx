import { Container } from "@/components/ui";
import { DestinationCard } from "./DestinationCard";
import { DESTINATIONS } from "../data";

export function DestinationGrid() {
  return (
    <section className="bg-[#FAFAFA] pb-16 pt-16 sm:pb-20 sm:pt-20">
      <Container>
        {/* Grid Section */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {DESTINATIONS.map((dest) => (
            <DestinationCard
              key={dest.id}
              id={dest.id}
              route={dest.route}
              city={dest.city}
              timeline={dest.timeline}
              image={dest.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}