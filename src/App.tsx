import Navbar from "@S/Navbar";
import { Hero } from "@S/Hero";
import { About } from "@S/About";
import { Projects } from "@S/Projects";
import { Contact } from "@S/Contact";
import { Footer } from "@S/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
