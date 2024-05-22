// src/DhikrComponent.js
import React, { useState, useEffect } from "react";
import CurvedText from "./CurvedText";

export default function DhikrComponent() {
    const [containerSize, setContainerSize] = useState({
        width: window.innerWidth * 0.5,
        height: window.innerHeight * 0.5
    }); // Initial size of the container

    useEffect(() => {
        const handleResize = () => {
            setContainerSize({
                width: window.innerWidth * 0.5,
                height: window.innerHeight * 0.5
            }); // Adjust container size dynamically
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Function to convert regular numbers to Arabic numerals
    const convertToArabic = (number) => {
        const arabicNumerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
        return String(number).replace(/[0-9]/g, (match) => arabicNumerals[Number(match)]);
    };

    // Counter state
    const [count, setCount] = useState(0);

    // Function to handle incrementing the count
    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative">
                <CurvedText 
                    text="DHIKR"
                    radiusX={containerSize.width / 2}
                    radiusY={containerSize.height / 4}
                    cx={containerSize.width / 2}
                    cy={containerSize.height / 3}
                    fontSize="6vw"
                />

                <button
                    className="rounded-full bg-white px-6 py-3 text-black hover:bg-gray-200 transition duration-300"
                    style={{ width: containerSize.width * 0.275, height: containerSize.width * 0.275 }}
                    onClick={incrementCount}
                >
                    <span style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold", fontSize: "6vw" }}>
                        {convertToArabic(count)}
                    </span>
                </button>

            </div>
        </div>
    );
}
