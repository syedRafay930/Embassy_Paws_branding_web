import Image from "next/image";
import { Container } from "@/components/ui";
import { SERVICES_GRID } from "../data";

export function ServicesGrid() {
  return (
    <section className="bg-[#f7f3ea] py-16 lg:py-24">
      <Container className="relative">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {SERVICES_GRID.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col rounded-[1.5rem] bg-[#efe8da] p-4 sm:p-5"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="relative z-10 -mt-5 w-fit max-w-[90%] rounded-tr-xl bg-[#efe8da] pt-2 pr-4 sm:-mt-6">
                <h3 className="font-serif text-lg font-bold leading-tight text-[#112239]">
                  {service.title}
                </h3>
              </div>

              <p className="mt-1 text-sm font-bold text-[#d4a84b]">
                {service.price}
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-[#112239]/70">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <Image
          src="/Bones.svg"
          alt=""
          width={285}
          height={292}
          unoptimized
          className="pointer-events-none absolute top-1/2 -right-12 z-10 hidden h-auto w-24 -translate-y-1/2 lg:block"
          aria-hidden
        />
      </Container>
    </section>
  );
}
