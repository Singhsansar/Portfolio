import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
// import Features from "./components/features/Features";
function App() {
  return (
    <div className="w-full h-q bg-bodyColor text-lightText px-4">
       <Navbar />
    <div className="max-w-screen-xl mx-auto">
       <Banner />
       {/* <Features /> */}
      
     </div>
    </div>
  );
}
export default App;
