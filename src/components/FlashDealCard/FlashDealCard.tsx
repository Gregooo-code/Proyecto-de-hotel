import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tag } from "lucide-react"

interface FlashDealCardProps {
  id: string
  name: string
  originalPrice: number
  discountedPrice: number
  image: string
  description: string
}

export const FlashDealCard = ({ name, originalPrice, discountedPrice, image, description }: FlashDealCardProps) => {
  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
      <div className="relative">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
          <Tag className="w-3 h-3" />
          OFERTA
        </div>
      </div>

      <CardContent className="p-6 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-800 text-lg mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
        <div className="flex items-baseline justify-between mb-4">
          <span className="text-gray-500 line-through text-sm">${originalPrice}</span>
          <span className="text-orange-600 font-bold text-2xl">${discountedPrice}</span>
        </div>
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-auto">Reservar Ahora</Button>
      </CardContent>
    </Card>
  )
}
