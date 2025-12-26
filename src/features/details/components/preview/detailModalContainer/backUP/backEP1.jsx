import { useState } from "react";
import { Link } from "react-router-dom";
import Tu from "./epsodeTuContainer"


export default function EpisodeContainer(){
    const [isOpen, setIsOpen] = useState(false);
    
      const toggleDropdown = () => setIsOpen(!isOpen);
    return(
        <div className="mt-5 border">
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
                        <ul className="dropdown-menu absolute right-0 mt-2 bg-gray-900 shadow-lg rounded max-w-xs w-auto z-10 border">
                        <li>
                            <Link
                            to="#"
                            className="block px-4 py-2 hover:bg-gray-600"
                            onClick={() => setIsOpen(false)}
                            >
                            <span className="text-lg">สเตรนเจอร์ ธิงส์</span>{" "}
                            <span>(8 ตอน)</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                            to="#"
                            className="block px-4 py-2 hover:bg-gray-600"
                            onClick={() => setIsOpen(false)}
                            >
                            <span className="text-lg">สเตรนเจอร์ ธิงส์2</span>{" "}
                            <span>(9 ตอน)</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                            to="#"
                            className="block px-4 py-2 hover:bg-gray-600"
                            onClick={() => setIsOpen(false)}
                            >
                            <span className="text-lg">สเตรนเจอร์ ธิงส์3</span>{" "}
                            <span>(8 ตอน)</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                            to="#"
                            className="block px-4 py-2 hover:bg-gray-600"
                            onClick={() => setIsOpen(false)}
                            >
                            <span className="text-lg">สเตรนเจอร์ ธิงส์4</span>{" "}
                            <span>(9 ตอน)</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                            to="#"
                            className="block px-4 py-2 hover:bg-gray-600"
                            onClick={() => setIsOpen(false)}
                            >
                            <span className="text-lg">สเตรนเจอร์ ธิงส์5</span>{" "}
                            <span>(4 ตอน)</span>
                            </Link>
                        </li>
                        <li>
                            <hr />
                        </li>
                        </ul>
                    )}
                    </div>
                </div>
            </div>
        </div>

        <div>
            <Tu />
        </div>
    </div>
    );
}