import React from "react";
import { FaLinkedin, FaGithub, FaBookOpen } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-14 font-winky">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-start md:items-start gap-y-10 gap-x-80 text-left">
        <div className="footer-left md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 uppercase">Shivraj Desai</h2>
          <p className="text-lg text-white max-w-md">
            A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
          </p>
        </div>
        <div className="footer-right md:w-1/2">
          <h3 className="text-2xl font-bold uppercase mb-2">Social</h3>
          <div className="flex gap-6 text-white text-2xl">
            <a href="https://www.linkedin.com/in/shivrajdesai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:shivraj@example.com" aria-label="Email">
              <FaBookOpen />
            </a>
          </div>
        </div>
      </div>
    <div className="mx-64 w-[856px] h-px bg-white mt-10"></div>
    </footer>
  );
};

export default Footer;
