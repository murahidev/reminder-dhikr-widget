import "./DhikrComponent.css"
import React, { useEffect, useState } from "react";

export default function DhikrComponent() {

    const [hadithAyah, setHadithAyah] = useState("");
    const [source, setSource] = useState("");
    const [sourceLink, setSourceLink] = useState("");

    useEffect(() => {
        console.log("Starting...")
        setHadithAyah("fjdsakl; fklsdj jfdskl fjsdl fjkdsl; fjdkl;fjas; jfkdsl;fja; When Allah decreed the Creation He pledged Himself by writing in His book which is laid down with Him: My mercy prevails over my wrath.");
        setSourceLink("www.nba.com")
    }, [])


    return (
        <div className="h-screen flex flex-col">
            <div className="h-4/5 bg-green-600 text-left text-wrap flex items-center overflow-x-hidden overflow-y-hidden">
                <p className="HadithQuote"> {hadithAyah} </p>
            </div>

            <div className="h-1/5 bg-blue-600 flex items-center">
                <p className="Link">Bottom Content 1/4 Height</p>
            </div>
        </div>
    )
}