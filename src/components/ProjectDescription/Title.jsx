import React from "react";
import { aboutbg } from "../../assets/assetsindex";
import { motion } from "framer-motion";

const Title = ({ name, description, liveLink }) => {
  return (
    <motion.section
      id="title"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 font-winky"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${aboutbg})` }}></div>
      {/* <img src={profile} alt="Profile" className="w-32 h-32 rounded-full mb-4 shadow-lg" /> */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-7xl font-bold text-black mb-2 md:mb-2 uppercase break-words">
          {name}
        </h1>
        <div
          className=" rounded-full"
          style={{
            width: "0.8cm",
            height: "6px",
            backgroundColor: "#9929EA",
            margin: "0 auto",
          }}></div>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium mb-8 md:mb-10 mt-6 md:mt-6">
          {description}
        </p>
        <a
          href={liveLink}
          className="inline-block w-auto max-w-sm px-6 sm:px-8 md:px-16 py-3 bg-[#9929EA] text-white rounded transform transition-transform duration-300 ease-in-out hover:-translate-y-1 uppercase font-bold sm:text-base md:text-lg shadow-lg">
          View Project
        </a>
      </div>
    </motion.section>
  );
};

export default Title;
