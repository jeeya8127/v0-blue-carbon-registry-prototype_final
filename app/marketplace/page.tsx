"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Filter,
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  Heart,
  MapPin,
  Calendar,
  Shield,
  Leaf,
  Waves,
  Trees,
} from "lucide-react"

const mockListings = [
  {
    id: 1,
    projectName: "Mangrove Restoration - Indonesia",
    location: "Sumatra, Indonesia",
    type: "Mangrove",
    credits: 5000,
    pricePerCredit: 12.5,
    totalValue: 62500,
    trustScore: 96,
    verified: true,
    seller: "Green Ocean NGO",
    expiryDate: "2030-01-15",
    trend: "up",
    image: "/mangrove-forest-aerial-view.jpg",
  },
  {
    id: 2,
    projectName: "Seagrass Meadow Protection",
    location: "Palawan, Philippines",
    type: "Seagrass",
    credits: 3200,
    pricePerCredit: 10.0,
    totalValue: 32000,
    trustScore: 94,
    verified: true,
    seller: "Ocean Guardians Inc",
    expiryDate: "2029-01-10",
    trend: "up",
    image: "/seagrass-underwater-ecosystem.jpg",
  },
  {
    id: 3,
    projectName: "Coastal Wetland Conservation",
    location: "Mekong Delta, Vietnam",
    type: "Wetland",
    credits: 7800,
    pricePerCredit: 15.0,
    totalValue: 117000,
    trustScore: 98,
    verified: true,
    seller: "Delta Conservation Fund",
    expiryDate: "2029-12-20",
    trend: "down",
    image: "/wetland-restoration.png",
  },
  {
    id: 4,
    projectName: "Mangrove Reforestation",
    location: "Kerala, India",
    type: "Mangrove",
    credits: 4500,
    pricePerCredit: 11.0,
    totalValue: 49500,
    trustScore: 92,
    verified: true,
    seller: "Coastal Care Foundation",
    expiryDate: "2028-06-15",
    trend: "up",
    image: "/coastal-mangrove-protection.jpg",
  },
]

const marketStats = {
  totalVolume: "$2.4M",
  avgPrice: "$12.80",
  activeListings: 247,
  totalCredits: "1.2M tCO₂e",
}

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState("")
  const [favorites, setFavorites] = useState<number[]>([])
  const [cart, setCart] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const toggleCart = (id: number) => {
    setCart((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-ocean/5 to-aqua/5 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-balance">Carbon Credit Marketplace</h1>
            <p className="text-muted-foreground mt-2">
              Buy verified blue carbon credits from trusted projects worldwide
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-ocean/20 hover:bg-ocean/10 bg-transparent">
              <Heart className="w-4 h-4 mr-2" />
              Favorites ({favorites.length})
            </Button>
            <Button className="bg-gradient-to-r from-coral to-coral/80 hover:opacity-90">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cart ({cart.length})
            </Button>
          </div>
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4 bg-gradient-to-br from-ocean/10 to-aqua/10 border-ocean/20">
            <p className="text-sm text-muted-foreground">Total Volume (24h)</p>
            <p className="text-2xl font-bold mt-1">{marketStats.totalVolume}</p>
            <div className="flex items-center gap-1 text-seagrass text-sm mt-1">
              <TrendingUp className="w-3 h-3" />
              <span>+12.5%</span>
            </div>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-aqua/10 to-seagrass/10 border-aqua/20">
            <p className="text-sm text-muted-foreground">Avg Price</p>
            <p className="text-2xl font-bold mt-1">{marketStats.avgPrice}</p>
            <div className="flex items-center gap-1 text-seagrass text-sm mt-1">
              <TrendingUp className="w-3 h-3" />
              <span>+3.2%</span>
            </div>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-seagrass/10 to-ocean/10 border-seagrass/20">
            <p className="text-sm text-muted-foreground">Active Listings</p>
            <p className="text-2xl font-bold mt-1">{marketStats.activeListings}</p>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-coral/10 to-ocean/10 border-coral/20">
            <p className="text-sm text-muted-foreground">Total Credits</p>
            <p className="text-2xl font-bold mt-1">{marketStats.totalCredits}</p>
          </Card>
        </div>

        {/* Search & Filters */}
        <Card className="p-4 bg-card/50 backdrop-blur-sm border-ocean/20">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by project name, location, or type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background/50"
              />
            </div>
            <Button variant="outline" className="border-ocean/20 hover:bg-ocean/10 bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </Card>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockListings.map((listing) => (
            <Card
              key={listing.id}
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-ocean/20 hover:border-ocean/40 transition-all hover:shadow-lg hover:shadow-ocean/10"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={listing.image || "/placeholder.svg"}
                  alt={listing.projectName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    onClick={() => toggleFavorite(listing.id)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                      favorites.includes(listing.id)
                        ? "bg-coral text-white"
                        : "bg-white/80 text-muted-foreground hover:bg-white"
                    }`}
                  >
                    <Heart className="w-4 h-4" fill={favorites.includes(listing.id) ? "currentColor" : "none"} />
                  </button>
                </div>
                <div className="absolute bottom-3 left-3 flex gap-2">
                  {listing.verified && (
                    <Badge className="bg-seagrass/90 text-white border-0">
                      <Shield className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                  <Badge variant="secondary" className="bg-white/90 text-foreground border-0">
                    {listing.type === "Mangrove" ? (
                      <Trees className="w-3 h-3 mr-1" />
                    ) : listing.type === "Seagrass" ? (
                      <Waves className="w-3 h-3 mr-1" />
                    ) : (
                      <Leaf className="w-3 h-3 mr-1" />
                    )}
                    {listing.type}
                  </Badge>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">{listing.projectName}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <MapPin className="w-3 h-3" />
                    <span>{listing.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Available Credits</p>
                    <p className="text-xl font-bold text-ocean">{listing.credits.toLocaleString()} tCO₂e</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Price per Credit</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xl font-bold">${listing.pricePerCredit}</p>
                      {listing.trend === "up" ? (
                        <TrendingUp className="w-4 h-4 text-seagrass" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-coral" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Trust Score</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-seagrass to-aqua rounded-full"
                          style={{ width: `${listing.trustScore}%` }}
                        />
                      </div>
                      <span className="font-semibold text-seagrass">{listing.trustScore}%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Seller</p>
                    <p className="font-medium mt-1">{listing.seller}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t border-border">
                  <Calendar className="w-3 h-3" />
                  <span>Valid until {listing.expiryDate}</span>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" className="flex-1 border-ocean/20 hover:bg-ocean/10 bg-transparent">
                    View Details
                  </Button>
                  <Button
                    onClick={() => toggleCart(listing.id)}
                    className={`flex-1 ${
                      cart.includes(listing.id)
                        ? "bg-seagrass hover:bg-seagrass/90"
                        : "bg-gradient-to-r from-coral to-coral/80 hover:opacity-90"
                    }`}
                  >
                    {cart.includes(listing.id) ? "In Cart" : "Add to Cart"}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
