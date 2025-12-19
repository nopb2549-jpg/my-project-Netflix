import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// img-heroll
import img_heroll_Violet from "../../assets/img/Violetheroll.webp";
import Violet_black_logo from "../../assets/img/Violet_Evergarden_logo.webp";
import img_heroll_poster_Violet from "../../assets/img/OIP (1).png";
import img_heroll_alice from "../../assets/img/alice-in-borderland-heroll.jpg";
import img_heroll_arcane from "../../assets/img/arcane-hreoll.jpeg";
import img_heroll_boochi from "../../assets/img/bocchi-hreoll.jpg";
import img_heroll_true_haunting from "../../assets/img/true-haunting-heroll.webp";
import img_heroll_incantation from "../../assets/img/incantation-heroll.avif";

export default function list(){
    // heroll
      const slides = [
        {
          img: img_heroll_Violet,
          logo: Violet_black_logo,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat animi incidunt rerum vitae! Error, possimus veritatis. Pariatur, architecto enim?",
        },
        {
          img: img_heroll_arcane,
          logo: Violet_black_logo,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat animi incidunt rerum vitae! Error, possimus veritatis. Pariatur, architecto enim?",
        },
        {
          img: img_heroll_boochi,
          logo: img_heroll_poster_Violet,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat animi incidunt rerum vitae! Error, possimus veritatis. Pariatur, architecto enim?",
        },
        {
          img: img_heroll_alice,
          logo: img_heroll_poster_Violet,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat animi incidunt rerum vitae! Error, possimus veritatis. Pariatur, architecto enim?",
        },
        {
          img: img_heroll_true_haunting,
          logo: img_heroll_poster_Violet,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat animi incidunt rerum vitae! Error, possimus veritatis. Pariatur, architecto enim?",
        },
        {
          img: img_heroll_incantation,
          logo: img_heroll_poster_Violet,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat animi incidunt rerum vitae! Error, possimus veritatis. Pariatur, architecto enim?",
        },
      ]
    
      // slide-heroll
      const [currentIndex, setCurrentIndex] = useState(0);
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 15000);
        return () => clearInterval(timer);
      }, []);

    return(
        <div className="bg-fixed bg-gray-950 w-full h-full">

            {/* heroll */}
            <div className="overflow-hidden w-full h-[300px] sm:h-[480px] md:h-[480px] lg:h-[620px] xl:h-[980px] relative">

                <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                {slides.map((slide, index) => (
                    <div
                    key={index}
                    className="bg-scroll bg-center bg-cover flex-shrink-0 w-full h-full relative"
                    style={{ backgroundImage: `url(${slide.img})` }}
                    >
                    {/* เนื้อหาบน slide */}
                    <div className="ml-[28px] bg-blur h-[91%] w-[70%] md:w-[50%] lg:w-[40%] flex flex-col justify-end text-white absolute top-0 left-0 p-4">
                        <div className="h-[10%] flex justify-center items-center">
                        <img src={slide.logo} alt="logo" className="mb-2" />
                        </div>
                        <p className="whitespace-normal break-wordstext-xs sm:text-sm md:text-base lg:text-lg">{slide.text}</p>
                        <div className="btn flex justify-start gap-2 mt-2">
                        <button className="btn flex flex-wrap justify-start gap-2 mt-2 px-4 py-2 flex-none border border-amber-50 bg-amber-50 text-gray-800 rounded-lg">
                            <div className="flex justify-center gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"/>
                            </svg>
                            <span className="text-xs sm:text-sm md:text-base lg:text-lg"><Link to="#">เล่น</Link></span>
                            </div>
                        </button>
                        <button className="btn flex flex-wrap justify-start gap-2 mt-2 px-4 py-2 flex-none border border-amber-50 bg-amber-50 text-gray-800 rounded-lg">
                            <div className="flex justify-center gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/>
                            </svg>
                            <span className="text-xs sm:text-sm md:text-base lg:text-lg"><Link to="#">ข้อมูลเพิ่มเติม</Link></span>
                            </div>
                        </button>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}