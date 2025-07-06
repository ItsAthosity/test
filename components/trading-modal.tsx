"use client"

import { useState } from "react"
import { X, Coins, ArrowLeftRight, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

interface Pet {
  id: number
  name: string
  rarity: string
  price: number
  image: string
  owned: number
}

interface TradingModalProps {
  pet: Pet
  onClose: () => void
}

const allPets = [
  {
    id: 1,
    name: "Starfish",
    rarity: "Common",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/6/62/StarfishIcon.webp/revision/latest/scale-to-width-down/200?cb=20250621133143",
  },
  {
    id: 2,
    name: "Crab",
    rarity: "Common",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/b/b9/CrabIcon.webp/revision/latest/scale-to-width-down/200?cb=20250621133143",
  },
  {
    id: 3,
    name: "Seagull",
    rarity: "Common",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/5/59/SeagullIcon.webp/revision/latest/scale-to-width-down/200?cb=20250621133144",
  },
  {
    id: 4,
    name: "Bunny",
    rarity: "Common",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/6/6b/BunnyPet.png/revision/latest/scale-to-width-down/200?cb=20250515213745",
  },
  {
    id: 5,
    name: "Dog",
    rarity: "Common",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/2/29/DogPet.png/revision/latest/scale-to-width-down/200?cb=20250515232409",
  },
  {
    id: 6,
    name: "Golden Lab",
    rarity: "Common",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/f/f3/GoldenLabPet.png/revision/latest/scale-to-width-down/200?cb=20250515232516",
  },
  {
    id: 7,
    name: "Bee",
    rarity: "Uncommon",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/f/f2/Beee.png/revision/latest/scale-to-width-down/200?cb=20250601124520",
  },
  {
    id: 8,
    name: "Black Bunny",
    rarity: "Uncommon",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/e/ec/Black_bunny_icon.png/revision/latest/scale-to-width-down/200?cb=20250515213553",
  },
  {
    id: 9,
    name: "Cat",
    rarity: "Uncommon",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/8/89/Catpet.png/revision/latest/scale-to-width-down/200?cb=20250503200101",
  },
  {
    id: 10,
    name: "Chicken",
    rarity: "Uncommon",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/5/51/Chicken_Pet_V2.png/revision/latest/scale-to-width-down/200?cb=20250515232819",
  },
  {
    id: 11,
    name: "Deer",
    rarity: "Uncommon",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/2/27/Deer.png/revision/latest/scale-to-width-down/200?cb=20250515213435",
  },
  {
    id: 12,
    name: "Monkey",
    rarity: "Rare",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/8/85/Monkey_Pet_V2.png/revision/latest/scale-to-width-down/200?cb=20250515232917",
  },
  {
    id: 13,
    name: "Orange Tabby",
    rarity: "Rare",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/7/73/Orange_tabby_icon.png/revision/latest/scale-to-width-down/200?cb=20250515232843",
  },
  {
    id: 14,
    name: "Pig",
    rarity: "Rare",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/8/82/Pig_no_back.png/revision/latest/scale-to-width-down/200?cb=20250516001155",
  },
  {
    id: 15,
    name: "Rooster",
    rarity: "Rare",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/2/2c/Rooster.png/revision/latest/scale-to-width-down/200?cb=20250504000830",
  },
  {
    id: 16,
    name: "Spotted Deer",
    rarity: "Rare",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/3/38/Spotteddeer.png/revision/latest/scale-to-width-down/200?cb=20250516001104",
  },
  {
    id: 17,
    name: "Flamingo",
    rarity: "Rare",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/e/ec/FlamingoIcon.webp/revision/latest/scale-to-width-down/200?cb=20250621135449",
  },
  {
    id: 18,
    name: "Toucan",
    rarity: "Rare",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/1/10/ToucanIcon.webp/revision/latest/scale-to-width-down/200?cb=20250621135448",
  },
  {
    id: 19,
    name: "Sea Turtle",
    rarity: "Rare",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/a/ad/SeaTurtleIcon.webp/revision/latest/scale-to-width-down/200?cb=20250621135447",
  },
  {
    id: 20,
    name: "Orangutan",
    rarity: "Rare",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/4/47/OrangutanIcon.webp/revision/latest/scale-to-width-down/200?cb=20250621135443",
  },
  {
    id: 21,
    name: "Seal",
    rarity: "Rare",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/f/f9/SealIcon.webp/revision/latest/scale-to-width-down/200?cb=20250621135446",
  },
  {
    id: 22,
    name: "Honey Bee",
    rarity: "Rare",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/f/f2/HoneyBee.png/revision/latest/scale-to-width-down/200?cb=20250601124520",
  },
  {
    id: 23,
    name: "Wasp",
    rarity: "Rare",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/f/f8/The_Wasp.png/revision/latest/scale-to-width-down/200?cb=20250607151048",
  },
  {
    id: 24,
    name: "Tarantula Hawk",
    rarity: "Legendary",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/7/78/The_Tarantula_Hawk.png/revision/latest/scale-to-width-down/200?cb=20250619184819",
  },
  {
    id: 25,
    name: "Raptor",
    rarity: "Legendary",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/6/64/Raptor_Icon.png/revision/latest/scale-to-width-down/200?cb=20250705193702",
  },
  {
    id: 26,
    name: "Triceratops",
    rarity: "Legendary",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/1/14/Triceratops_Icon.webp/revision/latest/scale-to-width-down/200?cb=20250705194325",
  },
  {
    id: 27,
    name: "Stegosaurus",
    rarity: "Legendary",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/7/70/Stegosaurus_Icon.webp/revision/latest/scale-to-width-down/200?cb=20250705194540",
  },
  {
    id: 28,
    name: "Pterodactyl",
    rarity: "Legendary",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/7/7c/Pterodactyl_Icon.webp/revision/latest/scale-to-width-down/200?cb=20250705194638",
  },
  {
    id: 29,
    name: "Turtle",
    rarity: "Legendary",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/8/82/Turtle_icon.png/revision/latest/scale-to-width-down/200?cb=20250515232843",
  },
  {
    id: 30,
    name: "Petal Bee",
    rarity: "Legendary",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/5/52/Petalbee.png/revision/latest/scale-to-width-down/200?cb=20250601151649",
  },
  {
    id: 31,
    name: "Moth",
    rarity: "Legendary",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/0/09/Moth.png/revision/latest/scale-to-width-down/200?cb=20250607163957",
  },
  {
    id: 32,
    name: "Scarlet Macaw",
    rarity: "Legendary",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/2/21/ScarletMacawIcon.webp/revision/latest/scale-to-width-down/200?cb=20250621135445",
  },
  {
    id: 33,
    name: "Ostrich",
    rarity: "Legendary",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/8/82/OstrichIcon.webp/revision/latest/scale-to-width-down/200?cb=20250621135444",
  },
  {
    id: 34,
    name: "Peacock",
    rarity: "Legendary",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/6/61/Peacock.png/revision/latest/scale-to-width-down/200?cb=20250621174722",
  },
  {
    id: 35,
    name: "Capybara",
    rarity: "Legendary",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/1/12/CapybaraIIcon.webp/revision/latest/scale-to-width-down/200?cb=20250621135449",
  },
  {
    id: 36,
    name: "Sand Snake",
    rarity: "Legendary",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/a/a4/SandSnakeIcon.png/revision/latest/scale-to-width-down/200?cb=20250626225728",
  },
  {
    id: 37,
    name: "Meerkat",
    rarity: "Legendary",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/c/c2/Meerkat.png/revision/latest/scale-to-width-down/200?cb=20250628171412",
  },
  {
    id: 38,
    name: "Brown Mouse",
    rarity: "Mythical",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/8/85/BrownMouse.png/revision/latest/scale-to-width-down/200?cb=20250515232917",
  },
  {
    id: 39,
    name: "Caterpillar",
    rarity: "Mythical",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/7/73/Caterpillar_Icon.png/revision/latest/scale-to-width-down/200?cb=20250515232843",
  },
  {
    id: 40,
    name: "Giant Ant",
    rarity: "Mythical",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/8/82/GiantAntImage.png/revision/latest/scale-to-width-down/200?cb=20250516001155",
  },
  {
    id: 41,
    name: "Grey Mouse",
    rarity: "Mythical",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/2/2c/GreyMouse.png/revision/latest/scale-to-width-down/200?cb=20250504000830",
  },
  {
    id: 42,
    name: "Praying Mantis",
    rarity: "Mythical",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/3/38/PrayingMantis.png/revision/latest/scale-to-width-down/200?cb=20250516001104",
  },
  {
    id: 43,
    name: "Red Giant Ant",
    rarity: "Mythical",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/7/78/RedGiantAntImage.png/revision/latest/scale-to-width-down/200?cb=20250619184819",
  },
  {
    id: 44,
    name: "Snail",
    rarity: "Mythical",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/6/64/Snail_Icon.png/revision/latest/scale-to-width-down/200?cb=20250705193702",
  },
  {
    id: 45,
    name: "Squirrel",
    rarity: "Mythical",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/1/14/Squirrel_Icon.png/revision/latest/scale-to-width-down/200?cb=20250705194325",
  },
  {
    id: 46,
    name: "Bear Bee",
    rarity: "Mythical",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/8/8b/Bearbeee1.png/revision/latest/scale-to-width-down/200?cb=20250614115834",
  },
  {
    id: 47,
    name: "Butterfly",
    rarity: "Mythical",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/1/18/Thy_Butterfly_V2.png/revision/latest/scale-to-width-down/200?cb=20250607163145",
  },
  {
    id: 48,
    name: "Brontosaurus",
    rarity: "Mythical",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/2/2f/Brontosaurus_Icon.webp/revision/latest/scale-to-width-down/200?cb=20250705194806",
  },
  {
    id: 49,
    name: "Pack Bee",
    rarity: "Mythical",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/f/fe/PackBee.png/revision/latest/scale-to-width-down/200?cb=20250614110351",
  },
  {
    id: 50,
    name: "Mimic Octopus",
    rarity: "Mythical",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/0/00/MimicOctopusIcon.webp/revision/latest/scale-to-width-down/200?cb=20250623194827",
  },
  {
    id: 51,
    name: "Hyacinth Macaw",
    rarity: "Mythical",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/7/77/HyacinthMacawIcon.png/revision/latest/scale-to-width-down/200?cb=20250626225727",
  },
  {
    id: 52,
    name: "Axolotl",
    rarity: "Mythical",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/0/0f/AxolotlIcon.png/revision/latest/scale-to-width-down/200?cb=20250626225725",
  },
  {
    id: 53,
    name: "Hamster",
    rarity: "Mythical",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/c/c5/HamsterIcon.webp/revision/latest/scale-to-width-down/200?cb=20250626165810",
  },
  {
    id: 54,
    name: "Red Fox",
    rarity: "Divine",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/8/85/RedFox.png/revision/latest/scale-to-width-down/200?cb=20250515232917",
  },
  {
    id: 55,
    name: "T-Rex",
    rarity: "Divine",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/5/5e/T-Rex_Icon.webp/revision/latest/scale-to-width-down/200?cb=20250705194847",
  },
  {
    id: 56,
    name: "Dragonfly",
    rarity: "Divine",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/7/73/DragonflyIcon.png/revision/latest/scale-to-width-down/200?cb=20250515232843",
  },
  {
    id: 57,
    name: "Queen Bee",
    rarity: "Divine",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/7/7a/Queen_bee.png/revision/latest/scale-to-width-down/200?cb=20250602131458",
  },
  {
    id: 58,
    name: "Disco Bee",
    rarity: "Divine",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/2/2c/DiscoBeeIcon.gif/revision/latest/scale-to-width-down/200?cb=20250504000830",
  },
  {
    id: 59,
    name: "Fennec Fox",
    rarity: "Divine",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/3/38/FennecFoxIcon.png/revision/latest/scale-to-width-down/200?cb=20250516001104",
  },
  {
    id: 60,
    name: "Blood Owl",
    rarity: "Divine",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/7/78/Blood_Owl_Icon.png/revision/latest/scale-to-width-down/200?cb=20250619184819",
  },
  {
    id: 61,
    name: "Raccoon",
    rarity: "Divine",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/6/64/Raccoon.png/revision/latest/scale-to-width-down/200?cb=20250705193702",
  },
  {
    id: 62,
    name: "Night Owl",
    rarity: "Divine",
    image:
      "https://static.wikia.nocookie.net/growagarden/images/1/14/Night_Owl_Icon.png/revision/latest/scale-to-width-down/200?cb=20250705194325",
  },
]

export function TradingModal({ pet, onClose }: TradingModalProps) {
  const [tradeType, setTradeType] = useState<"sheckles" | "trade">("sheckles")
  const [sheckleAmount, setSheckleAmount] = useState(pet.price.toString())
  const [selectedTradePet, setSelectedTradePet] = useState<string>("")
  const [discordUsername, setDiscordUsername] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPets = allPets.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleSubmit = async () => {
    if (!discordUsername.trim()) {
      alert("Please enter your Discord username")
      return
    }

    setIsSubmitting(true)

    const selectedPetData = allPets.find((p) => p.name === selectedTradePet)

    const webhookData = {
      embeds: [
        {
          title: "🔥 New Trade Request",
          color: 0x00d4ff,
          fields: [
            {
              name: "Wanted Pet",
              value: `**${pet.name}** (${pet.rarity})`,
              inline: true,
            },
            {
              name: "Trade Type",
              value: tradeType === "sheckles" ? "💰 Sheckles" : "🔄 Pet Trade",
              inline: true,
            },
            {
              name: "Discord User",
              value: `@${discordUsername}`,
              inline: true,
            },
            {
              name: "Offer",
              value:
                tradeType === "sheckles"
                  ? `${Number.parseInt(sheckleAmount).toLocaleString()} Sheckles`
                  : `${selectedTradePet} (${selectedPetData?.rarity || "Unknown"})`,
              inline: false,
            },
          ],
          thumbnail: {
            url: pet.image,
          },
          timestamp: new Date().toISOString(),
          footer: {
            text: "J2DL Market - Grow Garden Trading Hub",
          },
        },
      ],
    }

    try {
      const response = await fetch(
        "https://discord.com/api/webhooks/1391338619402190979/5HrOQ7KvPJZkFiI9xi4Y2YHT9GzXnksXoOHJVWDCIStMCDlFMvj0NdM-cLiGcOzLK_cs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(webhookData),
        },
      )

      if (response.ok) {
        alert("Trade request sent successfully! You'll be contacted on Discord soon.")
        onClose()
      } else {
        alert("Failed to send trade request. Please try again.")
      }
    } catch (error) {
      alert("Error sending trade request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "text-gray-400"
      case "Uncommon":
        return "text-green-400"
      case "Rare":
        return "text-blue-400"
      case "Legendary":
        return "text-purple-400"
      case "Mythical":
        return "text-pink-400"
      case "Divine":
        return "text-yellow-400"
      default:
        return "text-cyan-400"
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-2xl p-6 max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <img
            src={pet.image || "/placeholder.svg"}
            alt={pet.name}
            className="w-24 h-24 mx-auto rounded-xl object-cover mb-4"
          />
          <h3 className="text-xl font-bold text-white mb-2">{pet.name}</h3>
          <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">{pet.rarity}</Badge>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Your Discord Username</label>
            <Input
              type="text"
              value={discordUsername}
              onChange={(e) => setDiscordUsername(e.target.value)}
              className="bg-black/50 border-cyan-500/30 text-white"
              placeholder="e.g. username#1234"
              required
            />
          </div>
        </div>

        <div className="flex gap-2 mb-6">
          <Button
            variant={tradeType === "sheckles" ? "default" : "outline"}
            onClick={() => setTradeType("sheckles")}
            className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black"
          >
            <Coins className="w-4 h-4 mr-2" />
            Sheckles
          </Button>
          <Button
            variant={tradeType === "trade" ? "default" : "outline"}
            onClick={() => setTradeType("trade")}
            className="flex-1 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-black"
          >
            <ArrowLeftRight className="w-4 h-4 mr-2" />
            Trade
          </Button>
        </div>

        {tradeType === "sheckles" ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Offer Amount</label>
              <Input
                type="number"
                value={sheckleAmount}
                onChange={(e) => setSheckleAmount(e.target.value)}
                className="bg-black/50 border-cyan-500/30 text-white"
                placeholder="Enter sheckles amount"
              />
            </div>
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting || !discordUsername.trim()}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-medium"
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? "Sending..." : `Offer ${Number.parseInt(sheckleAmount).toLocaleString()} Sheckles`}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Search Pet to Trade</label>
              <Input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-black/50 border-cyan-500/30 text-white mb-3"
                placeholder="Search for a pet..."
              />
            </div>

            <div className="max-h-60 overflow-y-auto border border-cyan-500/30 rounded-lg bg-black/30">
              {filteredPets.map((tradePet) => (
                <div
                  key={tradePet.id}
                  onClick={() => setSelectedTradePet(tradePet.name)}
                  className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-white/10 transition-colors ${
                    selectedTradePet === tradePet.name ? "bg-cyan-500/20 border-l-4 border-cyan-500" : ""
                  }`}
                >
                  <img
                    src={tradePet.image || "/placeholder.svg"}
                    alt={tradePet.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-white">{tradePet.name}</div>
                    <div className={`text-sm ${getRarityColor(tradePet.rarity)}`}>{tradePet.rarity}</div>
                  </div>
                </div>
              ))}
            </div>

            {selectedTradePet && (
              <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                <div className="text-sm text-gray-300">Selected Pet:</div>
                <div className="font-medium text-white">{selectedTradePet}</div>
              </div>
            )}

            <Button
              onClick={handleSubmit}
              disabled={isSubmitting || !selectedTradePet || !discordUsername.trim()}
              className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-black font-medium"
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? "Sending..." : "Propose Trade"}
            </Button>
          </div>
        )}

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            You'll be contacted on Discord: <span className="text-cyan-400">n4rc</span>
          </p>
        </div>
      </div>
    </div>
  )
}
