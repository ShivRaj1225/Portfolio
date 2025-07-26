import React from "react";
import { Link } from "react-scroll";
import { aboutbg } from "../assets/assetsindex.js";
import { motion } from "framer-motion";
// Ensure assets are imported

const About = () => {
  return (
    <motion.section
      id="about"
      className="pt-28 px-6 bg-white text-black relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}>
      <div
        className="absolute inset-0 z-0 mtb-10"
        style={{
          backgroundImage: `url(${aboutbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.08,
        }}></div>
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto font-winky">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-bold mb-5 uppercase">About Me</h2>
            <div
              className="rounded-full"
              style={{
                width: "0.8cm",
                height: "6px",
                backgroundColor: "#9929EA",
                margin: "0 auto",
              }}></div>
            <div className="mt-4 text-center">
              <p className="text-[1.2rem] font-normal text-gray-700">
                Here you will find more information
              </p>
              <p className="text-[1.2rem] font-normal text-gray-700 mt-2">
                about me, what I do, and my current skills
              </p>
              <p className="text-[1.2rem] font-normal text-gray-700 mt-1">
                mostly in terms of programming and technology.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Column */}
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4">Get to know me!</h3>
              <p className="text-gray-700 mb-4 text-[1.2rem] break-words">
                Hi! I’m Shivraj Desai, a passionate{" "}
                <span className="font-bold text-black">Web Developer</span> who
                enjoys building responsive, user-centric websites and web
                applications. My focus lies in crafting clean interfaces using
                technologies like React, JavaScript, and Tailwind CSS, ensuring
                every pixel serves a purpose and every component performs
                smoothly.
              </p>
              <p className="text-gray-700 mb-4 text-[1.2rem]">
                I’ve also been expanding my skills into the full-stack space,
                exploring tools like Node.js, Express, and MongoDB to build more
                dynamic, data-driven applications. Along the way, I love sharing
                the things I learn, hoping they help someone else in the dev
                community.
              </p>
              <p className="text-gray-700 text-[1.2rem]">
                I’m always open to exciting opportunities where I can
                collaborate, grow, and make meaningful contributions. If you’re
                working on something great and think I could be a good fit —
                let’s connect! Feel free to reach out or connect with me on{" "}
                <a
                  href="https://www.linkedin.com/in/shivraj-desai-b4842722a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9929EA] underline">
                  LinkedIn
                </a>
                .
              </p>
              <div className="mt-8 md:mb-12 mb-4">
                <Link
                  to="contact"
                  smooth={true}
                  duration={800}
                  offset={-20}
                  className="inline-block px-10 py-3 bg-[#9929EA] text-white rounded transform transition-transform duration-300 ease-in-out hover:-translate-y-1 uppercase font-bold text-lg shadow-lg cursor-pointer"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Right Column */}
            <div className="md:w-1/2 md:pl-36 sm:pb-12 sm:mb-12">
              <h3 className="text-3xl font-semibold mb-4">My Skills</h3>
              <ul className="flex flex-wrap gap-4 text-gray-700 mb-10">
                <li>
                  <div className="inline-block bg-zinc-400 text-white rounded transition-transform duration-300 ease-in-out font-bold text-md shadow-lg px-4 py-2">
                    C++
                  </div>
                </li>
                <li>
                  <div className="inline-block bg-zinc-400 text-white rounded transition-transform duration-300 ease-in-out font-bold text-md shadow-lg px-4 py-2">
                    JavaScript
                  </div>
                </li>
                <li>
                  <div className="inline-block bg-zinc-400 text-white rounded transition-transform duration-300 ease-in-out font-bold text-md shadow-lg px-4 py-2">
                    React
                  </div>
                </li>
                <li>
                  <div className="inline-block bg-zinc-400 text-white rounded transition-transform duration-300 ease-in-out font-bold text-md shadow-lg px-4 py-2">
                    NodeJS
                  </div>
                </li>
                <li>
                  <div className="inline-block bg-zinc-400 text-white rounded transition-transform duration-300 ease-in-out font-bold text-md shadow-lg px-4 py-2">
                    Express.js
                  </div>
                </li>
                <li>
                  <div className="inline-block bg-zinc-400 text-white rounded transition-transform duration-300 ease-in-out font-bold text-md shadow-lg px-4 py-2">
                    MongoDB
                  </div>
                </li>
                <li>
                  <div className="inline-block bg-zinc-400 text-white rounded transition-transform duration-300 ease-in-out font-bold text-md shadow-lg px-4 py-2">
                    GitHub
                  </div>
                </li>
                <li>
                  <div className="inline-block bg-zinc-400 text-white rounded transition-transform duration-300 ease-in-out font-bold text-md shadow-lg px-4 py-2">
                    Responsive Design
                  </div>
                </li>
                <li>
                  <div className="text-md inline-block bg-zinc-400 text-white rounded transition-transform duration-300 ease-in-out font-bold shadow-lg px-4 py-2">
                    HTML
                  </div>
                </li>
                <li>
                  <div className="inline-block bg-zinc-400 text-white rounded transition-transform duration-300 ease-in-out font-bold text-md shadow-lg px-4 py-2">
                    CSS
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
