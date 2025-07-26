import React, { useState, useEffect, useRef } from "react";
import { socialsData } from '../data/socialsData';
import { FaLinkedin, FaGithub, FaBookOpen } from 'react-icons/fa';

const iconMap = {
  FaLinkedin,
  FaGithub,
  FaBookOpen
};

const FADE_DURATION = 1000; // 1 second fade animation
const IDLE_DELAY = 1000; // 1.5 seconds after scroll to hide socials

const Socials = () => {
  const [visible, setVisible] = useState(false);
  const fadeTimeout = useRef();
  const idleTimeout = useRef();
  const isHovering = useRef(false);

  // Helper to clear all timers
  const clearTimers = () => {
    if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
    if (idleTimeout.current) clearTimeout(idleTimeout.current);
  };

  // On scroll: show socials, set idle timer
  useEffect(() => {
    const onScroll = () => {
      setVisible(true);
      clearTimers();
      idleTimeout.current = setTimeout(() => {
        if (!isHovering.current) setVisible(false);
      }, IDLE_DELAY);
    };
    window.addEventListener("scroll", onScroll);
    // Optional: socials visible on load
    setVisible(true);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimers();
    };
  }, []);

  // On mouse enter: show & cancel all timers
  const handleMouseEnter = () => {
    isHovering.current = true;
    setVisible(true);
    clearTimers();
  };

  // On mouse leave: always fade out after 1s
  const handleMouseLeave = () => {
    isHovering.current = false;
    clearTimers();
    fadeTimeout.current = setTimeout(() => setVisible(false), FADE_DURATION);
  };

  return (
    <div
      className={`fixed top-1/3 left-0 z-50 bg-white py-7 px-4 rounded-r-lg shadow-lg shadow-slate-300 transition-opacity duration-1000 ease-in-out select-none ${
        visible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } hidden lg:flex`}
      aria-label="Social media links"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}>
      <ul className="flex flex-col space-y-10 text-3xl text-black">
        {socialsData.map(({ id, name, url, iconName }) => {
            const IconComponent = iconMap[iconName];
            return (
              <li key={id} className="hover:text-[#9929EA] transition-colors duration-300">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}>
                  {IconComponent && <IconComponent />}
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Socials;
