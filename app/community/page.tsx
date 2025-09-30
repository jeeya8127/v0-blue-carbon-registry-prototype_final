"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar } from "@/components/ui/avatar"
import { Trophy, Medal, Award, TrendingUp, Users, Target, Zap, Star } from "lucide-react"

const leaderboard = [
  {
    rank: 1,
    name: "Green Ocean NGO",
    type: "NGO",
    credits: 125000,
    impact: "450,000 tCO₂e",
    level: 15,
    badge: "Ocean Guardian",
    avatar: "/ngo-logo.jpg",
  },
  {
    rank: 2,
    name: "EcoTech Industries",
    type: "Company",
    credits: 98000,
    impact: "380,000 tCO₂e",
    level: 14,
    badge: "Carbon Champion",
    avatar: "/generic-company-logo.png",
  },
  {
    rank: 3,
    name: "Coastal Care Foundation",
    type: "NGO",
    credits: 87500,
    impact: "320,000 tCO₂e",
    level: 13,
    badge: "Blue Hero",
    avatar: "/foundation-logo.png",
  },
  {
    rank: 4,
    name: "Ministry of Environment - Vietnam",
    type: "Government",
    credits: 76000,
    impact: "290,000 tCO₂e",
    level: 12,
    badge: "Policy Pioneer",
    avatar: "/generic-government-seal.png",
  },
  {
    rank: 5,
    name: "Nguyen Van Farmer Collective",
    type: "Farmer",
    credits: 45000,
    impact: "180,000 tCO₂e",
    level: 10,
    badge: "Earth Keeper",
    avatar: "/farmer-group.png",
  },
]

const achievements = [
  {
    id: 1,
    name: "First Steps",
    description: "Register your first project",
    icon: Target,
    unlocked: true,
    rarity: "common",
  },
  {
    id: 2,
    name: "Carbon Warrior",
    description: "Offset 10,000 tCO₂e",
    icon: Zap,
    unlocked: true,
    rarity: "rare",
  },
  {
    id: 3,
    name: "Ocean Guardian",
    description: "Protect 100 hectares of blue carbon ecosystems",
    icon: Award,
    unlocked: true,
    rarity: "epic",
  },
  {
    id: 4,
    name: "Community Leader",
    description: "Reach top 10 on leaderboard",
    icon: Trophy,
    unlocked: false,
    rarity: "legendary",
  },
]

const communityStats = {
  totalMembers: "12,847",
  activeProjects: "3,247",
  totalImpact: "2.4M tCO₂e",
  communitiesSupported: "847",
}

export default function CommunityPortal() {
  const [selectedType, setSelectedType] = useState<string>("all")

  const filteredLeaderboard =
    selectedType === "all" ? leaderboard : leaderboard.filter((entry) => entry.type === selectedType)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-ocean/5 to-aqua/5 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-balance">Community Portal</h1>
            <p className="text-muted-foreground mt-2">Join the global movement for ocean conservation</p>
          </div>
          <Button className="bg-gradient-to-r from-coral to-coral/80 hover:opacity-90">
            <Users className="w-4 h-4 mr-2" />
            Join Community
          </Button>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4 bg-gradient-to-br from-ocean/10 to-aqua/10 border-ocean/20">
            <p className="text-sm text-muted-foreground">Total Members</p>
            <p className="text-2xl font-bold mt-1">{communityStats.totalMembers}</p>
            <div className="flex items-center gap-1 text-seagrass text-sm mt-1">
              <TrendingUp className="w-3 h-3" />
              <span>+8.2%</span>
            </div>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-aqua/10 to-seagrass/10 border-aqua/20">
            <p className="text-sm text-muted-foreground">Active Projects</p>
            <p className="text-2xl font-bold mt-1">{communityStats.activeProjects}</p>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-seagrass/10 to-ocean/10 border-seagrass/20">
            <p className="text-sm text-muted-foreground">Total Impact</p>
            <p className="text-2xl font-bold mt-1">{communityStats.totalImpact}</p>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-coral/10 to-ocean/10 border-coral/20">
            <p className="text-sm text-muted-foreground">Communities</p>
            <p className="text-2xl font-bold mt-1">{communityStats.communitiesSupported}</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Leaderboard */}
          <Card className="lg:col-span-2 p-6 bg-card/50 backdrop-blur-sm border-ocean/20">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-coral" />
                <h2 className="text-2xl font-bold">Leaderboard</h2>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant={selectedType === "all" ? "default" : "outline"}
                  onClick={() => setSelectedType("all")}
                  className={
                    selectedType === "all"
                      ? "bg-ocean hover:bg-ocean/90"
                      : "border-ocean/20 hover:bg-ocean/10 bg-transparent"
                  }
                >
                  All
                </Button>
                <Button
                  size="sm"
                  variant={selectedType === "NGO" ? "default" : "outline"}
                  onClick={() => setSelectedType("NGO")}
                  className={
                    selectedType === "NGO"
                      ? "bg-ocean hover:bg-ocean/90"
                      : "border-ocean/20 hover:bg-ocean/10 bg-transparent"
                  }
                >
                  NGOs
                </Button>
                <Button
                  size="sm"
                  variant={selectedType === "Company" ? "default" : "outline"}
                  onClick={() => setSelectedType("Company")}
                  className={
                    selectedType === "Company"
                      ? "bg-ocean hover:bg-ocean/90"
                      : "border-ocean/20 hover:bg-ocean/10 bg-transparent"
                  }
                >
                  Companies
                </Button>
                <Button
                  size="sm"
                  variant={selectedType === "Farmer" ? "default" : "outline"}
                  onClick={() => setSelectedType("Farmer")}
                  className={
                    selectedType === "Farmer"
                      ? "bg-ocean hover:bg-ocean/90"
                      : "border-ocean/20 hover:bg-ocean/10 bg-transparent"
                  }
                >
                  Farmers
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              {filteredLeaderboard.map((entry) => (
                <div
                  key={entry.rank}
                  className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors border border-border/50"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-ocean to-aqua text-white font-bold">
                    {entry.rank === 1 ? (
                      <Trophy className="w-5 h-5" />
                    ) : entry.rank === 2 ? (
                      <Medal className="w-5 h-5" />
                    ) : entry.rank === 3 ? (
                      <Award className="w-5 h-5" />
                    ) : (
                      entry.rank
                    )}
                  </div>

                  <Avatar className="w-12 h-12">
                    <img
                      src={entry.avatar || "/placeholder.svg"}
                      alt={entry.name}
                      className="w-full h-full object-cover"
                    />
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{entry.name}</h3>
                      <Badge
                        variant="outline"
                        className={
                          entry.type === "NGO"
                            ? "bg-seagrass/10 text-seagrass border-seagrass/20"
                            : entry.type === "Company"
                              ? "bg-aqua/10 text-aqua border-aqua/20"
                              : entry.type === "Government"
                                ? "bg-ocean/10 text-ocean border-ocean/20"
                                : "bg-coral/10 text-coral border-coral/20"
                        }
                      >
                        {entry.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                      <span>Level {entry.level}</span>
                      <span>•</span>
                      <span>{entry.badge}</span>
                      <span>•</span>
                      <span className="text-ocean font-medium">{entry.impact}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Credits</p>
                    <p className="text-lg font-bold">{entry.credits.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Achievements */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-ocean/20">
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-6 h-6 text-coral" />
              <h2 className="text-2xl font-bold">Achievements</h2>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement) => {
                const Icon = achievement.icon
                return (
                  <div
                    key={achievement.id}
                    className={`p-4 rounded-lg border transition-all ${
                      achievement.unlocked
                        ? "bg-gradient-to-br from-ocean/10 to-aqua/10 border-ocean/20"
                        : "bg-muted/30 border-border/50 opacity-60"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          achievement.unlocked
                            ? achievement.rarity === "legendary"
                              ? "bg-gradient-to-br from-coral to-coral/80"
                              : achievement.rarity === "epic"
                                ? "bg-gradient-to-br from-ocean to-aqua"
                                : achievement.rarity === "rare"
                                  ? "bg-seagrass"
                                  : "bg-muted"
                            : "bg-muted"
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${achievement.unlocked ? "text-white" : "text-muted-foreground"}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-sm">{achievement.name}</h3>
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              achievement.rarity === "legendary"
                                ? "bg-coral/10 text-coral border-coral/20"
                                : achievement.rarity === "epic"
                                  ? "bg-ocean/10 text-ocean border-ocean/20"
                                  : achievement.rarity === "rare"
                                    ? "bg-seagrass/10 text-seagrass border-seagrass/20"
                                    : "bg-muted"
                            }`}
                          >
                            {achievement.rarity}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <Button className="w-full mt-6 bg-gradient-to-r from-ocean to-aqua hover:opacity-90">
              View All Achievements
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
