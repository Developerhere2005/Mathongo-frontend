import { configureStore, createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface FilterState {
  selectedSubject: string
  selectedClasses: string[]
  selectedUnits: string[]
  selectedStatus: string[]
  showNotStarted: boolean
  showWeakChapters: boolean
  sortAscending: boolean
}

const initialState: FilterState = {
  selectedSubject: "Physics",
  selectedClasses: [],
  selectedUnits: [],
  selectedStatus: [],
  showNotStarted: false,
  showWeakChapters: false,
  sortAscending: true,
}

// IMPROVEMENT: Load state from localStorage
const loadStateFromStorage = (): FilterState => {
  if (typeof window !== "undefined") {
    try {
      const savedState = localStorage.getItem("mathongo-filters")
      if (savedState) {
        return { ...initialState, ...JSON.parse(savedState) }
      }
    } catch (error) {
      console.error("Error loading state from localStorage:", error)
    }
  }
  return initialState
}

// IMPROVEMENT: Save state to localStorage
const saveStateToStorage = (state: FilterState) => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("mathongo-filters", JSON.stringify(state))
    } catch (error) {
      console.error("Error saving state to localStorage:", error)
    }
  }
}

const filterSlice = createSlice({
  name: "filters",
  initialState: loadStateFromStorage(),
  reducers: {
    setSelectedSubject: (state, action: PayloadAction<string>) => {
      state.selectedSubject = action.payload
      state.selectedClasses = []
      state.selectedUnits = []
      state.selectedStatus = []
      saveStateToStorage(state)
    },
    setSelectedClasses: (state, action: PayloadAction<string[]>) => {
      state.selectedClasses = action.payload
      saveStateToStorage(state)
    },
    setSelectedUnits: (state, action: PayloadAction<string[]>) => {
      state.selectedUnits = action.payload
      saveStateToStorage(state)
    },
    setSelectedStatus: (state, action: PayloadAction<string[]>) => {
      state.selectedStatus = action.payload
      saveStateToStorage(state)
    },
    toggleNotStarted: (state) => {
      state.showNotStarted = !state.showNotStarted
      saveStateToStorage(state)
    },
    toggleWeakChapters: (state) => {
      state.showWeakChapters = !state.showWeakChapters
      saveStateToStorage(state)
    },
    toggleSort: (state) => {
      state.sortAscending = !state.sortAscending
      saveStateToStorage(state)
    },
  },
})

export const {
  setSelectedSubject,
  setSelectedClasses,
  setSelectedUnits,
  setSelectedStatus,
  toggleNotStarted,
  toggleWeakChapters,
  toggleSort,
} = filterSlice.actions

export const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
