"use client"

import { ChevronRight } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { setSelectedSubject } from "@/lib/store"
import { cn } from "@/lib/utils"

const subjects = [
  { id: "Physics", label: "Physics PYQs", color: "bg-orange-500", icon: "⚛️" },
  { id: "Chemistry", label: "Chemistry PYQs", color: "bg-green-500", icon: "🧪" },
  { id: "Mathematics", label: "Mathematics PYQs", color: "bg-blue-500", icon: "📐" },
]

export function Sidebar() {
  const dispatch = useAppDispatch()
  const selectedSubject = useAppSelector((state) => state.filters.selectedSubject)

  return (
    <div className="w-80 bg-card border-r p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded"></div>
          <h1 className="text-lg font-semibold">JEE Main</h1>
        </div>
        <p className="text-sm text-muted-foreground">2025 - 2009 | 173 Papers | 15825 Qs</p>
      </div>

      {/* Subject Navigation */}
      <div className="space-y-2">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            onClick={() => dispatch(setSelectedSubject(subject.id))}
            className={cn(
              "w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors",
              selectedSubject === subject.id ? "bg-accent text-accent-foreground" : "hover:bg-accent/50",
            )}
          >
            <div className={cn("w-6 h-6 rounded flex items-center justify-center text-white text-sm", subject.color)}>
              {subject.icon}
            </div>
            <span className="flex-1 font-medium">{subject.label}</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
        ))}
      </div>
    </div>
  )
}
