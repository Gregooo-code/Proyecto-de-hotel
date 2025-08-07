import React, { useState } from 'react';

interface PaymentDetails {
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
  cardName: string;
  termsAccepted: boolean;
}

interface PaymentDetailsFormProps {
  onSubmit?: (paymentDetails: PaymentDetails) => void;
}

export default function PaymentDetailsForm({ onSubmit }: PaymentDetailsFormProps) {
  const [formData, setFormData] = useState<PaymentDetails>({
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    cardName: '',
    termsAccepted: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    // Aquí iría la lógica para redirigir a la página de confirmación
    window.location.href = 'confirmacion.html';
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="card-number" className="block text-gray-700 text-sm font-medium mb-1">Número de Tarjeta</label>
        <input 
          type="text" 
          id="card-number" 
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          placeholder="XXXX XXXX XXXX XXXX" 
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-baywatch-red focus:border-baywatch-red text-gray-800" 
          required
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label htmlFor="expiry-month" className="block text-gray-700 text-sm font-medium mb-1">Mes Exp.</label>
          <input 
            type="text" 
            id="expiry-month" 
            name="expiryMonth"
            value={formData.expiryMonth}
            onChange={handleChange}
            placeholder="MM" 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-baywatch-red focus:border-baywatch-red text-gray-800" 
            required
          />
        </div>
        <div>
          <label htmlFor="expiry-year" className="block text-gray-700 text-sm font-medium mb-1">Año Exp.</label>
          <input 
            type="text" 
            id="expiry-year" 
            name="expiryYear"
            value={formData.expiryYear}
            onChange={handleChange}
            placeholder="AA" 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-baywatch-red focus:border-baywatch-red text-gray-800" 
            required
          />
        </div>
        <div>
          <label htmlFor="cvv" className="block text-gray-700 text-sm font-medium mb-1">CVV</label>
          <input 
            type="text" 
            id="cvv" 
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="123" 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-baywatch-red focus:border-baywatch-red text-gray-800" 
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="card-name" className="block text-gray-700 text-sm font-medium mb-1">Nombre en la Tarjeta</label>
        <input 
          type="text" 
          id="card-name" 
          name="cardName"
          value={formData.cardName}
          onChange={handleChange}
          placeholder="Nombre Apellido" 
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-baywatch-red focus:border-baywatch-red text-gray-800" 
          required
        />
      </div>
      <div className="flex items-center mt-6">
        <input 
          type="checkbox" 
          id="terms" 
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
          className="rounded text-baywatch-red focus:ring-baywatch-red" 
          required
        />
        <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
          Acepto los <a href="#" className="text-baywatch-red hover:underline">Términos y Condiciones</a> y la <a href="#" className="text-baywatch-red hover:underline">Política de Privacidad</a>.
        </label>
      </div>
    </form>
  );
}