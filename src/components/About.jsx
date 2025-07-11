import React from 'react';
import { aboutbg } from '../assets/assetsindex.js'; // Ensure assets are imported 

const About = () => {
  return (
    <section
      id="about"
      className="pt-28 px-6 bg-white text-black mt-30 relative overflow-hidden "
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${aboutbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.08,
        }}
      ></div>
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto font-winky">
        <div className="text-center mb-24">
          <h2 className="text-6xl font-bold mb-5 uppercase">About Me</h2>
          <div
            className=" rounded-full"
            style={{
              width: '0.8cm',
              height: '6px',
              backgroundColor: '#9929EA',
              margin: '0 auto',
            }}
          ></div>
          <p className="mt-4 text-[1.2rem] text-gray-700">
            Here you will find more information about me, what I do,
            <br />
            and my current skills mostly in terms of programming and technology.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold mb-4">Get to know me!</h3>
            <p className="text-gray-700 mb-4 text-[1.2rem] text-wrap">
              Hi! I’m Shivraj Desai, a passionate Frontend Web Developer who
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
              I’m always open to exciting opportunities where I can collaborate,
              grow, and make meaningful contributions. If you’re working on
              something great and think I could be a good fit — let’s connect!
              Feel free to reach out or connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/shivraj-desai-b4842722a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9929EA] underline">
                LinkedIn
              </a>
              .
            </p>
            <div className="mt-16 mb-20">
              <a
                href="#contact"
                className="px-10 py-3 bg-[#9929EA] text-white rounded transition-transform duration-300 ease-in-out hover:-translate-y-1 uppercase font-bold text-lg shadow-lg"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 pl-36">
            <h3 className="text-3xl font-semibold mb-4">My Skills</h3>
            <ul className="flex flex-wrap gap-4 text-gray-700">
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
                <div className="inline-block bg-zinc-400 text-white rounded transition-transform duration-300 ease-in-out font-bold text-md shadow-lg px-4 py-2">
                  C++
                </div>
              </li>
              <li>
                <div className="inline-block bg-zinc-400 text-white rounded transition-transform duration-300 ease-in-out font-bold text-md shadow-lg px-4 py-2">
                  Java
                </div>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;