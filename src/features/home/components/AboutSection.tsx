import Image from "next/image";
import { Button, Container, ImagePlaceholder } from "@/components/ui";
import { ROUTES } from "@/constants";

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-16 sm:py-24">
      <Image
        src="/paw-steps.png"
        alt=""
        width={120}
        height={80}
        className="pointer-events-none absolute left-6 top-10 opacity-30 sm:left-16"
        aria-hidden
      />
      <Image
        src="/Bones.png"
        alt=""
        width={80}
        height={80}
        className="pointer-events-none absolute bottom-10 right-8 opacity-25 sm:right-20"
        aria-hidden
      />

      <Container className="relative grid items-center gap-8 lg:grid-cols-[1fr_1.1fr_1fr] lg:gap-6">
        <ImagePlaceholder
          label="About – person with dog by water"
          className="min-h-72 lg:min-h-[28rem]"
          rounded="xl"
        />

        <div className="animate-fade-in text-center lg:px-4">
          <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Making Every Pet Journey{" "}
            <span className="text-gold">Joyful, Safe</span> and Full of Love
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted sm:text-base">
            Embassy Paws was built for pet parents who refuse to leave love
            behind. From first consult to final arrival, we handle the details
            so you can focus on the reunion.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <p className="text-3xl font-extrabold text-gold sm:text-4xl">15k+</p>
              <p className="mt-1 text-sm font-medium text-navy">Happy Pets</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-gold sm:text-4xl">200+</p>
              <p className="mt-1 text-sm font-medium text-navy">Team Members</p>
            </div>
          </div>
          <Button href={ROUTES.ABOUT} variant="navy" className="mt-8">
            Explore
          </Button>
        </div>

        <ImagePlaceholder
          label="About – person with dog on beach"
          className="min-h-72 lg:min-h-[28rem]"
          rounded="xl"
        />
      </Container>
    </section>
  );
}
