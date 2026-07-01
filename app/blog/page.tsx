import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { EmptyState } from "@/components/sections/empty-state";
import { BlogCard } from "@/components/content/blog-card";
import { StaggerGrid, StaggerItem } from "@/components/shared/stagger-grid";
import { cms } from "@/lib/cms";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Blog | Kaizen Laser",
  description: "Articles on laser marking, engraving and traceability from Kaizen Laser.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await cms.getBlogPosts();

  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Blog"
        title="Notes on laser marking & traceability"
        description="Practical articles for manufacturers evaluating or running laser systems."
        breadcrumbs={[{ label: "Blog", href: "/blog" }]}
      />

      <section className="container-page py-16 sm:py-20">
        {posts.length > 0 ? (
          <>
            <h2 className="sr-only">All articles</h2>
            <StaggerGrid className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <StaggerItem key={post.slug}>
                  <BlogCard post={post} />
                </StaggerItem>
              ))}
            </StaggerGrid>
          </>
        ) : (
          <EmptyState
            title="The blog is launching soon"
            description="We're writing our first set of articles. Check back shortly, or reach out if you have a specific question now."
            ctaHref="/contact"
            ctaLabel="Ask a Question"
          />
        )}
      </section>
    </main>
  );
}
