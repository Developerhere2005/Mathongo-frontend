"use client"

import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAppDispatch } from "@/lib/hooks"
import { toggleSort } from "@/lib/store"
import type { Chapter } from "@/lib/chapters-data"
import { ChapterItem } from "./chapter-item"
import { SearchBar } from "./search-bar"
import { LoadingSpinner } from "./loading-spinner"
import { useState } from "react"
import { useFilteredChapters } from "@/lib/hooks"

interface ChapterListProps {
  chapters: Chapter[]
  loading?: boolean
}

export function ChapterList({ chapters, loading = false }: ChapterListProps) {
  const dispatch = useAppDispatch()
  const [searchQuery, setSearchQuery] = useState("")
  const filteredChapters = useFilteredChapters(chapters, searchQuery)

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* BONUS: Search functionality */}
      <SearchBar onSearch={setSearchQuery} />

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {searchQuery ? "search results" : "all chapters"} ({filteredChapters.length})
        </p>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => dispatch(toggleSort())}
          className="text-blue-500 hover:text-blue-600"
        >
          <ArrowUpDown className="mr-2 h-4 w-4" />
          Sort
        </Button>
      </div>

      <div className="space-y-3">
        {filteredChapters.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {searchQuery ? `No chapters found for "${searchQuery}"` : "No chapters match the selected filters"}
            </p>
          </div>
        ) : (
          filteredChapters.map((chapter) => (
            <ChapterItem key={`${chapter.subject}-${chapter.chapter}`} chapter={chapter} />
          ))
        )}
      </div>
    </div>
  )
}
