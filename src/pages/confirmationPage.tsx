import { Header } from "../components/Header/Header";
import { EventPlanningHero } from "../components/EventPlanningHero/EventPlanningHero";
import { ConfirmationPage } from "../components/ConfirmationPage/ConfirmationPage"; // Usar el nuevo componente
import { FAQSection } from "../components/FAQSection/FAQSection";

export const Confirmation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      < EventPlanningHero/>
      <main className="relative z-10">
        <ConfirmationPage /> {/* Aquí se combinan el formulario y el mapa */}
        <FAQSection />
      </main>
    </div>
  );
};
