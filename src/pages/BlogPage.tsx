import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FiArrowLeft } from "react-icons/fi";
import { BlogPostCard } from "@/components/BlogPostCard";
import { getBlogPosts } from "@/lib/blogApi";
import type { BlogPost } from "@/types/blog";

export function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    getBlogPosts(controller.signal)
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
    <main className="min-h-screen pt-36 pb-24">
      <section className="container mx-auto px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <FiArrowLeft aria-hidden="true" />
          Back to portfolio
        </Link>
        <header className="max-w-3xl mb-12">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Notes & Ideas
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4">All articles</h1>
          <p className="text-muted-foreground mt-4">
            Writing about the tools, techniques, and decisions behind the web.
          </p>
        </header>

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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogPostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
