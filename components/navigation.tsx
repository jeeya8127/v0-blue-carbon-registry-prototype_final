"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, Waves, User } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-ocean/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Waves className="h-8 w-8 text-aqua" />
              <div className="absolute inset-0 bg-aqua blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
            </div>
            <span className="text-xl font-bold">
              Blue<span className="bg-gradient-to-r from-aqua to-ocean bg-clip-text text-transparent">Carbon</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/registry" className="text-sm font-medium hover:text-aqua transition-colors">
              Registry
            </Link>
            <Link href="/marketplace" className="text-sm font-medium hover:text-aqua transition-colors">
              Marketplace
            </Link>
            <Link href="/mrv" className="text-sm font-medium hover:text-aqua transition-colors">
              MRV
            </Link>
            <Link href="/blockchain" className="text-sm font-medium hover:text-aqua transition-colors">
              Blockchain
            </Link>
            <Link href="/community" className="text-sm font-medium hover:text-aqua transition-colors">
              Community
            </Link>
            <Link href="/impact" className="text-sm font-medium hover:text-aqua transition-colors">
              Impact
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/auth/login">Sign In</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/auth/register">Register</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/ngo">NGO Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/company">Company Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/farmer">Farmer Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/government">Government Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/admin">Admin Dashboard</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-ocean/20">
            <div className="flex flex-col gap-3">
              <Link href="/registry" className="text-sm font-medium hover:text-aqua transition-colors py-2">
                Registry
              </Link>
              <Link href="/marketplace" className="text-sm font-medium hover:text-aqua transition-colors py-2">
                Marketplace
              </Link>
              <Link href="/mrv" className="text-sm font-medium hover:text-aqua transition-colors py-2">
                MRV
              </Link>
              <Link href="/blockchain" className="text-sm font-medium hover:text-aqua transition-colors py-2">
                Blockchain
              </Link>
              <Link href="/community" className="text-sm font-medium hover:text-aqua transition-colors py-2">
                Community
              </Link>
              <Link href="/impact" className="text-sm font-medium hover:text-aqua transition-colors py-2">
                Impact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
