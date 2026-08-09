import Image from "next/image";
import { Container } from "@/components/ui";

const PORTAL_POINTS = [
  "Track every booking and document from one dashboard",
  "Get live trip alerts and vet reminders on your phone",
  "Switch devices anytime — everything stays in sync",
] as const;

export function DevicePortalSection() {
  return (
    <section className="relative z-20 -mt-10 bg-[#c29b47] py-14 sm:-mt-12 lg:-mt-16 lg:py-20">
      {/* Bones — top-left */}
      <Image
        src="/device-portal-bones.png"
        alt=""
        width={180}
        height={150}
        className="pointer-events-none absolute left-4 top-4 z-10 h-auto w-24 object-contain sm:left-8 sm:top-6 sm:w-28 lg:left-12 lg:w-36"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.35fr] lg:gap-6 xl:gap-8">
          {/* Left — text */}
          <div className="relative pt-10 lg:pt-4">
            <h2 className="max-w-lg font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
              Your Pet&apos;s Journey, Open On Any Device
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
              Bookings, vet documents, flight crate approvals, and live trip
              updates — the same portal follows you from your desk to your
              pocket, so you&apos;re never far from your pet&apos;s next step.
            </p>

            <ul className="mt-8 space-y-4">
              {PORTAL_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm font-medium text-white sm:text-base"
                >
                  <span className="mt-0.5 shrink-0 text-white" aria-hidden>
                    ▪
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex justify-end">
              <Image
                src="/device-portal-paws.png"
                alt=""
                width={160}
                height={120}
                className="h-auto w-28 object-contain sm:w-32 lg:w-36"
                aria-hidden
              />
            </div>
          </div>

          {/* Right — raw screens image, larger / more prominent */}
          <div className="relative w-full lg:-mr-8 xl:-mr-12">
            <Image
              src="/device-portal-screens.png"
              alt="Embassy Paws portal on desktop and mobile"
              width={1400}
              height={1050}
              className="h-auto w-full min-w-full lg:w-[115%] lg:max-w-none"
              sizes="(max-width: 1024px) 100vw, 65vw"
              priority
              unoptimized
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
