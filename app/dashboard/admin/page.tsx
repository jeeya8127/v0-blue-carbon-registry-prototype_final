"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, FileCheck, AlertTriangle, TrendingUp, Download, Shield, Activity, DollarSign } from "lucide-react"

const adminStats = {
  totalUsers: "12,847",
  pendingVerifications: 23,
  activeProjects: "3,247",
  totalRevenue: "$2.4M",
  flaggedIssues: 5,
}

const pendingVerifications = [
  {
    id: 1,
    project: "Mangrove Restoration - Thailand",
    submitter: "Coastal Care NGO",
    type: "New Project",
    date: "2025-01-15",
    priority: "high",
  },
  {
    id: 2,
    project: "Seagrass Meadow - Malaysia",
    submitter: "Ocean Guardians",
    type: "MRV Report",
    date: "2025-01-14",
    priority: "medium",
  },
  {
    id: 3,
    project: "Wetland Conservation - Bangladesh",
    submitter: "Green Earth Foundation",
    type: "Credit Issuance",
    date: "2025-01-13",
    priority: "high",
  },
]

const recentActivity = [
  { action: "New user registered", user: "farmer_collective_42", time: "5 mins ago" },
  { action: "Project verified", user: "verifier_23", time: "12 mins ago" },
  { action: "Credits purchased", user: "ecotech_industries", time: "18 mins ago" },
  { action: "Report submitted", user: "green_ocean_ngo", time: "25 mins ago" },
]

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-ocean/5 to-aqua/5 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-balance">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2">System overview and management controls</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-ocean/20 hover:bg-ocean/10 bg-transparent">
              <Shield className="w-4 h-4 mr-2" />
              Security Logs
            </Button>
            <Button className="bg-gradient-to-r from-coral to-coral/80 hover:opacity-90">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card className="p-6 bg-gradient-to-br from-ocean/10 to-aqua/10 border-ocean/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Users</p>
                <p className="text-3xl font-bold mt-1">{adminStats.totalUsers}</p>
              </div>
              <Users className="w-10 h-10 text-ocean opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-coral/10 to-ocean/10 border-coral/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="text-3xl font-bold mt-1">{adminStats.pendingVerifications}</p>
              </div>
              <FileCheck className="w-10 h-10 text-coral opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-seagrass/10 to-ocean/10 border-seagrass/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Projects</p>
                <p className="text-3xl font-bold mt-1">{adminStats.activeProjects}</p>
              </div>
              <Activity className="w-10 h-10 text-seagrass opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-aqua/10 to-seagrass/10 border-aqua/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
                <p className="text-3xl font-bold mt-1">{adminStats.totalRevenue}</p>
              </div>
              <DollarSign className="w-10 h-10 text-aqua opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-coral/20 to-coral/10 border-coral/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Flagged Issues</p>
                <p className="text-3xl font-bold mt-1">{adminStats.flaggedIssues}</p>
              </div>
              <AlertTriangle className="w-10 h-10 text-coral opacity-50" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pending Verifications */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-ocean/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Pending Verifications</h2>
              <Badge variant="outline" className="bg-coral/10 text-coral border-coral/20">
                {adminStats.pendingVerifications} pending
              </Badge>
            </div>

            <div className="space-y-4">
              {pendingVerifications.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-lg bg-background/50 border border-border/50 hover:border-ocean/40 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold">{item.project}</h3>
                      <p className="text-sm text-muted-foreground mt-1">by {item.submitter}</p>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        item.priority === "high"
                          ? "bg-coral/10 text-coral border-coral/20"
                          : "bg-aqua/10 text-aqua border-aqua/20"
                      }
                    >
                      {item.priority}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{item.type}</Badge>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-coral/20 hover:bg-coral/10 bg-transparent">
                        Reject
                      </Button>
                      <Button size="sm" className="bg-seagrass hover:bg-seagrass/90">
                        Approve
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button className="w-full mt-4 bg-gradient-to-r from-ocean to-aqua hover:opacity-90">
              View All Pending
            </Button>
          </Card>

          {/* Recent Activity */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-ocean/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Recent Activity</h2>
              <Activity className="w-5 h-5 text-muted-foreground" />
            </div>

            <div className="space-y-4">
              {recentActivity.map((activity, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/50"
                >
                  <div className="w-2 h-2 bg-seagrass rounded-full mt-2" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {activity.user} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full mt-4 border-ocean/20 hover:bg-ocean/10 bg-transparent">
              View Activity Log
            </Button>
          </Card>
        </div>

        {/* User Management */}
        <Card className="p-6 bg-card/50 backdrop-blur-sm border-ocean/20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">User Management</h2>
            <Button variant="outline" className="border-ocean/20 hover:bg-ocean/10 bg-transparent">
              <Users className="w-4 h-4 mr-2" />
              Manage Users
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-background/50 border border-border/50">
              <p className="text-sm text-muted-foreground">NGOs</p>
              <p className="text-2xl font-bold mt-1">1,247</p>
              <div className="flex items-center gap-1 text-seagrass text-sm mt-1">
                <TrendingUp className="w-3 h-3" />
                <span>+12%</span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-background/50 border border-border/50">
              <p className="text-sm text-muted-foreground">Companies</p>
              <p className="text-2xl font-bold mt-1">3,892</p>
              <div className="flex items-center gap-1 text-seagrass text-sm mt-1">
                <TrendingUp className="w-3 h-3" />
                <span>+18%</span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-background/50 border border-border/50">
              <p className="text-sm text-muted-foreground">Farmers</p>
              <p className="text-2xl font-bold mt-1">6,450</p>
              <div className="flex items-center gap-1 text-seagrass text-sm mt-1">
                <TrendingUp className="w-3 h-3" />
                <span>+24%</span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-background/50 border border-border/50">
              <p className="text-sm text-muted-foreground">Government</p>
              <p className="text-2xl font-bold mt-1">258</p>
              <div className="flex items-center gap-1 text-seagrass text-sm mt-1">
                <TrendingUp className="w-3 h-3" />
                <span>+8%</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
