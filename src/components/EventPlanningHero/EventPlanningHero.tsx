import React, { useState, useEffect } from "react";

interface Feature {
  icon: React.ReactNode;
  label: string;
}

export const EventPlanningHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const features: Feature[] = [
    { icon: <CheckIcon />, label: "Espacios Premium" },
    { icon: <CheckIcon />, label: "Servicio Personalizado" },
    { icon: <CheckIcon />, label: "Reservas Grupales" },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo (ajustar ruta según tu imagen real de eventos) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/evento-lujo.jpg')", // Cambia por una imagen real de evento, boda, gala, etc.
        }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-[#0D0D0D]/60" />
      </div>

      {/* Elementos decorativos flotantes (iguales al Hero original) */}
      <div
        className="absolute top-24 left-12 w-3 h-3 rounded-full blur-sm animate-pulse"
        style={{
          backgroundColor: "rgba(242, 226, 5, 0.3)",
          animationDelay: "0s",
        }}
      />
      <div
        className="absolute bottom-40 right-16 w-2 h-2 rounded-full blur-xs animate-ping"
        style={{
          backgroundColor: "rgba(242, 12, 31, 0.4)",
          animationDelay: "1s",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Título principal */}
        <h1
          className={`text-5xl md:text-7xl font-bold text-white mb-4 transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Planificación de Eventos
        </h1>

        {/* Subtítulo con gradiente rojo */}
        <p
          className={`text-2xl md:text-4xl mb-6 bg-gradient-to-r from-[#F20C0C] via-[#D10000] to-[#A00000] bg-clip-text text-transparent transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Crea experiencias inolvidables
        </p>

        {/* Descripción secundaria */}
        <p
          className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Celebra bodas, reuniones corporativas o eventos privados en nuestros espacios exclusivos con servicio de lujo.
        </p>

        {/* Características con iconos */}
        <div
          className={`flex flex-wrap justify-center gap-8 mb-12 transition-all duration-1000 delay-900 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-green-400 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <span className="text-white font-medium text-base md:text-lg">
                {feature.label}
              </span>
            </div>
          ))}
        </div>

        {/* Botón CTA */}
        <div
          className={`transition-all duration-1000 delay-1100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="group px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-2xl hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 active:scale-95 hover:-translate-y-1">
            <span className="flex items-center gap-3">
              Solicitar Evento
              <ChevronDownIcon className="w-5 h-5 group-hover:translate-y-1 group-hover:rotate-180 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

// --- Iconos reutilizables ---

const CheckIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);