// src/pages/BookingConfirmationPage/components/GuestInformationForm.tsx
import React, { useState } from 'react';

interface GuestInformation {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  specialRequests: string;
}

export default function GuestInformationForm() {
  const [formData, setFormData] = useState<GuestInformation>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    specialRequests: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="first-name" className="block text-gray-700 text-sm font-medium mb-1">Nombre</label>
          <input 
            type="text" 
            id="first-name" 
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="María" 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-baywatch-red focus:border-baywatch-red text-gray-800" 
            required
          />
        </div>
        <div>
          <label htmlFor="last-name" className="block text-gray-700 text-sm font-medium mb-1">Apellido</label>
          <input 
            type="text" 
            id="last-name" 
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="González" 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-baywatch-red focus:border-baywatch-red text-gray-800" 
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Correo Electrónico</label>
        <input 
          type="email" 
          id="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="maria.gonzalez@example.com" 
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-baywatch-red focus:border-baywatch-red text-gray-800" 
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">Teléfono</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 123-4567" 
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-baywatch-red focus:border-baywatch-red text-gray-800" 
          required
        />
      </div>
      <div>
        <label htmlFor="address" className="block text-gray-700 text-sm font-medium mb-1">Dirección</label>
        <input 
          type="text" 
          id="address" 
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Calle Falsa 123" 
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-baywatch-red focus:border-baywatch-red text-gray-800" 
          required
        />
      </div>
      <div>
        <label htmlFor="special-requests" className="block text-gray-700 text-sm font-medium mb-1">Solicitudes Especiales (Opcional)</label>
        <textarea 
          id="special-requests" 
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          rows={3} 
          placeholder="Ej: Cuna para bebé, almohadas extra, etc." 
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-baywatch-red focus:border-baywatch-red text-gray-800"
        ></textarea>
      </div>
    </form>
  );
}