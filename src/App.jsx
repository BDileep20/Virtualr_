import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Featurs from "./components/Featurs";
import WorkFlow from "./components/WorkFlow";
import Pricing from "./components/Pricing";
import TestingMonials from "./components/TestingMonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
        <Featurs/>
        <WorkFlow/>
        <Pricing/>
        <TestingMonials/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
