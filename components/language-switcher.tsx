"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "hi", name: "हिन्दी (Hindi)", flag: "🇮🇳" },
  { code: "vi", name: "Tiếng Việt (Vietnamese)", flag: "🇻🇳" },
  { code: "id", name: "Bahasa Indonesia", flag: "🇮🇩" },
  { code: "tl", name: "Tagalog", flag: "🇵🇭" },
  { code: "es", name: "Español (Spanish)", flag: "🇪🇸" },
]

export function LanguageSwitcher() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="border-ocean/20 hover:bg-ocean/10 bg-transparent">
          <Globe className="w-4 h-4 mr-2" />
          <span className="mr-1">{selectedLanguage.flag}</span>
          {selectedLanguage.code.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setSelectedLanguage(lang)}
            className={selectedLanguage.code === lang.code ? "bg-ocean/10" : ""}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
