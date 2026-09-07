"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import { BlogContentBlock } from "../data";
import { FadeIn } from "@/components/ui/animations/FadeIn";

type ContentProps = {
  image: string;
  title: string;
  content: BlogContentBlock[];
  nextBlogId?: string;
};

export function BlogDetailContent({ image, title, content, nextBlogId }: ContentProps) {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] pb-24 pt-10 sm:pt-16 ">
      
      {/* Background Decorative Circle - Hidden on mobile via hidden sm:block */}
      <FadeIn direction="right" delay={0.1} className="pointer-events-none absolute bottom-40 -left-20 z-0 hidden opacity-60 sm:block lg:w-[400px]">
        <Image
          src="/blog/bg-line-circle.png"
          alt=""
          width={300}
          height={300}
          className="h-full w-full object-contain"
        />
      </FadeIn>

      <Container className="relative z-10 mx-auto max-w-3xl">
        
        {/* Featured Image - Separated from the hero section */}
        <FadeIn direction="up" delay={0.2} className="relative mx-auto mb-10 aspect-[16/9] w-[90%] max-w-2xl overflow-hidden rounded-[1.5rem] shadow-xl sm:mb-14">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </FadeIn>

        {/* Dynamic Content Rendering */}
        <FadeIn direction="up" delay={0.3} className="space-y-6 text-[#2D3643]">
          {content.map((block, index) => {
            if (block.type === 'heading') {
              return (
                <h2 key={index} className="pt-4 font-serif text-xl font-bold sm:text-2xl">
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'quote') {
              return (
                <blockquote key={index} className="border-l-4 border-gold pl-5 font-serif text-lg italic leading-relaxed text-navy sm:text-xl">
                  {block.text}
                </blockquote>
              );
            }
            // default is paragraph
            return (
              <p key={index} className="whitespace-pre-wrap text-sm leading-relaxed sm:text-base">
                {block.text}
              </p>
            );
          })}
        </FadeIn>

        {/* Navigation Buttons */}
        <FadeIn direction="up" delay={0.4} className="mt-16 flex items-center justify-center gap-4 border-t border-black/10 pt-10">
          <Link
            href="/blogs"
            className="rounded-full border border-navy px-6 py-2.5 text-sm font-semibold text-navy transition hover:bg-navy/5"
          >
            Back to Blogs
          </Link>
          
          {nextBlogId && (
            <Link
              href={`/blogs/${nextBlogId}`}
              className="flex items-center gap-2 rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-navy/90"
            >
              Next Blog <span aria-hidden>→</span>
            </Link>
          )}
        </FadeIn>

      </Container>
    </section>
  );
}