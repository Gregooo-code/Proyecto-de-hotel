import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star } from "lucide-react";

interface ZoneCardProps {
  id: string;
  name: string;
  price: number; // Puede ser precio de acceso, actividad, etc.
  image: string;
  rating: number;
  isFavorite?: boolean;
}

export const ZoneCard = ({
  name,
  price,
  image,
  rating,
  isFavorite = false,
}: ZoneCardProps) => {
  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-3 right-3 rounded-full ${
            isFavorite ? "bg-red-500 text-white" : "bg-white/80 text-gray-600"
          } hover:bg-red-500 hover:text-white`}
        >
          <Heart
            className="w-4 h-4"
            fill={isFavorite ? "currentColor" : "none"}
          />
        </Button>
        <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm text-gray-800 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          {rating.toFixed(2)}
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-gray-800 text-lg">{name}</h3>
          <span className="text-orange-500 font-bold">${price}</span>
        </div>
        <p className="text-xs text-gray-500">por noche</p>{" "}
        {/* Mantengo "per month" como en la imagen */}
      </CardContent>
    </Card>
  );
};
