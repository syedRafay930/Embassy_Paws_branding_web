import Image from "next/image";
import { Footer, Header } from "@/components/layout";
import { CtaSection } from "@/features/about";
import { ROUTES } from "@/constants";
import { HowItWorksHero } from "./HowItWorksHero";
import { HowItWorksStep1 } from "./HowItWorksStep1";
import { HowItWorksStep2 } from "./HowItWorksStep2";
import { HowItWorksStep3 } from "./HowItWorksStep3";

export function HowItWorksView() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <HowItWorksHero />
        <HowItWorksStep1 />
        <HowItWorksStep2 />
        <HowItWorksStep3 />
        <CtaSection
          title="Ready to start step one?"
          description="Tell us about your pet and we'll map out the timeline."
          buttonText="Check Readiness"
          buttonHref={ROUTES.CONTACT}
          leftImageSrc="/205ffba4d93c2d1097f831be8576dc3871db9a96.png"
          leftImageAlt="Woman holding a white cat"
          rightImageSrc="/why-choose-cat.jpg"
          rightImageAlt="A tabby cat being gently petted"
          topLeftDecoration={
            <Image
              src="/pet-feeding-bowl-black-icon 1.svg"
              alt=""
              width={50}
              height={50}
              unoptimized
              className="pointer-events-none absolute -top-8 -left-6 z-20 h-auto w-20 object-contain drop-shadow-md lg:-top-12 lg:-left-1 lg:w-28"
              aria-hidden
            />
          }
        />
      </main>
      <Footer />
    </>
  );
}
