import React from "react";

const FeatureCard = ({ title, description }) => (
  <div className="bg-gray-800 p-8 rounded-lg">
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Features = () => {
  return (
    <div className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <FeatureCard
            title="UI/UX Design"
            description="Crafting intuitive and beautiful user interfaces that are a joy to use."
          />
          <FeatureCard
            title="Web Development"
            description="Building fast, responsive, and secure websites with modern technologies."
          />
          <FeatureCard
            title="Branding"
            description="Creating a strong brand identity that resonates with your target audience."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
