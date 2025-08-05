import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="text-white text-2xl font-bold hover:opacity-90 transition-opacity"
        >
          <img
            src="/images/baywatch_logo.png"
            alt="Bay Watch Logo"
            className="h-24 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 bg-black/30 backdrop-blur-md rounded-full px-8 py-3 border border-white/20 shadow-lg">
          <Link
            to="/rooms-and-suites"
            className="text-white hover:text-yellow-200 transition-colors duration-300 font-medium"
          >
            Habitaciones
          </Link>
          <Link
            to="/gastronomy"
            className="text-white hover:text-yellow-200 transition-colors duration-300 font-medium"
          >
            Gastronomía
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-yellow-200 transition-colors duration-300 font-medium"
          >
            Servicios
          </Link>
          <Link
            to="/experiences"
            className="text-white hover:text-yellow-200 transition-colors duration-300 font-medium"
          >
            Experiencias
          </Link>
          <Link
            to="/about-us"
            className="text-white hover:text-yellow-200 transition-colors duration-300 font-medium"
          >
            Sobre Nosotros
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-yellow-200 transition-colors duration-300 font-medium"
          >
            Contacto
          </Link>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <Link
            to="/signin"
            className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full shadow-lg hover:from-red-500 hover:to-red-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </header>
  );
};