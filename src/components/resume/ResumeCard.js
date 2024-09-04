import React, { useState, useEffect } from 'react';

const ResumeCard = ({ title, subTitle, result, des }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const animationFrame = requestAnimationFrame(() => setLoaded(true));
        return () => cancelAnimationFrame(animationFrame);
    }, []);

    return (
        <div className={`w-full h-auto group flex ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 ease-in-out`}>
            <div className="w-10 h-[6px] bg-opacity-50 mt-16 relative">
                <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
                    <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-[#ffaf00] duration-300"></span>
                </span>
            </div>
            <div className="w-full bg-gradient-to-r from-[#1a1a2e] via-[#283d3b] to-[#ab7028] hover:bg-gradient-to-b hover:from-[#ffaf00] hover:to-[#000000] duration-300 rounded-lg p-4 lg:p-6 flex flex-col justify-center gap-4 lg:gap-6 shadow-md hover:shadow-lg transition-shadow ease-in-out">
                <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:items-center">
                    <div className="w-full">
                        <h3 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-black duration-300">
                            {title}
                        </h3>
                        <p className="text-sm lg:text-base mt-2 text-gray-400 group-hover:text-black duration-300">
                            {subTitle}
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <p className="px-4 py-2 text-[#ffaf00] bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-md text-sm font-medium">
                            {result}
                        </p>
                    </div>
                </div>
                <p className="text-sm lg:text-base font-medium text-gray-400 group-hover:text-gray-700 duration-300">
                    {des}
                </p>
            </div>
        </div>
    );
};

export default ResumeCard;
