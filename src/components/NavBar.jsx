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
          <div className="md:hidden mt-2">
            <button
              onClick={toggleMobileMenu}
              className="text-black transition-all duration-300 transform focus:outline-none focus:ring focus:border-yellow-300 hover:scale-105"
            >
              {isMobileMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
            </button>
          </div>

          <div className="md:hidden">
            <img src={LogoSvg} alt="Logo" className="h-7 w-auto" />
          </div>

          <div className="hidden md:flex items-center space-x-[44px] mt-1">
            <img src={LogoSvg} alt="Logo" className="h-7 w-auto" />
            <Link to="/" className="text-black" onClick={closeMobileMenu}>HOME PAGE</Link>
            <Link to="/our-commitment" className="text-black" onClick={closeMobileMenu}>OUR COMMITMENT</Link>
            <Link to="/toolkit" className="text-black" onClick={closeMobileMenu}>TOOLS TO HELP</Link>
            <Link to="/budget" className="text-black" onClick={closeMobileMenu}>BUDGET CALCULATOR</Link>

            <div className="relative">
              <Link to="/lookout" className="text-black" onClick={closeMobileMenu}>
                LOOKING OUT FOR EVERYONE
              </Link>
              {isMobileMenuOpen && (
                <div className="ml-2">
                  <Link to="/lookout" className="block py-2 px-4 text-white" onClick={closeMobileMenu}>On The Look Out</Link>
                  <Link to="/lookout" className="block py-2 px-4 text-white" onClick={closeMobileMenu}>How You Can Help</Link>
                  <Link to="/lookput" className="block py-2 px-4 text-white" onClick={closeMobileMenu}>Protecting Minors</Link>
                </div>
              )}
            </div>

            <div className="relative">
              <Link to="/helpsup" className="text-black" onClick={closeMobileMenu}>
                HELP AND SUPPORT
              </Link>
              {isMobileMenuOpen && (
                <div className="ml-2">
                  <Link to="/helpsup" className="block py-2 px-4 text-white" onClick={closeMobileMenu}>Support Organizations</Link>
                  <Link to="/helpsup" className="block py-2 px-4 text-white" onClick={closeMobileMenu}>Blocking Gambling Sites</Link>
                  <Link to="/helpsup" className="block py-2 px-4 text-white" onClick={closeMobileMenu}>Debt and Financial Advice</Link>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 transform ${isMobileMenuOpen ? 'scale-y-100 ' : 'scale-y-0'}`}
        >
          <div className='h-2'>
            <div className="h-screen bg-black max-w-full bg-opacity-95">
              <Link to="/toolkit" style={{ borderBottom: '1px solid white', padding: '5px', color: 'white', display: 'block' }} onClick={closeMobileMenu}>TOOLS TO HELP</Link>
              <div className="relative">
                <Link to="/lookout" style={{ borderBottom: '1px solid white', padding: '5px', color: 'white', display: 'block' }} onClick={closeMobileMenu}>
                  LOOKING OUT FOR EVERYONE
                </Link>
                <Link to="/budget" className="text-black" style={{ borderBottom: '1px solid white', padding: '5px', color: 'white', display: 'block' }} onClick={closeMobileMenu}>BUDGET CALCULATOR</Link>
                {isMobileMenuOpen && (
                  <div className="ml-2">
                    <Link to="/lookout" className="block py-2 px-4 text-white" onClick={closeMobileMenu}>On The Look Out</Link>
                    <Link to="/lookout" className="block py-2 px-4 text-white" onClick={closeMobileMenu}>How You Can Help</Link>
                    <Link to="/lookout" className="block py-2 px-4 text-white" onClick={closeMobileMenu}>Protecting Minors</Link>
                  </div>
                )}
              </div>

              <Link to="/helpsup" style={{ borderBottom: '1px solid white', padding: '5px', color: 'white', display: 'block' }} onClick={closeMobileMenu}>HELP AND SUPPORT</Link>
              {isMobileMenuOpen && (
                <div className="ml-2">
                  <Link to="/helpsup" className="block py-2 px-4 text-white" onClick={closeMobileMenu}>Support Organizations</Link>
                  <Link to="/helpsup" className="block py-2 px-4 text-white" onClick={closeMobileMenu}>Blocking Gambling Sites</Link>
                  <Link to="/helpsup" className="block py-2 px-4 text-white" onClick={closeMobileMenu}>Debt and Financial Advice</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
