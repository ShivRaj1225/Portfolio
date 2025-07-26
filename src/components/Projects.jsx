import React from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="pt-32 pb-5 bg-white text-black font-winky"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4">
        <h2 className="text-6xl font-bold mb-4 uppercase text-center">
          Projects
        </h2>
        <div
          className="rounded-full"
          style={{
            width: "0.8cm",
            height: "6px",
            backgroundColor: "#9929EA",
            margin: "0 auto",
          }}></div>
        <p className="mt-4 text-[1.2rem] text-gray-700 text-center pb-10">
          Here you will find some of the personal
          <br />
          projects that I created, with each project containing its own case
          study
        </p>

        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col md:flex-row gap-12 items-center mb-20">
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-[220px] xs:h-[260px] sm:h-[320px] md:h-[500px] flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 flex flex-col items-center gap-y-4 sm:items-start">
              <h3 className="text-4xl font-bold">{project.title}</h3>
              <p className="text-gray-700 text-[1.2rem] text-center md:text-left">
                {project.description}
              </p>
              <Link
                to={`/project/${project.slug}`}
                className="px-10 py-3 bg-[#9929EA] text-white rounded transition-transform duration-300 ease-in-out hover:-translate-y-1 uppercase font-bold text-lg shadow-lg mt-1">
                Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
