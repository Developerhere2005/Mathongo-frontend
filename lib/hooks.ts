"use client"

import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux"
import type { RootState, AppDispatch } from "./store"
import { useMemo } from "react"

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// PERFORMANCE: Memoized selectors
export const useFilteredChapters = (chapters: any[], searchQuery = "") => {
  const filters = useAppSelector((state) => state.filters)

  return useMemo(() => {
    let filteredChapters = chapters.filter((chapter) => {
      // Subject filter
      if (chapter.subject !== filters.selectedSubject) return false

      // Search filter
      if (searchQuery && !chapter.chapter.toLowerCase().includes(searchQuery.toLowerCase())) return false

      // Class filter
      if (filters.selectedClasses.length > 0 && !filters.selectedClasses.includes(chapter.class)) return false

      // Units filter
      if (filters.selectedUnits.length > 0 && !filters.selectedUnits.includes(chapter.unit)) return false

      // Status filter
      if (filters.selectedStatus.length > 0 && !filters.selectedStatus.includes(chapter.status)) return false

      // Not Started filter
      if (filters.showNotStarted && chapter.status !== "Not Started") return false

      // Weak Chapters filter
      if (filters.showWeakChapters && !chapter.isWeakChapter) return false

      return true
    })

    // Sort chapters
    filteredChapters = filteredChapters.sort((a, b) => {
      const comparison = a.chapter.localeCompare(b.chapter)
      return filters.sortAscending ? comparison : -comparison
    })

    return filteredChapters
  }, [chapters, filters, searchQuery])
}
