import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({isDarkMode, setIsDarkMode}) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = `
    font-ovo transition duration-300 hover:text-rose-500 active:scale-95
    relative before:content-[''] before:absolute before:bottom-0 before:left-0 
    before:h-[2px] before:w-0 hover:before:w-full before:bg-rose-500 
    before:transition-all before:duration-300 before:bottom-[-4px]
  `;

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed top-0 left-0 h-16 px-5 lg:px-8 xl:px-[8%] flex items-center justify-between z-50
          transition-colors duration-500 ease-in-out
          ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : "bg-transparent shadow-none"}
        `}
      >
        <a href="#home">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer mr-14 transition-all duration-500 ease-in-out"
          />
        </a>

        <ul
          className={`
            hidden md:flex items-center gap-6 lg:gap-8 rounded-full
            bg-white bg-opacity-50 dark:bg-transparent
            transition-all duration-500 ease-in-out
            ${isScroll ? "px-12 py-3" : "px-6 py-2 shadow-sm dark:border dark:border-white/50"}
          `}
          style={{
            width: isScroll ? 'auto' : 'fit-content',
          }}
        >
          <li><a href="#home" className={navLinkClass}>Home</a></li>
          <li><a href="#about" className={navLinkClass}>About</a></li>
          <li><a href="#services" className={navLinkClass}>Services</a></li>
          <li><a href="#work" className={navLinkClass}>My Work</a></li>
          <li><a href="#contact" className={navLinkClass}>Contact</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsDarkMode(pre => !pre)}
            aria-label="Toggle Dark Mode"
            className="cursor-pointer"
          >
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="w-6" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 transition duration-300 hover:bg-black hover:text-white dark:border-white/50"
          >
            Contact
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Arrow Icon" className="w-3" />
          </a>

          <button
            onClick={openMenu}
            className="block md:hidden ml-3 cursor-pointer"
          >
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* -------Mobile Menu------- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div onClick={closeMenu} className="absolute right-6 top-6">
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className="w-5 cursor-pointer" />
          </div>
          <li><a href="#home" className={navLinkClass} onClick={closeMenu}>Home</a></li>
          <li><a href="#about" className={navLinkClass} onClick={closeMenu}>About</a></li>
          <li><a href="#services" className={navLinkClass} onClick={closeMenu}>Services</a></li>
          <li><a href="#work" className={navLinkClass} onClick={closeMenu}>My Work</a></li>
          <li><a href="#contact" className={navLinkClass} onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
