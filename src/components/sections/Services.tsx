"use client";

import TitleSection from "../titles/TitleSection";

const services = [
  {
    id: 1,
    imgUrl:
      "https://img.freepik.com/fotos-premium/fisioterapeuta-tratando-coluna-do-paciente_123827-23420.jpg?w=740",
    title: "Terapia Manual",
    description:
      "Técnicas especializadas para alívio da dor, liberação muscular e mobilidade articular.",
  },
  {
    id: 2,
    imgUrl:
      "https://img.freepik.com/fotos-premium/fisioterapeuta-ajudando-paciente-com-exercicios-de-reabilitacao_1212-5111.jpg?w=740",
    title: "Reabilitação Funcional",
    description:
      "Protocolos personalizados para restaurar movimentos e prevenir recidivas.",
  },
  {
    id: 3,
    imgUrl:
      "https://img.freepik.com/fotos-premium/fisioterapeuta-tratando-paciente-com-dor-nas-costas_1212-5596.jpg?w=740",
    title: "Saúde da Coluna",
    description:
      "Tratamento eficaz para hérnias, dores lombares e cervicais com base científica.",
  },
  {
    id: 4,
    imgUrl:
      "https://img.freepik.com/fotos-premium/terapeuta-fisico-fazendo-exercicios-de-reabilitacao-em-paciente-com-lesao-no-joelho_1212-5591.jpg?w=740",
    title: "Reabilitação Pós-cirúrgica",
    description:
      "Acompanhamento completo no processo de recuperação após cirurgias ortopédicas.",
  },
  {
    id: 5,
    imgUrl:
      "https://img.freepik.com/fotos-premium/terapeuta-fisico-fazendo-exercicios-de-reabilitacao-em-paciente-com-lesao-no-joelho_1212-5591.jpg?w=740",
    title: "Reabilitação Pós-cirúrgica",
    description:
      "Acompanhamento completo no processo de recuperação após cirurgias ortopédicas.",
  },
  {
    id: 6,
    imgUrl:
      "https://img.freepik.com/fotos-premium/terapeuta-fisico-fazendo-exercicios-de-reabilitacao-em-paciente-com-lesao-no-joelho_1212-5591.jpg?w=740",
    title: "Reabilitação Pós-cirúrgica",
    description:
      "Acompanhamento completo no processo de recuperação após cirurgias ortopédicas.",
  },
];

export default function Services() {
  return (
    <div className="max-w-screen-xl m-auto px-4 py-12">
      <TitleSection title="Meus principais serviços que estarei aplicando em você" />
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 not-[]:mt-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center text-center p-4 sm:p-6 bg-bg-white border-border rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={service.imgUrl}
              alt={service.title}
              className="w-full h-80 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-base text-txt-tertiary">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
