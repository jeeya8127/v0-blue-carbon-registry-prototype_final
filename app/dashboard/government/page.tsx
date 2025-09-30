"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, FileText, Target, Users, Download, BarChart3, Volume2, Globe } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"

const govStats = {
  nationalImpact: "2.4M tCO₂e",
  registeredProjects: "3,247",
  activeFarmers: "6,450",
  policyCompliance: "94%",
}

const policyMetrics = [
  { name: "NDC Target Progress", value: 68, target: 100, unit: "%" },
  { name: "Blue Carbon Coverage", value: 45000, target: 60000, unit: "hectares" },
  { name: "Community Participation", value: 12847, target: 15000, unit: "members" },
]

const regionalData = [
  { region: "Coastal Zone A", projects: 847, impact: "680,000 tCO₂e", compliance: 96 },
  { region: "Coastal Zone B", projects: 1245, impact: "920,000 tCO₂e", compliance: 94 },
  { region: "Coastal Zone C", projects: 692, impact: "540,000 tCO₂e", compliance: 91 },
  { region: "Coastal Zone D", projects: 463, impact: "260,000 tCO₂e", compliance: 89 },
]

export default function GovernmentDashboard() {
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
            <h1 className="text-4xl font-bold text-balance">Government Policy Dashboard</h1>
            <p className="text-muted-foreground mt-2">National blue carbon strategy monitoring and compliance</p>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                speak(
                  "Welcome to the Government Policy Dashboard. Monitor national carbon reduction progress and compliance.",
                )
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
                <p className="text-sm text-muted-foreground">National Impact</p>
                <p className="text-3xl font-bold mt-1">{govStats.nationalImpact}</p>
                <div className="flex items-center gap-1 text-seagrass text-sm mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+16.2% this year</span>
                </div>
              </div>
              <Globe className="w-10 h-10 text-ocean opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-aqua/10 to-seagrass/10 border-aqua/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Registered Projects</p>
                <p className="text-3xl font-bold mt-1">{govStats.registeredProjects}</p>
                <div className="flex items-center gap-1 text-seagrass text-sm mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+22.5%</span>
                </div>
              </div>
              <FileText className="w-10 h-10 text-aqua opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-seagrass/10 to-ocean/10 border-seagrass/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Farmers</p>
                <p className="text-3xl font-bold mt-1">{govStats.activeFarmers}</p>
                <div className="flex items-center gap-1 text-seagrass text-sm mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+28.4%</span>
                </div>
              </div>
              <Users className="w-10 h-10 text-seagrass opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-coral/10 to-ocean/10 border-coral/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Policy Compliance</p>
                <p className="text-3xl font-bold mt-1">{govStats.policyCompliance}</p>
              </div>
              <Target className="w-10 h-10 text-coral opacity-50" />
            </div>
          </Card>
        </div>

        {/* Policy Metrics */}
        <Card className="p-6 bg-card/50 backdrop-blur-sm border-ocean/20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">National Policy Targets</h2>
            <BarChart3 className="w-5 h-5 text-muted-foreground" />
          </div>

          <div className="space-y-6">
            {policyMetrics.map((metric, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{metric.name}</span>
                  <span className="text-sm font-bold text-ocean">
                    {metric.value.toLocaleString()} / {metric.target.toLocaleString()} {metric.unit}
                  </span>
                </div>
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-seagrass to-aqua rounded-full transition-all"
                    style={{ width: `${(metric.value / metric.target) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Regional Data */}
        <Card className="p-6 bg-card/50 backdrop-blur-sm border-ocean/20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Regional Performance</h2>
            <Button variant="outline" size="sm" className="border-ocean/20 hover:bg-ocean/10 bg-transparent">
              View Map
            </Button>
          </div>

          <div className="space-y-4">
            {regionalData.map((region, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-background/50 border border-border/50 hover:border-ocean/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">{region.region}</h3>
                  <Badge
                    variant="outline"
                    className={
                      region.compliance >= 95
                        ? "bg-seagrass/10 text-seagrass border-seagrass/20"
                        : region.compliance >= 90
                          ? "bg-aqua/10 text-aqua border-aqua/20"
                          : "bg-coral/10 text-coral border-coral/20"
                    }
                  >
                    {region.compliance}% compliant
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Projects</p>
                    <p className="font-semibold">{region.projects}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Impact</p>
                    <p className="font-semibold text-ocean">{region.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
