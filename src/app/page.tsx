import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Person from "../../public/assets/images/Screenshot_20250121_103240_Photos-Photoroom.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section id="home" className="min-h-[90vh] backgroundGrandientHero">
        <div className="max-w-6xl mx-auto min-h-[90vh] p-4 pt-20 lg:pt-40 relative">
          <div className="flex flex-col items-center justify-center gap-4 lg:flex-row relative">
            <div className="relative w-[14rem] lg:w-[28rem] lg:h-[28rem]">
              {/* Oval decorativo */}
              <div className="absolute inset-0 -left-4 -top-4 w-full h-full rounded-[50%] border-4 border-primary opacity-30 g blur-sm z-0" />

              {/* Imagem em si */}
              <div className="relative z-10 overflow-hidden rounded-[50%] shadow-xl">
                <Image
                  src={Person}
                  alt="Profissional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h1
              style={{ transform: "scaleY(1.2)" }}
              className="font-actioness uppercase max-w-2xl mb-20 text-3xl text-center font-bold md:text-4xl lg:text-6xl"
            >
              Você está sofrendo com dor na coluna?
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-txt-description font-semibold text-2xl text-center tracking-wider md:text-3xl lg:text-4xl lg:my-10 w-[500px] absolute bottom-[80px] right-0">
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
