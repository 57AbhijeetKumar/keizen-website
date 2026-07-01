import type { Metadata } from "next";
import Link from "next/link";
import { Search as SearchIcon } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { search } from "@/lib/search";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Search | Kaizen Laser",
    description: "Search Kaizen Laser products, applications, industries and FAQs.",
    path: "/search",
  }),
  // Query-dependent results page — keep individual queries out of the index.
  robots: { index: false, follow: true },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const results = q ? search(q) : [];

  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Search"
        title="Search the site"
        description="Find products, applications, industries and answers."
        breadcrumbs={[{ label: "Search", href: "/search" }]}
      />

      <section className="container-page py-16 sm:py-20">
        {/* Plain GET form — works without JS, no client-side search component needed. */}
        <form action="/search" method="GET" className="mx-auto flex max-w-xl gap-3">
          <Input
            type="search"
            name="q"
            defaultValue={q}
            placeholder="Search e.g. 'welding', 'traceability', 'fiber laser'"
            aria-label="Search query"
          />
          <Button type="submit">
            <SearchIcon className="h-4 w-4" aria-hidden="true" />
            Search
          </Button>
        </form>

        <div className="mx-auto mt-10 max-w-xl">
          {q && results.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No results for &ldquo;{q}&rdquo;. Try a different term, or{" "}
              <Link href="/contact" className="text-accent underline underline-offset-2">
                ask us directly
              </Link>
              .
            </p>
          ) : null}

          {results.length > 0 ? (
            <ul className="flex flex-col gap-3">
              {results.map((result) => (
                <li key={`${result.type}-${result.href}-${result.title}`}>
                  <Link
                    href={result.href}
                    className="block rounded-2xl border border-border bg-surface p-5 transition-premium hover:border-accent/50"
                  >
                    <Badge variant="secondary">{result.type}</Badge>
                    <p className="mt-2 font-heading font-semibold text-foreground">
                      {result.title}
                    </p>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                      {result.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>
    </main>
  );
}
