"use client"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import {
  setSelectedClasses,
  setSelectedUnits,
  setSelectedStatus,
  toggleNotStarted,
  toggleWeakChapters,
} from "@/lib/store"
import type { Chapter } from "@/lib/chapters-data"

interface FiltersProps {
  chapters: Chapter[]
}

export function Filters({ chapters }: FiltersProps) {
  const dispatch = useAppDispatch()
  const { selectedSubject, selectedClasses, selectedUnits, selectedStatus, showNotStarted, showWeakChapters } =
    useAppSelector((state) => state.filters)

  const subjectChapters = chapters.filter((chapter) => chapter.subject === selectedSubject)
  const uniqueClasses = Array.from(new Set(subjectChapters.map((chapter) => chapter.class)))
  const uniqueUnits = Array.from(new Set(subjectChapters.map((chapter) => chapter.unit)))
  const uniqueStatuses = Array.from(new Set(subjectChapters.map((chapter) => chapter.status)))

  const handleClassChange = (className: string, checked: boolean) => {
    if (checked) {
      dispatch(setSelectedClasses([...selectedClasses, className]))
    } else {
      dispatch(setSelectedClasses(selectedClasses.filter((c) => c !== className)))
    }
  }

  const handleUnitChange = (unitName: string, checked: boolean) => {
    if (checked) {
      dispatch(setSelectedUnits([...selectedUnits, unitName]))
    } else {
      dispatch(setSelectedUnits(selectedUnits.filter((u) => u !== unitName)))
    }
  }

  const handleStatusChange = (statusName: string, checked: boolean) => {
    if (checked) {
      dispatch(setSelectedStatus([...selectedStatus, statusName]))
    } else {
      dispatch(setSelectedStatus(selectedStatus.filter((s) => s !== statusName)))
    }
  }

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {/* Class Filter */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="h-9">
            Class
            {selectedClasses.length > 0 && (
              <span className="ml-1 bg-primary text-primary-foreground rounded-full px-1.5 py-0.5 text-xs">
                {selectedClasses.length}
              </span>
            )}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48 p-2">
          <div className="space-y-2">
            {uniqueClasses.map((className) => (
              <div key={className} className="flex items-center space-x-2">
                <Checkbox
                  id={className}
                  checked={selectedClasses.includes(className)}
                  onCheckedChange={(checked) => handleClassChange(className, checked as boolean)}
                />
                <label
                  htmlFor={className}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {className}
                </label>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>

      {/* Units Filter */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="h-9">
            Units
            {selectedUnits.length > 0 && (
              <span className="ml-1 bg-primary text-primary-foreground rounded-full px-1.5 py-0.5 text-xs">
                {selectedUnits.length}
              </span>
            )}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56 p-2">
          <div className="space-y-2">
            {uniqueUnits.map((unitName) => (
              <div key={unitName} className="flex items-center space-x-2">
                <Checkbox
                  id={unitName}
                  checked={selectedUnits.includes(unitName)}
                  onCheckedChange={(checked) => handleUnitChange(unitName, checked as boolean)}
                />
                <label
                  htmlFor={unitName}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {unitName}
                </label>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>

      {/* Status Filter */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="h-9">
            Status
            {selectedStatus.length > 0 && (
              <span className="ml-1 bg-primary text-primary-foreground rounded-full px-1.5 py-0.5 text-xs">
                {selectedStatus.length}
              </span>
            )}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48 p-2">
          <div className="space-y-2">
            {uniqueStatuses.map((statusName) => (
              <div key={statusName} className="flex items-center space-x-2">
                <Checkbox
                  id={statusName}
                  checked={selectedStatus.includes(statusName)}
                  onCheckedChange={(checked) => handleStatusChange(statusName, checked as boolean)}
                />
                <label
                  htmlFor={statusName}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {statusName}
                </label>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>

      {/* Not Started Filter */}
      <Button
        variant={showNotStarted ? "default" : "outline"}
        className="h-9"
        onClick={() => dispatch(toggleNotStarted())}
      >
        Not Started
      </Button>

      {/* Weak Chapters Filter */}
      <Button
        variant={showWeakChapters ? "default" : "outline"}
        className="h-9"
        onClick={() => dispatch(toggleWeakChapters())}
      >
        Weak Chapters
      </Button>
    </div>
  )
}
