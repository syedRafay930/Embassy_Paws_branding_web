import Image from "next/image";
import { Button, Container } from "@/components/ui";
import { ROUTES } from "@/constants";

export function CtaBannerSection() {
  return (
    <section className="relative overflow-hidden bg-orange py-10 sm:py-12">
      <Image
        src="/paw-steps.png"
        alt=""
        width={140}
        height={90}
        className="pointer-events-none absolute right-10 top-4 opacity-40 brightness-0 invert"
        aria-hidden
      />
      <Image
        src="/Bones.png"
        alt=""
        width={70}
        height={70}
        className="pointer-events-none absolute bottom-4 left-[40%] opacity-30 brightness-0 invert"
        aria-hidden
      />

      <Container className="relative grid items-center gap-8 md:grid-cols-[280px_1fr] lg:grid-cols-[340px_1fr]">
        <div className="relative mx-auto h-56 w-56 sm:h-64 sm:w-64 md:mx-0">
          <Image
            src="/cta-cat.png"
            alt="Cat ready for a journey with Embassy Paws"
            fill
            className="object-contain object-bottom drop-shadow-lg"
            sizes="280px"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Plan a Safe &amp; Stress-Free Journey for Your Pet
          </h2>
          <Button href={ROUTES.CONTACT} variant="navy" className="mt-6" size="lg">
            Explore
          </Button>
        </div>
      </Container>
    </section>
  );
}
