import { Link } from "react-router";
import ReactMarkdown from "react-markdown";
import { FiArrowLeft, FiClock } from "react-icons/fi";
import type { BlogPost } from "@/types/blog";

type ArticleTemplateProps = {
  post: BlogPost;
};

export function ArticleTemplate({ post }: ArticleTemplateProps) {
  const markdown = post.content.trimStart();
  const firstHeading = markdown.match(/^# ([^\r\n]+)(?:\r?\n)+/);
  const content =
    firstHeading?.[1].trim() === post.title
      ? markdown.slice(firstHeading[0].length)
      : markdown;
  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <main className="min-h-screen pt-36 pb-24">
      <article className="container mx-auto max-w-4xl px-6">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <FiArrowLeft aria-hidden="true" />
          All articles
        </Link>

        <header className="mb-10">
          <span className="text-sm font-medium tracking-wider uppercase text-secondary-foreground">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-6">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-6">
            {publishedDate && (
              <time dateTime={post.publishedAt ?? undefined}>
                {publishedDate}
              </time>
            )}
            {post.readingTime && (
              <span className="inline-flex items-center gap-2">
                <FiClock aria-hidden="true" />
                {post.readingTime} min read
              </span>
            )}
          </div>
        </header>

        {post.coverImage && (
          <img
            src={post.coverImage}
            alt=""
            className="w-full max-h-[32rem] object-cover rounded-3xl mb-12 bg-surface"
            onError={(event) => {
              event.currentTarget.remove();
            }}
          />
        )}

        <div className="markdown-content text-muted-foreground">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 border-t border-border mt-12 pt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-surface border border-border/50 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </main>
  );
}
