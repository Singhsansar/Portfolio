import React from 'react';

const SkillCard = ({ category, title, skills }) => {
    return (
        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
            <div className="w-full h-[10px] rounded-lg bg-gradient-to-r from-designColor to-[#202327]">
            </div>
            <div className="w-full mt-5 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-base uppercase text-designColor font-normal">
                        {category}
                    </h3>
                </div>
                <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-2xl uppercase text-white font-normal font-titleFont">
                        {title}
                    </h3>
                    <div className="flex gap-2">

                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    {skills.map((skill, index) => (
                        <p key={index} className="text-sm uppercase font-medium">{skill}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillCard;
