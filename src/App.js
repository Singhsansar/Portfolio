import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import withFadeIn from './components/common/withFadeIn'
import professionalSkills from "./components/skills/professionalSkills";

const FadeInSkills = withFadeIn(professionalSkills)
const FadeInBanner = withFadeIn(Banner);
const FadeInFeatures = withFadeIn(Features);
const FadeInProjects = withFadeIn(Projects);
const FadeInResume = withFadeIn(Resume);
const FadeInContact = withFadeIn(Contact);
const FadeInFooter = withFadeIn(Footer);

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText overflow-x-hidden">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <FadeInBanner />
        <FadeInSkills/>
        <FadeInFeatures />
        <FadeInProjects />
        <FadeInResume />
        <FadeInContact />
      </div>
      <FadeInFooter />
    </div>
  );
}

export default App;
