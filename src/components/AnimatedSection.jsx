import React from "react";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    // Trigger the animation once it's in view
    triggerOnce: true,
    // Start the animation when the element is 10% visible
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      // Apply the animation class only when 'inView' is true
      // Start with opacity-0 so it's invisible until the animation starts
      className={`transition-opacity duration-1000 ${
        inView ? "opacity-100 animate-fadeInUp" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
