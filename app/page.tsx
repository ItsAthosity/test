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
  {
    id: 1,
    name: "Starfish",
    rarity: "Common",
    price: 500,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/6/62/StarfishIcon.webp/revision/latest/scale-to-width-down/200?cb=20250621133143",
    trending: true,
    owned: 1,
  },
  {
    id: 2,
    name: "Crab",
    rarity: "Common",
    price: 600,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/b/b9/CrabIcon.webp/revision/latest/scale-to-width-down/200?cb=20250621133143",
    trending: false,
    owned: 3,
  },
  {
    id: 3,
    name: "Seagull",
    rarity: "Common",
    price: 700,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/5/59/SeagullIcon.webp/revision/latest/scale-to-width-down/200?cb=20250621133144",
    trending: true,
    owned: 2,
  },
  {
    id: 4,
    name: "Bunny",
    rarity: "Common",
    price: 800,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/6/6b/BunnyPet.png/revision/latest/scale-to-width-down/200?cb=20250515213745",
    trending: false,
    owned: 1,
  },
  {
    id: 5,
    name: "Dog",
    rarity: "Common",
    price: 900,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/2/29/DogPet.png/revision/latest/scale-to-width-down/200?cb=20250515232409",
    trending: true,
    owned: 2,
  },
  {
    id: 6,
    name: "Golden Lab",
    rarity: "Common",
    price: 1000,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/f/f3/GoldenLabPet.png/revision/latest/scale-to-width-down/200?cb=20250515232516",
    trending: false,
    owned: 1,
  },
  {
    id: 7,
    name: "Bee",
    rarity: "Uncommon",
    price: 1200,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/f/f2/Beee.png/revision/latest/scale-to-width-down/200?cb=20250601124520",
    trending: true,
    owned: 2,
  },
  {
    id: 8,
    name: "Black Bunny",
    rarity: "Uncommon",
    price: 1300,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/e/ec/Black_bunny_icon.png/revision/latest/scale-to-width-down/200?cb=20250515213553",
    trending: false,
    owned: 1,
  },
  {
    id: 9,
    name: "Cat",
    rarity: "Uncommon",
    price: 1400,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/8/89/Catpet.png/revision/latest/scale-to-width-down/200?cb=20250503200101",
    trending: true,
    owned: 2,
  },
  {
    id: 10,
    name: "Chicken",
    rarity: "Uncommon",
    price: 1500,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/5/51/Chicken_Pet_V2.png/revision/latest/scale-to-width-down/200?cb=20250515232819",
    trending: false,
    owned: 1,
  },
  {
    id: 11,
    name: "Deer",
    rarity: "Uncommon",
    price: 1600,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/2/27/Deer.png/revision/latest/scale-to-width-down/200?cb=20250515213435",
    trending: true,
    owned: 2,
  },
  {
    id: 12,
    name: "Monkey",
    rarity: "Rare",
    price: 2000,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/8/85/Monkey_Pet_V2.png/revision/latest/scale-to-width-down/200?cb=20250515232917",
    trending: false,
    owned: 1,
  },
  {
    id: 13,
    name: "Orange Tabby",
    rarity: "Rare",
    price: 2100,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/7/73/Orange_tabby_icon.png/revision/latest/scale-to-width-down/200?cb=20250515232843",
    trending: true,
    owned: 2,
  },
  {
    id: 14,
    name: "Pig",
    rarity: "Rare",
    price: 2200,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/8/82/Pig_no_back.png/revision/latest/scale-to-width-down/200?cb=20250516001155",
    trending: false,
    owned: 1,
  },
  {
    id: 15,
    name: "Rooster",
    rarity: "Rare",
    price: 2300,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/2/2c/Rooster.png/revision/latest/scale-to-width-down/200?cb=20250504000830",
    trending: true,
    owned: 2,
  },
  {
    id: 16,
    name: "Spotted Deer",
    rarity: "Rare",
    price: 2400,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/3/38/Spotteddeer.png/revision/latest/scale-to-width-down/200?cb=20250516001104",
    trending: false,
    owned: 1,
  },
  {
    id: 17,
    name: "Flamingo",
    rarity: "Rare",
    price: 2500,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/e/ec/FlamingoIcon.webp/revision/latest/scale-to-width-down/200?cb=20250621135449",
    trending: true,
    owned: 1,
  },
  {
    id: 18,
    name: "Toucan",
    rarity: "Rare",
    price: 2600,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/1/10/ToucanIcon.webp/revision/latest/scale-to-width-down/200?cb=20250621135448",
    trending: false,
    owned: 1,
  },
  {
    id: 19,
    name: "Sea Turtle",
    rarity: "Rare",
    price: 2700,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/a/ad/SeaTurtleIcon.webp/revision/latest/scale-to-width-down/200?cb=20250621135447",
    trending: true,
    owned: 1,
  },
  {
    id: 20,
    name: "Orangutan",
    rarity: "Rare",
    price: 2800,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/4/47/OrangutanIcon.webp/revision/latest/scale-to-width-down/200?cb=20250621135443",
    trending: false,
    owned: 1,
  },
  {
    id: 21,
    name: "Seal",
    rarity: "Rare",
    price: 2900,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/f/f9/SealIcon.webp/revision/latest/scale-to-width-down/200?cb=20250621135446",
    trending: true,
    owned: 1,
  },
  {
    id: 22,
    name: "Honey Bee",
    rarity: "Rare",
    price: 3000,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/f/f2/HoneyBee.png/revision/latest/scale-to-width-down/200?cb=20250601124520",
    trending: false,
    owned: 1,
  },
  {
    id: 23,
    name: "Wasp",
    rarity: "Rare",
    price: 3100,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/f/f8/The_Wasp.png/revision/latest/scale-to-width-down/200?cb=20250607151048",
    trending: true,
    owned: 1,
  },
  {
    id: 24,
    name: "Tarantula Hawk",
    rarity: "Legendary",
    price: 5000,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/7/78/The_Tarantula_Hawk.png/revision/latest/scale-to-width-down/200?cb=20250619184819",
    trending: true,
    owned: 1,
  },
  {
    id: 25,
    name: "Raptor",
    rarity: "Legendary",
    price: 5200,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/6/64/Raptor_Icon.png/revision/latest/scale-to-width-down/200?cb=20250705193702",
    trending: false,
    owned: 1,
  },
  {
    id: 26,
    name: "Triceratops",
    rarity: "Legendary",
    price: 5400,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/1/14/Triceratops_Icon.webp/revision/latest/scale-to-width-down/200?cb=20250705194325",
    trending: true,
    owned: 1,
  },
  {
    id: 27,
    name: "Stegosaurus",
    rarity: "Legendary",
    price: 5600,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/7/70/Stegosaurus_Icon.webp/revision/latest/scale-to-width-down/200?cb=20250705194540",
    trending: false,
    owned: 1,
  },
  {
    id: 28,
    name: "Pterodactyl",
    rarity: "Legendary",
    price: 5800,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/7/7c/Pterodactyl_Icon.webp/revision/latest/scale-to-width-down/200?cb=20250705194638",
    trending: true,
    owned: 1,
  },
  {
    id: 29,
    name: "Turtle",
    rarity: "Legendary",
    price: 6000,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/8/82/Turtle_icon.png/revision/latest/scale-to-width-down/200?cb=20250515232843",
    trending: false,
    owned: 1,
  },
  {
    id: 30,
    name: "Petal Bee",
    rarity: "Legendary",
    price: 6200,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/5/52/Petalbee.png/revision/latest/scale-to-width-down/200?cb=20250601151649",
    trending: true,
    owned: 1,
  },
  {
    id: 31,
    name: "Moth",
    rarity: "Legendary",
    price: 6400,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/0/09/Moth.png/revision/latest/scale-to-width-down/200?cb=20250607163957",
    trending: false,
    owned: 1,
  },
  {
    id: 32,
    name: "Scarlet Macaw",
    rarity: "Legendary",
    price: 6600,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/2/21/ScarletMacawIcon.webp/revision/latest/scale-to-width-down/200?cb=20250621135445",
    trending: true,
    owned: 1,
  },
  {
    id: 33,
    name: "Ostrich",
    rarity: "Legendary",
    price: 6800,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/8/82/OstrichIcon.webp/revision/latest/scale-to-width-down/200?cb=20250621135444",
    trending: false,
    owned: 1,
  },
  {
    id: 34,
    name: "Peacock",
    rarity: "Legendary",
    price: 7000,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/6/61/Peacock.png/revision/latest/scale-to-width-down/200?cb=20250621174722",
    trending: true,
    owned: 1,
  },
  {
    id: 35,
    name: "Capybara",
    rarity: "Legendary",
    price: 7200,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/1/12/CapybaraIIcon.webp/revision/latest/scale-to-width-down/200?cb=20250621135449",
    trending: false,
    owned: 1,
  },
  {
    id: 36,
    name: "Sand Snake",
    rarity: "Legendary",
    price: 7400,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/a/a4/SandSnakeIcon.png/revision/latest/scale-to-width-down/200?cb=20250626225728",
    trending: true,
    owned: 1,
  },
  {
    id: 37,
    name: "Meerkat",
    rarity: "Legendary",
    price: 7600,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/c/c2/Meerkat.png/revision/latest/scale-to-width-down/200?cb=20250628171412",
    trending: false,
    owned: 1,
  },
  {
    id: 38,
    name: "Brown Mouse",
    rarity: "Mythical",
    price: 10000,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/8/85/BrownMouse.png/revision/latest/scale-to-width-down/200?cb=20250515232917",
    trending: true,
    owned: 1,
  },
  {
    id: 39,
    name: "Caterpillar",
    rarity: "Mythical",
    price: 10500,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/7/73/Caterpillar_Icon.png/revision/latest/scale-to-width-down/200?cb=20250515232843",
    trending: false,
    owned: 1,
  },
  {
    id: 40,
    name: "Giant Ant",
    rarity: "Mythical",
    price: 11000,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/8/82/GiantAntImage.png/revision/latest/scale-to-width-down/200?cb=20250516001155",
    trending: true,
    owned: 1,
  },
  {
    id: 41,
    name: "Grey Mouse",
    rarity: "Mythical",
    price: 11500,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/2/2c/GreyMouse.png/revision/latest/scale-to-width-down/200?cb=20250504000830",
    trending: false,
    owned: 1,
  },
  {
    id: 42,
    name: "Praying Mantis",
    rarity: "Mythical",
    price: 12000,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/3/38/PrayingMantis.png/revision/latest/scale-to-width-down/200?cb=20250516001104",
    trending: true,
    owned: 1,
  },
  {
    id: 43,
    name: "Red Giant Ant",
    rarity: "Mythical",
    price: 12500,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/7/78/RedGiantAntImage.png/revision/latest/scale-to-width-down/200?cb=20250619184819",
    trending: false,
    owned: 1,
  },
  {
    id: 44,
    name: "Snail",
    rarity: "Mythical",
    price: 13000,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/6/64/Snail_Icon.png/revision/latest/scale-to-width-down/200?cb=20250705193702",
    trending: true,
    owned: 1,
  },
  {
    id: 45,
    name: "Squirrel",
    rarity: "Mythical",
    price: 13500,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/1/14/Squirrel_Icon.png/revision/latest/scale-to-width-down/200?cb=20250705194325",
    trending: false,
    owned: 1,
  },
  {
    id: 46,
    name: "Bear Bee",
    rarity: "Mythical",
    price: 14000,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/8/8b/Bearbeee1.png/revision/latest/scale-to-width-down/200?cb=20250614115834",
    trending: true,
    owned: 1,
  },
  {
    id: 47,
    name: "Butterfly",
    rarity: "Mythical",
    price: 14500,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/1/18/Thy_Butterfly_V2.png/revision/latest/scale-to-width-down/200?cb=20250607163145",
    trending: false,
    owned: 1,
  },
  {
    id: 48,
    name: "Brontosaurus",
    rarity: "Mythical",
    price: 15000,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/2/2f/Brontosaurus_Icon.webp/revision/latest/scale-to-width-down/200?cb=20250705194806",
    trending: true,
    owned: 1,
  },
  {
    id: 49,
    name: "Pack Bee",
    rarity: "Mythical",
    price: 15500,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/f/fe/PackBee.png/revision/latest/scale-to-width-down/200?cb=20250614110351",
    trending: false,
    owned: 1,
  },
  {
    id: 50,
    name: "Mimic Octopus",
    rarity: "Mythical",
    price: 16000,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/0/00/MimicOctopusIcon.webp/revision/latest/scale-to-width-down/200?cb=20250623194827",
    trending: true,
    owned: 1,
  },
  {
    id: 51,
    name: "Hyacinth Macaw",
    rarity: "Mythical",
    price: 16500,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/7/77/HyacinthMacawIcon.png/revision/latest/scale-to-width-down/200?cb=20250626225727",
    trending: false,
    owned: 1,
  },
  {
    id: 52,
    name: "Axolotl",
    rarity: "Mythical",
    price: 17000,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/0/0f/AxolotlIcon.png/revision/latest/scale-to-width-down/200?cb=20250626225725",
    trending: true,
    owned: 1,
  },
  {
    id: 53,
    name: "Hamster",
    rarity: "Mythical",
    price: 17500,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/c/c5/HamsterIcon.webp/revision/latest/scale-to-width-down/200?cb=20250626165810",
    trending: false,
    owned: 1,
  },
  {
    id: 54,
    name: "Red Fox",
    rarity: "Divine",
    price: 25000,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/8/85/RedFox.png/revision/latest/scale-to-width-down/200?cb=20250515232917",
    trending: true,
    owned: 1,
  },
  {
    id: 55,
    name: "T-Rex",
    rarity: "Divine",
    price: 27000,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/5/5e/T-Rex_Icon.webp/revision/latest/scale-to-width-down/200?cb=20250705194847",
    trending: false,
    owned: 1,
  },
  {
    id: 56,
    name: "Dragonfly",
    rarity: "Divine",
    price: 29000,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/7/73/DragonflyIcon.png/revision/latest/scale-to-width-down/200?cb=20250515232843",
    trending: true,
    owned: 1,
  },
  {
    id: 57,
    name: "Queen Bee",
    rarity: "Divine",
    price: 31000,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/7/7a/Queen_bee.png/revision/latest/scale-to-width-down/200?cb=20250602131458",
    trending: false,
    owned: 1,
  },
  {
    id: 58,
    name: "Disco Bee",
    rarity: "Divine",
    price: 33000,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/2/2c/DiscoBeeIcon.gif/revision/latest/scale-to-width-down/200?cb=20250504000830",
    trending: true,
    owned: 1,
  },
  {
    id: 59,
    name: "Fennec Fox",
    rarity: "Divine",
    price: 35000,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/3/38/FennecFoxIcon.png/revision/latest/scale-to-width-down/200?cb=20250516001104",
    trending: false,
    owned: 1,
  },
  {
    id: 60,
    name: "Blood Owl",
    rarity: "Divine",
    price: 50000,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/7/78/Blood_Owl_Icon.png/revision/latest/scale-to-width-down/200?cb=20250619184819",
    trending: true,
    owned: 1,
  },
  {
    id: 61,
    name: "Raccoon",
    rarity: "Divine",
    price: 45000,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/6/64/Raccoon.png/revision/latest/scale-to-width-down/200?cb=20250705193702",
    trending: false,
    owned: 1,
  },
  {
    id: 62,
    name: "Night Owl",
    rarity: "Divine",
    price: 40000,
    image:
      "https://static.wikia.nocookie.net/growagarden/images/1/14/Night_Owl_Icon.png/revision/latest/scale-to-width-down/200?cb=20250705194325",
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

  const rarities = ["all", "Common", "Uncommon", "Rare", "Legendary", "Mythical", "Divine"]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "text-gray-400 border-gray-400/30"
      case "Uncommon":
        return "text-green-400 border-green-400/30"
      case "Rare":
        return "text-blue-400 border-blue-400/30"
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
