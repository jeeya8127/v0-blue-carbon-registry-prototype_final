"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { OceanBackground } from "@/components/ocean-background"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Waves, ArrowRight, User, Mail, Lock, Briefcase } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate registration and redirect to onboarding
    setTimeout(() => {
      router.push("/auth/onboarding")
    }, 1500)
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <OceanBackground />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-md">
          <Card className="p-8 bg-white/90 backdrop-blur-sm border-[#00B4D8]/20 shadow-xl">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00C9A7]/10 mb-4">
                <Waves className="h-8 w-8 text-[#00C9A7]" />
              </div>
              <h1 className="text-3xl font-bold text-ocean-deep mb-2">Join BlueCarbon</h1>
              <p className="text-ocean-medium">Create your account and start making an impact</p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleRegister} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-ocean-deep font-medium">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ocean-medium" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-10 border-[#00B4D8]/30 focus:border-[#00C9A7]"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-ocean-deep font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ocean-medium" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10 border-[#00B4D8]/30 focus:border-[#00C9A7]"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role" className="text-ocean-deep font-medium">
                  Select Your Role
                </Label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ocean-medium z-10" />
                  <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
                    <SelectTrigger className="pl-10 border-[#00B4D8]/30 focus:border-[#00C9A7]">
                      <SelectValue placeholder="Choose your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buyer">Buyer - Purchase carbon credits</SelectItem>
                      <SelectItem value="verifier">Verifier - Validate projects</SelectItem>
                      <SelectItem value="community">Community Member - Contribute locally</SelectItem>
                      <SelectItem value="admin">Admin - Manage registry</SelectItem>
                      <SelectItem value="policy">Policy Maker - Access analytics</SelectItem>
                      <SelectItem value="researcher">Researcher - Explore data</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-ocean-deep font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ocean-medium" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="pl-10 border-[#00B4D8]/30 focus:border-[#00C9A7]"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-ocean-deep font-medium">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ocean-medium" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="pl-10 border-[#00B4D8]/30 focus:border-[#00C9A7]"
                    required
                  />
                </div>
              </div>

              <div className="flex items-start gap-2 text-sm">
                <input type="checkbox" className="mt-1 rounded border-[#00B4D8]/30" required />
                <span className="text-ocean-medium">
                  I agree to the{" "}
                  <Link href="/terms" className="text-[#00C9A7] hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-[#00C9A7] hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </div>

              <Button
                type="submit"
                className="w-full aqua-gradient text-white hover:opacity-90 group"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Creating Account..."
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#00B4D8]/20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-ocean-medium">Already have an account?</span>
              </div>
            </div>

            {/* Login Link */}
            <Link href="/auth/login">
              <Button
                variant="outline"
                className="w-full border-[#00C9A7] text-ocean-deep hover:bg-[#00C9A7]/10 bg-transparent"
              >
                Sign In Instead
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  )
}
