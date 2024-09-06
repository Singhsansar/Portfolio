import React from "react";
import { logo } from "../../assets/index";

const Footer = () => {
  return (
    <div className="w-full  bg-slate-950 mt-32 py-10 bg-grey-900 text-white border-t-[1px] border-t-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Media */}
          <div className="flex flex-col gap-8">
            <img className="w-32" src={logo} alt="logo" />
            <div className="flex gap-4 text-xl shadow-none text-white">
              <a href="https://facebook.com" className="bannerIcon">
                <i className="fi fi-brands-facebook"></i>
              </a>
              <a href="https://twitter.com" className="bannerIcon">
                <i className="fi fi-brands-twitter"></i>
              </a>
              <a href="https://linkedin.com" className="bannerIcon">
                <i className="fi fi-brands-linkedin"></i>
              </a>
              <a href="https://instagram.com" className="bannerIcon">
                <i className="fi fi-brands-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl uppercase text-designColor tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-4 font-medium">
              <li>
                <a href="#about" className="hover:text-designColor">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-designColor">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-designColor">
                  Services
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-designColor">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-designColor">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl uppercase text-designColor tracking-wider mb-4">
              Resources
            </h3>
            <ul className="flex flex-col gap-4 font-medium">
              <li>
                <a href="#authentication" className="hover:text-designColor">
                  Authentication
                </a>
              </li>
              <li>
                <a href="#status" className="hover:text-designColor">
                  System Status
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-designColor">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-designColor">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#rights" className="hover:text-designColor">
                  Over Right
                </a>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="text-xl uppercase text-designColor tracking-wider mb-4">
              Developers
            </h3>
            <ul className="flex flex-col gap-4 font-medium">
              <li>
                <a href="#documentation" className="hover:text-designColor">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#api" className="hover:text-designColor">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-designColor">
                  Support
                </a>
              </li>
              <li>
                <a href="#open-source" className="hover:text-designColor">
                  Open Source
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-400 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Nikhil Singh. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
