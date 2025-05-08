import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Person from "../../public/assets/images/medico-com-os-bracos-cruzados-sobre-fundo-branco-removebg-preview.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section id="home" className="min-h-[79vh] backgroundGrandientHero">
        <div className="max-w-6xl mx-auto min-h-[85vh] p-4 pt-20 lg:pt-40">
          <div className="flex flex-col items-center justify-center gap-4 lg:flex-row relative">
            <div className="rounded-custom w-[14rem] h-[14rem] overflow-hidden lg:w-[28rem] lg:h-[28rem]">
              <Image src={Person} alt="Wave" className="" />
            </div>
            <h1
              style={{ transform: "scaleY(1.2)" }}
              className="font-actioness uppercase max-w-2xl mb-20 text-3xl text-center font-bold md:text-4xl lg:text-6xl"
            >
              Você está sofrendo com dor na coluna?
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="font-actioness font-semibold text-2xl text-center tracking-wider md:text-3xl lg:text-4xl lg:my-10">
              Essa dor está impedindo você de realizar atividades simples do dia
              a dia?
            </p>
            {/* <CallToActionAnchor href="#pricing" /> */}
          </div>
        </div>
      </section>
      <section id="sobre" className="py-20 min-h-[79vh]">
        <About />
      </section>
      <section id="serviços" className="py-20 min-h-[79vh]">
        <Services />
      </section>
      <section id="depoimentos" className="py-20 min-h-[79vh]">
        <Testimonials />
      </section>
      <section id="contato" className="py-20 min-h-[79vh]">
        <Contact />
      </section>
    </main>
  );
}
