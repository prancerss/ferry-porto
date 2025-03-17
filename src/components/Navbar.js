import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdMenu, MdClose } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">FW</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" onClick={(e) => { e.preventDefault(); document.querySelector('.min-h-screen').scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white hover:bg-gray-700/50 px-3 py-2 rounded-md transition-all duration-300">Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); document.querySelector('#about').scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white hover:bg-gray-700/50 px-3 py-2 rounded-md transition-all duration-300">About</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white hover:bg-gray-700/50 px-3 py-2 rounded-md transition-all duration-300">Projects</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white hover:bg-gray-700/50 px-3 py-2 rounded-md transition-all duration-300">Contact</a>
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/prancerss" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ferry-wilson/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg p-2"
            >
              {isOpen ? <MdClose className="w-6 h-6" /> : <MdMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" onClick={(e) => { e.preventDefault(); document.querySelector('.min-h-screen').scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); }} className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md transition-all duration-300">Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); document.querySelector('#about').scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); }} className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md transition-all duration-300">About</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); }} className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md transition-all duration-300">Projects</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); }} className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md transition-all duration-300">Contact</a>
          </div>
          <div className="flex justify-center space-x-4 pb-4">
            <a href="https://github.com/prancerss" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ferry-wilson/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;