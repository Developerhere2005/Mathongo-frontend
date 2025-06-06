"use client"

import {
  ArrowUp,
  ArrowDown,
  ActivityIcon as Function,
  Atom,
  Calculator,
  Beaker,
  Zap,
  Waves,
  Target,
  Orbit,
  ArrowRight,
  RotateCcw,
  Thermometer,
  Wind,
  Vibrate,
  Volume2,
  FlaskConical,
  Dna,
  Hexagon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { Chapter } from "@/lib/chapters-data"

interface ChapterItemProps {
  chapter: Chapter
}

// Enhanced icon mapping for different chapters
const getChapterIcon = (chapterName: string) => {
  const iconMap: Record<string, any> = {
    // Physics Icons
    "Mathematics in Physics": Function,
    "Units and Dimensions": Target,
    "Motion In One Dimension": ArrowRight,
    "Motion In Two Dimensions": RotateCcw,
    "Laws of Motion": Zap,
    "Work Power Energy": Zap,
    "Center of Mass Momentum and Collision": Target,
    "Rotational Motion": RotateCcw,
    Gravitation: Orbit,
    "Mechanical Properties of Solids": Target,
    "Mechanical Properties of Fluids": Waves,
    "Thermal Properties of Matter": Thermometer,
    Thermodynamics: Thermometer,
    "Kinetic Theory of Gases": Wind,
    Oscillations: Vibrate,
    "Waves and Sound": Volume2,

    // Chemistry Icons
    "Some Basic Concepts of Chemistry": Beaker,
    "Structure of Atom": Atom,
    "Classification of Elements and Periodicity": Hexagon,
    "Chemical Bonding and Molecular Structure": Dna,
    "States of Matter": FlaskConical,

    // Mathematics Icons
    "Basic of Mathematics": Calculator,
    "Quadratic Equation": Function,
    "Complex Number": Function,
    "Permutation Combination": Function,
    "Sequences and Series": Function,
    "Trigonometric Ratios & Identities": Function,
    "Straight Lines": Function,
    Circle: Function,
    Limits: Function,
  }

  return iconMap[chapterName] || Target
}

export function ChapterItem({ chapter }: ChapterItemProps) {
  const Icon = getChapterIcon(chapter.chapter)

  // Calculate total questions and progress - FIXED FORMAT
  const totalQuestions = Object.values(chapter.yearWiseQuestionCount).reduce((sum, count) => sum + count, 0)
  const currentYearQuestions = chapter.yearWiseQuestionCount["2025"] || 0
  const previousYearQuestions = chapter.yearWiseQuestionCount["2024"] || 0

  // Determine trend
  const trend =
    currentYearQuestions > previousYearQuestions
      ? "up"
      : currentYearQuestions < previousYearQuestions
        ? "down"
        : "neutral"

  // CRITICAL FIX: Format question count to match Figma exactly
  const formatQuestionCount = () => {
    return `${chapter.questionSolved}/${totalQuestions} Qs`
  }

  return (
    <div className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
      {/* Chapter Icon */}
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
          <Icon className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>

      {/* Chapter Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-foreground truncate">{chapter.chapter}</h3>
        <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
          <span>2025: {currentYearQuestions}Qs</span>
          {trend !== "neutral" && (
            <div className={cn("flex items-center gap-1", trend === "up" ? "text-green-500" : "text-red-500")}>
              {trend === "up" ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
            </div>
          )}
          <span>2024: {previousYearQuestions}Qs</span>
        </div>
      </div>

      {/* FIXED: Question Count Format */}
      <div className="flex-shrink-0 text-right">
        <div className="text-sm font-medium text-muted-foreground">{formatQuestionCount()}</div>
      </div>
    </div>
  )
}
