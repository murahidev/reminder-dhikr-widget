import "./QuoteComponent.css"
import React, { useState, useEffect } from "react";

export default function QuoteComponent(){

    {/* 
    todayDate
    number
    usedNumbers
    */}

    const [quote, setQuote] = useState("");
    const [source, setSource] = useState("");
    const [sourceLink, setSourceLink] = useState("");
    const [todayDate, setTodayDate] = useState(null);

    useEffect(() => {
        // Get Today Date
        const getTodayDate = () => {
            const today = new Date();
            setTodayDate(today);
        }

        const checkPrev = () => {
            if (localStorage.getItem("todayDate") == null){
                localStorage.setItem("todayDate", todayDate);
                fetchQuote();
            }
        }

        // Get Random Quote
        const getRandomQuote = () => {
            ;
        }

        // Check Local Storage
        const checkLocal = () => {
            ;
        }

    }, [])

    function fetchQuote() {
        fetch("quotes.json")
            .then(response => response.json())
            .then(data => setQuote(data))
        
    }

    return (
        <div className="h-screen flex flex-col">
            <div className="h-4/5 bg-green-600 text-left text-wrap flex items-center overflow-x-hidden overflow-y-hidden">
                <p className="HadithQuote"> {} </p>
            </div>

            <div className="h-1/5 bg-blue-600 flex items-center">
                <p className="Link">{}</p>
            </div>
        </div>
    )
}