import rongLogo from './assets/RONG.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    return (
      <nav className="p-4 bg-white text-gray-800 fixed top-0 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/"><img src={rongLogo}/></Link>
  
          <div className="lg:flex hidden items-center">
            <div className="flex items-center space-x-4">
              <Link to="/" className="font-medium px-4 py-2  text-gray-800 hover:text-gray-600 focus:underline underline-offset-4">Work</Link>
              <Link to="/about" className="font-medium px-4 py-2 text-gray-800 hover:text-gray-600 focus:underline underline-offset-4">About</Link>
              {/* <a href="/contact" className="px-4 py-2 text-gray-800 hover:text-gray-600">Resume</a> */}
            </div>
          </div>
  
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="text-xl text-slate-800 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
  
        {isMobileMenuOpen && (
          <div className= "bg-slate-100 text-slate-800 mt-2 py-2">
            <a href="/" className="block px-4 py-2 text-slate-800" onClick={toggleMobileMenu}>Work</a>
            <a href="/about" className="block px-4 py-2 text-slate-800" onClick={toggleMobileMenu}>About</a>
            <a href="/contact" className="block px-4 py-2 text-slate-800" onClick={toggleMobileMenu}>Resume</a>
          </div>
        )}
      </nav>
    );
  };



