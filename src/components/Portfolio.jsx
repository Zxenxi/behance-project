import React from "react";

const PortfolioCard = ({ imageUrl, title, category }) => (
  <div className="group relative overflow-hidden rounded-lg">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-300">{category}</p>
    </div>
  </div>
);

const Portfolio = () => {
  const projects = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600",
      title: "Project One",
      category: "Web Development",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600",
      title: "Project Two",
      category: "UI/UX Design",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600",
      title: "Project Three",
      category: "Branding",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600",
      title: "Project Four",
      category: "Web Development",
    },
  ];

  return (
    <div className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Our Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
