"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { OceanBackground } from "@/components/ocean-background"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Upload,
  Satellite,
  FileText,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  BarChart3,
  Clock,
  Sparkles,
  Download,
  Eye,
} from "lucide-react"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

const verificationQueue = [
  {
    id: 1,
    project: "Sundarbans Mangrove Restoration",
    submittedBy: "Dr. Ananya Sharma",
    date: "2024-01-15",
    status: "pending",
    type: "Satellite Data",
    priority: "high",
  },
  {
    id: 2,
    project: "Kerala Seagrass Conservation",
    submittedBy: "Marine Research Institute",
    date: "2024-01-14",
    status: "in-review",
    type: "Drone Survey",
    priority: "medium",
  },
  {
    id: 3,
    project: "Goa Coastal Protection",
    submittedBy: "Coastal Guard Team",
    date: "2024-01-13",
    status: "verified",
    type: "Field Survey",
    priority: "low",
  },
]

const carbonEstimateData = [
  { category: "Mangroves", sequestration: 450, verified: 425 },
  { category: "Seagrass", sequestration: 320, verified: 310 },
  { category: "Salt Marshes", sequestration: 180, verified: 175 },
  { category: "Tidal Flats", sequestration: 120, verified: 115 },
]

const monthlyTrend = [
  { month: "Jan", reported: 850, verified: 820 },
  { month: "Feb", reported: 920, verified: 890 },
  { month: "Mar", reported: 880, verified: 860 },
  { month: "Apr", reported: 950, verified: 925 },
  { month: "May", reported: 1020, verified: 990 },
  { month: "Jun", reported: 1100, verified: 1070 },
]

export default function MRVPage() {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([])
  const [aiEstimate, setAiEstimate] = useState<number | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleFileUpload = (type: string) => {
    setUploadedFiles([...uploadedFiles, type])
  }

  const handleAIEstimate = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setAiEstimate(1250)
      setIsProcessing(false)
    }, 2000)
  }

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "verified":
        return { color: "#27AE60", bg: "bg-[#27AE60]/10", text: "Verified", icon: CheckCircle2 }
      case "in-review":
        return { color: "#00B4D8", bg: "bg-[#00B4D8]/10", text: "In Review", icon: Clock }
      case "pending":
        return { color: "#FF6B35", bg: "bg-[#FF6B35]/10", text: "Pending", icon: AlertCircle }
      default:
        return { color: "#27AE60", bg: "bg-[#27AE60]/10", text: "Verified", icon: CheckCircle2 }
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
              MRV <span className="gradient-text">Workspace</span>
            </h1>
            <p className="text-lg text-ocean-medium">
              Monitoring, Reporting, and Verification for Blue Carbon Projects
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Pending Reviews", value: "12", icon: Clock, color: "#FF6B35" },
              { label: "In Progress", value: "8", icon: TrendingUp, color: "#00B4D8" },
              { label: "Verified Today", value: "24", icon: CheckCircle2, color: "#27AE60" },
              { label: "Accuracy Rate", value: "98%", icon: BarChart3, color: "#00C9A7" },
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

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Upload Panel */}
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-[#00B4D8]/20">
                <h2 className="text-2xl font-bold text-ocean-deep mb-6">Data Upload & Analysis</h2>

                <Tabs defaultValue="satellite">
                  <TabsList className="mb-6">
                    <TabsTrigger value="satellite">Satellite Data</TabsTrigger>
                    <TabsTrigger value="drone">Drone Survey</TabsTrigger>
                    <TabsTrigger value="field">Field Reports</TabsTrigger>
                  </TabsList>

                  <TabsContent value="satellite" className="space-y-6">
                    {/* Upload Area */}
                    <div className="border-2 border-dashed border-[#00B4D8]/30 rounded-lg p-8 text-center hover:border-[#00C9A7] transition-colors cursor-pointer">
                      <Satellite className="h-12 w-12 text-[#00B4D8] mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-ocean-deep mb-2">Upload Satellite Imagery</h3>
                      <p className="text-sm text-ocean-medium mb-4">
                        Drag and drop files or click to browse (GeoTIFF, PNG, JPEG)
                      </p>
                      <Button
                        onClick={() => handleFileUpload("Satellite imagery")}
                        className="aqua-gradient text-white hover:opacity-90"
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        Select Files
                      </Button>
                    </div>

                    {/* Uploaded Files */}
                    {uploadedFiles.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="font-semibold text-ocean-deep">Uploaded Files</h4>
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-[#E8F4F8] rounded-lg">
                            <div className="flex items-center gap-3">
                              <CheckCircle2 className="h-5 w-5 text-[#27AE60]" />
                              <span className="text-sm text-ocean-deep">{file}</span>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Project Details Form */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="project-name">Project Name</Label>
                        <Input
                          id="project-name"
                          placeholder="Enter project name"
                          className="border-[#00B4D8]/30 focus:border-[#00C9A7]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">Location Coordinates</Label>
                        <Input
                          id="location"
                          placeholder="Latitude, Longitude"
                          className="border-[#00B4D8]/30 focus:border-[#00C9A7]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="area">Area (hectares)</Label>
                        <Input
                          id="area"
                          type="number"
                          placeholder="450"
                          className="border-[#00B4D8]/30 focus:border-[#00C9A7]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes">Additional Notes</Label>
                        <Textarea
                          id="notes"
                          placeholder="Add any relevant observations or context..."
                          className="border-[#00B4D8]/30 focus:border-[#00C9A7] min-h-[100px]"
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="drone" className="space-y-6">
                    <div className="border-2 border-dashed border-[#00B4D8]/30 rounded-lg p-8 text-center hover:border-[#00C9A7] transition-colors cursor-pointer">
                      <Upload className="h-12 w-12 text-[#00B4D8] mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-ocean-deep mb-2">Upload Drone Survey Data</h3>
                      <p className="text-sm text-ocean-medium mb-4">
                        Upload aerial photography and LiDAR data (MP4, MOV, LAS)
                      </p>
                      <Button
                        onClick={() => handleFileUpload("Drone survey data")}
                        className="aqua-gradient text-white hover:opacity-90"
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        Select Files
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="field" className="space-y-6">
                    <div className="border-2 border-dashed border-[#00B4D8]/30 rounded-lg p-8 text-center hover:border-[#00C9A7] transition-colors cursor-pointer">
                      <FileText className="h-12 w-12 text-[#00B4D8] mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-ocean-deep mb-2">Upload Field Survey Reports</h3>
                      <p className="text-sm text-ocean-medium mb-4">
                        Upload field observations and measurements (PDF, DOCX, CSV)
                      </p>
                      <Button
                        onClick={() => handleFileUpload("Field survey report")}
                        className="aqua-gradient text-white hover:opacity-90"
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        Select Files
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* AI Carbon Estimator */}
                <div className="mt-6 p-6 bg-gradient-to-br from-[#00C9A7]/10 to-[#00B4D8]/10 rounded-lg border border-[#00C9A7]/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="h-6 w-6 text-[#00C9A7]" />
                    <h3 className="text-lg font-semibold text-ocean-deep">AI Carbon Estimator</h3>
                  </div>
                  <p className="text-sm text-ocean-medium mb-4">
                    Our AI analyzes uploaded data to estimate carbon sequestration potential
                  </p>

                  {aiEstimate === null ? (
                    <Button
                      onClick={handleAIEstimate}
                      disabled={isProcessing || uploadedFiles.length === 0}
                      className="w-full aqua-gradient text-white hover:opacity-90"
                    >
                      {isProcessing ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-4 w-4" />
                          Generate Estimate
                        </>
                      )}
                    </Button>
                  ) : (
                    <div className="space-y-4">
                      <div className="text-center p-6 bg-white rounded-lg">
                        <div className="text-4xl font-bold text-[#00C9A7] mb-2">{aiEstimate} tons</div>
                        <div className="text-sm text-ocean-medium">Estimated CO₂ Sequestration per Year</div>
                      </div>
                      <div className="flex gap-3">
                        <Button variant="outline" className="flex-1 bg-transparent">
                          View Details
                        </Button>
                        <Button className="flex-1 aqua-gradient text-white hover:opacity-90">
                          Submit for Verification
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </Card>

              {/* Verification Analytics */}
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-[#00B4D8]/20">
                <h2 className="text-2xl font-bold text-ocean-deep mb-6">Verification Analytics</h2>

                <Tabs defaultValue="comparison">
                  <TabsList className="mb-6">
                    <TabsTrigger value="comparison">Reported vs Verified</TabsTrigger>
                    <TabsTrigger value="trend">Monthly Trend</TabsTrigger>
                  </TabsList>

                  <TabsContent value="comparison">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={carbonEstimateData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                        <XAxis dataKey="category" stroke="#5a7a8c" />
                        <YAxis stroke="#5a7a8c" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sequestration" fill="#00B4D8" name="Reported" radius={[8, 8, 0, 0]} />
                        <Bar dataKey="verified" fill="#27AE60" name="Verified" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                    <div className="mt-4 p-4 bg-[#E8F4F8] rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-ocean-medium">Average Verification Accuracy</span>
                        <span className="text-lg font-bold text-[#27AE60]">97.2%</span>
                      </div>
                      <Progress value={97.2} className="mt-2" />
                    </div>
                  </TabsContent>

                  <TabsContent value="trend">
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={monthlyTrend}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                        <XAxis dataKey="month" stroke="#5a7a8c" />
                        <YAxis stroke="#5a7a8c" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="reported" stroke="#00B4D8" strokeWidth={2} name="Reported" />
                        <Line type="monotone" dataKey="verified" stroke="#27AE60" strokeWidth={2} name="Verified" />
                      </LineChart>
                    </ResponsiveContainer>
                  </TabsContent>
                </Tabs>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Verification Queue */}
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-[#00B4D8]/20">
                <h3 className="text-lg font-semibold text-ocean-deep mb-4">Verification Queue</h3>
                <div className="space-y-3">
                  {verificationQueue.map((item) => {
                    const statusConfig = getStatusConfig(item.status)
                    const StatusIcon = statusConfig.icon

                    return (
                      <div key={item.id} className="p-4 bg-[#E8F4F8] rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-sm text-ocean-deep line-clamp-1">{item.project}</h4>
                          <Badge className={`${statusConfig.bg} border-0 text-xs`}>
                            <StatusIcon className="h-3 w-3 mr-1" style={{ color: statusConfig.color }} />
                            <span style={{ color: statusConfig.color }}>{statusConfig.text}</span>
                          </Badge>
                        </div>
                        <div className="text-xs text-ocean-medium space-y-1">
                          <div>By: {item.submittedBy}</div>
                          <div>Type: {item.type}</div>
                          <div>Date: {item.date}</div>
                        </div>
                        <Button size="sm" variant="outline" className="w-full mt-3 text-xs bg-transparent">
                          Review Details
                        </Button>
                      </div>
                    )
                  })}
                </div>
              </Card>

              {/* Trust Score Meter */}
              <Card className="p-6 bg-gradient-to-br from-[#003F5C] to-[#00B4D8] text-white border-0">
                <h3 className="text-lg font-semibold mb-4">Trust Score</h3>
                <div className="text-center mb-4">
                  <div className="text-5xl font-bold mb-2">98%</div>
                  <div className="text-white/80 text-sm">Verification Accuracy</div>
                </div>
                <Progress value={98} className="mb-4 bg-white/20" />
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Data Quality</span>
                    <span className="font-semibold">Excellent</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Consistency</span>
                    <span className="font-semibold">High</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Compliance</span>
                    <span className="font-semibold">100%</span>
                  </div>
                </div>
              </Card>

              {/* Alerts */}
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-[#00B4D8]/20">
                <h3 className="text-lg font-semibold text-ocean-deep mb-4">Alerts & Notifications</h3>
                <div className="space-y-3">
                  {[
                    {
                      type: "warning",
                      message: "3 projects pending verification for over 48 hours",
                      icon: AlertCircle,
                      color: "#FF6B35",
                    },
                    {
                      type: "info",
                      message: "New satellite data available for Sundarbans project",
                      icon: Satellite,
                      color: "#00B4D8",
                    },
                    {
                      type: "success",
                      message: "5 projects successfully verified today",
                      icon: CheckCircle2,
                      color: "#27AE60",
                    },
                  ].map((alert, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-[#E8F4F8] rounded-lg">
                      <alert.icon className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: alert.color }} />
                      <p className="text-sm text-ocean-deep">{alert.message}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-[#00B4D8]/20">
                <h3 className="text-lg font-semibold text-ocean-deep mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full aqua-gradient text-white hover:opacity-90">
                    <Download className="mr-2 h-4 w-4" />
                    Export Report
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <FileText className="mr-2 h-4 w-4" />
                    View Guidelines
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Analytics Dashboard
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
