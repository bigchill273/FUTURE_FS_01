import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { Route, Routes } from "react-router";

const BlogPage = lazy(() =>
  import("@/pages/BlogPage").then((module) => ({ default: module.BlogPage })),
);
const BlogPostPage = lazy(() =>
  import("@/pages/BlogPostPage").then((module) => ({
    default: module.BlogPostPage,
  })),
);

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Suspense
        fallback={
          <main className="min-h-screen pt-36 container mx-auto px-6">
            <p role="status" className="text-muted-foreground">
              Loading page...
            </p>
          </main>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
