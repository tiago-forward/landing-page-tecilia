import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="">
      <section id="home" className="min-h-[79vh] backgroundGrandientHero">
        <div className="relative w-full"></div>
      </section>
      <section id="sobre" className="py-20 min-h-[79vh]">
        <About />
      </section>
      <section id="serviços" className="py-20 min-h-[79vh]">
        <Services />
      </section>
      <section id="testemunhas" className="py-20 min-h-[79vh]">
        <Testimonials />
      </section>
      <section id="contato" className="py-20 min-h-[79vh]">
        <Contact />
      </section>
    </main>
  );
}
