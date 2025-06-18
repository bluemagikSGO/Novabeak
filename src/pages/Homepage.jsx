import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import MarketStats from "../components/MarketStats";

const Homepage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <HowItWorks />
      <MarketStats />
    </div>
  );
};

export default Homepage;
