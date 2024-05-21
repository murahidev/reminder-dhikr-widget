import "./QuoteComponent.css"
import React, { useState, useEffect } from "react";

export default function QuoteComponent(){

    {/* 
        todayDate
        number
        usedNumbers
    */}

    const [quote, setQuote] = useState();
    const [source, setSource] = useState();
    const [sourceLink, setSourceLink] = useState();
    const [todayDate, setTodayDate] = useState();

    useEffect(() => {
        const today = new Date()
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

        const formattedDate = `${month}/${day}/${year}`;
        setTodayDate(formattedDate)
    }, [])

    useEffect(() => {
        if (todayDate) {
            // Check todayDate local storage. If absent, assign empty string
            if (!localStorage.getItem("todayDate")) {
                localStorage.setItem("todayDate", "");
                console.log("1st if")
            }

            // Check todayDate local storage. If empty string, assign todayDate
            if (localStorage.getItem("todayDate") === ""){
                localStorage.setItem("todayDate", JSON.stringify(todayDate));
                // Fetches random. Checks if in storedNumber, if so gets another, if not store number.
                console.log("2nd If")
                fetchRandom();
                displayQuote();
            }

            // Check if todayDate local storage is the same as todays date
            if (localStorage.getItem("todayDate") === JSON.stringify(todayDate)){
                console.log("3rd If");
                fetchRandom();
                displayQuote();
            }

            // Check if todayDate local storage is before the same as todays date
            if (isPreviousDay() === true){
                console.log("4th If")
                recyclePrev();
            }
        }
    }, [todayDate])

    function isPreviousDay() {
        const prevDayStr = localStorage.getItem("todayDate");
        const prevDay = new Date(prevDayStr);
        const today = new Date();

        prevDay.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);

        const timeDiff = today.getTime() - prevDay.getTime();
        const oneDay = 1000 * 60 * 60 * 24;

        return timeDiff >= oneDay;
    }

    function fetchRandom() {
        console.log("Random fetched")
    }

    function displayQuote() {
        console.log("Display quote");
    }

    function recyclePrev() {
        console.log("Recycled")
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