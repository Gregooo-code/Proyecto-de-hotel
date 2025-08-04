import React from "react";
import { ArrowDown, Sparkles, Shield } from "lucide-react";

export const LoginHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo degradado animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600">
        {/* Elementos geométricos animados */}
        <div className="absolute inset-0">
          {/* Círculos flotantes */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/15 rounded-full blur-lg animate-pulse delay-700"></div>

          {/* Formas geométricas */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-ping delay-300"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/35 rounded-full animate-ping delay-700"></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white/25 rounded-full animate-ping delay-1000"></div>
        </div>

        {/* Overlay con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto text-center">
        {/* Icono principal */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 shadow-2xl border border-white/30">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Título principal */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">Bienvenido</span>
          <span className="block bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
            de Vuelta
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Accede a tu cuenta para gestionar tus reservas y disfrutar de una
          experiencia personalizada
        </p>

        {/* Características destacadas */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium">
              Acceso Seguro
            </span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
            <span className="text-white/90 text-sm font-medium">
              Gestión Fácil
            </span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-600"></div>
            <span className="text-white/90 text-sm font-medium">
              Experiencia Premium
            </span>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="flex flex-col items-center">
          <p className="text-white/70 text-sm mb-3 font-medium">
            Continúa para iniciar sesión
          </p>
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-white/60" />
          </div>
        </div>
      </div>

      {/* Elemento decorativo inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-orange-50 to-transparent"></div>

      {/* Ondas decorativas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#fef7ed"
            className="opacity-50"
          />
        </svg>
      </div>
    </section>
  );
};
