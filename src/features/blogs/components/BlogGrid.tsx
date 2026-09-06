"use client";

import Image from "next/image";
import { Container } from "@/components/ui";
import { Card } from "@/components/ui/Card";
import { BLOG_POSTS } from "../data";
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/ui/animations/Stagger";

function PawIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <ellipse cx="6.5" cy="7" rx="2.2" ry="2.8" />
      <ellipse cx="12" cy="5.2" rx="2.2" ry="2.8" />
      <ellipse cx="17.5" cy="7" rx="2.2" ry="2.8" />
      <ellipse cx="4.8" cy="12.2" rx="2" ry="2.5" />
      <path d="M12 10.2c-3.2 0-5.6 2.5-5.6 5.1 0 1.9 1.5 3.1 3.2 3.1.9 0 1.6-.3 2.4-.9.8.6 1.5.9 2.4.9 1.7 0 3.2-1.2 3.2-3.1 0-2.6-2.4-5.1-5.6-5.1z" />
    </svg>
  );
}

export function BlogGrid() {
  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-16 lg:pt-24">
      
      {/* Decorative Paws */}
      <FadeIn direction="right" delay={0.1} className="pointer-events-none absolute -right-2 top-[20%] z-0 hidden h-24 w-24 rotate-[20deg] text-[#868C98]/50 lg:block lg:top-[15%] lg:h-44 lg:w-44">
        <PawIcon className="h-full w-full" />
      </FadeIn>
      <FadeIn direction="left" delay={0.2} className="pointer-events-none absolute right-[5%] top-[25%] z-0 hidden h-14 w-14 rotate-[20deg] text-[#868C98]/50 lg:block lg:right-[8%] lg:top-[12%] lg:h-24 lg:w-24">
        <PawIcon className="h-full w-full" />
      </FadeIn>

      {/* Container */}
      <Container className="relative z-10">
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {BLOG_POSTS.map((post) => (
            <StaggerItem key={post.id} className="h-full">
              <Card
                href={`/blogs/${post.id}`} // <--- Yahan se link chalega!
                category={post.category}
                title={post.title}
                description={post.description}
                image={post.image}
                date={post.date}
                readTime={post.readTime}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        {/* Circular line image */}
        <FadeIn direction="up" delay={0.4} className="pointer-events-none absolute -bottom-15 -left-10 z-[-10] hidden w-[120px] opacity-100 lg:block lg:w-[150px]">
          <Image
            src="/blog/bg-line-circle.png"
            alt=""
            width={200}
            height={200}
            className="h-full w-full object-contain"
            aria-hidden
          />
        </FadeIn>
      </Container>
    </section>
  );
}