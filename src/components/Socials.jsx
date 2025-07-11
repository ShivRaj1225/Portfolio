// src/components/Socials.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaBookOpen } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="fixed top-1/3 left-0 z-50 bg-white py-7 px-4 rounded-r-lg shadow-lg shadow-slate-300">
      <ul className="flex flex-col space-y-10 text-3xl text-black">
        <li className="hover:text-[#9929EA] transition-colors duration-300">
          <a href="https://linkedin.com" target="_blank">
            <FaLinkedin />
          </a>
        </li>
        <li className="hover:text-[#9929EA] transition-colors duration-300">
          <a href="https://github.com" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li className="hover:text-[#9929EA] transition-colors duration-300">
          <a href="https://book.open.com" target="_blank">
            <FaBookOpen />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
