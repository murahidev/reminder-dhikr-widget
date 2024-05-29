import "./app.css";
import React, { useEffect, useState } from "react";
import DhikrComponent from "./Components/DhikrComponent/DhikrComponent";
import QuoteComponent from "./Components/QuoteComponent/QuoteComponent";

export default function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const checkColorMode = localStorage.getItem("darkMode");
    const parsedVal = JSON.parse(checkColorMode);
    if (parsedVal !== null) {
      setDarkMode(parsedVal);
    }
  }, []);

  return (
    <div className={`h-screen flex flex-row ${darkMode ? 'dark-mode' : 'light-mode'} rounded-lg`}>
      <div className="QuoteSide w-2/3">
        <QuoteComponent 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>

      <div className="DhikrSide w-1/3">
        <DhikrComponent darkMode={darkMode} />
      </div>
    </div>
  );
}
