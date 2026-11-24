import type { BlogPost } from "@/types/blog";

const apiBaseUrl = import.meta.env.VITE_API_URL ?? "";

async function request<T>(path: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(`${apiBaseUrl}/api${path}`, {
    signal,
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    const result = (await response.json().catch(() => null)) as
      | { message?: string }
      | null;
    throw new Error(result?.message || `Request failed (${response.status}).`);
  }

  return response.json() as Promise<T>;
}

export function getRecentBlogPosts(
  limit: number,
  signal?: AbortSignal,
): Promise<BlogPost[]> {
  return request(`/posts?limit=${limit}`, signal);
}

export function getBlogPosts(signal?: AbortSignal): Promise<BlogPost[]> {
  return request("/posts", signal);
}

export function getBlogPost(
  slug: string,
  signal?: AbortSignal,
): Promise<BlogPost> {
  return request(`/posts/${encodeURIComponent(slug)}`, signal);
}

