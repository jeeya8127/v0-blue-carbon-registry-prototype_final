"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Sparkles } from "lucide-react"

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm your BlueCarbon AI assistant. I can help you with carbon credits, project verification, and CO₂ reduction methods. How can I assist you today?",
    },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Based on your project location, I recommend mangrove restoration which can sequester up to 375 tCO₂e per hectare annually.",
        "To verify your project, you'll need to upload drone imagery, field reports, and satellite data through the MRV workspace.",
        "Carbon credits are typically priced between $10-15 per tCO₂e depending on project type and trust score.",
        "For farmers, alternative methods include seagrass restoration (280 tCO₂e/hectare/year) and wetland conservation (420 tCO₂e/hectare/year).",
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      setMessages((prev) => [...prev, { role: "assistant", content: randomResponse }])
    }, 1000)

    setInput("")
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-ocean to-aqua hover:opacity-90 shadow-lg z-50"
          size="icon"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] flex flex-col bg-card/95 backdrop-blur-sm border-ocean/20 shadow-2xl z-50">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-ocean/10 to-aqua/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-ocean to-aqua flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">BlueCarbon AI</h3>
                <p className="text-xs text-muted-foreground">Always here to help</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, idx) => (
              <div key={idx} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-ocean to-aqua text-white"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="bg-background/50"
              />
              <Button onClick={handleSend} className="bg-gradient-to-r from-ocean to-aqua hover:opacity-90">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}
