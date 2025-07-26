import React from "react";
import { Link } from "react-scroll";
import { background } from "../assets/assetsindex";
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 font-winky home-bg-responsive"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-black mb-3 uppercase">
        Hey, I'm Shivraj Desai
      </h1>
      <div
        className=" rounded-full"
        style={{
          width: "0.8cm",
          height: "6px",
          backgroundColor: "#9929EA",
          margin: "0 auto",
        }}></div>
      <p className="text-lg sm:text-2xl md:text-xl text-gray-600 mb-6 md:mb-10 md:mt-5 mt-3">
        A Web Developer building and managing Websites
        <br className="hidden sm:block" />
        And Apps that leads to the success of the overall product
      </p>
      <Link
        to="projects"
        smooth={true}
        duration={800}
        offset={-60}
        className="w-auto max-w-full sm:w-auto px-6 py-3 bg-[#9929EA] text-white rounded transition-transform duration-300 ease-in-out hover:-translate-y-1 uppercase font-bold text-base sm:text-lg shadow-lg cursor-pointer"
      >
        View My Projects
      </Link>
    </motion.section>
  );
};

export default Home;
