import { useState, useEffect } from "react";
import { ChevronDown, Star, Award, Utensils, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export const GastronomyHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "/images/gastronomia banner.jpg",
    "/images/gastronomia banner 2.jpg",
    "/images/gastronomia banner 3.jpg",
  ];

  const stats = [
    { icon: <Star className="text-[#000] group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"/>, value: "4.8", label: "Rating" },
    {
      icon: <Utensils className="text-[#000] group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"/>,
      value: "200+",
      label: "Platillos",
    },
    { icon: <Award className="text-[#000] group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"/>, value: "5", label: "Chefs" },
    { icon: <Clock className="text-[#000] group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"/>, value: "24/7", label: "Servicio" },
  ];

  useEffect(() => {
    setIsLoaded(true);

    // Auto-rotate background images every 8 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      {/* Background Images with Slideshow */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-2000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F20C0C]/20 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-[#F20C0C]/20 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse delay-500" />

      {/* Content Container */}
      <div className="relative z-10 px-6 max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div
          className={`mb-6 transform transition-all duration-1000 delay-300 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-sm">
            <Link to="/">Inicio</Link>
            <ChevronDown className="w-4 h-4 mx-2 rotate-[-90deg]" />
            <span className="text-white font-medium">
              Gastronomía
            </span>
          </div>
        </div>

        {/* Main Title */}
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 delay-500 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="block">Nuestra</span>
          <span className="block bg-gradient-to-r from-[#F20C0C] via-[#D10000] to-[#A00000] bg-clip-text text-transparent">
            Gastronomía
          </span>
          <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-white/90 mt-2">
            Exquisita
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed transform transition-all duration-1000 delay-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Un viaje culinario que{" "}
          <span className="text-[#F20C1F] font-semibold">deleitará</span> todos tus
          sentidos con{" "}
          <span className="text-[#F20C1F] font-semibold">sabores únicos</span>.
          <br className="hidden md:block" />
          <span className="text-white/70 text-base md:text-lg block mt-2">
            Experiencias gastronómicas diseñadas por chefs expertos
          </span>
        </p>

        {/* Stats */}
        <div
          className={`flex flex-wrap justify-center gap-6 md:gap-8 mb-10 transform transition-all duration-1000 delay-900 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="text-[#F20C1F] group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-lg transition-colors duration-300">{stat.value}</div>
                <div className="text-white/70 text-xs group-hover:text-white/90 transition-colors duration-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-1100 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-[#F20C0C] to-[#F20C1F] hover:from-[#D10000] hover:to-[#B20000] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95">
            <span className="flex items-center gap-2">
              Ver Nuestro Menú
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </span>
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105 active:scale-95">
            Reservar Mesa
          </button>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-20 right-8 flex flex-col gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-8 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-[#F20C1F] shadow-lg"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};