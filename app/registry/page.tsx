"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { OceanBackground } from "@/components/ocean-background"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Search,
  TrendingUp,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Leaf,
  Waves,
  MapIcon,
  Grid3x3,
} from "lucide-react"

const projects = [
  {
    id: 1,
    name: "Sundarbans Mangrove Restoration",
    location: "West Bengal, India",
    coordinates: { lat: 21.9497, lng: 88.8813 },
    status: "active",
    credits: 12500,
    trustScore: 98,
    area: "450 hectares",
    image: "/mangrove-forest-aerial-view.jpg",
  },
  {
    id: 2,
    name: "Kerala Seagrass Conservation",
    location: "Kerala, India",
    coordinates: { lat: 10.8505, lng: 76.2711 },
    status: "active",
    credits: 8750,
    trustScore: 95,
    area: "320 hectares",
    image: "/seagrass-underwater-ecosystem.jpg",
  },
  {
    id: 3,
    name: "Goa Coastal Protection Initiative",
    location: "Goa, India",
    coordinates: { lat: 15.2993, lng: 74.124 },
    status: "pending",
    credits: 5200,
    trustScore: 92,
    area: "180 hectares",
    image: "/coastal-mangrove-protection.jpg",
  },
  {
    id: 4,
    name: "Andaman Blue Carbon Project",
    location: "Andaman Islands, India",
    coordinates: { lat: 11.7401, lng: 92.6586 },
    status: "active",
    credits: 15800,
    trustScore: 99,
    area: "620 hectares",
    image: "/tropical-island-mangroves.jpg",
  },
  {
    id: 5,
    name: "Tamil Nadu Wetland Restoration",
    location: "Tamil Nadu, India",
    coordinates: { lat: 11.1271, lng: 78.6569 },
    status: "under-review",
    credits: 3400,
    trustScore: 88,
    area: "210 hectares",
    image: "/wetland-restoration.png",
  },
  {
    id: 6,
    name: "Odisha Mangrove Expansion",
    location: "Odisha, India",
    coordinates: { lat: 20.9517, lng: 85.0985 },
    status: "active",
    credits: 9600,
    trustScore: 96,
    area: "380 hectares",
    image: "/mangrove-plantation-coastal.jpg",
  },
]

export default function RegistryPage() {
  const [view, setView] = useState<"grid" | "map">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || project.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "active":
        return { icon: CheckCircle2, color: "#27AE60", bg: "bg-[#27AE60]/10", text: "Active" }
      case "pending":
        return { icon: Clock, color: "#FF6B35", bg: "bg-[#FF6B35]/10", text: "Pending" }
      case "under-review":
        return { icon: AlertTriangle, color: "#00B4D8", bg: "bg-[#00B4D8]/10", text: "Under Review" }
      default:
        return { icon: CheckCircle2, color: "#27AE60", bg: "bg-[#27AE60]/10", text: "Active" }
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <OceanBackground />

      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-ocean-deep mb-3">
              Blue Carbon <span className="gradient-text">Registry</span>
            </h1>
            <p className="text-lg text-ocean-medium">Explore verified blue carbon projects across coastal ecosystems</p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total Projects", value: "156", icon: Leaf, color: "#00C9A7" },
              { label: "Active Projects", value: "124", icon: CheckCircle2, color: "#27AE60" },
              { label: "Credits Issued", value: "2.5M", icon: TrendingUp, color: "#00B4D8" },
              { label: "Hectares Protected", value: "45K", icon: Waves, color: "#FF6B35" },
            ].map((stat, index) => (
              <Card key={index} className="p-4 bg-white/80 backdrop-blur-sm border-[#00B4D8]/20">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}15` }}
                  >
                    <stat.icon className="h-5 w-5" style={{ color: stat.color }} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-ocean-deep">{stat.value}</div>
                    <div className="text-xs text-ocean-medium">{stat.label}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Search and Filters */}
          <Card className="p-6 mb-8 bg-white/80 backdrop-blur-sm border-[#00B4D8]/20">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ocean-medium" />
                <Input
                  placeholder="Search projects by name or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-[#00B4D8]/30 focus:border-[#00C9A7]"
                />
              </div>

              {/* Status Filter */}
              <Tabs value={statusFilter} onValueChange={setStatusFilter} className="w-full md:w-auto">
                <TabsList className="grid grid-cols-4 w-full md:w-auto">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                  <TabsTrigger value="under-review">Review</TabsTrigger>
                </TabsList>
              </Tabs>

              {/* View Toggle */}
              <div className="flex gap-2">
                <Button
                  variant={view === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setView("grid")}
                  className={view === "grid" ? "aqua-gradient text-white" : ""}
                >
                  <Grid3x3 className="h-5 w-5" />
                </Button>
                <Button
                  variant={view === "map" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setView("map")}
                  className={view === "map" ? "aqua-gradient text-white" : ""}
                >
                  <MapIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Grid View */}
          {view === "grid" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => {
                const statusConfig = getStatusConfig(project.status)
                const StatusIcon = statusConfig.icon

                return (
                  <Link key={project.id} href={`/registry/${project.id}`}>
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-[#00B4D8]/20 bg-white cursor-pointer group">
                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3">
                          <Badge className={`${statusConfig.bg} border-0`}>
                            <StatusIcon className="h-3 w-3 mr-1" style={{ color: statusConfig.color }} />
                            <span style={{ color: statusConfig.color }}>{statusConfig.text}</span>
                          </Badge>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="p-5 space-y-3">
                        <h3 className="text-xl font-semibold text-ocean-deep group-hover:text-[#00C9A7] transition-colors line-clamp-2">
                          {project.name}
                        </h3>

                        <div className="flex items-center gap-2 text-sm text-ocean-medium">
                          <MapPin className="h-4 w-4" />
                          <span>{project.location}</span>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-[#00B4D8]/20">
                          <div>
                            <div className="text-2xl font-bold text-[#00C9A7]">{project.credits.toLocaleString()}</div>
                            <div className="text-xs text-ocean-medium">Credits Earned</div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-[#00B4D8]">{project.trustScore}%</div>
                            <div className="text-xs text-ocean-medium">Trust Score</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-ocean-medium pt-2">
                          <Leaf className="h-4 w-4 text-[#27AE60]" />
                          <span>{project.area} protected</span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                )
              })}
            </div>
          )}

          {/* Map View */}
          {view === "map" && (
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-[#00B4D8]/20">
              <div className="relative h-[600px] bg-gradient-to-br from-[#E8F4F8] to-[#D0E8F0] rounded-lg overflow-hidden">
                {/* Simplified Map Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Map Background */}
                    <div className="absolute inset-0 opacity-20">
                      <svg viewBox="0 0 800 600" className="w-full h-full">
                        <path
                          d="M100,200 Q200,150 300,200 T500,200 Q600,250 700,200"
                          fill="none"
                          stroke="#003F5C"
                          strokeWidth="2"
                        />
                        <path
                          d="M50,350 Q150,300 250,350 T450,350 Q550,400 650,350"
                          fill="none"
                          stroke="#003F5C"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>

                    {/* Project Pins */}
                    {filteredProjects.map((project, index) => {
                      const statusConfig = getStatusConfig(project.status)
                      return (
                        <Link key={project.id} href={`/registry/${project.id}`}>
                          <div
                            className="absolute group cursor-pointer"
                            style={{
                              left: `${15 + (index % 3) * 30}%`,
                              top: `${20 + Math.floor(index / 3) * 25}%`,
                            }}
                          >
                            {/* Glowing Pin */}
                            <div className="relative">
                              <div
                                className="absolute inset-0 rounded-full blur-lg opacity-50 animate-pulse"
                                style={{ backgroundColor: statusConfig.color }}
                              />
                              <div
                                className="relative w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                                style={{ backgroundColor: statusConfig.color }}
                              >
                                <MapPin className="h-6 w-6 text-white" />
                              </div>
                            </div>

                            {/* Tooltip */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-14 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                              <Card className="p-3 min-w-[200px] shadow-xl">
                                <div className="text-sm font-semibold text-ocean-deep mb-1">{project.name}</div>
                                <div className="text-xs text-ocean-medium mb-2">{project.location}</div>
                                <div className="flex items-center justify-between text-xs">
                                  <span className="text-[#00C9A7] font-bold">
                                    {project.credits.toLocaleString()} credits
                                  </span>
                                  <Badge className={`${statusConfig.bg} border-0 text-xs`}>
                                    <span style={{ color: statusConfig.color }}>{statusConfig.text}</span>
                                  </Badge>
                                </div>
                              </Card>
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="text-sm font-semibold text-ocean-deep mb-3">Status Legend</div>
                  <div className="space-y-2">
                    {[
                      { status: "active", label: "Active Projects" },
                      { status: "pending", label: "Pending Approval" },
                      { status: "under-review", label: "Under Review" },
                    ].map((item) => {
                      const config = getStatusConfig(item.status)
                      return (
                        <div key={item.status} className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: config.color }} />
                          <span className="text-xs text-ocean-medium">{item.label}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
