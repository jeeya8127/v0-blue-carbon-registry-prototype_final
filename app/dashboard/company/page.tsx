"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, ShoppingBag, Target, Leaf, Download, BarChart3, Volume2 } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"

const companyStats = {
  totalSpent: "$1,245,000",
  creditsPurchased: "98,000 tCO₂e",
  offsetGoal: "75%",
  carbonFootprint: "130,000 tCO₂e/year",
}

const recentPurchases = [
  { id: 1, project: "Mangrove Restoration - Indonesia", amount: "5,000 tCO₂e", value: "$62,500", date: "2025-01-15" },
  { id: 2, project: "Seagrass Protection - Philippines", amount: "3,200 tCO₂e", value: "$40,000", date: "2025-01-14" },
  { id: 3, project: "Coastal Wetland - Vietnam", amount: "7,800 tCO₂e", value: "$97,500", date: "2025-01-12" },
]

export default function CompanyDashboard() {
  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = "en-US"
      window.speechSynthesis.speak(utterance)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-ocean/5 to-aqua/5 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-balance">Company Dashboard</h1>
            <p className="text-muted-foreground mt-2">EcoTech Industries - Track your carbon offset journey</p>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                speak("Welcome to your Company Dashboard. Monitor your carbon credit purchases and offset progress.")
              }
              className="border-ocean/20 hover:bg-ocean/10 bg-transparent"
              title="Text to Speech"
            >
              <Volume2 className="w-4 h-4" />
            </Button>
            <Button className="bg-gradient-to-r from-coral to-coral/80 hover:opacity-90">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-6 bg-gradient-to-br from-ocean/10 to-aqua/10 border-ocean/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Spent</p>
                <p className="text-3xl font-bold mt-1">{companyStats.totalSpent}</p>
                <div className="flex items-center gap-1 text-seagrass text-sm mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+22.5% this quarter</span>
                </div>
              </div>
              <ShoppingBag className="w-10 h-10 text-ocean opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-aqua/10 to-seagrass/10 border-aqua/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Credits Purchased</p>
                <p className="text-3xl font-bold mt-1">{companyStats.creditsPurchased}</p>
                <div className="flex items-center gap-1 text-seagrass text-sm mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+15.8%</span>
                </div>
              </div>
              <Leaf className="w-10 h-10 text-aqua opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-seagrass/10 to-ocean/10 border-seagrass/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Offset Goal Progress</p>
                <p className="text-3xl font-bold mt-1">{companyStats.offsetGoal}</p>
                <div className="w-full h-2 bg-muted rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-seagrass to-aqua rounded-full"
                    style={{ width: "75%" }}
                  />
                </div>
              </div>
              <Target className="w-10 h-10 text-seagrass opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-coral/10 to-ocean/10 border-coral/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Carbon Footprint</p>
                <p className="text-2xl font-bold mt-1">{companyStats.carbonFootprint}</p>
              </div>
              <BarChart3 className="w-10 h-10 text-coral opacity-50" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Purchases */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-ocean/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Recent Purchases</h2>
              <Button variant="outline" size="sm" className="border-ocean/20 hover:bg-ocean/10 bg-transparent">
                View All
              </Button>
            </div>

            <div className="space-y-4">
              {recentPurchases.map((purchase) => (
                <div
                  key={purchase.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/50"
                >
                  <div>
                    <p className="font-semibold">{purchase.project}</p>
                    <p className="text-sm text-muted-foreground mt-1">{purchase.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-ocean">{purchase.amount}</p>
                    <p className="text-sm text-muted-foreground mt-1">{purchase.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Offset Progress Chart */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-ocean/20">
            <h2 className="text-2xl font-bold mb-6">Carbon Offset Progress</h2>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Current Year Goal</span>
                  <span className="text-sm font-bold text-ocean">98,000 / 130,000 tCO₂e</span>
                </div>
                <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-seagrass to-aqua rounded-full transition-all"
                    style={{ width: "75%" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-sm text-muted-foreground">Remaining</p>
                  <p className="text-2xl font-bold text-coral">32,000 tCO₂e</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Est. Completion</p>
                  <p className="text-2xl font-bold text-seagrass">Q2 2025</p>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-ocean to-aqua hover:opacity-90">
                Purchase More Credits
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
