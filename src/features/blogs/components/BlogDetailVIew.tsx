import { Header, Footer } from "@/components/layout";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "../data";
import { BlogDetailHero } from "./BlogDetailHero";
import { BlogDetailContent } from "./BlogDetailContent";

type ViewProps = {
  id: string;
};

export function BlogDetailView({ id }: ViewProps) {
  // Find current blog
  const currentIndex = BLOG_POSTS.findIndex((p) => p.id === id);
  const post = BLOG_POSTS[currentIndex];

  if (!post) {
    notFound(); // Agar galat URL ho toh 404 page dikhaye
  }

  // Calculate Next Blog ID
  const isLast = currentIndex === BLOG_POSTS.length - 1;
  const nextBlogId = isLast ? BLOG_POSTS[0].id : BLOG_POSTS[currentIndex + 1].id;

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <BlogDetailHero 
          title={post.title}
          category={post.category}
          date={post.date}
          readTime={post.readTime}
          author={post.author}
        />
        <BlogDetailContent 
          image={post.image}
          title={post.title}
          content={post.content}
          nextBlogId={nextBlogId}
        />
      </main>
      <Footer />
    </>
  );
}