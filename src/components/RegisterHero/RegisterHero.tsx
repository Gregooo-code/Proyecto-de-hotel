import React from "react";
import { ArrowDown, Star, Users, Gift } from "lucide-react";

export const RegisterHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo degradado animado - tonos diferentes para registro */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500">
        {/* Elementos geométricos animados */}
        <div className="absolute inset-0">
          {/* Círculos flotantes */}
          <div className="absolute top-16 left-16 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-24 w-56 h-56 bg-white/5 rounded-full blur-2xl animate-pulse delay-700"></div>
          <div className="absolute bottom-24 left-40 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-300"></div>
          <div className="absolute bottom-32 right-16 w-28 h-28 bg-white/15 rounded-full blur-lg animate-pulse delay-1000"></div>
          
          {/* Estrellas flotantes */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-yellow-300/60 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-pink-300/50 rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-purple-300/40 rounded-full animate-ping delay-200"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-orange-300/60 rounded-full animate-ping delay-800"></div>
          
          {/* Formas adicionales para registro */}
          <div className="absolute top-20 right-1/2 w-1 h-8 bg-white/20 rotate-45 animate-pulse delay-400"></div>
          <div className="absolute bottom-40 left-1/2 w-6 h-1 bg-white/20 rotate-12 animate-pulse delay-600"></div>
        </div>
        
        {/* Overlay con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 px-6 max-w-5xl mx-auto text-center">
        {/* Icono principal */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 shadow-2xl border border-white/30">
              <Users className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -top-2 -right-2">
              <Star className="w-6 h-6 text-yellow-300 animate-pulse" />
            </div>
            <div className="absolute -bottom-1 -left-1">
              <Gift className="w-5 h-5 text-pink-300 animate-bounce delay-500" />
            </div>
          </div>
        </div>

        {/* Título principal */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">Únete a</span>
          <span className="block bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
            Nuestra Comunidad
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Crea tu cuenta y descubre un mundo de posibilidades. Únete a miles de usuarios que ya disfrutan de nuestros servicios
        </p>

        {/* Beneficios destacados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Experiencia Premium</h3>
            <p className="text-white/80 text-sm">Acceso completo a todas las funcionalidades</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Comunidad Activa</h3>
            <p className="text-white/80 text-sm">Conecta con usuarios de todo el mundo</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Beneficios Exclusivos</h3>
            <p className="text-white/80 text-sm">Ofertas especiales y descuentos únicos</p>
          </div>
        </div>

        {/* Estadísticas rápidas */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">10K+</div>
            <div className="text-white/70 text-sm">Usuarios Activos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">50K+</div>
            <div className="text-white/70 text-sm">Reservas Exitosas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">4.9★</div>
            <div className="text-white/70 text-sm">Valoración Media</div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="flex flex-col items-center">
          <p className="text-white/70 text-sm mb-3 font-medium">Comienza tu registro</p>
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-white/60" />
          </div>
        </div>
      </div>

      {/* Elemento decorativo inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-purple-50 to-transparent"></div>
      
      {/* Ondas decorativas con colores diferentes */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill="#faf5ff"
            className="opacity-50"
          />
        </svg>
      </div>

      {/* Partículas flotantes adicionales */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-10 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-60 animate-ping delay-1000"></div>
        <div className="absolute top-1/4 right-20 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-50 animate-ping delay-1500"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-70 animate-ping delay-2000"></div>
      </div>
    </section>
  );
};