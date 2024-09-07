import React from "react";
import Banner from "../components/banner/Banner";
import Features from "../components/features/Features";
import Projects from "../components/projects/Projects";
import Resume from "../components/resume/Resume";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Skills from "../components/skills/skills";

const Homepage = () => {
  return (
    <div className="bg-bodyColor">
      <div className="  relative w-full h-full bg-bodyColor">
        <div className="absolute inset-0 h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
        </div>

        <div>
          <div className="relative max-w-screen-xl mx-auto z-10">
            <Banner />
            <Skills />
            <Features />
            <Projects />
            <Resume />
            <Contact />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
