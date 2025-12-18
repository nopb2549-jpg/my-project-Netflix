import { useState } from 'react';
import { NavLink } from "react-router-dom";
import img from "../../../assets/img/logo-net.png";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const[isSearch, setSearch] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const toggleSearch = () =>{
    setSearch(!isOpen);
  };
  return (
    <nav className="fixed flex justify-center top-0 left-0 w-full bg-gray-800 text-white z-50 shadow-md">
      <div className="flex w-[90%] h-auto justify-between items-center py-3">
        {/* -----LOGO----- */}
        <div className="menu w-2xl flex items-center gap-3">
          <img src={img} alt="logo" className='w-[100px]' />
          
          {/* ---------- ปุ่ม Hamburger ---------- */}
          <button className="block md:hidden p-2 rounded hover:bg-gray-700" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          {/* เมนูหลัก */}
          <ul className='hidden w-2xl md:flex items-center justify-between'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/list" className='hover:text-gray-300'>List</NavLink></li>
            <li><NavLink to="/movies" className="hover:text-gray-300">Movies</NavLink></li>
            <li><NavLink to="/game" className="hover:text-gray-300">Game</NavLink></li>
            <li><NavLink to="/trendingnow" className='hover:text-gray-300'>Trending Now</NavLink></li>
            <li><NavLink to="/mylist" className='hover:text-gray-300'>My List</NavLink></li>
            <li><NavLink to="/browsebylanguage" className='hover:text-gray-300'>Browse By Language</NavLink></li>
            {/* <li><NavLink to="/card" className='hover:text-gray-300'>cardNormal</NavLink></li> */}
          </ul>

          {/* Popup Menu (Mobile) */}
          {isOpen && (
            <ul
              className='absolute top-full bg-gray-900 text-white flex flex-col items-center w-[200px] py-4 rounded-xl shadow-lg transition-all duration-300 md:hidden'
              onClick={() => setOpen(false)}
            >
              <li className="py-2"><NavLink to="/">Home</NavLink></li>
              <li className="py-2 hover:mask-b-from-gray-300"><NavLink to="/list">List</NavLink></li>
              <li className="py-2 hover:mask-b-from-gray-300"><NavLink to="/movies">Movies</NavLink></li>
              <li className="py-2 hover:mask-b-from-gray-300"><NavLink to="/game">Game</NavLink></li>
              <li className="py-2 hover:mask-b-from-gray-300"><NavLink to="/trendingnow">Trending Now</NavLink></li>
              <li className="py-2 hover:mask-b-from-gray-300"><NavLink to="/mylist">My List</NavLink></li>
              <li className="py-2 hover:mask-b-from-gray-300"><NavLink to="/browsebylanguage">Browse By Language</NavLink></li>
              {/* <li className="py-2 hover:mask-b-from-gray-300"><NavLink to="/card">cardNormal</NavLink></li> */}
            </ul>
          )}
        </div>

        {/* ---------- ICON ZONE ---------- */}
        <div className=" md: login-icon z-0 flex items-center gap-3">
          {/*Search */}

          <div className="icon-search">
            <button onClick={toggleSearch} className="flex p-1 rounded focus:border border-amber-50 border-solid">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              {isSearch && (
                <input noClike onKeyDown={(e) => {
                  if (e.key === "Enter"){
                    console.log("กำลังค้นหา:", e.target.value);
                    setSearch(false);
                  }
                }} className="ml-2 bg-transparent hover: text-white focus:outline-none" type="text" placeholder="Search" />
              )}
            </button>
          </div>

          {/* Bell */}
          <div className="icon-bell-alert">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
            </svg>
          </div>

          {/* User */}
          <div className="icon-user">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}
