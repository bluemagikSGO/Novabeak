import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SponsorsSlider from "../components/SponsorsSlider";

const AboutUs = () => (
  <div className="min-h-screen flex flex-col">
    <NavBar />
    <main className="flex-grow">
      <section className="py-16 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About Nova Beak
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            Nova Beak is a next-generation crypto investment platform built for
            individuals who believe in the future of digital finance. We make it
            easy to invest, grow, and manage crypto portfolios — securely and
            intelligently.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our mission is to simplify access to digital wealth by combining
            technology, transparency, and tailored investment tools. Whether
            you're a beginner or seasoned investor, Nova Beak gives you the
            confidence to invest smarter in crypto assets that matter.
          </p>
        </div>
      </section>
      <SponsorsSlider />
    </main>

    <Footer />
  </div>
);

export default AboutUs;
