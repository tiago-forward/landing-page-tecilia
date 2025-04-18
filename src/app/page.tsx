import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="">
      <section id="home" className="min-h-[79vh]">
        <div className="relative w-full"></div>
      </section>
      <section id="sobre" className="py-20">
        <About />
      </section>
      <section id="serviços" className="py-20">
        <Services />
      </section>
      <section id="testemunhas" className="py-20">
        <Testimonials />
      </section>
      <section id="contato" className="py-20">
        <Contact />
      </section>
    </main>
  );
}
