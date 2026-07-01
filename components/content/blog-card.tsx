import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/cms/types";

export function BlogCard({ post }: { post: BlogPost }) {
  const date = new Date(post.publishedAt);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-premium hover:border-accent/50"
    >
      {post.coverImage ? (
        <div className="relative aspect-[16/9] overflow-hidden bg-surface-2">
          <Image
            src={post.coverImage.url}
            alt={post.coverImage.alt}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition-premium group-hover:scale-105"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col gap-2 p-6">
        <time
          dateTime={post.publishedAt}
          className="text-xs font-medium uppercase tracking-wide text-muted-foreground"
        >
          {date.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
        </time>
        <h3 className="font-heading text-lg font-semibold">{post.title}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
      </div>
    </Link>
  );
}
