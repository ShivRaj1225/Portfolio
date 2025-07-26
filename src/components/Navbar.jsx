import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
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
      <div className="max-w-[1600px] mx-auto flex justify-between items-center w-full py-4 px-4 sm:px-6 md:px-8">
        {/* Profile + Name */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={700}
          offset={-80}
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
        </ScrollLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12 text-gray-900 font-medium font-winky text-lg uppercase ">
          <li>
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              duration={700}
              offset={-80}
              className="hover:text-[#9929EA] cursor-pointer"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={700}
              offset={-80}
              className="hover:text-[#9929EA] cursor-pointer"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              duration={700}
              offset={-80}
              className="hover:text-[#9929EA] cursor-pointer"
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={700}
              offset={-80}
              className="hover:text-[#9929EA] cursor-pointer"
            >
              Contact
            </ScrollLink>
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
              <ScrollLink
                to="home"
                smooth={true}
                duration={700}
                offset={-80}
                onClick={closeMenu}
                className="block px-6 py-4 hover:text-[#9929EA] cursor-pointer"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={700}
                offset={-80}
                onClick={closeMenu}
                className="block px-6 py-4 hover:text-[#9929EA] cursor-pointer"
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={700}
                offset={-80}
                onClick={closeMenu}
                className="block px-6 py-4 hover:text-[#9929EA] cursor-pointer"
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={700}
                offset={-80}
                onClick={closeMenu}
                className="block px-6 py-4 hover:text-[#9929EA] cursor-pointer"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
