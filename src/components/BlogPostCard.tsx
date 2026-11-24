import { Link } from "react-router";
import { FiArrowUpRight, FiClock } from "react-icons/fi";
import type { BlogPost } from "@/types/blog";

type BlogPostCardProps = {
  post: BlogPost;
  className?: string;
};

export function BlogPostCard({ post, className = "" }: BlogPostCardProps) {
  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <Link
      to={`/blog/${post.slug}`}
      className={`group glass rounded-2xl overflow-hidden flex flex-col min-h-72 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 ${className}`}
    >
      <div className="relative min-h-40 flex-1 overflow-hidden bg-gradient-to-br from-primary/30 via-surface to-highlight/20">
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(event) => {
              event.currentTarget.remove();
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
        <span className="absolute left-5 bottom-4 rounded-full bg-background/70 backdrop-blur px-3 py-1 text-xs font-medium text-secondary-foreground">
          {post.category}
        </span>
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <FiArrowUpRight className="w-5 h-5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          {publishedDate && (
            <time dateTime={post.publishedAt ?? undefined}>
              {publishedDate}
            </time>
          )}
          {post.readingTime && (
            <span className="flex items-center gap-1">
              <FiClock aria-hidden="true" />
              {post.readingTime} min read
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
