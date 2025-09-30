"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { OceanBackground } from "@/components/ocean-background"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Waves, Shield, TrendingUp, Users, Globe, Leaf, ArrowRight, CheckCircle2, Sparkles } from "lucide-react"

export default function LandingPage() {
  const [isAnimating, setIsAnimating] = useState(true)
  const [email, setEmail] = useState("")
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setNewsletterSubmitted(true)
    setTimeout(() => {
      setNewsletterSubmitted(false)
      setEmail("")
    }, 3000)
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <OceanBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            {/* Animated Welcome */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00C9A7]/10 border border-[#00C9A7]/20">
              <Sparkles className="h-4 w-4 text-[#00C9A7]" />
              <span className="text-sm font-medium text-ocean-deep">
                Revolutionary Blockchain-Based Blue Carbon Registry
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-ocean-deep leading-tight text-balance">
              Dive Into an Ocean of <span className="gradient-text">Trust & Transparency</span>
            </h1>

            <p className="text-lg md:text-xl text-ocean-medium max-w-3xl mx-auto leading-relaxed text-pretty">
              The world's first blockchain-powered Blue Carbon Registry & MRV system. Verify, trade, and track carbon
              credits with unprecedented transparency and trust.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/auth/register">
                <Button size="lg" className="aqua-gradient text-white hover:opacity-90 glow-effect group">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/registry">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#00C9A7] text-ocean-deep hover:bg-[#00C9A7]/10 bg-transparent"
                >
                  Explore Registry
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-ocean-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#27AE60]" />
                <span>Blockchain Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#27AE60]" />
                <span>AI-Powered MRV</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#27AE60]" />
                <span>Global Standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-4">Why Choose BlueCarbon?</h2>
            <p className="text-lg text-ocean-medium max-w-2xl mx-auto">
              Built for transparency, designed for impact, powered by innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Blockchain Trust",
                description: "Immutable records and transparent verification on the blockchain",
                color: "#00C9A7",
              },
              {
                icon: TrendingUp,
                title: "AI-Powered MRV",
                description: "Satellite imagery and AI for accurate carbon sequestration monitoring",
                color: "#00B4D8",
              },
              {
                icon: Globe,
                title: "Global Marketplace",
                description: "Trade verified carbon credits with buyers worldwide",
                color: "#27AE60",
              },
              {
                icon: Users,
                title: "Community First",
                description: "Empower local communities with gamified rewards and recognition",
                color: "#FF6B35",
              },
              {
                icon: Leaf,
                title: "Real Impact",
                description: "Track your contribution to ocean conservation and climate action",
                color: "#00C9A7",
              },
              {
                icon: Waves,
                title: "Blue Carbon Focus",
                description: "Specialized in mangroves, seagrass, and coastal ecosystem restoration",
                color: "#00B4D8",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-[#00B4D8]/20 bg-white/80 backdrop-blur-sm"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon className="h-6 w-6" style={{ color: feature.color }} />
                </div>
                <h3 className="text-xl font-semibold text-ocean-deep mb-2">{feature.title}</h3>
                <p className="text-ocean-medium leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Role Selection Preview */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-[#E8F4F8]/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-4">Choose Your Role</h2>
            <p className="text-lg text-ocean-medium max-w-2xl mx-auto">
              Join as a buyer, verifier, community member, or admin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { role: "Buyer", desc: "Purchase verified carbon credits", link: "/marketplace" },
              { role: "Verifier", desc: "Validate and certify projects", link: "/mrv" },
              { role: "Community", desc: "Contribute and earn rewards", link: "/community" },
              { role: "Admin", desc: "Manage and oversee registry", link: "/admin" },
              { role: "Policy Maker", desc: "Access data and analytics", link: "/policy" },
              { role: "Researcher", desc: "Explore carbon data insights", link: "/registry" },
            ].map((item, index) => (
              <Link key={index} href={item.link}>
                <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-[#00B4D8]/20 bg-white cursor-pointer group">
                  <h3 className="text-xl font-semibold text-ocean-deep mb-2 group-hover:text-[#00C9A7] transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-ocean-medium mb-4">{item.desc}</p>
                  <div className="flex items-center text-[#00C9A7] text-sm font-medium">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2.5M", label: "Tons CO₂ Offset", color: "#00C9A7" },
              { value: "150K", label: "Mangroves Planted", color: "#27AE60" },
              { value: "500+", label: "Verified Projects", color: "#00B4D8" },
              { value: "50+", label: "Communities Supported", color: "#FF6B35" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-ocean/10 to-aqua/10">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-ocean/20">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Stay Updated</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get the latest updates on blue carbon projects, carbon credit markets, and ocean conservation efforts.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded-lg border border-ocean/20 bg-background focus:outline-none focus:ring-2 focus:ring-aqua"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-aqua to-ocean hover:opacity-90"
                  disabled={newsletterSubmitted}
                >
                  {newsletterSubmitted ? "Subscribed!" : "Subscribe"}
                </Button>
              </form>
              {newsletterSubmitted && (
                <p className="text-sm text-seagrass flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Thank you for subscribing!
                </p>
              )}
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? Want to partner with us? We'd love to hear from you.
            </p>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-ocean/20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-ocean/20 bg-background focus:outline-none focus:ring-2 focus:ring-aqua"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-ocean/20 bg-background focus:outline-none focus:ring-2 focus:ring-aqua"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-lg border border-ocean/20 bg-background focus:outline-none focus:ring-2 focus:ring-aqua"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us more..."
                  className="w-full px-4 py-3 rounded-lg border border-ocean/20 bg-background focus:outline-none focus:ring-2 focus:ring-aqua resize-none"
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-aqua to-ocean hover:opacity-90">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-ocean/20 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Waves className="h-6 w-6 text-aqua" />
              <span className="text-lg font-bold">
                Blue<span className="bg-gradient-to-r from-aqua to-ocean bg-clip-text text-transparent">Carbon</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 BlueCarbon Registry. Protecting our oceans, one credit at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
