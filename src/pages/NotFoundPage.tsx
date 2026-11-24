import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <main className="min-h-screen pt-36 container mx-auto px-6">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <Link
        to="/"
        className="inline-block mt-6 text-primary hover:text-highlight"
      >
        Return to portfolio
      </Link>
    </main>
  );
}
