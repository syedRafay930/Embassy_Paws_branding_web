import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants";

export function CtaBannerSection() {
  return (
    <section className="relative -mt-1 w-full overflow-hidden bg-[#fec47b]">
      <Link
        href={ROUTES.CONTACT}
        className="relative block w-full"
        aria-label="Start planning a safe and stress-free journey for your pet"
      >
        <Image
          src="/cta-banner.png"
          alt="Pet travel made easy — Plan a safe and stress-free journey for your pet. Get a free consultation on your pet's travel plan."
          width={1866}
          height={764}
          className="block h-auto w-full max-w-none object-cover object-center"
          sizes="100vw"
          priority
        />
      </Link>
    </section>
  );
}
