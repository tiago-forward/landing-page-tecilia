"use client";

import TitleSection from "../titles/TitleSection";
import { TestimonialsDescription } from "@/constants/testimonialsDescription";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const videoSections = [
  {
    video: "/assets/videos/Depoimentos-PM3-2024-Mariana-Pieslak.webm",
    poster: "/assets/images/poster1.jpg",
    title: "Fortalecimento do Core",
    description:
      "Exercícios guiados para fortalecimento da musculatura abdominal e lombar.",
    reverse: false,
  },
  {
    video: "/assets/videos/Depoimentos-PM3-2024-Mariana-Pieslak.webm",
    poster: "/assets/images/poster2.jpg",
    title: "Mobilidade Articular",
    description:
      "Treino focado em melhorar a amplitude dos movimentos articulares.",
    reverse: true,
  },
  {
    video: "/assets/videos/Depoimentos-PM3-2024-Mariana-Pieslak.webm",
    poster: "/assets/images/poster3.jpg",
    title: "Alongamento Funcional",
    description:
      "Sessão prática de alongamentos para recuperação e prevenção de lesões.",
    reverse: false,
  },
];

export default function Testimonials() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <TitleSection title="Experiência em Movimento" />

      {/* Seções de Vídeo */}
      {videoSections.map((item, idx) => (
        <div
          key={idx}
          className={`flex flex-col lg:flex-row ${
            item.reverse ? "lg:flex-row-reverse" : ""
          } items-center gap-8 my-12`}
        >
          <video
            muted
            autoPlay
            loop
            playsInline
            preload="none"
            controls
            poster={item.poster}
            className="w-full lg:w-80 rounded-2xl shadow-lg"
          >
            <source
              src={"/assets/videos/Depoimentos-PM3-2024-Mariana-Pieslak.webm"}
              type="video/mp4"
            />
          </video>

          <div className="w-full lg:w-1/2">
            <h3 className="text-4xl font-actioness font-semibold mb-4">
              {item.title}
            </h3>
            <p className="text-2xl text-txt-description">{item.description}</p>
          </div>
        </div>
      ))}

      {/* Swiper de Depoimentos */}
      <div className="mt-20">
        <TitleSection title="Depoimentos" />
        <div className="w-full mt-8">
          <Swiper
            spaceBetween={32}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            breakpoints={{
              768: { slidesPerView: 1.2 },
              1024: { slidesPerView: 1.5 },
            }}
          >
            {TestimonialsDescription.map((testimony, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-100 p-8 rounded-2xl border border-border shadow-md flex flex-col justify-between min-h-[280px] mb-8">
                  <div className="flex flex-col items-center gap-4 mb-4">
                    <img
                      src="https://pm3.com.br/wp-content/uploads/2023/09/Luisa-Barwinski-150x150.jpeg"
                      alt={testimony.nome}
                      className="rounded-full w-16 h-16 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-center">
                        {testimony.nome}
                      </p>
                      <p className="text-md text-gray-500 text-center">
                        {testimony.cargo}
                      </p>
                    </div>
                  </div>
                  <p className="text-2xl leading-relaxed text-txt-tertiary">
                    “{testimony.texto}”
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
