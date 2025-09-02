import React from "react";

const Hero = () => {
  return (
    // Add the animation class to the main div
    <div className="text-center py-20 px-6 animate-fadeInUp">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Creative Digital Agency
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        We are a team of talented designers and developers who create beautiful
        and functional websites.
      </p>
      <button className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-300 transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
