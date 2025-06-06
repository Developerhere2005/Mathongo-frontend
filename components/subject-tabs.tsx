"use client"

import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { setSelectedSubject } from "@/lib/store"
import { cn } from "@/lib/utils"

const subjects = [
  { id: "Physics", label: "Phy", color: "bg-orange-500", icon: "⚛️" },
  { id: "Chemistry", label: "Chem", color: "bg-green-500", icon: "🧪" },
  { id: "Mathematics", label: "Math", color: "bg-blue-500", icon: "📐" },
]

export function SubjectTabs() {
  const dispatch = useAppDispatch()
  const selectedSubject = useAppSelector((state) => state.filters.selectedSubject)

  return (
    <div className="flex gap-4 mb-6">
      {subjects.map((subject) => (
        <button
          key={subject.id}
          onClick={() => dispatch(setSelectedSubject(subject.id))}
          className={cn(
            "flex flex-col items-center gap-2 p-3 rounded-lg transition-colors",
            selectedSubject === subject.id ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground",
          )}
        >
          <div
            className={cn("w-8 h-8 rounded-full flex items-center justify-center text-white text-sm", subject.color)}
          >
            {subject.icon}
          </div>
          <span className="text-sm font-medium">{subject.label}</span>
        </button>
      ))}
    </div>
  )
}
