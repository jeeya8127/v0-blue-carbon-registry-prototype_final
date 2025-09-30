import type React from "react"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "next-themes"
import "./globals.css"
import { CursorTrail } from "@/components/cursor-trail"
import { AIChatbot } from "@/components/ai-chatbot"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata = {
  title: "BlueCarbon Registry - Blockchain-Based Blue Carbon MRV System",
  description:
    "Revolutionary blockchain-based Blue Carbon Registry & MRV system for transparent, verified carbon credit management.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CursorTrail />
          {children}
          <AIChatbot />
        </ThemeProvider>
      </body>
    </html>
  )
}
