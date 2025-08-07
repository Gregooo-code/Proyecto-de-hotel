
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

interface ReservationSummaryProps {
  details: ReservationDetails;
}

export default function ReservationSummary({ details }: ReservationSummaryProps) {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6 sticky top-6 border-t-4 border-baywatch-orange">
      <h2 className="text-2xl font-bold mb-4">Resumen de la Reserva</h2>
      <div className="space-y-4 mb-6">
        <div className="flex items-center space-x-4">
          <img 
            src="/placeholder.svg?height=80&width=120" 
            alt={details.roomType} 
            className="w-24 h-16 object-cover rounded-lg"
          />
          <div>
            <h3 className="font-semibold text-lg">{details.roomType}</h3>
            <p className="text-gray-600 text-sm">{details.roomDescription}</p>
          </div>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Check-in:</span>
          <span className="font-medium">{details.checkIn}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Check-out:</span>
          <span className="font-medium">{details.checkOut}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Noches:</span>
          <span className="font-medium">{details.nights}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Huéspedes:</span>
          <span className="font-medium">{details.guests}</span>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-4 mt-4">
        <div className="flex justify-between text-gray-700 mb-2">
          <span>Precio por Noche:</span>
          <span>{details.pricePerNight}</span>
        </div>
        <div className="flex justify-between text-gray-700 mb-2">
          <span>Subtotal ({details.nights} Noches):</span>
          <span>{details.subtotal}</span>
        </div>
        <div className="flex justify-between text-gray-700 mb-2">
          <span>Impuestos y Tasas:</span>
          <span>{details.taxes}</span>
        </div>
        <div className="flex justify-between font-bold text-2xl text-gray-900 border-t pt-3 mt-3">
          <span>Total a Pagar:</span>
          <span>{details.total}</span>
        </div>
      </div>
    </div>
  );
}