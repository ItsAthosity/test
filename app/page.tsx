"use client"

import { useState, useEffect } from "react"
import { Search, TrendingUp, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { TradingModal } from "@/components/trading-modal"

interface Pet {
  id: number
  name: string
  rarity: string
  price: number
  image: string
  trending: boolean
  owned: number
}

const pets: Pet[] = [
  // Legendary Pets
  {
    id: 24,
    name: "Tarantula Hawk",
    rarity: "Legendary",
    price: 5000,
    image: "/placeholder.svg?height=200&width=200",
    trending: true,
    owned: 1,
  },
  {
    id: 25,
    name: "Raptor",
    rarity: "Legendary",
    price: 5200,
    image: "/placeholder.svg?height=200&width=200",
    trending: false,
    owned: 1,
  },
  {
    id: 26,
    name: "Triceratops",
    rarity: "Legendary",
    price: 5400,
    image: "/placeholder.svg?height=200&width=200",
    trending: true,
    owned: 1,
  },
  {
    id: 27,
    name: "Stegosaurus",
    rarity: "Legendary",
    price: 5600,
    image: "/placeholder.svg?height=200&width=200",
    trending: false,
    owned: 1,
  },
  {
    id: 28,
    name: "Pterodactyl",
    rarity: "Legendary",
    price: 5800,
    image: "/placeholder.svg?height=200&width=200",
    trending: true,
    owned: 1,
  },
  {
    id: 29,
    name: "Turtle",
    rarity: "Legendary",
    price: 6000,
    image: "/placeholder.svg?height=200&width=200",
    trending: false,
    owned: 1,
  },
  {
    id: 30,
    name: "Petal Bee",
    rarity: "Legendary",
    price: 6200,
    image: "/placeholder.svg?height=200&width=200",
    trending: true,
    owned: 1,
  },
  {
    id: 31,
    name: "Moth",
    rarity: "Legendary",
    price: 6400,
    image: "/placeholder.svg?height=200&width=200",
    trending: false,
    owned: 1,
  },
  {
    id: 32,
    name: "Scarlet Macaw",
    rarity: "Legendary",
    price: 6600,
    image: "/placeholder.svg?height=200&width=200",
    trending: true,
    owned: 1,
  },
  {
    id: 33,
    name: "Ostrich",
    rarity: "Legendary",
    price: 6800,
    image: "/placeholder.svg?height=200&width=200",
    trending: false,
    owned: 1,
  },
  {
    id: 34,
    name: "Peacock",
    rarity: "Legendary",
    price: 7000,
    image: "/placeholder.svg?height=200&width=200",
    trending: true,
    owned: 1,
  },
  {
    id: 35,
    name: "Capybara",
    rarity: "Legendary",
    price: 7200,
    image: "/placeholder.svg?height=200&width=200",
    trending: false,
    owned: 1,
  },
  {
    id: 36,
    name: "Sand Snake",
    rarity: "Legendary",
    price: 7400,
    image: "/placeholder.svg?height=200&width=200",
    trending: true,
    owned: 1,
  },
  {
    id: 37,
    name: "Meerkat",
    rarity: "Legendary",
    price: 7600,
    image: "/placeholder.svg?height=200&width=200",
    trending: false,
    owned: 1,
  },

  // Mythical Pets
  {
    id: 38,
    name: "Brown Mouse",
    rarity: "Mythical",
    price: 10000,
    image: "/placeholder.svg?height=200&width=200",
    trending: true,
    owned: 1,
  },
  {
    id: 39,
    name: "Caterpillar",
    rarity: "Mythical",
    price: 10500,
    image: "/placeholder.svg?height=200&width=200",
    trending: false,
    owned: 1,
  },
  {
    id: 40,
    name: "Giant Ant",
    rarity: "Mythical",
    price: 11000,
    image: "/placeholder.svg?height=200&width=200",
    trending: true,
    owned: 1,
  },
  {
    id: 41,
    name: "Grey Mouse",
    rarity: "Mythical",
    price: 11500,
    image: "/placeholder.svg?height=200&width=200",
    trending: false,
    owned: 1,
  },
  {
    id: 42,
    name: "Praying Mantis",
    rarity: "Mythical",
    price: 12000,
    image: "/placeholder.svg?height=200&width=200",
    trending: true,
    owned: 1,
  },
  {
    id: 43,
    name: "Red Giant Ant",
    rarity: "Mythical",
    price: 12500,
    image: "/placeholder.svg?height=200&width=200",
    trending: false,
    owned: 1,
  },
  {
    id: 44,
    name: "Snail",
    rarity: "Mythical",
    price: 13000,
    image: "/placeholder.svg?height=200&width=200",
    trending: true,
    owned: 1,
  },
  {
    id: 45,
    name: "Squirrel",
    rarity: "Mythical",
    price: 13500,
    image: "/placeholder.svg?height=200&width=200",
    trending: false,
    owned: 1,
  },
  {
    id: 46,
    name: "Bear Bee",
    rarity: "Mythical",
    price: 14000,
    image: "/placeholder.svg?height=200&width=200",
    trending: true,
    owned: 1,
  },
  {
    id: 47,
    name: "Butterfly",
    rarity: "Mythical",
    price: 14500,
    image: "/placeholder.svg?height=200&width=200",
    trending: false,
    owned: 1,
  },
  {
    id: 48,
    name: "Brontosaurus",
    rarity: "Mythical",
    price: 15000,
    image: "/placeholder.svg?height=200&width=200",
    trending: true,
    owned: 1,
  },
  {
    id: 49,
    name: "Pack Bee",
    rarity: "Mythical",
    price: 15500,
    image: "/placeholder.svg?height=200&width=200",
    trending: false,
    owned: 1,
  },
  {
    id: 50,
    name: "Mimic Octopus",
    rarity: "Mythical",
    price: 16000,
    image: "/placeholder.svg?height=200&width=200",
    trending: true,
    owned: 1,
  },
  {
    id: 51,
    name: "Hyacinth Macaw",
    rarity: "Mythical",
    price: 16500,
    image: "/placeholder.svg?height=200&width=200",
    trending: false,
    owned: 1,
  },
  {
    id: 52,
    name: "Axolotl",
    rarity: "Mythical",
    price: 17000,
    image: "/placeholder.svg?height=200&width=200",
    trending: true,
    owned: 1,
  },
  {
    id: 53,
    name: "Hamster",
    rarity: "Mythical",
    price: 17500,
    image: "/placeholder.svg?height=200&width=200",
    trending: false,
    owned: 1,
  },

  // Divine Pets
  {
    id: 54,
    name: "Red Fox",
    rarity: "Divine",
    price: 25000,
    image: "/placeholder.svg?height=200&width=200",
    trending: true,
    owned: 1,
  },
  {
    id: 55,
    name: "T-Rex",
    rarity: "Divine",
    price: 27000,
    image: "/placeholder.svg?height=200&width=200",
    trending: false,
    owned: 1,
  },
  {
    id: 56,
    name: "Dragonfly",
    rarity: "Divine",
    price: 29000,
    image: "/placeholder.svg?height=200&width=200",
    trending: true,
    owned: 1,
  },
  {
    id: 57,
    name: "Queen Bee",
    rarity: "Divine",
    price: 31000,
    image: "/placeholder.svg?height=200&width=200",
    trending: false,
    owned: 1,
  },
  {
    id: 58,
    name: "Disco Bee",
    rarity: "Divine",
    price: 33000,
    image: "/placeholder.svg?height=200&width=200",
    trending: true,
    owned: 1,
  },
  {
    id: 59,
    name: "Fennec Fox",
    rarity: "Divine",
    price: 35000,
    image: "/placeholder.svg?height=200&width=200",
    trending: false,
    owned: 1,
  },
  {
    id: 60,
    name: "Blood Owl",
    rarity: "Divine",
    price: 50000,
    image: "/placeholder.svg?height=200&width=200",
    trending: true,
    owned: 1,
  },
  {
    id: 61,
    name: "Raccoon",
    rarity: "Divine",
    price: 45000,
    image: "/placeholder.svg?height=200&width=200",
    trending: false,
    owned: 1,
  },
  {
    id: 62,
    name: "Night Owl",
    rarity: "Divine",
    price: 40000,
    image: "/placeholder.svg?height=200&width=200",
    trending: true,
    owned: 1,
  },
]

const AnimatedBackground = () => {
  const [shapes, setShapes] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      delay: number
      duration: number
      type: "circle" | "triangle" | "square"
    }>
  >([])

  useEffect(() => {
    const newShapes = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 40 + 10,
      delay: Math.random() * 10,
      duration: Math.random() * 20 + 10,
      type: ["circle", "triangle", "square"][Math.floor(Math.random() * 3)] as "circle" | "triangle" | "square",
    }))
    setShapes(newShapes)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute opacity-10 animate-pulse ${
            shape.type === "circle"
              ? "rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
              : shape.type === "triangle"
                ? "bg-gradient-to-r from-green-400 to-blue-400"
                : "bg-gradient-to-r from-pink-400 to-red-400"
          }`}
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            animationDelay: `${shape.delay}s`,
            animationDuration: `${shape.duration}s`,
            transform: shape.type === "triangle" ? "rotate(45deg)" : "none",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 animate-pulse" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-transparent rounded-full blur-3xl animate-pulse" />
    </div>
  )
}

export default function TradingHub() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null)
  const [rarityFilter, setRarityFilter] = useState<string>("all")

  const filteredPets = pets.filter((pet) => {
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRarity = rarityFilter === "all" || pet.rarity === rarityFilter
    return matchesSearch && matchesRarity
  })

  const rarities = ["all", "Legendary", "Mythical", "Divine"]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Legendary":
        return "text-purple-400 border-purple-400/30"
      case "Mythical":
        return "text-pink-400 border-pink-400/30"
      case "Divine":
        return "text-yellow-400 border-yellow-400/30"
      default:
        return "text-cyan-400 border-cyan-400/30"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white relative overflow-hidden">
      <AnimatedBackground />

      <header className="relative z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-start">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg">
                <img src="/logo.webp" alt="Grow Garden Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  J2DL Market
                </h1>
                <p className="text-sm text-gray-400">Trade with me</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
            J2DL's Marketplace
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Buying Pets • Trading Pets • Selling Pets</p>

          <div className="flex justify-center items-center space-x-12 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">13T</div>
              <div className="text-sm text-gray-500">Total Sheckles</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">n4rc</div>
              <div className="text-sm text-gray-500">Discord</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search pets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 bg-black/30 border-white/20 focus:border-cyan-400 text-white placeholder-gray-400 h-12 rounded-xl"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={rarityFilter}
              onChange={(e) => setRarityFilter(e.target.value)}
              className="pl-12 pr-8 bg-black/30 border border-white/20 rounded-xl h-12 text-white appearance-none focus:border-cyan-400 focus:outline-none"
            >
              {rarities.map((rarity) => (
                <option key={rarity} value={rarity} className="bg-black">
                  {rarity === "all" ? "All Rarities" : rarity}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPets.map((pet) => (
            <div
              key={pet.id}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 rounded-2xl blur transition-all duration-500" />

              <div className="relative">
                <div className="relative h-56 overflow-hidden rounded-t-2xl">
                  <img
                    src={pet.image || "/placeholder.svg"}
                    alt={pet.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className={`bg-black/60 backdrop-blur-sm ${getRarityColor(pet.rarity)}`}>{pet.rarity}</Badge>
                    {pet.trending && (
                      <Badge className="bg-black/60 text-red-400 border-red-400/30 backdrop-blur-sm">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Hot
                      </Badge>
                    )}
                  </div>

                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-sm font-medium">×{pet.owned}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {pet.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Market Price</p>
                      <p className="text-2xl font-bold text-cyan-400">{pet.price.toLocaleString()}</p>
                    </div>
                    <Button
                      onClick={() => setSelectedPet(pet)}
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-medium shadow-lg px-6"
                    >
                      Trade
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPets.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No pets found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </main>

      {selectedPet && <TradingModal pet={selectedPet} onClose={() => setSelectedPet(null)} />}
    </div>
  )
}
