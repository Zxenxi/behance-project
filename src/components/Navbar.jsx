import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent text-white p-6 relative">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          NEUVE
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-gray-400 transition duration-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-400 transition duration-300">
            About
          </a>
          <a href="#" className="hover:text-gray-400 transition duration-300">
            Services
          </a>
          <a href="#" className="hover:text-gray-400 transition duration-300">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-black transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
          <a href="#" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#" onClick={() => setIsOpen(false)}>
            Services
          </a>
          <a href="#" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
