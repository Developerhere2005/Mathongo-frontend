# MathonGo - JEE Main Chapter-wise PYQs

A modern, responsive web application for browsing JEE Main Previous Year Questions (PYQs) organized by subjects and chapters. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

- **Live Application**: [Deploy on Vercel](https://vercel.com)
- **GitHub Repository**: [View Source Code](https://github.com/Developerhere2005/Mathongo-frontend)

## 📋 Features

### Core Functionality
- **Subject Navigation**: Browse Physics, Chemistry, and Mathematics chapters
- **Advanced Filtering**: Multi-select filters for Class, Units, and Status
- **Smart Toggles**: Quick filters for "Not Started" and "Weak Chapters"
- **Dynamic Sorting**: Ascending/descending chapter sorting
- **Search Functionality**: Real-time chapter search
- **Progress Tracking**: Visual indicators for chapter completion status

### User Experience
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Dark/Light Mode**: System preference with manual toggle
- **Filter Persistence**: Saves user preferences across sessions
- **Loading States**: Smooth loading indicators
- **Error Handling**: Robust error boundaries

### Technical Features
- **State Management**: Redux Toolkit for efficient state handling
- **Performance**: Memoized selectors and optimized rendering
- **Accessibility**: ARIA labels and keyboard navigation
- **Type Safety**: Full TypeScript implementation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: Redux Toolkit
- **Icons**: Lucide React
- **Theme**: next-themes

## 📱 Screenshots

### Desktop View
- Clean sidebar navigation
- Comprehensive filtering options
- Chapter list with progress indicators

### Mobile View
- Touch-friendly interface
- Collapsible filters
- Optimized for small screens

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/mathongo-frontend.git
   cd mathongo-frontend
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📊 Data Structure

The application uses a comprehensive JSON dataset with the following structure:

\`\`\`typescript
interface Chapter {
  subject: "Physics" | "Chemistry" | "Mathematics"
  chapter: string
  class: "Class 11" | "Class 12"
  unit: string
  yearWiseQuestionCount: {
    [year: string]: number
  }
  questionSolved: number
  status: "Not Started" | "In Progress" | "Completed"
  isWeakChapter: boolean
}
\`\`\`

## 🎯 Key Features Breakdown

### Filtering System
- **Multi-select Dropdowns**: Class and Units filters with checkboxes
- **Status Filter**: Filter by completion status
- **Toggle Filters**: Quick access to "Not Started" and "Weak Chapters"
- **Combined Filtering**: Multiple filters work simultaneously

### Progress Indicators
- **Question Counts**: Shows solved vs total questions
- **Year-wise Stats**: 2024 vs 2025 question trends
- **Visual Indicators**: Green/red arrows for increasing/decreasing trends

### Responsive Design
- **Mobile-first**: Optimized for touch devices
- **Adaptive Layout**: Different layouts for mobile and desktop
- **Touch Targets**: Properly sized for mobile interaction

## 🔧 Development

### Project Structure
\`\`\`
├── app/                    # Next.js app directory
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   └── ...                # Custom components
├── lib/                   # Utilities and data
├── public/                # Static assets
└── ...
\`\`\`

### Key Components
- **ChapterList**: Main list component with filtering
- **Filters**: Advanced filtering interface
- **SubjectTabs**: Subject navigation
- **ThemeProvider**: Dark/light mode handling

## 🎨 Design System

### Colors
- **Physics**: Orange theme (#f97316)
- **Chemistry**: Green theme (#22c55e) 
- **Mathematics**: Blue theme (#3b82f6)

### Typography
- **Font**: Inter (Google Fonts)
- **Responsive**: Scales appropriately across devices

## 📈 Performance

- **Memoized Selectors**: Optimized Redux state calculations
- **Lazy Loading**: Components loaded on demand
- **Efficient Filtering**: Optimized filter algorithms
- **Local Storage**: Persistent user preferences

## 🧪 Testing

The application includes:
- **Error Boundaries**: Graceful error handling
- **Loading States**: User feedback during operations
- **Edge Cases**: Handles empty states and filter combinations

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings (auto-detected)
3. Deploy with zero configuration

### Manual Deployment
\`\`\`bash
npm run build
npm run start
\`\`\`

## 📝 Assignment Requirements

This project fulfills all requirements for the MathonGo Frontend Developer sample task:

✅ **Tech Stack**: Next.js, Tailwind CSS, Redux, shadcn/ui  
✅ **Features**: All filtering, sorting, and display requirements  
✅ **Responsive**: Mobile and desktop layouts  
✅ **Dark Mode**: System preference with manual toggle  
✅ **Data Integration**: Complete JSON data integration  
✅ **Bonus**: Search functionality and enhanced UX  



