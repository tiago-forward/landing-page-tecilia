import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="">
      <section className="backgroundIntroduction min-h-[79vh] bg-pr-1 bg-cover bg-no-repeat bg-left md:bg-center">
        <div className="relative w-full"></div>
      </section>
      <section id="about" className="py-20">
        <About />
      </section>
      <section id="services" className="py-20">
        <Services />
      </section>
      <section id="testimonials" className="py-20">
        <Testimonials />
      </section>
      <section id="contact" className="py-20">
        <Contact />
      </section>
    </main>
  );
}
