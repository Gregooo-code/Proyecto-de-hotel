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
          className="text-white text-2xl font-bold hover:text-white/80 transition-colors"
        >
          <img
            src="/images/baywatch_logo.png" 
            alt="Bay Watch Logo"
            className="h-24 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 bg-white/10 backdrop-blur-sm rounded-full px-8 py-3">
          <Link
            to="/rooms-and-suites"
            className="text-white hover:text-white/80 transition-colors"
          >
            Habitaciones
          </Link>
          <Link
            to="/gastronomy"
            className="text-white hover:text-white/80 transition-colors"
          >
            Gastronomía
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-white/80 transition-colors"
          >
            Servicios
          </Link>
          <Link
            to="/experiences"
            className="text-white hover:text-white/80 transition-colors"
          >
            Experiencias
          </Link>
          <Link
            to="/about-us"
            className="text-white hover:text-white/80 transition-colors"
          >
            Sobre Nosotros
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-white/80 transition-colors"
          >
            Contacto
          </Link>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <Link
            to="/signin"
            className="text-white hover:text-white/80 transition-colors hidden md:block"
          >
            Iniciar Sesión
          </Link>
          <Button
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            <Download className="w-4 h-4 mr-2" />
            Obtén la aplicación app
          </Button>
        </div>
      </div>
    </header>
  );
};
