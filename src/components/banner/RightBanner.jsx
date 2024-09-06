import React from 'react';
import { bannerImg } from "../../assets/index";
import AnimationWrapper from '../common/animationWrapper';

const RightBanner = () => {
    return (
        <AnimationWrapper
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
        >
            <div className="relative w-full h-[350px] sm:h-[400px] lgl:h-[600px] flex justify-center items-center">
                <img
                    className="w-[200px] h-[300px] xs:w-[250px] xs:h-[350px] sm:w-[300px] sm:h-[400px] lgl:w-[450px] lgl:h-[600px] rounded-full object-cover z-10 opacity-100"
                    src={bannerImg}
                    alt="bannerImg"
                    style={{
                        transition: 'transform 0.5s ease-in-out, opacity 1s ease-in-out'
                    }}
                />

                <div
                    className="absolute bottom-0 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#ff8c00] via-[#ff2b2b] to-[#800080] shadow-shadowOne flex justify-center items-center rounded-full animate-spin-slow transition-all duration-1000 ease-in-out"
                ></div>
            </div>
        </AnimationWrapper>
    );
};

export default RightBanner;
