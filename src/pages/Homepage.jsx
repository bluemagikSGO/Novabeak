import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import MarketStats from "../components/MarketStats";
import TrustUs from "../components/TrustUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="font-sans">
      <NavBar />
      <Hero />
      <HowItWorks />
      <MarketStats />
      <TrustUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Homepage;
