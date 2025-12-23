"use client"
import Image from "next/image";
import { assets } from "../../assets/assets";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add a nice background blur when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Dynamic Background logic */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-10%] opacity-50">
        <Image src={assets.header_bg_color} className="w-full" alt="" priority />
      </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/70 backdrop-blur-lg shadow-sm py-3" : ""
      }`}>
        
        {/* Logo */}
        <a href="#top">
          <Image
            src={assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        {/* Desktop Menu - Floating Glass Style */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/50 border border-white/20 backdrop-blur-md shadow-sm">
          <li><a className="font-family-ovo hover:text-orange-500 transition-colors" href="#top">Home</a></li>
          <li><a className="font-family-ovo hover:text-orange-500 transition-colors" href="#about">About me</a></li>
          <li><a className="font-family-ovo hover:text-orange-500 transition-colors" href="#services">Services</a></li>
          <li><a className="font-family-ovo hover:text-orange-500 transition-colors" href="#work">My Work</a></li>
          <li><a className="font-family-ovo hover:text-orange-500 transition-colors" href="#contact">Contact me</a></li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-all">
            <Image src={assets.moon_icon} className="w-6" alt="Theme Toggle" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-family-ovo hover:bg-gray-900 hover:text-white hover:border-black transition-all duration-300"
          >
            Contact
            <Image src={assets.arrow_icon} className="w-3" alt="" />
          </a>

          {/* Mobile Menu Toggle */}
          <button className="block md:hidden ml-3 p-2" onClick={() => setIsMenuOpen(true)}>
            <Image src={assets.menu_black} className="w-6" alt="Open Menu" />
          </button>
        </div>

        {/* Mobile menu - Side Drawer */}
        <ul
          className={`flex md:hidden flex-col gap-6 py-20 px-10 fixed top-0 right-0 bottom-0 w-64 h-screen bg-white/95 backdrop-blur-xl z-50 transition-transform duration-500 shadow-2xl
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="absolute right-6 top-6 p-2 hover:rotate-90 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
             <Image src={assets.close_black} alt="Close Menu" className="w-5 cursor-pointer" />
          </div>
          
          <li className="border-b border-gray-100 pb-2"><a className="font-family-ovo text-lg" onClick={() => setIsMenuOpen(false)} href="#top">Home</a></li>
          <li className="border-b border-gray-100 pb-2"><a className="font-family-ovo text-lg" onClick={() => setIsMenuOpen(false)} href="#about">About me</a></li>
          <li className="border-b border-gray-100 pb-2"><a className="font-family-ovo text-lg" onClick={() => setIsMenuOpen(false)} href="#services">Services</a></li>
          <li className="border-b border-gray-100 pb-2"><a className="font-family-ovo text-lg" onClick={() => setIsMenuOpen(false)} href="#work">My Work</a></li>
          <li className="border-b border-gray-100 pb-2"><a className="font-family-ovo text-lg" onClick={() => setIsMenuOpen(false)} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;