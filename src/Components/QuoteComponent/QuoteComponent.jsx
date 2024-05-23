import "./QuoteComponent.css"
import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";

export default function QuoteComponent({ todayDate, setTodayDate, darkMode, setDarkMode }) {
    
    const [quote, setQuote] = useState('');
    const [source, setSource] = useState("");
    const [sourceLink, setSourceLink] = useState('');
    const [number, setNumber] = useState(null);

    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${month}/${day}/${year}`;

        setTodayDate(formattedDate);
        const baseURL = "https://murahidev.github.io/reminder-dhikr-widget";

        if (!localStorage.getItem("todayDate") || !localStorage.getItem("number") || !localStorage.getItem("usedNumbers")) {
            console.log("1st if. Doesn't exist");


            // Fetch random and store in number and usedNumbers
            fetch(`${baseURL}/quotes.json`)
                .then(response => response.json())
                .then(data => {
                    const randomIndex = Math.floor(Math.random() * data.length);
                    const randomQuote = data[randomIndex];

                    setQuote(randomQuote.quote);
                    setSource(randomQuote.source);
                    setSourceLink(randomQuote.sourceLink);

                    // Update localStorage after setting the state
                    localStorage.setItem("number", randomQuote.number);
                    localStorage.setItem("usedNumbers", JSON.stringify([randomQuote.number]));
                    localStorage.setItem("todayDate", formattedDate);

                    // Call these functions after the state is set and localStorage is updated
                    displayQuoteFirst(randomQuote.quote, randomQuote.source, randomQuote.sourceLink, randomQuote.number);
                })
                
            .catch(error => console.error("Error fetching quotes:", error));
        } 
        
        else {
            console.log("Items in localStorage exist...");
        }

        if (!localStorage.getItem("darkMode")){
            localStorage.setItem("darkMode", false);
            setDarkMode(false);
        }

        else {
            const tfVal = localStorage.getItem("darkMode");
            setDarkMode(tfVal);
        }
    }, [setTodayDate, setDarkMode]);

    useEffect(() => {
        if (!todayDate) return; // Wait until todayDate is set

        const checkAndUpdate = () => {
            const storedDate = localStorage.getItem("todayDate");
            console.log(`Stored date: ${storedDate}, Today date: ${todayDate}`);

            if (storedDate === todayDate) {
                console.log('2nd if');
                displayQuote();
            } 
            
            else if (isPreviousDay()) {
                console.log("3rd If");

                recyclePrev();
                fetchRandom();
            }
        };

        checkAndUpdate();
    }, [todayDate]);

    function isPreviousDay() {
        const prevDayStr = localStorage.getItem("todayDate");
        if (!prevDayStr) return false;

        const prevDay = new Date(prevDayStr);
        const today = new Date();

        prevDay.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);

        const timeDiff = today.getTime() - prevDay.getTime();
        const oneDay = 1000 * 60 * 60 * 24;

        return timeDiff >= oneDay;
    }

    function fetchRandom() {
        console.log("Fetching...");
        // Add your fetch logic here
    }

    function displayQuoteFirst(quote, source, sourceLink) {
        console.log("Displaying quote...");
        console.log(quote, source, sourceLink);
        // Add logic to display the quote
    }

    function displayQuote(){
        console.log("Displaying quote...");
    }

    function recyclePrev() {
        console.log("Recycled");
        // Add logic to recycle previous quotes
    }

    function handleSrcClick(){
        window.open(sourceLink, "_blank");
    }

    function handleLightToggle(){
        const newDarkMode = !darkMode;
        localStorage.setItem("darkMode", newDarkMode);
        setDarkMode(newDarkMode);
        console.log(localStorage.getItem("darkMode"));
    }

    return (
        <div className="h-screen flex flex-col">
            <div className="h-4/5 text-left text-wrap flex items-center overflow-x-hidden overflow-y-hidden">
                <p className="HadithQuote">{quote}</p>
            </div>

            <div className="h-1/5 flex items-center underline">
                <button
                    onClick={handleSrcClick}
                >
                    <p className="Link"> {source} </p>
                </button>

                <button
                    onClick={handleLightToggle}
                    className={`MoonSunButton ${darkMode ? "hover:bg-gray-900" : "hover:bg-gray-50"} rounded`}
                >
                    {darkMode ? <FiSun /> : <FiMoon />}
                </button>
            </div>
        </div>
    );
}
