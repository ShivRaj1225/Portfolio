import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaBookOpen } from "react-icons/fa";
import { socialsData } from "../data/socialsData"; // Adjust path accordingly

// Map iconName strings to icon components
const iconMap = {
  FaLinkedin: FaLinkedin,
  FaGithub: FaGithub,
  FaBookOpen: FaBookOpen,
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-black text-white pt-10 pb-5 font-winky"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto px-6 md:px-24 flex flex-col md:flex-row justify-between items-start gap-y-10">
        {/* Right Side: Socials - show on top on mobile */}
        <div className="w-full md:w-1/2 flex md:justify-end order-1 md:order-2 opacity-90">
          <div>
            <h3 className="text-2xl font-bold uppercase mb-2">Social</h3>
            <div className="flex gap-6 text-white text-2xl">
              {socialsData.map(({ id, url, iconName, name }) => {
                const IconComponent = iconMap[iconName];
                return (
                  <a
                    key={id}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="hover:text-[#9929EA] transition">
                    {IconComponent && <IconComponent />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Left Side: Name & Description - keep bottom on mobile, left on desktop */}
        <div className="w-full md:w-1/2 order-2 md:order-1 opacity-80">
          <h2 className="text-3xl font-bold mb-4 uppercase">Shivraj Desai</h2>
          <p className="text-lg text-white max-w-md">
            A Software Developer building the Frontend of Websites and Web
            Applications that leads to the success of the overall product.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto px-10 mt-10">
        <div className="w-full h-px bg-white opacity-20"></div>
      </div>

      {/* Centered Portfolio Link below divider */}
      <div className="flex justify-center items-center mt-3 text-sm opacity-60">
        Made by
        <a
          href="https://your-portfolio-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white hover:underline hover:text-[#9929EA] transition underline ml-1">
          {" "}
          Shivraj Desai
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
