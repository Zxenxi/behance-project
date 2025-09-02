import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import AnimatedSection from "./components/AnimatedSection"; // <-- Import here

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main>
        {/* Wrap each section you want to animate */}
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
        <AnimatedSection>
          <Features />
        </AnimatedSection>
        <AnimatedSection>
          <Portfolio />
        </AnimatedSection>
        <AnimatedSection>
          <CTA />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;
