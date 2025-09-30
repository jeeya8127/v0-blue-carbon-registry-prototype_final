"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { OceanBackground } from "@/components/ocean-background"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Satellite, TrendingUp, ArrowRight, ArrowLeft } from "lucide-react"

const onboardingSteps = [
  {
    icon: Shield,
    title: "Blockchain for Transparency",
    description:
      "Every carbon credit is recorded on an immutable blockchain, ensuring complete transparency and trust. Track the entire lifecycle from creation to retirement.",
    animation: "blockchain",
  },
  {
    icon: Satellite,
    title: "MRV for Trust",
    description:
      "Our AI-powered Monitoring, Reporting, and Verification system uses satellite imagery and drone data to accurately measure carbon sequestration in real-time.",
    animation: "satellite",
  },
  {
    icon: TrendingUp,
    title: "Your Impact on Oceans",
    description:
      "Watch your contribution grow as you support mangrove restoration, seagrass conservation, and coastal protection. Every credit makes a real difference.",
    animation: "impact",
  },
]

export default function OnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Complete onboarding and redirect to registry
      router.push("/registry")
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSkip = () => {
    router.push("/registry")
  }

  const step = onboardingSteps[currentStep]
  const StepIcon = step.icon

  return (
    <div className="min-h-screen flex items-center justify-center">
      <OceanBackground />

      <div className="container mx-auto max-w-2xl px-4">
        <Card className="p-8 md:p-12 bg-white/90 backdrop-blur-sm border-[#00B4D8]/20 shadow-xl">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {onboardingSteps.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentStep ? "w-8 bg-[#00C9A7]" : "w-2 bg-[#00B4D8]/30"
                }`}
              />
            ))}
          </div>

          {/* Content */}
          <div className="text-center space-y-6 mb-8">
            {/* Animated Icon */}
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#00C9A7]/20 to-[#00B4D8]/20 mb-4">
              <StepIcon className="h-12 w-12 text-[#00C9A7]" />
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-ocean-deep">{step.title}</h2>

            {/* Description */}
            <p className="text-lg text-ocean-medium leading-relaxed max-w-xl mx-auto">{step.description}</p>

            {/* Visual Animation Placeholder */}
            <div className="py-8">
              {step.animation === "blockchain" && (
                <div className="flex items-center justify-center gap-4">
                  {[1, 2, 3, 4].map((block) => (
                    <div
                      key={block}
                      className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#00C9A7] to-[#00B4D8] flex items-center justify-center text-white font-bold animate-pulse"
                      style={{ animationDelay: `${block * 0.2}s` }}
                    >
                      {block}
                    </div>
                  ))}
                </div>
              )}

              {step.animation === "satellite" && (
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 rounded-full border-4 border-[#00C9A7]/30 animate-ping" />
                  <div className="absolute inset-4 rounded-full border-4 border-[#00B4D8]/30 animate-ping animation-delay-200" />
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#00C9A7] to-[#00B4D8] flex items-center justify-center">
                    <Satellite className="h-12 w-12 text-white" />
                  </div>
                </div>
              )}

              {step.animation === "impact" && (
                <div className="flex items-center justify-center gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#00C9A7] mb-2">250+</div>
                    <div className="text-sm text-ocean-medium">Mangroves</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#00B4D8] mb-2">2.5T</div>
                    <div className="text-sm text-ocean-medium">CO₂ Offset</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#27AE60] mb-2">5</div>
                    <div className="text-sm text-ocean-medium">Communities</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-4">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentStep === 0}
              className="text-ocean-medium hover:text-ocean-deep"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back
            </Button>

            <Button variant="ghost" onClick={handleSkip} className="text-ocean-medium hover:text-ocean-deep">
              Skip Tutorial
            </Button>

            <Button onClick={handleNext} className="aqua-gradient text-white hover:opacity-90 group">
              {currentStep === onboardingSteps.length - 1 ? "Get Started" : "Next"}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
