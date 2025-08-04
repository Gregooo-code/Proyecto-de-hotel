import { SearchForm } from "../SearchForm/SearchForm";
import { motion } from "framer-motion";

const BlurText = ({ text, delay = 0, className = "", gradient = false }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      filter: "blur(20px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{
        overflow: "hidden",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "8px", marginBottom: "4px" }}
          key={index}
          className={
            gradient && word === "perfecto"
              ? "block bg-gradient-to-r from-[#F20C0C] via-[#D10000] to-[#A00000] bg-clip-text text-transparent"
              : ""
          }
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-background.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0D0D0D]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <BlurText
            text="Descubre tu refugio"
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
            delay={0.5}
          />
          <BlurText
            text="perfecto"
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            delay={0.8}
            gradient={true}
          />
          <BlurText
            text="Experimenta la hospitalidad excepcional en destinos únicos alrededor del mundo"
            className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed text-gray-300"
            delay={1.1}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <SearchForm />
        </motion.div>
      </div>

      {/* Decoraciones */}
      <div
        className="absolute top-20 left-10 w-3 h-3 rounded-full blur-sm animate-pulse"
        style={{ 
          backgroundColor: "rgba(242, 226, 5, 0.3)", // #F2E205 con 30% opacidad
          animationDelay: "0s" 
        }}
      />
      <div
        className="absolute bottom-40 right-20 w-2 h-2 rounded-full blur-xs animate-ping"
        style={{ 
          backgroundColor: "rgba(242, 12, 31, 0.4)", // #F20C1F con 40% opacidad
          animationDelay: "1s" 
        }}
      />
    </section>
  );
};