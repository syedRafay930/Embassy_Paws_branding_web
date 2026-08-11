import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui";
import { REVIEWS } from "../data";

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-cream py-16 sm:py-24">
      <Container>
        <SectionHeading title="Happy Client Reviews" tone="dark" />

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <article
              key={review.name}
              className="rounded-2xl border border-navy/10 bg-white p-6 text-center shadow-sm"
            >
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
          ))}
        </div>
      </Container>
    </section>
  );
}
