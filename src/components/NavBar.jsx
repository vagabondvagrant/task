// NavBar.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LogoSvg from '../assets/logo.svg';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`bg-yellow-500 p-2 ${isMobileMenuOpen ? 'bg-yellow-500' : 'bg-yellow-500'} sticky top-0 z-50`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center font-bold">
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-black transition-all duration-300 transform focus:outline-none focus:ring focus:border-yellow-300 hover:scale-105"
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

          <div className="md:hidden">
            <img src={LogoSvg} alt="Logo" className="h-7 w-auto" />
          </div>

          <div className="hidden md:flex items-center space-x-[44px] mt-1">
            <img src={LogoSvg} alt="Logo" className="h-7 w-auto" />
            <Link to="/home" className="text-black" onClick={closeMobileMenu}>HOME PAGE</Link>
            <Link to="/our-commitment" className="text-black" onClick={closeMobileMenu}>OUR COMMITMENT</Link>
            <Link to="/toolkit" className="text-black" onClick={closeMobileMenu}>TOOLS TO HELP</Link>
            <Link to="/looking-out" className="text-black" onClick={closeMobileMenu}>LOOKING OUT FOR EVERYONE</Link>
            <Link to="/help-and-support" className="text-black" onClick={closeMobileMenu}>HELP AND SUPPORT</Link>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 transform ${isMobileMenuOpen ? 'scale-y-100 ' : 'scale-y-0'}`}
        >
          <div className='h-2'>
            <div className="h-screen bg-black max-w-full bg-opacity-95">
              <Link to="/toolkit" style={{ borderBottom: '1px solid white', padding: '5px', color: 'white', display: 'block' }} onClick={closeMobileMenu}>TOOLS TO HELP</Link>
              <Link to="/looking-out" style={{ borderBottom: '1px solid white', padding: '5px', color: 'white', display: 'block' }} onClick={closeMobileMenu}>LOOKING OUT FOR EVERYONE</Link>
              <Link to="/help-and-support" style={{ borderBottom: '1px solid white', padding: '5px', color: 'white', display: 'block' }} onClick={closeMobileMenu}>HELP AND SUPPORT</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
