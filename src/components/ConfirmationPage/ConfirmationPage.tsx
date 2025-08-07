import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUserCircle, faCalendarPlus } from '@fortawesome/free-solid-svg-icons';



interface BookingDetails {
  bookingNumber: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  totalPaid: string;
}


export const ConfirmationPage = () => {
  // Datos de ejemplo (en una app real, vendrían de un estado o API)
  const booking: BookingDetails = {
    bookingNumber: "BW-20231115-7890",
    roomType: "Suite Ocean View Premium",
    checkIn: "15 de Noviembre, 2023",
    checkOut: "18 de Noviembre, 2023",
    guests: "2 Adultos",
    totalPaid: "$2100",
  };

  // Simulación de función para añadir al calendario
  const handleAddToCalendar = () => {
    alert("Evento añadido a tu calendario.");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center border-t-4 border-green-500">
            {/* Icono de éxito */}
            <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
              <FontAwesomeIcon icon={faCheckCircle} className="text-5xl" />
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">¡Reserva Confirmada!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Tu reserva ha sido procesada exitosamente. ¡Esperamos verte pronto!
            </p>

            {/* Detalles de la reserva */}
            <div className="text-left bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Detalles de tu Reserva</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <p className="font-semibold">Número de Reserva:</p>
                  <p className="text-[#DC2626] font-bold text-lg">{booking.bookingNumber}</p>
                </div>
                <div>
                  <p className="font-semibold">Habitación:</p>
                  <p>{booking.roomType}</p>
                </div>
                <div>
                  <p className="font-semibold">Check-in:</p>
                  <p>{booking.checkIn}</p>
                </div>
                <div>
                  <p className="font-semibold">Check-out:</p>
                  <p>{booking.checkOut}</p>
                </div>
                <div>
                  <p className="font-semibold">Huéspedes:</p>
                  <p>{booking.guests}</p>
                </div>
                <div>
                  <p className="font-semibold">Total Pagado:</p>
                  <p className="text-[#DC2626] font-bold text-lg">{booking.totalPaid}</p>
                </div>
              </div>
            </div>

            {/* Acciones */}
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="perfil-usuario.html"
                className="bg-[#DC2626] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#DC2626]/90 transition-colors shadow-md flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faUserCircle} className="mr-2" />Ver Mis Reservas
              </a>
              <button
                onClick={handleAddToCalendar}
                className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors shadow-md flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faCalendarPlus} className="mr-2" /> Añadir al Calendario
              </button>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};
