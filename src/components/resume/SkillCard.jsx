import React from "react";

const SkillCard = ({ category, title, skills }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow flex flex-col bg-gradient-to-r from-[#000000] via-[#000000] to-[#14120b] group hover:bg-gradient-to-b hover:from-[#ffaf00] hover:to-[#14120b] transition-colors duration-1000">
      <div className="w-full h-[10px] rounded-lg bg-gradient-to-r from-[#020343] to-white"></div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl uppercase text-designColor font-bold">
            {category}
          </h3>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-2xl uppercase font-bold text-white font-titleFont">
            {title}
          </h3>
        </div>
        <div className="flex flex-col gap-2">
          {skills.map((skill, index) => (
            <p key={index} className="text-sm uppercase font-medium">
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
