import "./QuoteComponent.css";
import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";

export default function QuoteComponent({ darkMode, setDarkMode }) {
    const [quote, setQuote] = useState('');
    const [source, setSource] = useState('');
    const [sourceLink, setSourceLink] = useState('');

    useEffect(() => {
        fetch("./quotes.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const randomIndex = Math.floor(Math.random() * data.length);
                const randomQuote = data[randomIndex];

                setQuote(randomQuote.quote);
                setSource(randomQuote.source);
                setSourceLink(randomQuote.sourceLink);
            })
            .catch(error => console.error("Error fetching quotes:", error));
    }, []);

    const handleSrcClick = () => {
        window.open(sourceLink, "_blank");
    };

    const handleLightToggle = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
    };

    return (
        <div className="h-screen flex flex-col">
            <div className="h-4/5 text-left text-wrap flex items-center overflow-x-hidden overflow-y-hidden">
                <p className="HadithQuote">{quote}</p>
            </div>

            <div className="h-1/5 flex items-center underline">
                <button onClick={handleSrcClick}>
                    <p className="Link">{source}</p>
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
