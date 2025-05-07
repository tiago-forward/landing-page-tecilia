"use client";

import TitleSection from "../titles/TitleSection";
import { TestimonialsDescription } from "@/constants/testimonialsDescription";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <TitleSection title="Depoimentos" />
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* VÍDEO */}
        <video
          muted
          autoPlay
          disablePictureInPicture
          disableRemotePlayback
          playsInline
          loop
          preload="none"
          controls
          title="Depoimento da Mariana"
          poster="/assets/images/poster-mariana.jpeg"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs rounded-2xl shadow-lg"
        >
          <source
            src="/assets/videos/Depoimentos-PM3-2024-Mariana-Pieslak.webm"
            type="video/webm"
          />
        </video>

        {/* SWIPER DE DEPOIMENTOS */}
        <div className="w-full lg:w-[70%]">
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
                      className="rounded-full w-14 h-14 md:w-16 md:h-16 object-cover"
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
