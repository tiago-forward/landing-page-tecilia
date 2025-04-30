import TitleSection from "../titles/TitleSection";
import { TestimonialsDescription } from "@/constants/testimonialsDescription";

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

        {/* GRID DE DEPOIMENTOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {TestimonialsDescription.map((testimony, index) => (
            <div
              key={index}
              className="bg-gray-100 space-y-4 p-4 sm:p-6 rounded-2xl border border-gray-300 shadow flex flex-col justify-center"
            >
              <div className="flex items-center gap-4">
                <img
                  src="https://pm3.com.br/wp-content/uploads/2023/09/Luisa-Barwinski-150x150.jpeg"
                  alt={testimony.nome}
                  className="rounded-full w-12 h-12 object-cover"
                />
                <div>
                  <p className="font-semibold">{testimony.nome}</p>
                  <p className="text-sm text-gray-500">{testimony.cargo}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed italic">
                “{testimony.texto}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
