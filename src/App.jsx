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
  const [quote, setQuote] = useState('');
  const [source, setSource] = useState('');
  const [sourceLink, setSourceLink] = useState('');
  const [number, setNumber] = useState(null);

 
  useEffect(() => {
    localStorage.clear();
  })

  return (
  <div className="h-screen flex flex-row bg-black text-white">
    
    <div className="QuoteSide w-2/3">
      <QuoteComponent todayDate={todayDate} setTodayDate={setTodayDate}/>
    </div>

    <div className="DhikrSide w-1/3">
      <DhikrComponent />
    </div>

  </div>
  )
}