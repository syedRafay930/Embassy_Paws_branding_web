import { BlogDetailView } from "@/features/blogs";
import { BLOG_POSTS } from "@/features/blogs/data";

// Next.js ko pehle se batana ke kon kon se blog URLs exist karte hain
export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    id: post.id,
  }));
}

export default async function SingleBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <BlogDetailView id={resolvedParams.id} />;
}