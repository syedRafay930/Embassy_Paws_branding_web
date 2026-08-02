import { Button, Container, ImagePlaceholder, SectionHeading } from "@/components/ui";
import { ROUTES } from "@/constants";
import { SERVICES } from "../data";

export function ServicesSection() {
  return (
    <section id="services" className="bg-gold py-16 sm:py-20">
      <Container>
        <SectionHeading title="Excellence in Every Corner." tone="dark" />

        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              id={service.anchor === "boarding" && service.id === "boarding" ? "boarding" : undefined}
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <ImagePlaceholder
                label={`Service – ${service.title}`}
                className="h-48 w-full rounded-none"
                rounded="none"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <Button href={`#${service.anchor}`} variant="navy" size="sm" className="mt-5">
                  Book Now
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href={ROUTES.SERVICES} variant="navy">
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
