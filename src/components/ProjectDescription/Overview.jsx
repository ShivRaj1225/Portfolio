import React from "react";
import { motion } from 'framer-motion';
import { useParams } from "react-router-dom";
import { projectsData } from "../../data/projectsData";
import { Big_NFT } from "../../assets/assetsindex"; // or project.image if you want it dynamic

const Overview = () => {
  const { projectId } = useParams();
  const project = projectsData.find(
    (proj) => proj.id.toString() === projectId || proj.slug === projectId
  );

  if (!project)
    return <div className="text-red-500 p-4">Project not found</div>;

  return (
    <motion.section
      className="font-winky"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* IMAGE HERO */}
      <div
        className="
        relative w-full 
        aspect-[16/9]         // Ensures proportional hero on all screens
        md:h-[550px]         // Keep nice and tall hero on desktop
        overflow-hidden 
        bg-white
        flex items-center justify-center
        ">
        <img
          src={Big_NFT /* or project.image if you want it dynamic */}
          alt={project.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* OVERVIEW */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-10 sm:py-16 text-black">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>

        {project.overview.split("\n\n").map((para, i) => (
          <p key={i} className="mb-6 text-lg text-gray-700">
            {para}
          </p>
        ))}

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Tools Used</h3>
          <ul className="flex flex-wrap gap-3">
            {project.techStack.map((tool, index) => (
              <li
                key={index}
                className="text-md inline-block bg-zinc-400 text-white rounded font-bold shadow-lg px-5 py-3">
                {tool}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-16 uppercase ">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#9929EA] rounded text-white font-semibold text-center inline-block transition-transform duration-300 ease-in-out hover:-translate-y-1 cursor-pointer w-auto max-w-sm">
            Project Link
          </a>
          <a
            href="/"
            className="px-6 py-3 border-[#9929EA] border-2 rounded text-black font-semibold text-center inline-block transition-transform duration-300 ease-in-out hover:-translate-y-1 w-auto max-w-sm">
            Go Back
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Overview;
