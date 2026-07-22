import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Publications from "@/components/Publications";

export default function Home() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="publications">
        <Publications />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
