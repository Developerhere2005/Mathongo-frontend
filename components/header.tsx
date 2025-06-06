"use client"

import { ArrowLeft, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useAppSelector } from "@/lib/hooks"
import { useEffect, useState } from "react"

export function Header() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const selectedSubject = useAppSelector((state) => state.filters.selectedSubject)

  // Ensure component is mounted before rendering theme toggle
  useEffect(() => {
    setMounted(true)
  }, [])

  const subjectConfig = {
    Physics: { color: "bg-orange-500", icon: "⚛️" },
    Chemistry: { color: "bg-green-500", icon: "🧪" },
    Mathematics: { color: "bg-blue-500", icon: "📐" },
  }

  const config = subjectConfig[selectedSubject as keyof typeof subjectConfig]

  const toggleTheme = () => {
    const currentTheme = theme === "system" ? systemTheme : theme
    setTheme(currentTheme === "dark" ? "light" : "dark")
  }

  // Don't render theme toggle until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="flex items-center justify-between p-4 border-b bg-card">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <ArrowLeft className="w-5 h-5" />
          </Button>

          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded flex items-center justify-center text-white ${config?.color}`}>
              {config?.icon}
            </div>
            <div>
              <h1 className="font-semibold">{selectedSubject} PYQs</h1>
              <p className="text-sm text-muted-foreground hidden md:block">
                Chapter-wise Collection of {selectedSubject} PYQs
              </p>
            </div>
          </div>
        </div>
        <div className="w-10 h-10" /> {/* Placeholder for theme button */}
      </div>
    )
  }

  return (
    <div className="flex items-center justify-between p-4 border-b bg-card">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="md:hidden">
          <ArrowLeft className="w-5 h-5" />
        </Button>

        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded flex items-center justify-center text-white ${config?.color}`}>
            {config?.icon}
          </div>
          <div>
            <h1 className="font-semibold">{selectedSubject} PYQs</h1>
            <p className="text-sm text-muted-foreground hidden md:block">
              Chapter-wise Collection of {selectedSubject} PYQs
            </p>
          </div>
        </div>
      </div>

      <Button variant="ghost" size="icon" onClick={toggleTheme}>
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}
