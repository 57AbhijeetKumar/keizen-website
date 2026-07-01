import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Testimonial } from "@/lib/cms/types";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * Renders a real, attributable testimonial. Unlike the old site, there is no
 * default/placeholder copy baked into this component — callers must supply
 * genuine CMS content or omit the section entirely.
 */
export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-6">
      <Quote className="h-6 w-6 text-accent" aria-hidden="true" />
      <blockquote className="flex-1 text-sm leading-relaxed text-foreground">
        {testimonial.quote}
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <Avatar>
          {testimonial.avatar ? (
            <AvatarImage src={testimonial.avatar.url} alt="" />
          ) : null}
          <AvatarFallback>{initials(testimonial.authorName)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium text-foreground">
            {testimonial.authorName}
          </p>
          <p className="text-xs text-muted-foreground">
            {testimonial.authorRole}, {testimonial.authorCompany}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
