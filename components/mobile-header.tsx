"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileHeader() {
  const handleBackClick = () => {
    // In a real app, this would navigate back
    console.log("Navigate back")
  }

  return (
    <div className="flex items-center justify-center p-4 border-b bg-card relative md:hidden">
      <Button variant="ghost" size="icon" className="absolute left-4" onClick={handleBackClick}>
        <ArrowLeft className="w-5 h-5" />
      </Button>
      <h1 className="font-semibold text-lg">JEE Main</h1>
    </div>
  )
}
