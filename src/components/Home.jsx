import React from "react";
import { background } from "../assets/assetsindex";

const Home = () => {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 font-winky">
      {/* <img src={profile} alt="Profile" className="w-32 h-32 rounded-full mb-4 shadow-lg" /> */}
      <h1 className="text-4xl md:text-7xl font-bold text-black mb-10 uppercase">
        Hey, I'm Shivraj Desai
      </h1>
      <p className="text-4xl font-medium md:text-xl text-gray-600 mb-10">
        A Web Developer building and managing Websites and Apps
        <br />
        that leads to the success of the overall product
      </p>
      <a
        href="#projects"
        className="px-10 py-3 bg-[#9929EA] text-white rounded transition-transform duration-300 ease-in-out hover:-translate-y-1 uppercase font-bold text-lg shadow-lg">
        View Projects
      </a>
    </section>
  );
};

export default Home;
