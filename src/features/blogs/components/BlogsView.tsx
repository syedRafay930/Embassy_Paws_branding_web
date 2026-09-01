import { Header, Footer } from "@/components/layout";
import { BlogHero } from "./BlogHero";
import { BlogGrid } from "./BlogGrid";

export function BlogsView() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <BlogHero />
        <BlogGrid />
      </main>
      <Footer />
    </>
  );
}