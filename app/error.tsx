"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-1 items-center justify-center">
      <div className="container-page flex flex-col items-center py-24 text-center">
        <p className="font-heading text-sm font-medium uppercase tracking-wide text-accent">
          Something went wrong
        </p>
        <h1 className="text-display mt-3 font-heading font-semibold">
          Unexpected error
        </h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          We hit an unexpected error loading this page. Try again — if the
          problem persists, contact us directly.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" onClick={reset}>
            <RefreshCw className="mr-1 h-4 w-4" aria-hidden="true" />
            Try again
          </Button>
          <Button size="lg" variant="outline" nativeButton={false} render={<Link href="/" />}>
            Back to Home
            <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </main>
  );
}
