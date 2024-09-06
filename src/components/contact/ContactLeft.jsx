import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full  bg-slate-950 border border-gray-600 p-4 lgl:p-8 rounded-lg shadow-md flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-6"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Nikhil Kumar Singh</h3>
        <p className="text-lg font-normal text-gray-400">
          Machine Learning Engineer
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 74810 30330</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">singhsansar433@gmail.com</span>
        </p>
        <p className="text-base text-justify text-gray-400 tracking-wide">
          I'm a focused Machine Learning Engineer specializing in NLP. I thrive
          on pushing the boundaries of AI, delivering impactful solutions with
          innovative insights.
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <h2 className="text-base uppercase font-titleFont text-gray-400 mb-4 tracking-wide">
          Find me on
        </h2>
        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
            aria-label="Facebook"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
