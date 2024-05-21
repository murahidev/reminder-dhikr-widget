import "./QuoteComponent.css"
import React, { useState, useEffect } from "react";

export default function QuoteComponent({todayDate, setTodayDate}){

    {/* 
        todayDate
        number
        usedNumbers
    */}

    const [quote, setQuote] = useState();
    const [source, setSource] = useState();
    const [sourceLink, setSourceLink] = useState();

    // Get Todays date
    useEffect(() => {
        const today = new Date()
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

        const formattedDate = `${month}/${day}/${year}`;
        setTodayDate(formattedDate)
    })

    // Check if items exist in localStorage
    useEffect(() => {
        console.log(todayDate);

        // Check todayDate local storage. If absent, assign empty string
        if ( !localStorage.getItem("todayDate") || !localStorage.getItem("number") || !localStorage.getItem("usedNumbers") ){
            localStorage.setItem("todayDate", JSON.stringify(todayDate));
            localStorage.setItem("number", JSON.stringify([1]));
            localStorage.setItem("usedNumbers", 0);

            console.log("1st if. Doesn't exist")
            fetchRandom();
            displayQuote();
        }

        else {
            console.log("Items in localStorage exist...")
        }
    })

    useEffect(() => {
        
        // Check if todayDate local storage is the same as todays date
        if (localStorage.getItem("todayDate") === JSON.stringify(todayDate)){
            console.log("2nd If");
            displayQuote();
        } 

        // Check if todayDate local storage is before the same as todays date
        if (isPreviousDay() === true){
            console.log("3rd If")
            recyclePrev();
        }
    })

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
        {/* 
        console.log("Random fetched");
        let randomIndex = "";
        let randomQuoteChoice = 0;
        let quoteText = "";
        let quoteSource = "";
        let quoteSourceLink = "";
        let quoteNumber = 0;
        

        fetch("./quotes.json")
            .then(response => response.json())
            .then(fetchedData => {
                randomIndex = Math.floor(Math.random() * fetchedData.length);
                randomQuoteChoice = fetchedData[randomIndex];
            })
        */}

        console.log("Fetching...")
    }

    function displayQuote() {
        console.log("Displaying quote...");
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