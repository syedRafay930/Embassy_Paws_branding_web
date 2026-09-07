"use client";

import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui";
import { REVIEWS } from "../data";
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/ui/animations/Stagger";

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-cream py-16 sm:py-24">
      <Container>
        <FadeIn direction="up">
          <SectionHeading title="Happy Client Reviews" tone="dark" />
        </FadeIn>

        {/* Stagger Container grid pe lagaya taake line se animate hon */}
        <StaggerContainer delayChildren={0.2} className="mt-10 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <StaggerItem key={review.name}>
              <article className="h-full rounded-2xl border border-navy/10 bg-white p-6 text-center shadow-sm">
                <div className="mb-3 text-gold" aria-label="5 star rating">
                  {"★★★★★"}
                </div>
                <div className="relative mx-auto h-28 w-28 sm:h-32 sm:w-32">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-contain"
                    sizes="128px"
                    unoptimized
                  />
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm font-bold text-navy">{review.name}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}