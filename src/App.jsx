import "./app.css"
import React, { useEffect, useState } from "react"
import DhikrComponent from "./Components/DhikrComponent/DhikrComponent"
import QuoteComponent from "./Components/QuoteComponent/QuoteComponent"

export default function App() {

  {/* 
    todayDate
    number
    usedNumbers
    To GitPages: npm run deploy
    Run Vite: npm run dev
  */}

  const [darkMode, setDarkMode] = useState();
  const [todayDate, setTodayDate] = useState();
  const [quote, setQuote] = useState('');
  const [source, setSource] = useState('');
  const [sourceLink, setSourceLink] = useState('');
  const [number, setNumber] = useState(null);

 
  useEffect(() => {
    localStorage.removeItem("number");
    localStorage.removeItem("usedNumbers");
    localStorage.removeItem("todayDate");
  })

  useEffect(() => {
    const checkColorMode = localStorage.getItem("darkMode");
    const parsedVval = JSON.parse(checkColorMode);

    setDarkMode(parsedVval);
  })

  return (
  <div className={`h-screen flex flex-row ${darkMode ? 'dark-mode' : 'light-mode'} rounded-lg`}>
    
    <div className="QuoteSide w-2/3">
      <QuoteComponent 
        todayDate={todayDate} 
        setTodayDate={setTodayDate}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </div>

    <div className="DhikrSide w-1/3">
      <DhikrComponent 
        darkMode={darkMode}
      />
    </div>

  </div>
  )
}