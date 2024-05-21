import React, { useEffect, useState } from "react"
import DhikrComponent from "./Components/DhikrComponent/DhikrComponent"
import QuoteComponent from "./Components/QuoteComponent/QuoteComponent"

export default function App() {

  {/* 
    todayDate
    number
    usedNumbers
  */}

  const [darkMode, setDarkMode] = useState();
  const [todayDate, setTodayDate] = useState();

  {/* 
  useEffect(() => {
    localStorage.clear();
  })
  */}


  return (
  <div className="h-screen flex flex-row">
    
    <div className="QuoteSide w-2/3 bg-blue-600">
      <QuoteComponent todayDate={todayDate} setTodayDate={setTodayDate}/>
    </div>

    <div className="DhikrSide w-1/3 bg-red-600">
      <DhikrComponent />
    </div>

  </div>
  )
}