"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Download, MapPin, BarChart3, PieChart, Activity } from "lucide-react"

const impactStats = {
  totalCO2Reduced: "2.4M tCO₂e",
  creditsIssued: "1.2M",
  farmersSupported: "6,450",
  ecosystemsProtected: "45,000 hectares",
}

const comparisonData = [
  { name: "NGOs", credits: 487250, percentage: 42, color: "seagrass" },
  { name: "Companies", credits: 398500, percentage: 34, color: "aqua" },
  { name: "Government", credits: 186200, percentage: 16, color: "ocean" },
  { name: "Farmers", credits: 92800, percentage: 8, color: "coral" },
]

const regionalImpact = [
  { region: "Southeast Asia", impact: 980000, projects: 1847, color: "seagrass" },
  { region: "South Asia", impact: 720000, projects: 892, color: "aqua" },
  { region: "East Asia", impact: 450000, projects: 345, color: "ocean" },
  { region: "Pacific Islands", impact: 250000, projects: 163, color: "coral" },
]

const topProjects = [
  { name: "Mangrove Restoration - Indonesia", impact: "125,000 tCO₂e", location: "Sumatra" },
  { name: "Seagrass Protection - Philippines", impact: "98,000 tCO₂e", location: "Palawan" },
  { name: "Coastal Wetland - Vietnam", impact: "87,500 tCO₂e", location: "Mekong Delta" },
  { name: "Mangrove Reforestation - India", impact: "76,000 tCO₂e", location: "Kerala" },
]

export default function ImpactVisualization() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-ocean/5 to-aqua/5 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-balance">Global Impact Visualization</h1>
            <p className="text-muted-foreground mt-2">Real-time carbon reduction impact across the world</p>
          </div>
          <Button className="bg-gradient-to-r from-coral to-coral/80 hover:opacity-90">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-6 bg-gradient-to-br from-ocean/10 to-aqua/10 border-ocean/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total CO₂ Reduced</p>
                <p className="text-3xl font-bold mt-1">{impactStats.totalCO2Reduced}</p>
                <div className="flex items-center gap-1 text-seagrass text-sm mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+18.2% this year</span>
                </div>
              </div>
              <Activity className="w-10 h-10 text-ocean opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-aqua/10 to-seagrass/10 border-aqua/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Credits Issued</p>
                <p className="text-3xl font-bold mt-1">{impactStats.creditsIssued}</p>
                <div className="flex items-center gap-1 text-seagrass text-sm mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+15.8%</span>
                </div>
              </div>
              <BarChart3 className="w-10 h-10 text-aqua opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-seagrass/10 to-ocean/10 border-seagrass/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Farmers Supported</p>
                <p className="text-3xl font-bold mt-1">{impactStats.farmersSupported}</p>
                <div className="flex items-center gap-1 text-seagrass text-sm mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+24.5%</span>
                </div>
              </div>
              <PieChart className="w-10 h-10 text-seagrass opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-coral/10 to-ocean/10 border-coral/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Ecosystems Protected</p>
                <p className="text-3xl font-bold mt-1">{impactStats.ecosystemsProtected}</p>
              </div>
              <MapPin className="w-10 h-10 text-coral opacity-50" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Stakeholder Comparison */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-ocean/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Credits by Stakeholder</h2>
              <PieChart className="w-5 h-5 text-muted-foreground" />
            </div>

            <div className="space-y-4">
              {comparisonData.map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-sm font-bold">
                      {item.credits.toLocaleString()} credits ({item.percentage}%)
                    </span>
                  </div>
                  <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        item.color === "seagrass"
                          ? "bg-seagrass"
                          : item.color === "aqua"
                            ? "bg-aqua"
                            : item.color === "ocean"
                              ? "bg-ocean"
                              : "bg-coral"
                      }`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-lg bg-gradient-to-br from-ocean/10 to-aqua/10 border border-ocean/20">
              <p className="text-sm text-muted-foreground">Key Insight</p>
              <p className="font-medium mt-1">
                NGOs lead with 42% of total credits, followed by companies at 34%. This shows strong corporate
                commitment to carbon neutrality.
              </p>
            </div>
          </Card>

          {/* Regional Impact Heatmap */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-ocean/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Regional Impact Heatmap</h2>
              <MapPin className="w-5 h-5 text-muted-foreground" />
            </div>

            <div className="space-y-4">
              {regionalImpact.map((region, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-lg border transition-all ${
                    region.color === "seagrass"
                      ? "bg-seagrass/10 border-seagrass/20"
                      : region.color === "aqua"
                        ? "bg-aqua/10 border-aqua/20"
                        : region.color === "ocean"
                          ? "bg-ocean/10 border-ocean/20"
                          : "bg-coral/10 border-coral/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{region.region}</h3>
                    <Badge
                      variant="outline"
                      className={
                        region.color === "seagrass"
                          ? "bg-seagrass/20 text-seagrass border-seagrass/30"
                          : region.color === "aqua"
                            ? "bg-aqua/20 text-aqua border-aqua/30"
                            : region.color === "ocean"
                              ? "bg-ocean/20 text-ocean border-ocean/30"
                              : "bg-coral/20 text-coral border-coral/30"
                      }
                    >
                      High Impact
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">CO₂ Reduced</p>
                      <p className="font-bold text-lg">{region.impact.toLocaleString()} tCO₂e</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Active Projects</p>
                      <p className="font-bold text-lg">{region.projects}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Top Performing Projects */}
        <Card className="p-6 bg-card/50 backdrop-blur-sm border-ocean/20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Top Performing Projects</h2>
            <Button variant="outline" size="sm" className="border-ocean/20 hover:bg-ocean/10 bg-transparent">
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topProjects.map((project, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-background/50 border border-border/50 hover:border-ocean/40 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-ocean to-aqua text-white flex items-center justify-center font-bold text-sm">
                      #{idx + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{project.name}</h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground">Total Impact</p>
                  <p className="text-lg font-bold text-ocean">{project.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
