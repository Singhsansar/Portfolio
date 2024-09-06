import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
import "./Banner.css";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full py-28 flex lg:gap-32 font-titleFont border-b-[1px] border-b-white responsive-banner"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
