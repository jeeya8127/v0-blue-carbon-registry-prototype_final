"use client"

import { use } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { OceanBackground } from "@/components/ocean-background"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Calendar,
  TrendingUp,
  Shield,
  Download,
  ExternalLink,
  Leaf,
  Users,
  Droplets,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react"
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const carbonData = [
  { month: "Jan", credits: 800 },
  { month: "Feb", credits: 1200 },
  { month: "Mar", credits: 1800 },
  { month: "Apr", credits: 2400 },
  { month: "May", credits: 3200 },
  { month: "Jun", credits: 4100 },
]

const verificationData = [
  { date: "Week 1", reported: 85, verified: 82 },
  { date: "Week 2", reported: 92, verified: 90 },
  { date: "Week 3", reported: 88, verified: 86 },
  { date: "Week 4", reported: 95, verified: 93 },
]

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  const project = {
    id,
    name: "Sundarbans Mangrove Restoration",
    location: "West Bengal, India",
    status: "active",
    credits: 12500,
    trustScore: 98,
    area: "450 hectares",
    startDate: "January 2023",
    community: "Sundarbans Coastal Community",
    image: "/mangrove-forest-aerial-view.jpg",
    description:
      "A comprehensive mangrove restoration project in the Sundarbans delta, focusing on replanting native species and protecting existing ecosystems. This project works directly with local communities to restore degraded coastal areas while providing sustainable livelihoods.",
    impact: {
      co2Sequestered: "15,200 tons",
      mangroves: "125,000 trees",
      communities: "12 villages",
      biodiversity: "45+ species",
    },
    blockchain: {
      contractAddress: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
      network: "Polygon",
      certificateId: "BC-SUN-2023-001",
    },
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <OceanBackground />

      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button */}
          <Link href="/registry">
            <Button variant="ghost" className="mb-6 text-ocean-medium hover:text-ocean-deep">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Registry
            </Button>
          </Link>

          {/* Hero Section */}
          <Card className="overflow-hidden mb-8 bg-white/80 backdrop-blur-sm border-[#00B4D8]/20">
            <div className="relative h-80">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-[#27AE60]/90 text-white border-0">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Active
                  </Badge>
                  <Badge className="bg-white/90 text-ocean-deep border-0">
                    <Shield className="h-3 w-3 mr-1" />
                    {project.trustScore}% Trust Score
                  </Badge>
                </div>
                <h1 className="text-4xl font-bold text-white mb-2">{project.name}</h1>
                <div className="flex items-center gap-2 text-white/90">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">{project.location}</span>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-[#00B4D8]/20">
                <h2 className="text-2xl font-bold text-ocean-deep mb-4">Project Overview</h2>
                <p className="text-ocean-medium leading-relaxed mb-6">{project.description}</p>

                {/* Impact Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: TrendingUp, label: "CO₂ Sequestered", value: project.impact.co2Sequestered },
                    { icon: Leaf, label: "Mangroves Planted", value: project.impact.mangroves },
                    { icon: Users, label: "Communities", value: project.impact.communities },
                    { icon: Droplets, label: "Species Protected", value: project.impact.biodiversity },
                  ].map((metric, index) => (
                    <div key={index} className="text-center p-4 rounded-lg bg-[#E8F4F8]">
                      <metric.icon className="h-6 w-6 text-[#00C9A7] mx-auto mb-2" />
                      <div className="text-xl font-bold text-ocean-deep">{metric.value}</div>
                      <div className="text-xs text-ocean-medium mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Charts */}
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-[#00B4D8]/20">
                <Tabs defaultValue="credits">
                  <TabsList className="mb-6">
                    <TabsTrigger value="credits">Carbon Credits</TabsTrigger>
                    <TabsTrigger value="verification">Verification</TabsTrigger>
                  </TabsList>

                  <TabsContent value="credits">
                    <h3 className="text-lg font-semibold text-ocean-deep mb-4">Credits Earned Over Time</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={carbonData}>
                        <defs>
                          <linearGradient id="colorCredits" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00C9A7" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#00C9A7" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                        <XAxis dataKey="month" stroke="#5a7a8c" />
                        <YAxis stroke="#5a7a8c" />
                        <Tooltip />
                        <Area type="monotone" dataKey="credits" stroke="#00C9A7" fill="url(#colorCredits)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </TabsContent>

                  <TabsContent value="verification">
                    <h3 className="text-lg font-semibold text-ocean-deep mb-4">Reported vs Verified Data</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={verificationData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                        <XAxis dataKey="date" stroke="#5a7a8c" />
                        <YAxis stroke="#5a7a8c" />
                        <Tooltip />
                        <Line type="monotone" dataKey="reported" stroke="#00B4D8" strokeWidth={2} />
                        <Line type="monotone" dataKey="verified" stroke="#27AE60" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                    <div className="flex items-center justify-center gap-6 mt-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#00B4D8]" />
                        <span className="text-sm text-ocean-medium">Reported</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#27AE60]" />
                        <span className="text-sm text-ocean-medium">Verified</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </Card>

              {/* Blockchain Certificate */}
              <Card className="p-6 bg-gradient-to-br from-[#003F5C] to-[#00B4D8] text-white border-0">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Blockchain Certificate</h3>
                    <p className="text-white/80 text-sm">Verified on {project.blockchain.network}</p>
                  </div>
                  <Shield className="h-12 w-12 text-[#00C9A7]" />
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-white/70 text-xs mb-1">Certificate ID</div>
                    <div className="font-mono text-sm">{project.blockchain.certificateId}</div>
                  </div>
                  <div>
                    <div className="text-white/70 text-xs mb-1">Smart Contract</div>
                    <div className="font-mono text-sm break-all">{project.blockchain.contractAddress}</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-white text-ocean-deep hover:bg-white/90">
                    <Download className="mr-2 h-4 w-4" />
                    Download Certificate
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-[#00B4D8]/20">
                <h3 className="text-lg font-semibold text-ocean-deep mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-ocean-medium mb-1">Total Credits</div>
                    <div className="text-2xl font-bold text-[#00C9A7]">{project.credits.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-ocean-medium mb-1">Trust Score</div>
                    <div className="text-2xl font-bold text-[#00B4D8]">{project.trustScore}%</div>
                  </div>
                  <div>
                    <div className="text-sm text-ocean-medium mb-1">Protected Area</div>
                    <div className="text-xl font-semibold text-ocean-deep">{project.area}</div>
                  </div>
                  <div>
                    <div className="text-sm text-ocean-medium mb-1">Start Date</div>
                    <div className="flex items-center gap-2 text-ocean-deep">
                      <Calendar className="h-4 w-4" />
                      <span>{project.startDate}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-ocean-medium mb-1">Community Partner</div>
                    <div className="flex items-center gap-2 text-ocean-deep">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{project.community}</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Actions */}
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-[#00B4D8]/20">
                <h3 className="text-lg font-semibold text-ocean-deep mb-4">Actions</h3>
                <div className="space-y-3">
                  <Link href="/marketplace">
                    <Button className="w-full aqua-gradient text-white hover:opacity-90">Purchase Credits</Button>
                  </Link>
                  <Link href="/blockchain">
                    <Button
                      variant="outline"
                      className="w-full border-[#00C9A7] text-ocean-deep hover:bg-[#00C9A7]/10 bg-transparent"
                    >
                      View on Blockchain
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Download className="mr-2 h-4 w-4" />
                    Export Report
                  </Button>
                </div>
              </Card>

              {/* SDG Impact */}
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-[#00B4D8]/20">
                <h3 className="text-lg font-semibold text-ocean-deep mb-4">SDG Impact</h3>
                <div className="space-y-3">
                  {[
                    { number: 13, name: "Climate Action" },
                    { number: 14, name: "Life Below Water" },
                    { number: 15, name: "Life on Land" },
                  ].map((sdg) => (
                    <div key={sdg.number} className="flex items-center gap-3 p-3 rounded-lg bg-[#E8F4F8]">
                      <div className="w-10 h-10 rounded-full bg-[#00C9A7] flex items-center justify-center text-white font-bold">
                        {sdg.number}
                      </div>
                      <span className="text-sm font-medium text-ocean-deep">{sdg.name}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
