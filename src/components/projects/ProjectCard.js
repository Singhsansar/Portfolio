import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, link, web }) => {
  return (
    <div className="w-full h-auto p-4 xl:px-12 xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-[#000000] via-[#000000] to-[#14120b] group hover:bg-gradient-to-b hover:from-[#ffaf00] hover:to-[#000000] transition-all duration-500">
      <div className="w-full h-[85%] overflow-hidden rounded-lg relative">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
          src={src}
          alt="Project"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-white line-clamp-2 font-bold">
              {title}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <a href={link} target='_blank' rel='noopener noreferrer'><BsGithub /></a>
              </span>
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <a href={web} target='_blank' rel='noopener noreferrer'><FaGlobe /></a>
              </span>
            </div>
          </div>
          <p className="text-sm  text-justify tracking-wide mt-3 text-gray-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
