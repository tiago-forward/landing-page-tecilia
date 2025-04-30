import { CarouselsAbout } from "../carousels/CarouselsAbout";
import TitleSection from "../titles/TitleSection";

export default function About() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <TitleSection title="Sobre mim" />

      {/* Seção com imagem e frase de destaque */}
      <div className="grid md:grid-cols-2 gap-8 items-center mt-10">
        <div className="flex flex-col gap-6">
          <h3 className="text-5xl font-bold leading-tight">
            Cuidar da sua coluna é <br className="hidden md:block" /> cuidar da
            sua vida.
          </h3>
          <p className="text-2xl text-gray-700 leading-relaxed">
            Com uma abordagem humana, precisa e baseada em evidências, ofereço
            tratamento especializado para dores na coluna e nas extremidades,
            ajudando você a recuperar o movimento, a qualidade de vida e a
            confiança no seu corpo.
          </p>
        </div>
        <div className="w-full">
          <img
            src="https://www.unit.br/hs-fs/hubfs/Mercado%20de%20trabalho%20para%20Fisioterapia%20-1.jpg?width=1000&height=667&name=Mercado%20de%20trabalho%20para%20Fisioterapia%20-1.jpg"
            alt="Fisioterapia"
            className="rounded-xl shadow-lg object-cover w-full h-auto max-h-[400px]"
          />
        </div>
      </div>

      {/* Texto informativo mais abaixo */}
      <div className="mt-12">
        <p className="text-xl md:text-2xl text-justify text-gray-800 leading-relaxed">
          Sou fisioterapeuta com especialização no tratamento de disfunções da
          coluna vertebral e das extremidades, atuando com foco na avaliação
          individualizada e no alívio da dor de forma eficaz e duradoura. Minha
          abordagem combina técnicas manuais, exercícios terapêuticos
          específicos e educação postural para promover não apenas o alívio dos
          sintomas, mas a real transformação funcional do corpo. Com experiência
          clínica sólida, estou comprometida em oferecer um atendimento
          humanizado, baseado em ciência e adaptado às necessidades únicas de
          cada paciente — seja em casos de hérnias de disco, dores cervicais,
          lombalgias, ciatalgias, ou lesões nos ombros, joelhos e demais
          articulações. Aqui, o foco está em você, no seu bem-estar e na sua
          autonomia.
        </p>
      </div>

      <CarouselsAbout />
    </div>
  );
}
