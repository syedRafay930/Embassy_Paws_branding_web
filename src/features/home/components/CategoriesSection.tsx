import { Button, Container, ImagePlaceholder } from "@/components/ui";
import { CATEGORIES } from "../data";
import { cn } from "@/utils/cn";

export function CategoriesSection() {
  return (
    <section id="categories" className="bg-cream-warm py-16 sm:py-20">
      <Container>
        <h2 className="mb-10 text-center text-3xl font-bold text-navy sm:text-4xl">
          Different Pets, Different Needs
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {CATEGORIES.map((category) => (
            <article
              key={category.title}
              className={cn(
                "flex min-h-56 flex-col justify-between overflow-hidden rounded-2xl p-6 sm:min-h-64 sm:flex-row sm:items-end",
                category.tone === "gold" ? "bg-gold" : "bg-lavender",
              )}
            >
              <div className="max-w-xs">
                <p className="text-sm font-semibold uppercase tracking-wide text-navy/70">
                  {category.description}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
                  {category.title}
                </h3>
              </div>
              <ImagePlaceholder
                label={`Category – ${category.title}`}
                className="mt-4 h-36 w-full sm:mt-0 sm:h-44 sm:w-48"
                rounded="xl"
              />
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="#features" variant="navy">
            View All Blogs
          </Button>
        </div>
      </Container>
    </section>
  );
}
