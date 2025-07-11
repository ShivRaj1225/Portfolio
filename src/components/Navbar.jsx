import React from 'react';
import { profile } from '../assets/assetsindex.js'; // Ensure assets are imported
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50 uppercase top-0 left-0">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <div className="flex items-center space-x-2 hover:cursor-pointer">
          <img
            src={profile}
            alt="Profile"
            className="w-auto h-14 rounded-full object-scale-down"
          />
          <span className="font-winky pl-3 text-2xl font-bold text-gray-800 hover:text-[#9929EA] transition-colors duration-300">
            Shivraj Desai
          </span>
        </div>
        <ul className="hidden md:flex space-x-14 text-gray-800 font-medium text-[1.2rem] font-winky">
          <li>
            <a href="#home" className="hover:text-[#9929EA]">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#9929EA]">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#9929EA]">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#9929EA]">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
