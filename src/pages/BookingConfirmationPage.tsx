// src/pages/BookingConfirmationPage/BookingConfirmationPage.tsx
import React from 'react';
import ProgressIndicator from '../components/BookingConfirmation/ProgressIndicator';
import GuestInformationForm from '../components/BookingConfirmation/GuestInformationForm';
import PaymentDetailsForm from '../components/BookingConfirmation/PaymentDetailsForm';
import ReservationSummary from '../components/BookingConfirmation/ReservationSummary';

// Definición de tipos para los detalles de la reserva
interface ReservationDetails {
  roomType: string;
  roomDescription: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  guests: string;
  pricePerNight: string;
  subtotal: string;
  taxes: string;
  total: string;
}

// Tipo para los pasos del progreso
type ProgressStep = 1 | 2 | 3;

const BookingConfirmationPage: React.FC = () => {
  // Estado compartido entre los formularios
  const [currentStep, setCurrentStep] = React.useState<ProgressStep>(2);
  
  // Datos de la reserva con tipo definido
  const reservationDetails: ReservationDetails = {
    roomType: "Suite Ocean View Premium",
    roomDescription: "1 Cama King, 4 Huéspedes",
    checkIn: "15 Nov, 2023",
    checkOut: "18 Nov, 2023",
    nights: 3,
    guests: "2 Adultos, 0 Niños",
    pricePerNight: "$650",
    subtotal: "$1950",
    taxes: "$150",
    total: "$2100"
  };

  // Manejador para enviar el formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para procesar la reserva
    setCurrentStep(3); // Avanzar al siguiente paso
  };

  return (
    <main className="py-12" >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-10">Confirmar Reserva</h1>
        
        <ProgressIndicator currentStep={currentStep} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Datos del Huésped</h2>
              <GuestInformationForm />
              
              <h2 className="text-2xl font-bold mb-6 pt-8 border-t border-gray-200">Detalles de Pago</h2>
              <PaymentDetailsForm />
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-200"
                >
                  Confirmar Reserva
                </button>
              </div>
            </form>
          </div>
          
          <div className="lg:col-span-1">
            <ReservationSummary details={reservationDetails} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookingConfirmationPage;