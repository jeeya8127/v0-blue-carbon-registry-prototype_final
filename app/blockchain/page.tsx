"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Download, ExternalLink, Shield, Clock, CheckCircle2, Blocks, FileText } from "lucide-react"

const mockBlocks = [
  {
    id: 1,
    hash: "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385",
    timestamp: "2025-01-15 14:32:18",
    transactions: 12,
    validator: "Validator Node #42",
    gasUsed: "2,847,392",
    size: "24.5 KB",
  },
  {
    id: 2,
    hash: "0x6e8ebcd9b1f48c6da5f77ab3dbc8ebcd9b1f48c6da5f77ab3dbc1d1da6a00274",
    timestamp: "2025-01-15 14:30:05",
    transactions: 8,
    validator: "Validator Node #17",
    gasUsed: "1,923,481",
    size: "18.2 KB",
  },
  {
    id: 3,
    hash: "0x5d7dcba8a0e37b5c94e66a92cab7dcba8a0e37b5c94e66a92cab0c0c95900163",
    timestamp: "2025-01-15 14:27:42",
    transactions: 15,
    validator: "Validator Node #8",
    gasUsed: "3,156,729",
    size: "29.8 KB",
  },
]

const mockTransactions = [
  {
    hash: "0xa1b2c3d4e5f6...",
    type: "Credit Issuance",
    from: "MRV System",
    to: "Mangrove Project #1247",
    amount: "5,000 tCO₂e",
    status: "confirmed",
    timestamp: "2 mins ago",
    blockNumber: 1,
  },
  {
    hash: "0xf6e5d4c3b2a1...",
    type: "Credit Transfer",
    from: "Company ABC Ltd",
    to: "Retirement Vault",
    amount: "1,200 tCO₂e",
    status: "confirmed",
    timestamp: "5 mins ago",
    blockNumber: 1,
  },
  {
    hash: "0x9876543210ab...",
    type: "Verification",
    from: "Verifier #23",
    to: "Seagrass Project #892",
    amount: "Trust Score: 94%",
    status: "confirmed",
    timestamp: "8 mins ago",
    blockNumber: 2,
  },
  {
    hash: "0xabcdef123456...",
    type: "Credit Purchase",
    from: "NGO Green Earth",
    to: "Coastal Restoration #445",
    amount: "3,500 tCO₂e",
    status: "pending",
    timestamp: "12 mins ago",
    blockNumber: 2,
  },
]

const mockCertificates = [
  {
    id: "CERT-2025-001247",
    projectName: "Mangrove Restoration - Indonesia",
    credits: "5,000 tCO₂e",
    issueDate: "2025-01-15",
    expiryDate: "2030-01-15",
    status: "active",
    blockHash: "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385",
    trustScore: 96,
  },
  {
    id: "CERT-2025-000892",
    projectName: "Seagrass Meadow Protection - Philippines",
    credits: "3,200 tCO₂e",
    issueDate: "2025-01-10",
    expiryDate: "2029-01-10",
    status: "active",
    blockHash: "0x6e8ebcd9b1f48c6da5f77ab3dbc8ebcd9b1f48c6da5f77ab3dbc1d1da6a00274",
    trustScore: 94,
  },
  {
    id: "CERT-2024-002156",
    projectName: "Coastal Wetland Conservation - Vietnam",
    credits: "7,800 tCO₂e",
    issueDate: "2024-12-20",
    expiryDate: "2029-12-20",
    status: "retired",
    blockHash: "0x5d7dcba8a0e37b5c94e66a92cab7dcba8a0e37b5c94e66a92cab0c0c95900163",
    trustScore: 98,
  },
]

export default function BlockchainExplorer() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState<"blocks" | "transactions" | "certificates">("blocks")

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-ocean/5 to-aqua/5 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-balance">Blockchain Explorer</h1>
            <p className="text-muted-foreground mt-2">Real-time transparency into every carbon credit transaction</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-seagrass/10 border border-seagrass/20 rounded-full">
              <div className="w-2 h-2 bg-seagrass rounded-full animate-pulse" />
              <span className="text-sm font-medium text-seagrass">Live Network</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <Card className="p-4 bg-card/50 backdrop-blur-sm border-ocean/20">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by transaction hash, block number, or certificate ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background/50"
              />
            </div>
            <Button className="bg-gradient-to-r from-aqua to-ocean hover:opacity-90">Search</Button>
          </div>
        </Card>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-6 bg-gradient-to-br from-ocean/10 to-aqua/10 border-ocean/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Blocks</p>
                <p className="text-3xl font-bold mt-1">12,847</p>
              </div>
              <Blocks className="w-10 h-10 text-ocean opacity-50" />
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-aqua/10 to-seagrass/10 border-aqua/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Transactions</p>
                <p className="text-3xl font-bold mt-1">156,392</p>
              </div>
              <FileText className="w-10 h-10 text-aqua opacity-50" />
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-seagrass/10 to-ocean/10 border-seagrass/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Certificates</p>
                <p className="text-3xl font-bold mt-1">3,247</p>
              </div>
              <Shield className="w-10 h-10 text-seagrass opacity-50" />
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-coral/10 to-ocean/10 border-coral/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Block Time</p>
                <p className="text-3xl font-bold mt-1">2.3s</p>
              </div>
              <Clock className="w-10 h-10 text-coral opacity-50" />
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-border">
          <button
            onClick={() => setActiveTab("blocks")}
            className={`px-6 py-3 font-medium transition-colors relative ${
              activeTab === "blocks" ? "text-ocean" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Blocks
            {activeTab === "blocks" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ocean to-aqua" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("transactions")}
            className={`px-6 py-3 font-medium transition-colors relative ${
              activeTab === "transactions" ? "text-ocean" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Transactions
            {activeTab === "transactions" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ocean to-aqua" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("certificates")}
            className={`px-6 py-3 font-medium transition-colors relative ${
              activeTab === "certificates" ? "text-ocean" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Certificates
            {activeTab === "certificates" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ocean to-aqua" />
            )}
          </button>
        </div>

        {/* Blocks Tab */}
        {activeTab === "blocks" && (
          <div className="space-y-4">
            {mockBlocks.map((block) => (
              <Card
                key={block.id}
                className="p-6 bg-card/50 backdrop-blur-sm border-ocean/20 hover:border-ocean/40 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="bg-ocean/10 text-ocean border-ocean/20">
                        Block #{block.id}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{block.timestamp}</span>
                    </div>
                    <div className="font-mono text-sm break-all text-muted-foreground">{block.hash}</div>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span>
                        <strong>{block.transactions}</strong> transactions
                      </span>
                      <span>
                        Validator: <strong>{block.validator}</strong>
                      </span>
                      <span>
                        Gas: <strong>{block.gasUsed}</strong>
                      </span>
                      <span>
                        Size: <strong>{block.size}</strong>
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" className="border-ocean/20 hover:bg-ocean/10 bg-transparent">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Transactions Tab */}
        {activeTab === "transactions" && (
          <div className="space-y-4">
            {mockTransactions.map((tx, idx) => (
              <Card
                key={idx}
                className="p-6 bg-card/50 backdrop-blur-sm border-ocean/20 hover:border-ocean/40 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge
                        variant="outline"
                        className={
                          tx.type === "Credit Issuance"
                            ? "bg-seagrass/10 text-seagrass border-seagrass/20"
                            : tx.type === "Credit Transfer"
                              ? "bg-aqua/10 text-aqua border-aqua/20"
                              : tx.type === "Verification"
                                ? "bg-ocean/10 text-ocean border-ocean/20"
                                : "bg-coral/10 text-coral border-coral/20"
                        }
                      >
                        {tx.type}
                      </Badge>
                      <Badge
                        variant={tx.status === "confirmed" ? "default" : "secondary"}
                        className={tx.status === "confirmed" ? "bg-seagrass/20 text-seagrass border-seagrass/30" : ""}
                      >
                        {tx.status === "confirmed" ? (
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                        ) : (
                          <Clock className="w-3 h-3 mr-1" />
                        )}
                        {tx.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{tx.timestamp}</span>
                    </div>
                    <div className="font-mono text-sm text-muted-foreground">Hash: {tx.hash}</div>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span>
                        From: <strong>{tx.from}</strong>
                      </span>
                      <span>
                        To: <strong>{tx.to}</strong>
                      </span>
                      <span className="text-ocean font-semibold">{tx.amount}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="border-ocean/20 hover:bg-ocean/10 bg-transparent">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Certificates Tab */}
        {activeTab === "certificates" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mockCertificates.map((cert) => (
              <Card
                key={cert.id}
                className="p-6 bg-card/50 backdrop-blur-sm border-ocean/20 hover:border-ocean/40 transition-all hover:shadow-lg hover:shadow-ocean/10"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{cert.projectName}</h3>
                      <p className="text-sm text-muted-foreground mt-1">Certificate ID: {cert.id}</p>
                    </div>
                    <Badge
                      variant={cert.status === "active" ? "default" : "secondary"}
                      className={
                        cert.status === "active" ? "bg-seagrass/20 text-seagrass border-seagrass/30" : "bg-muted"
                      }
                    >
                      {cert.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Carbon Credits</p>
                      <p className="font-semibold text-ocean">{cert.credits}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Trust Score</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-seagrass to-aqua rounded-full"
                            style={{ width: `${cert.trustScore}%` }}
                          />
                        </div>
                        <span className="font-semibold text-seagrass">{cert.trustScore}%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Issue Date</p>
                      <p className="font-medium">{cert.issueDate}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Expiry Date</p>
                      <p className="font-medium">{cert.expiryDate}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-2">Blockchain Hash</p>
                    <p className="font-mono text-xs break-all text-muted-foreground">{cert.blockHash}</p>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 border-ocean/20 hover:bg-ocean/10 bg-transparent">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                    <Button variant="outline" className="flex-1 border-ocean/20 hover:bg-ocean/10 bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Verify
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
