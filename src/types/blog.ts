export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  status: "draft" | "published";
  featured: boolean;
  readingTime?: number;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
};
