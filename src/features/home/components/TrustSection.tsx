import { Button, Container, ImagePlaceholder } from "@/components/ui";
import { ROUTES } from "@/constants";
import { TRUST_POINTS } from "../data";

export function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-cream py-16 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div className="relative grid grid-cols-2 gap-4">
          <ImagePlaceholder
            label="Trust – woman with small dog"
            className="min-h-56 sm:min-h-72"
            rounded="xl"
          />
          <ImagePlaceholder
            label="Trust – person petting cat"
            className="mt-10 min-h-56 sm:min-h-72"
            rounded="xl"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Why Pet Parents Trust Us With Every Journey
          </h2>
          <ul className="mt-8 space-y-4">
            {TRUST_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-muted sm:text-base">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
          <Button href={ROUTES.ABOUT} variant="navy" className="mt-8">
            About Us
          </Button>
        </div>
      </Container>

      <div className="pointer-events-none absolute -right-4 bottom-8 hidden w-40 lg:block xl:right-8 xl:w-52">
        <ImagePlaceholder
          label="Trust – dog cutout"
          className="h-52 w-full"
          rounded="xl"
        />
      </div>
    </section>
  );
}
