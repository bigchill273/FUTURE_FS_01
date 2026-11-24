import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ArticleTemplate } from "@/components/ArticleTemplate";
import { getBlogPost } from "@/lib/blogApi";
import type { BlogPost } from "@/types/blog";

export function BlogPostPage() {
  const { slug = "" } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setPost(null);
    setIsLoading(true);
    setError("");

    getBlogPost(slug, controller.signal)
      .then(setPost)
      .catch((requestError: unknown) => {
        if (!controller.signal.aborted) {
          setError(
            requestError instanceof Error
              ? requestError.message
              : "Unable to load this article.",
          );
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      });

    return () => controller.abort();
  }, [slug]);

  if (isLoading) {
    return (
      <main className="min-h-screen pt-36 container mx-auto px-6">
        <p role="status" className="text-muted-foreground">
          Loading article...
        </p>
      </main>
    );
  }

  if (error || !post) {
    return (
      <main className="min-h-screen pt-36 container mx-auto px-6">
        <h1 className="text-3xl font-bold">Article not found</h1>
        <p role="alert" className="text-muted-foreground mt-4">
          {error || "This article may have been removed or is not published."}
        </p>
      </main>
    );
  }

  return <ArticleTemplate post={post} />;
}
