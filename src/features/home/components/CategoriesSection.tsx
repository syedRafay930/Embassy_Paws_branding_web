import Image from "next/image";
import Link from "next/link";
import { Button, Container } from "@/components/ui";
import { ROUTES } from "@/constants";

const CATEGORIES = [
  {
    title: "Dog Transport Services",
    href: ROUTES.SERVICES,
    image: "/categories-dog.png",
    alt: "Bernese Mountain Dog ready for travel",
    tone: "gold" as const,
  },
  {
    title: "Cat Transport Services",
    href: ROUTES.SERVICES,
    image: "/categories-cat.png",
    alt: "Fluffy kitten with blue eyes",
    tone: "lavender" as const,
  },
] as const;

function ArrowCircle() {
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#dfdcd5] text-navy transition group-hover:bg-[#d4d1ca] sm:h-12 sm:w-12"
      aria-hidden
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </span>
  );
}

export function CategoriesSection() {
  return (
    <section
      id="categories"
      className="relative overflow-hidden bg-[#f7f3ea] pb-8 pt-14 sm:pb-10 sm:pt-16 lg:pb-10 lg:pt-20"
    >
      {/* Faint paw — top left */}
      <Image
        src="/categories-paw.png"
        alt=""
        width={280}
        height={280}
        className="pointer-events-none absolute -left-8 -top-4 z-0 h-auto w-40 opacity-[0.08] sm:w-52 lg:-left-4 lg:top-2 lg:w-[22rem]"
        aria-hidden
      />

      {/* Cartoon cat + rings — top right */}
      <div className="pointer-events-none absolute right-6 top-4 z-0 sm:right-12 sm:top-6 lg:right-28 lg:top-8 xl:right-36">
        <Image
          src="/categories-rings.png"
          alt=""
          width={160}
          height={160}
          className="absolute -left-6 -top-4 h-auto w-24 object-contain opacity-80 sm:-left-8 sm:w-28 lg:-left-10 lg:w-36"
          aria-hidden
        />
        <Image
          src="/categories-cartoon-cat.png"
          alt=""
          width={120}
          height={120}
          className="relative z-10 h-auto w-16 object-contain sm:w-20 lg:w-24"
          aria-hidden
        />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            Why Choose Us
          </p>
          <h2 className="mt-2 font-serif text-[1.75rem] font-bold leading-tight text-navy sm:whitespace-nowrap sm:text-4xl lg:text-[2.75rem]">
            Different Pets, Different Paths
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-navy/75 sm:text-[15px]">
            Most of our clients travel with a dog or a cat — start there, or
            explore options for any other companion.
          </p>
        </div>

        <div className="relative mt-10 sm:mt-14">
          {/* Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {CATEGORIES.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                // Wide aspect ratio matching design
                className={`group relative block aspect-[4/3] overflow-hidden rounded-[2rem] sm:aspect-[16/9] sm:rounded-[2.5rem] lg:aspect-[1.8/1] ${
                  category.tone === "gold" ? "bg-[#e8b84a]" : "bg-lavender"
                }`}
              >
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  className="object-cover object-[center_20%] transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 520px"
                  priority
                />

                {/* Dark Bottom Gradient for text readability */}
                <div className="absolute inset-x-0 bottom-0 z-10 h-3/5 bg-gradient-to-t from-[#112239]/90 via-[#112239]/30 to-transparent" />

                {/* Card Title */}
                <div className="absolute bottom-6 left-6 z-20 sm:bottom-8 sm:left-8">
                  <h3 className="font-serif text-xl font-bold text-white sm:text-2xl lg:text-[1.75rem]">
                    {category.title}
                  </h3>
                </div>

                {/* Bottom Right Cutout Arrow */}
                {/* The bg color exactly matches the section bg to create the "cutout" illusion */}
                <div className="absolute bottom-0 right-0 z-20 rounded-tl-[1.5rem] bg-[#f7f3ea] pl-3 pt-3 sm:rounded-tl-[2rem] sm:pl-4 sm:pt-4">
                  <ArrowCircle />
                </div>
              </Link>
            ))}
          </div>

          {/* Bone under the cards — positioned matching the design */}
          <div className="pointer-events-none absolute -bottom-10 left-[35%] z-0 -translate-x-1/2 sm:-bottom-12 lg:left-[40%]">
            <Image
              src="/Bones.png"
              alt=""
              width={120}
              height={80}
              className="h-auto w-16 -rotate-12 object-contain mix-blend-multiply opacity-80 sm:w-20"
              aria-hidden
            />
            {/* Sparkles */}
            <span
              className="absolute -left-2 top-2 text-xs text-gold"
              aria-hidden
            >
              ✦
            </span>
            <span
              className="absolute -right-2 -top-2 text-sm text-gold"
              aria-hidden
            >
              ✦
            </span>
            <span
              className="absolute -right-4 bottom-2 text-[10px] text-gold"
              aria-hidden
            >
              ✦
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="relative z-10 mt-10 text-center sm:mt-12">
          <Button
            href={ROUTES.SERVICES}
            variant="navy"
            sparkle
            sparkleColor="gold"
            className="!normal-case font-serif text-[15px] px-8 py-3 tracking-normal"
          >
            Other Animals & Pets
          </Button>
        </div>
      </Container>
    </section>
  );
}