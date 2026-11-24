import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FiArrowUpRight } from "react-icons/fi";
import { BlogPostCard } from "@/components/BlogPostCard";
import { getRecentBlogPosts } from "@/lib/blogApi";
import type { BlogPost } from "@/types/blog";

const cardLayouts = [
  "md:col-span-3 md:row-span-2",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-2",
  "md:col-span-2",
];

export function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    getRecentBlogPosts(5, controller.signal)
      .then(setPosts)
      .catch((requestError: unknown) => {
        if (!controller.signal.aborted) {
          setError(
            requestError instanceof Error
              ? requestError.message
              : "Unable to load articles.",
          );
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <section id="blog" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              Notes & Ideas
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Recent articles
            </h2>
            <p className="text-muted-foreground mt-4">
              Thoughts on frontend engineering, design, and building for the
              web.
            </p>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-highlight transition-colors font-medium"
          >
            View all articles
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>

        {isLoading && (
          <p className="text-muted-foreground" role="status">
            Loading articles...
          </p>
        )}
        {error && (
          <p className="text-red-400" role="alert">
            Articles could not be loaded: {error}
          </p>
        )}
        {!isLoading && !error && posts.length === 0 && (
          <p className="text-muted-foreground">
            No articles have been published yet.
          </p>
        )}
        {posts.length > 0 && (
          <div className="grid md:grid-cols-6 gap-5">
            {posts.map((post, index) => (
              <BlogPostCard
                key={post._id}
                post={post}
                className={cardLayouts[index] ?? "md:col-span-2"}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
