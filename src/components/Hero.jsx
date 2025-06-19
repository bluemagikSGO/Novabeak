import React from "react";
import bitcoin from "../assets/bitcoin.png";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:ml-15">
        {/* Left: Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left lg:ml-16">
          <h1 className="text-4xl sm:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Your gateway to <br className="hidden sm:block" />
            <span className="text-blue-600">smart crypto investing.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Invest in the world's digital future securely.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition-all cursor-pointer">
            <a href="https://my.novabeak.com/">Get Started</a>
          </button>
        </div>

        {/* Right: Image */}
        <div
          className="lg:w-1/2 mb-6 lg:mb-0  flex justify-center"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img
            src={bitcoin}
            alt="Bitcoin phone"
            className="w-[300px] sm:w-[350px] md:w-[450px] lg:mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
