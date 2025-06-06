"use client"

import { Header } from "@/components/header"
import { MobileHeader } from "@/components/mobile-header"
import { Sidebar } from "@/components/sidebar"
import { SubjectTabs } from "@/components/subject-tabs"
import { Filters } from "@/components/filters"
import { ChapterList } from "@/components/chapter-list"
import { ErrorBoundary } from "@/components/error-boundary"
import { chaptersData } from "@/lib/chapters-data"

export default function Home() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background text-foreground">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <MobileHeader />
          <div className="p-4">
            <SubjectTabs />
            <Filters chapters={chaptersData} />
            <ChapterList chapters={chaptersData} />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex min-h-screen">
          <Sidebar />
          <div className="flex-1">
            <Header />
            <div className="p-6">
              <Filters chapters={chaptersData} />
              <ChapterList chapters={chaptersData} />
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}
