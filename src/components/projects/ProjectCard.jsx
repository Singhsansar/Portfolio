import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, link, web }) => {
  return (
    <div className="w-full h-auto p-6 xl:px-8 xl:py-6 rounded-lg shadow-sm bg-gradient-to-r from-[#1a1a2e] via-[#283d3b] to-[#ab7028] group hover:bg-gradient-to-b hover:from-[#ffaf00] hover:to-[#1a1a1a] transition-all duration-500 transform hover:scale-105">
      <div className="w-full h-[200px] overflow-hidden rounded-lg relative">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
          src={src}
          alt="Project"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
      </div>
      <div className="w-full mt-4 flex flex-col gap-4">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-lg uppercase text-white font-bold">{title}</h3>
            <div className="flex gap-2">
              <span className="text-lg w-9 h-9 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-[#ffaf00] duration-300 cursor-pointer">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <BsGithub />
                </a>
              </span>
              <span className="text-lg w-9 h-9 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-[#ffaf00] duration-300 cursor-pointer">
                <a href={web} target="_blank" rel="noopener noreferrer">
                  <FaGlobe />
                </a>
              </span>
            </div>
          </div>
          <p className="text-sm text-justify tracking-wide mt-2 text-gray-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
