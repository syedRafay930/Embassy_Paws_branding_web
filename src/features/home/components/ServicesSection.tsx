import Image from "next/image";
import { Button, Container } from "@/components/ui";
import { ROUTES } from "@/constants";
import { SERVICES } from "../data";

export function ServicesSection() {
  return (
    <section id="services" className="bg-gold py-10 lg:py-14">
      <Container>
        {/* Header — text stays centered; dog/bone push to outer edges */}
        <div className="relative text-center">
          <Image
            src="/services-header-dog.png"
            alt=""
            width={200}
            height={170}
            className="pointer-events-none absolute left-0 top-1/2 z-10 hidden h-auto w-28 -translate-y-1/2 object-contain sm:block sm:w-36 lg:left-2 lg:w-44 xl:left-4"
            aria-hidden
          />

          <div className="pointer-events-none absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 sm:block lg:right-2 xl:right-4">
            <Image
              src="/services-header-bone.png"
              alt=""
              width={140}
              height={110}
              className="h-auto w-24 rotate-[-20deg] object-contain mix-blend-screen sm:w-28 lg:w-36"
              aria-hidden
            />
            <span
              className="absolute -right-1 -top-2 text-base text-white sm:text-lg"
              aria-hidden
            >
              ✦
            </span>
            <span
              className="absolute -right-4 top-4 text-xs text-white sm:text-sm"
              aria-hidden
            >
              ✦
            </span>
          </div>

          <div className="mx-auto max-w-4xl px-4 sm:px-32 lg:px-40">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy">
              Sweetheart Care
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold leading-tight text-white lg:whitespace-nowrap lg:text-4xl sm:text-3xl">
              Excellence In Every Service
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
              From relocation to documentation, Embassy Paws delivers thoughtful
              care at every step —
              <br />
              so every journey feels safe, simple, and full of love.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              id={service.id === "relocation" ? "relocation" : undefined}
              className="rounded-[1.75rem] bg-white p-3 shadow-sm sm:p-4"
            >
              <div className="relative aspect-[16/11] overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 360px"
                />
              </div>

              <div className="px-1 pt-4 pb-1">
                <h3 className="font-serif text-lg font-bold text-gold sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-1 text-base font-bold text-navy">{service.price}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
                <Button
                  href={`#${service.anchor}`}
                  variant="navy"
                  size="sm"
                  rounded="xl"
                  className="mt-4 normal-case tracking-normal"
                >
                  Read More
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-8 flex justify-center">
          <Button
            href={ROUTES.SERVICES}
            variant="white"
            rounded="xl"
            sparkle
            sparkleColor="white"
            className="bg-white text-navy normal-case tracking-normal font-serif hover:bg-cream"
          >
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
