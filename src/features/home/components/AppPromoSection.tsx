import { Container, ImagePlaceholder } from "@/components/ui";
import { APP_FEATURES } from "../data";

export function AppPromoSection() {
  return (
    <section className="bg-gold py-16 sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
            Your Pet&apos;s Journey Open On Your Device
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-navy/80 sm:text-base">
            Manage bookings, documents, and live updates from your phone or
            laptop — wherever your next adventure takes you.
          </p>
          <ul className="mt-8 space-y-3">
            {APP_FEATURES.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-sm font-medium text-navy sm:text-base"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-navy" aria-hidden />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <ImagePlaceholder
          label="App – phone and laptop mockups"
          className="min-h-72 w-full sm:min-h-96"
          rounded="xl"
        />
      </Container>
    </section>
  );
}
