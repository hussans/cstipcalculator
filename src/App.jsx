import React from 'react'
import TipCalculator from './components/TipCalculator'

function App() {
  return (
    <div className="min-h-screen bg-[hsl(185,41%,84%)] flex flex-col items-center justify-center p-4 gap-16">
      <img src="/logo.svg" alt="Splitter logo" className="mb-8 w-16" />
      <TipCalculator />
    </div>
  )
}

export default App