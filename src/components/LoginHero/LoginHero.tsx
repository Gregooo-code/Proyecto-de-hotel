import React, { useState, useEffect } from "react";
import { ArrowDown, Sparkles, Shield } from "lucide-react";

export const LoginHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoaded(true), 100); // delay de carga inicial
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('public/images/imagen de login banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto text-center">
        {/* Icono */}
        <div
          className={`mb-8 flex justify-center transform transition-all duration-1000 delay-200 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="relative">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-4 shadow-xl border border-[#F20C1F] hover:border-[#F20C0C] transition-all">
              <Shield className="w-10 h-10 text-[#F20C1F]" />
            </div>
            <div className="absolute -top-2 -right-2 bg-white/20 rounded-full p-1 shadow-md">
              <Sparkles className="w-5 h-5 text-[#F2E205] animate-pulse" />
            </div>
          </div>
        </div>

        {/* Título */}
        <h1
          className={`text-5xl md:text-7xl font-bold text-white mb-4 leading-tight transform transition-all duration-1000 delay-400 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="block">Bienvenido</span>
          <span className="block bg-gradient-to-r from-[#F20C1F] to-[#F20C0C] bg-clip-text text-transparent">
            de Vuelta
          </span>
        </h1>

        {/* Subtítulo */}
        <p
          className={`text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed transform transition-all duration-1000 delay-600 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Accede a tu cuenta para gestionar tus reservas y disfrutar de una
          experiencia personalizada
        </p>

        {/* Características destacadas */}
        <div
          className={`flex flex-wrap justify-center gap-5 mb-12 transform transition-all duration-1000 delay-800 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {[
            { color: "green", text: "Acceso Seguro", delay: 0 },
            { color: "blue", text: "Gestión Fácil", delay: 300 },
            { color: "yellow", text: "Experiencia Premium", delay: 600 },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 border border-[#F20C1F] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${item.delay}ms` }}
            >
              <div
                className={`w-2.5 h-2.5 bg-${item.color}-500 rounded-full animate-pulse`}
                style={{ animationDelay: `${item.delay}ms` }}
              ></div>
              <span className="text-white font-medium text-sm">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* Flecha animada */}
        <div
          className={`flex flex-col items-center transform transition-all duration-1000 delay-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="text-white/80 text-sm mb-3 font-medium">
            Continúa para iniciar sesión
          </p>
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-[#F20C1F]" />
          </div>
        </div>
      </div>
    </section>
  );
};