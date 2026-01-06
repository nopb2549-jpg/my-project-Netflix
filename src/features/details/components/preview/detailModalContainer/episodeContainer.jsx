import { useState } from "react";
import Tu from "./epsodeTuContainer"

import Movie1Seasons from "../../../data/data season/movie1.seasons";

export default function EpisodeContainer(){
    const [isOpen, setIsOpen] = useState(false);
    
    const [currentSeason, setCurrentSeason] = useState(Movie1Seasons[0].id);

    const toggleDropdown = () => setIsOpen(prev => !prev);

    const currentSeasonData = Movie1Seasons.find(
        season => season.id === currentSeason
    );
    return(
        <div className="mt-5">
        <div className="grid grid-cols-[2fr_1fr] gap-8 items-center">
            {/* ซ้าย */}
            <div className="mt-8 mb-4">
                <h3 className="text-3xl">ตอน</h3>
            </div>

            {/* ขวา */}
            <div className="flex justify-end mt-8 mb-4">
                <div className="border rounded-sm w-[70%]">
                    <div className="relative p-3">
                    {/* ปุ่ม toggle dropdown */}
                    <button 
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        onClick={toggleDropdown}
                        className="flex justify-center items-center text-lg w-full"
                    >
                        สเตรนเจอร์ ธิงส์ SS
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`size-6 ml-2 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                        }`}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                        </svg>
                    </button>

                    {/* dropdown menu */}
                    {isOpen && (
                        <ul className="absolute right-0 mt-3 bg-gray-900 shadow-lg rounded max-w-xs w-auto z-10 border">
                        {Movie1Seasons.map(season => (
                            <li key={season.id}>
                            <button
                                type="button"
                                className="block w-full text-left px-4 py-2 hover:bg-gray-600"
                                onClick={() => {
                                setCurrentSeason(season.id);
                                setIsOpen(false);
                                }}
                            >
                                <span className="text-lg">{season.label}</span>{" "}
                                <span>({season.total} ตอน)</span>
                            </button>
                            </li>
                        ))}
                        </ul>
                    )}
                    </div>
                </div>
            </div>
        </div>

        <div>
            <Tu season={currentSeasonData} />
        </div>
    </div>
    );
}