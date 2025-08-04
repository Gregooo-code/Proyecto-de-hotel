"use client";

import { useState } from "react";
import { RoomCard } from "../RoomCard/RoomCard";
import { RoomFilters } from "../RoomFilters/RoomFilters";
import type { Room } from "../RoomCard/RoomCard.types"; // Importar el tipo Room

const allRoomsData: Room[] = [
  {
    id: "r1",
    name: "Suite Presidencial",
    price: 450,
    image: "/images/suite presidencial.jpg",
    capacity: 4,
    bedType: "King",
    view: "Ocean",
    amenities: ["Wi-Fi", "TV", "Minibar", "Balcony"],
  },
  {
    id: "r2",
    name: "Habitación Deluxe con Vista a la Ciudad",
    price: 280,
    image: "/images/habitacion deluxe.jpg",
    capacity: 2,
    bedType: "Queen",
    view: "City",
    amenities: ["Wi-Fi", "TV", "Minibar"],
  },
  {
    id: "r3",
    name: "Bungalow con Jardín",
    price: 350,
    image: "/images/bungalow.jpg",
    capacity: 3,
    bedType: "King",
    view: "Garden",
    amenities: ["Wi-Fi", "TV", "Private Patio"],
  },
  {
    id: "r4",
    name: "Habitación Estándar",
    price: 180,
    image: "/images/habitacion estandart.jpg",
    capacity: 2,
    bedType: "Twin",
    view: "City",
    amenities: ["Wi-Fi", "TV"],
  },
  {
    id: "r5",
    name: "Suite Familiar",
    price: 520,
    image: "/images/suite familiar.jpg",
    capacity: 5,
    bedType: "King",
    view: "Mountain",
    amenities: ["Wi-Fi", "TV", "Kitchenette"],
  },
  {
    id: "r6",
    name: "Habitación Ejecutiva",
    price: 320,
    image: "/images/habitacion ejecutiva.jpg",
    capacity: 2,
    bedType: "Queen",
    view: "City",
    amenities: ["Wi-Fi", "TV", "Desk"],
  },
];

export const RoomsGridSection = () => {
  const [filteredRooms, setFilteredRooms] = useState<Room[]>(allRoomsData);

  const handleFilterChange = (filters: {
    capacity?: number;
    bedType?: string;
    view?: string;
  }) => {
    let tempRooms = allRoomsData;

    if (filters.capacity) {
      tempRooms = tempRooms.filter(
        (room) => room.capacity >= filters.capacity!
      );
    }
    if (filters.bedType) {
      tempRooms = tempRooms.filter((room) => room.bedType === filters.bedType);
    }
    if (filters.view) {
      tempRooms = tempRooms.filter((room) => room.view === filters.view);
    }

    setFilteredRooms(tempRooms);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Habitaciones & Suites
          </h2>
          <p className="text-lg text-gray-600">
            Encuentra la estancia perfecta para tu viaje.
          </p>
        </div>

        <RoomFilters onFilterChange={handleFilterChange} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room) => (
              <RoomCard
                key={room.id}
                id={room.id}
                name={room.name}
                price={room.price}
                image={room.image}
                capacity={room.capacity}
                bedType={room.bedType}
                view={room.view}
                amenities={room.amenities}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-600 text-xl py-10">
              No se encontraron habitaciones con los filtros seleccionados.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};