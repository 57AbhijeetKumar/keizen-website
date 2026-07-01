import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/cms/types";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-premium hover:border-accent/50"
    >
      {caseStudy.image ? (
        <div className="relative aspect-[16/9] overflow-hidden bg-surface-2">
          <Image
            src={caseStudy.image.url}
            alt={caseStudy.image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition-premium group-hover:scale-105"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col gap-2 p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-accent">
          {caseStudy.client}
        </p>
        <h3 className="font-heading text-lg font-semibold">{caseStudy.title}</h3>
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {caseStudy.summary}
        </p>
        <span className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-medium text-accent">
          Read case study
          <ArrowRight className="h-3.5 w-3.5 transition-premium group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
