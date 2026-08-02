import { Container, ImagePlaceholder, SectionHeading } from "@/components/ui";
import { FEATURE_GRID } from "../data";

export function FeaturesSection() {
  return (
    <section id="features" className="relative overflow-hidden bg-navy py-16 sm:py-24">
      <div className="pointer-events-none absolute -top-2 right-4 w-36 sm:right-16 sm:w-48 lg:w-56">
        <ImagePlaceholder
          label="Features – puppy peeking"
          className="h-36 w-full sm:h-44"
          rounded="xl"
        />
      </div>

      <Container className="relative">
        <SectionHeading
          title="Everything You Need, In One Place."
          tone="light"
          className="pr-28 sm:pr-40"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURE_GRID.map((feature, index) => (
            <article
              key={feature.title}
              id={feature.title === "Pet Taxi" ? "taxi" : feature.title === "Pet Relocation" ? "relocation" : undefined}
              className="rounded-2xl bg-cream p-6 transition hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-lg font-bold text-navy">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
