"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, DollarSign, ShoppingCart, Activity, Download, BarChart3, Users, Volume2 } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"

const ngoStats = {
  totalEarnings: "$487,250",
  creditsSold: "125,000 tCO₂e",
  activeProjects: 12,
  beneficiaries: "8,450 people",
}

const recentTransactions = [
  { id: 1, buyer: "EcoTech Industries", amount: "5,000 tCO₂e", value: "$62,500", date: "2025-01-15" },
  { id: 2, buyer: "Green Solutions Ltd", amount: "3,200 tCO₂e", value: "$40,000", date: "2025-01-14" },
  { id: 3, buyer: "Carbon Neutral Corp", amount: "7,800 tCO₂e", value: "$97,500", date: "2025-01-12" },
]

const projectPerformance = [
  { name: "Mangrove Restoration", credits: 45000, revenue: "$562,500", status: "active" },
  { name: "Seagrass Protection", credits: 32000, revenue: "$400,000", status: "active" },
  { name: "Coastal Wetland", credits: 28000, revenue: "$350,000", status: "completed" },
]

export default function NGODashboard() {
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
            <h1 className="text-4xl font-bold text-balance">NGO Dashboard</h1>
            <p className="text-muted-foreground mt-2">Green Ocean NGO - Track your impact and earnings</p>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Button
              variant="outline"
              size="icon"
              onClick={() => speak("Welcome to your NGO Dashboard. Track your carbon credit sales and project impact.")}
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
                <p className="text-sm text-muted-foreground">Total Earnings</p>
                <p className="text-3xl font-bold mt-1">{ngoStats.totalEarnings}</p>
                <div className="flex items-center gap-1 text-seagrass text-sm mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+18.2% this month</span>
                </div>
              </div>
              <DollarSign className="w-10 h-10 text-ocean opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-aqua/10 to-seagrass/10 border-aqua/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Credits Sold</p>
                <p className="text-3xl font-bold mt-1">{ngoStats.creditsSold}</p>
                <div className="flex items-center gap-1 text-seagrass text-sm mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+12.5%</span>
                </div>
              </div>
              <ShoppingCart className="w-10 h-10 text-aqua opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-seagrass/10 to-ocean/10 border-seagrass/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Projects</p>
                <p className="text-3xl font-bold mt-1">{ngoStats.activeProjects}</p>
              </div>
              <Activity className="w-10 h-10 text-seagrass opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-coral/10 to-ocean/10 border-coral/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Beneficiaries</p>
                <p className="text-3xl font-bold mt-1">{ngoStats.beneficiaries}</p>
              </div>
              <Users className="w-10 h-10 text-coral opacity-50" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Transactions */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-ocean/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Recent Sales</h2>
              <Button variant="outline" size="sm" className="border-ocean/20 hover:bg-ocean/10 bg-transparent">
                View All
              </Button>
            </div>

            <div className="space-y-4">
              {recentTransactions.map((tx) => (
                <div
                  key={tx.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/50"
                >
                  <div>
                    <p className="font-semibold">{tx.buyer}</p>
                    <p className="text-sm text-muted-foreground mt-1">{tx.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-ocean">{tx.amount}</p>
                    <p className="text-sm text-muted-foreground mt-1">{tx.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Project Performance */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-ocean/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Project Performance</h2>
              <BarChart3 className="w-5 h-5 text-muted-foreground" />
            </div>

            <div className="space-y-4">
              {projectPerformance.map((project, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-background/50 border border-border/50">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{project.name}</h3>
                    <Badge
                      variant={project.status === "active" ? "default" : "secondary"}
                      className={project.status === "active" ? "bg-seagrass/20 text-seagrass border-seagrass/30" : ""}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Credits: {project.credits.toLocaleString()} tCO₂e</span>
                    <span className="font-semibold text-ocean">{project.revenue}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
