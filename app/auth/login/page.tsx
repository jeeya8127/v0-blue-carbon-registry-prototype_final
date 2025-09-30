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
import { Waves, ArrowRight, Lock, Mail } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login
    setTimeout(() => {
      // For demo purposes, redirect to registry dashboard
      router.push("/registry")
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
              <h1 className="text-3xl font-bold text-ocean-deep mb-2">Welcome Back</h1>
              <p className="text-ocean-medium">Sign in to access your BlueCarbon account</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 border-[#00B4D8]/30 focus:border-[#00C9A7]"
                    required
                  />
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 border-[#00B4D8]/30 focus:border-[#00C9A7]"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-[#00B4D8]/30" />
                  <span className="text-ocean-medium">Remember me</span>
                </label>
                <Link href="/auth/forgot-password" className="text-[#00C9A7] hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full aqua-gradient text-white hover:opacity-90 group"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Signing in..."
                ) : (
                  <>
                    Sign In
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
                <span className="px-4 bg-white text-ocean-medium">New to BlueCarbon?</span>
              </div>
            </div>

            {/* Register Link */}
            <Link href="/auth/register">
              <Button
                variant="outline"
                className="w-full border-[#00C9A7] text-ocean-deep hover:bg-[#00C9A7]/10 bg-transparent"
              >
                Create an Account
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  )
}
