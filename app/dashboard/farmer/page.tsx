"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  DollarSign,
  Sprout,
  Users,
  Download,
  Upload,
  Video,
  FileText,
  Lightbulb,
  Volume2,
  Play,
} from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"

const farmerStats = {
  totalEarnings: "$45,250",
  creditsGenerated: "45,000 tCO₂e",
  landArea: "120 hectares",
  communityMembers: 24,
}

const alternativeMethods = [
  {
    id: 1,
    title: "Mangrove Planting",
    description: "Plant mangrove seedlings in coastal areas to sequester carbon",
    potential: "375 tCO₂e/hectare/year",
    difficulty: "Medium",
  },
  {
    id: 2,
    title: "Seagrass Restoration",
    description: "Restore seagrass meadows to capture and store carbon",
    potential: "280 tCO₂e/hectare/year",
    difficulty: "Easy",
  },
  {
    id: 3,
    title: "Wetland Conservation",
    description: "Protect existing wetlands from degradation",
    potential: "420 tCO₂e/hectare/year",
    difficulty: "Easy",
  },
]

export default function FarmerDashboard() {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([])

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = "en-US"
      window.speechSynthesis.speak(utterance)
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const fileNames = Array.from(files).map((file) => file.name)
      setUploadedFiles((prev) => [...prev, ...fileNames])
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-ocean/5 to-aqua/5 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-balance">Farmer Dashboard</h1>
            <p className="text-muted-foreground mt-2">Nguyen Van Collective - Track your carbon farming impact</p>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                speak(
                  "Welcome to your Farmer Dashboard. Upload project proof, track earnings, and discover new carbon reduction methods.",
                )
              }
              className="border-ocean/20 hover:bg-ocean/10 bg-transparent"
              title="Text to Speech - Listen to page content"
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
                <p className="text-3xl font-bold mt-1">{farmerStats.totalEarnings}</p>
                <div className="flex items-center gap-1 text-seagrass text-sm mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+24.5% this season</span>
                </div>
              </div>
              <DollarSign className="w-10 h-10 text-ocean opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-aqua/10 to-seagrass/10 border-aqua/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Credits Generated</p>
                <p className="text-3xl font-bold mt-1">{farmerStats.creditsGenerated}</p>
                <div className="flex items-center gap-1 text-seagrass text-sm mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+18.2%</span>
                </div>
              </div>
              <Sprout className="w-10 h-10 text-aqua opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-seagrass/10 to-ocean/10 border-seagrass/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Land Area</p>
                <p className="text-3xl font-bold mt-1">{farmerStats.landArea}</p>
              </div>
              <Sprout className="w-10 h-10 text-seagrass opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-coral/10 to-ocean/10 border-coral/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Community Members</p>
                <p className="text-3xl font-bold mt-1">{farmerStats.communityMembers}</p>
              </div>
              <Users className="w-10 h-10 text-coral opacity-50" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* File Upload Section */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-ocean/20">
            <div className="flex items-center gap-3 mb-6">
              <Upload className="w-6 h-6 text-ocean" />
              <h2 className="text-2xl font-bold">Upload Project Proof</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Drone Images / Aerial Photos</label>
                <div className="border-2 border-dashed border-ocean/20 rounded-lg p-6 text-center hover:border-ocean/40 transition-colors cursor-pointer">
                  <input
                    type="file"
                    multiple
                    accept="image/*,video/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="drone-upload"
                  />
                  <label htmlFor="drone-upload" className="cursor-pointer">
                    <Video className="w-10 h-10 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Click to upload drone footage or photos</p>
                    <p className="text-xs text-muted-foreground mt-1">Supports: JPG, PNG, MP4, MOV</p>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Documents / Reports</label>
                <div className="border-2 border-dashed border-ocean/20 rounded-lg p-6 text-center hover:border-ocean/40 transition-colors cursor-pointer">
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="doc-upload"
                  />
                  <label htmlFor="doc-upload" className="cursor-pointer">
                    <FileText className="w-10 h-10 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Click to upload documents</p>
                    <p className="text-xs text-muted-foreground mt-1">Supports: PDF, DOC, DOCX</p>
                  </label>
                </div>
              </div>

              {uploadedFiles.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium mb-2">Uploaded Files:</p>
                  <div className="space-y-2">
                    {uploadedFiles.map((file, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2 bg-background/50 rounded border border-border/50"
                      >
                        <FileText className="w-4 h-4 text-ocean" />
                        <span className="text-sm flex-1">{file}</span>
                        <Badge variant="outline" className="bg-seagrass/10 text-seagrass border-seagrass/20">
                          Uploaded
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Button className="w-full bg-gradient-to-r from-ocean to-aqua hover:opacity-90">
                <Upload className="w-4 h-4 mr-2" />
                Submit for Verification
              </Button>
            </div>
          </Card>

          {/* Alternative CO2 Reduction Methods */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-ocean/20">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-coral" />
              <h2 className="text-2xl font-bold">Alternative Methods</h2>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              AI-suggested methods to increase your carbon sequestration and earnings
            </p>

            <div className="space-y-4">
              {alternativeMethods.map((method) => (
                <div key={method.id} className="p-4 rounded-lg bg-background/50 border border-border/50">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">{method.title}</h3>
                    <Badge
                      variant="outline"
                      className={
                        method.difficulty === "Easy"
                          ? "bg-seagrass/10 text-seagrass border-seagrass/20"
                          : "bg-coral/10 text-coral border-coral/20"
                      }
                    >
                      {method.difficulty}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-ocean">Potential: {method.potential}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-ocean/20 hover:bg-ocean/10 bg-transparent"
                      onClick={() => speak(`${method.title}. ${method.description}. Potential: ${method.potential}`)}
                    >
                      <Play className="w-3 h-3 mr-1" />
                      Listen
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button className="w-full mt-4 bg-gradient-to-r from-coral to-coral/80 hover:opacity-90">
              Get Personalized Recommendations
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
