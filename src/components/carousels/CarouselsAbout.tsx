"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ArrowRight from "../Icons/ArrowRight";
import ArrowLeft from "../Icons/ArrowLeft";
import { useRef } from "react";

const data = [
  {
    id: 1,
    imgUrl:
      "https://www.elosenior.com.br/wp-content/uploads/2022/10/elo-senior-fisioterapia-para-idosos-1024x1024.jpg",
    description:
      "Atendimento humanizado de fisioterapia para idosos, promovendo qualidade de vida e autonomia.",
  },
  {
    id: 2,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8WbU2BpjaBwTv9ZJQANoOhhUc7uQVVcZcQ&s",
    description:
      "Exercícios terapêuticos guiados para fortalecimento muscular e melhora do equilíbrio corporal.",
  },
  {
    id: 3,
    imgUrl:
      "https://img.freepik.com/fotos-premium/paciente-de-tratamento-fisioterapeuta-segurando-pacientes-mao-ombro-tratamento-de-articulacao-medico-fisico-consultando-o-paciente-sobre-problemas-de-dor-muscular-no-ombro-conceito-de-diagnostico-de-fisioterapia_1212-5594.jpg?semt=ais_hybrid&w=740",
    description:
      "Tratamento de dores articulares com foco em reabilitação funcional e alívio da dor.",
  },
  {
    id: 4,
    imgUrl:
      "https://www.elosenior.com.br/wp-content/uploads/2022/10/elo-senior-fisioterapia-para-idosos-1024x1024.jpg",
    description:
      "Sessão de fisioterapia personalizada para cuidados específicos na terceira idade.",
  },
  {
    id: 5,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8WbU2BpjaBwTv9ZJQANoOhhUc7uQVVcZcQ&s",
    description:
      "Acompanhamento fisioterapêutico para prevenir quedas e estimular coordenação motora.",
  },
  {
    id: 6,
    imgUrl:
      "https://img.freepik.com/fotos-premium/paciente-de-tratamento-fisioterapeuta-segurando-pacientes-mao-ombro-tratamento-de-articulacao-medico-fisico-consultando-o-paciente-sobre-problemas-de-dor-muscular-no-ombro-conceito-de-diagnostico-de-fisioterapia_1212-5594.jpg?semt=ais_hybrid&w=740",
    description:
      "Fisioterapia para reabilitação pós-cirúrgica com foco em movimentos e funcionalidade.",
  },
  {
    id: 7,
    imgUrl:
      "https://www.elosenior.com.br/wp-content/uploads/2022/10/elo-senior-fisioterapia-para-idosos-1024x1024.jpg",
    description:
      "Cuidado dedicado no acompanhamento físico de idosos, priorizando o bem-estar diário.",
  },
  {
    id: 8,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8WbU2BpjaBwTv9ZJQANoOhhUc7uQVVcZcQ&s",
    description:
      "Exercícios leves aplicados para manter a mobilidade e prevenir atrofias musculares.",
  },
  {
    id: 9,
    imgUrl:
      "https://img.freepik.com/fotos-premium/paciente-de-tratamento-fisioterapeuta-segurando-pacientes-mao-ombro-tratamento-de-articulacao-medico-fisico-consultando-o-paciente-sobre-problemas-de-dor-muscular-no-ombro-conceito-de-diagnostico-de-fisioterapia_1212-5594.jpg?semt=ais_hybrid&w=740",
    description:
      "Sessão focada em reabilitação do ombro e melhora da amplitude de movimento.",
  },
];

export function CarouselsAbout() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="relative mt-12">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        navigation={{
          prevEl: prevRef.current!,
          nextEl: nextRef.current!,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center">
              <img
                src={item.imgUrl}
                alt={`Slide ${item.id}`}
                className="w-full h-80 object-cover"
              />
              <p className="mt-2 mb-6 text-center text-base md:text-lg px-2 text-txt-tertiary">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botões centralizados e visíveis apenas em md+ */}
      <button
        ref={prevRef}
        className="cursor-pointer hidden md:flex items-center justify-center absolute top-40 left-2 z-10 -translate-y-1/2 bg-white text-txt-tertiary p-2 rounded-full shadow"
      >
        <ArrowLeft />
      </button>
      <button
        ref={nextRef}
        className="cursor-pointer hidden md:flex items-center justify-center absolute top-40 right-2 z-10 -translate-y-1/2 bg-white text-txt-tertiary p-2 rounded-full shadow"
      >
        <ArrowRight />
      </button>
    </div>
  );
}
