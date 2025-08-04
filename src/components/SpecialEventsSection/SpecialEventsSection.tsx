import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Clock, MapPin, Users, Ticket, Wine, Film, Music } from "lucide-react";

const eventsData = [
  {
    id: "ev1",
    name: "Concierto de Jazz en Vivo",
    description: "Una noche mágica con los mejores talentos del jazz local.",
    image: "/images/jazz en vivo.jpg",
    date: "25 de Agosto",
    time: "20:00 - 23:00",
    location: "Salón Principal",
    type: "Música",
    icon: <Music className="w-6 h-6 text-orange-500" />,
    capacity: "80 personas",
    price: 35,
    dressCode: "Elegante casual",
    highlights: [
      "Trío de jazz con músicos locales",
      "Barra de cócteles especiales",
      "Ambiente íntimo y acogedor",
      "Sesión de preguntas con los artistas"
    ],
    ageRestriction: "Mayores de 18 años"
  },
  {
    id: "ev2",
    name: "Noche de Cine al Aire Libre",
    description: "Disfruta de clásicos del cine bajo las estrellas.",
    image: "/images/cine al aire libre.jpg",
    date: "Cada Sábado",
    time: "21:00 - 23:30",
    location: "Jardines del Hotel",
    type: "Cine",
    icon: <Film className="w-6 h-6 text-orange-500" />,
    capacity: "120 personas",
    price: 15,
    dressCode: "Informal",
    highlights: [
      "Proyección en pantalla gigante",
      "Butacas reclinables premium",
      "Snacks y bebidas incluidos",
      "Mantas disponibles"
    ],
    ageRestriction: "Para toda la familia"
  },
  {
    id: "ev3",
    name: "Degustación de Vinos Premium",
    description: "Un viaje sensorial a través de los mejores vinos de la región.",
    image: "/images/degustacion de vinos premium.jpg",
    date: "10 de Septiembre",
    time: "19:30 - 22:00",
    location: "Bodega del Hotel",
    type: "Gastronomía",
    icon: <Wine className="w-6 h-6 text-orange-500" />,
    capacity: "25 personas",
    price: 60,
    dressCode: "Smart casual",
    highlights: [
      "5 vinos premium con maridaje",
      "Guía sommelier experto",
      "Tabla de quesos artesanales",
      "Certificado de participación"
    ],
    ageRestriction: "Mayores de 21 años"
  }
];

export const SpecialEventsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Eventos Especiales
          </h2>
          <p className="text-lg text-gray-600">
            No te pierdas los eventos exclusivos que hemos preparado para ti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event) => (
            <Card
              key={event.id}
              className="shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardContent className="p-6 flex flex-col flex-1">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-orange-100 rounded-full mr-3">
                    {event.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 text-xl">
                    {event.name}
                  </h3>
                </div>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {event.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                  <div className="flex items-center gap-1 text-gray-700">
                    <CalendarCheck className="w-4 h-4 text-blue-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-700">
                    <Clock className="w-4 h-4 text-purple-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-700">
                    <Users className="w-4 h-4 text-green-500" />
                    <span>{event.capacity}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-700">
                    <Ticket className="w-4 h-4 text-yellow-500" />
                    <span>${event.price} USD</span>
                  </div>
                  <div className="col-span-2 flex items-center gap-1 text-gray-700">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">Destacados:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {event.highlights.slice(0, 3).map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-orange-500 mr-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto pt-4 border-t">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                      {event.dressCode}
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {event.ageRestriction}
                    </span>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Reservar Ahora
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};