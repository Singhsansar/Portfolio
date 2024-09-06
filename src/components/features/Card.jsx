import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ item: { title, des, icon }, index }) => {
  return (
    <div
      className="w-full h-90 px-6 py-4 md:px-8 md:py-5 lg:px-12 lg:py-6 rounded-lg flex items-center bg-gradient-to-tr from-[#1a1a2e] via-[#283d3b] to-[#ab7028] shadow-sm group hover:bg-gradient-to-b hover:from-[#1a1a2e] hover:via-[#16213e] hover:to-[#ffaf00] transition-all duration-500"
      style={{ transitionDelay: `${index * 300}ms` }}
    >
      <div className="h-60 md:h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-6 md:gap-10 translate-y-12 md:translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-8 h-6 md:w-10 md:h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-4xl md:text-5xl text-[#3222df]">
                {icon}
              </span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-[#3222df] inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-[#3222df] inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-[#3222df] inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-[#3222df] inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <h2 className="text-lg md:text-xl lg:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="text-sm md:text-base text-gray-300">{des}</p>
            <span className="text-xl md:text-2xl text-[#00aaff]">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
