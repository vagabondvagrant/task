import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LogoSvg from '../assets/logo.svg';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`bg-yellow-500 p-4 ${isMobileMenuOpen ? 'bg-yellow-500' : 'bg-yellow-500'}`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center font-bold">
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-black transition-all duration-300 transform focus:outline-none focus:ring focus:border-blue-300 hover:scale-105"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <div className="md:hidden">
            <img src={LogoSvg} alt="Logo" className="h-7 w-auto" />
          </div>

          <div className="hidden md:flex items-center space-x-[44px] mt-1">
            <img src={LogoSvg} alt="Logo" className="h-7 w-auto" />
            <a href="#" className="text-black">HOME PAGE</a>
            <a href="#" className="text-black">OUR COMMITMENT</a>
            <a href="#" className="text-black">TOOLS TO HELP</a>
            <a href="#" className="text-black">LOOKING OUT FOR EVERYONE</a>
            <a href="#" className="text-black">HELP AND SUPPORT</a>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 transform ${isMobileMenuOpen ? 'scale-y-100 ' : 'scale-y-0'}`}
        >
            <div className='h-2'>
             <div className=''>
            <div className="h-screen bg-gray-800 max-w-full ">
            <a href="#" className="block text-white font-bold">TOOLS TO HELP</a>
            <a href="#" className="block text-white font-bold">LOOKING OUT FOR EVERYONE</a>
            <a href="#" className="block text-white font-bold">HELP AND SUPPORT</a>
                </div>
          </div>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
