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

  // Check if local storage fields exist, if not, create them
  useEffect(() => {
    const checkLocalStorage = () =>{
      if (!localStorage.getItem("todayDate")){
        localStorage.setItem("todayDate", null);
      }

      if (!localStorage.getItem("number")){
        localStorage.setItem("number", null);
      }

      if (!localStorage.getItem("usedNumbers")){
        localStorage.setItem("usedNumbers", null);
      }

      console.log("test")
    }

    checkLocalStorage();
  })

  return (
  <div className="h-screen flex flex-row">
    
    <div className="QuoteSide w-2/3 bg-blue-600">
      <QuoteComponent />
    </div>

    <div className="DhikrSide w-1/3 bg-red-600">
      <DhikrComponent />
    </div>

  </div>
  )
}