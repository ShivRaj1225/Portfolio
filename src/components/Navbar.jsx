import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { profile } from "../assets/assetsindex.js";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  const handleGoBack = () => {
    window.history.back();
    closeMenu();
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white shadow-md fixed w-full z-50 top-0 left-0 overflow-x-hidden">
      {/* Navbar top row: Profile + Name + Menu */}
      <div className="flex justify-between items-center w-full  py-4 max-w-[1600px] md:ml-8 pl-4 pr-8">
        {/* Profile + Name */}
        <HashLink
          smooth
          to="/#home"
          className="flex items-center space-x-3 hover:cursor-pointer"
          onClick={closeMenu}>
          <img
            src={profile}
            alt="Profile"
            className="w-auto h-14 rounded-full object-scale-down"
          />
          <span className="font-winky text-xl sm:text-2xl font-bold text-gray-800 tracking-wide hover:text-[#9929EA]">
            Shivraj Desai
          </span>
        </HashLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12 text-gray-900 font-medium font-winky text-lg uppercase ">
          <li>
            <HashLink smooth to="/#home" className="hover:text-[#9929EA]">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about" className="hover:text-[#9929EA]">
              About
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#projects" className="hover:text-[#9929EA]">
              Projects
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact" className="hover:text-[#9929EA]">
              Contact
            </HashLink>
          </li>
        </ul>

        {/* Hamburger Icon Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-gray-900 "
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}>
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="bg-white w-full border-t border-gray-300 md:hidden">
          {/* Mobile Links */}
          <ul className="text-gray-800 font-winky text-base uppercase divide-y divide-gray-300 text-right">
            <li>
              <HashLink
                smooth
                to="/#home"
                onClick={closeMenu}
                className="block px-6 py-4 hover:text-[#9929EA]">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#about"
                onClick={closeMenu}
                className="block px-6 py-4 hover:text-[#9929EA]">
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#projects"
                onClick={closeMenu}
                className="block px-6 py-4 hover:text-[#9929EA]">
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#contact"
                onClick={closeMenu}
                className="block px-6 py-4 hover:text-[#9929EA]">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
