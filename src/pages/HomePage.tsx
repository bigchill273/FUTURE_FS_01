import { About } from "@S/About";
import { Contact } from "@S/Contact";
import { Hero } from "@S/Hero";
import { Projects } from "@S/Projects";
import { BlogSection } from "@/sections/Blog";

export function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <BlogSection />
      <Contact />
    </main>
  );
}
