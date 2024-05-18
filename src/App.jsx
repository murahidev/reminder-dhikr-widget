import React, { useState } from "react"
import DhikrComponent from "./Components/DhikrComponent/DhikrComponent"
import QuoteComponent from "./Components/QuoteComponent/QuoteComponent"

export default function App() {

  const [darkMode, setDarkMode] = useState()

  return (
  <div className="h-screen flex flex-row">
    
    <div className="QuoteSide w-2/3 bg-blue-600">
      <DhikrComponent />
    </div>

    <div className="DhikrSide w-1/3 bg-red-600">
      <QuoteComponent />
    </div>

  </div>
  )
}