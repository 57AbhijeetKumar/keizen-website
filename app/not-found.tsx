import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center">
      <div className="container-page flex flex-col items-center py-24 text-center">
        <p className="font-heading text-sm font-medium uppercase tracking-wide text-accent">
          404
        </p>
        <h1 className="text-display mt-3 font-heading font-semibold">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          The page you&apos;re looking for may have moved or no longer exists.
          Try searching, or head back to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" nativeButton={false} render={<Link href="/" />}>
            Back to Home
            <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<Link href="/search" />}
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            Search the Site
          </Button>
        </div>
      </div>
    </main>
  );
}
