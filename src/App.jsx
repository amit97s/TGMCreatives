import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const sections = ["Home", "Works", "About Us", "Contact"];

const App = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef(null);

  const handleDragEnd = (_, info) => {
    if (info.point.y < window.innerHeight * 0.3) {
      setActiveSection((prev) => (prev < sections.length - 1 ? prev + 1 : prev));
    } else if (info.point.y > window.innerHeight * 0.7) {
      setActiveSection((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-center bg-gray-800 p-4 z-50">
        <ul className="flex space-x-6">
          {sections.map((section, index) => (
            <li
              key={section}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 ${
                activeSection === index ? "bg-gray-700" : "hover:bg-gray-600"
              }`}
              onClick={() => setActiveSection(index)}
            >
              {section}
            </li>
          ))}
        </ul>
      </nav>

      {/* Sections */}
      <div ref={containerRef} className="h-screen w-full relative">
        {sections.map((section, index) => (
          <motion.div
            key={section}
            className="absolute top-0 left-0 w-full h-screen flex items-center justify-center text-4xl font-bold"
            initial={{ x: "100%", rotate: 15 }}
            animate={{ x: activeSection === index ? "0%" : "100%", rotate: 0 }}
            transition={{ type: "spring", damping: 15, stiffness: 100 }}
            drag="y"
            dragConstraints={containerRef}
            onDragEnd={handleDragEnd}
            style={{ backgroundColor: `hsl(${index * 90}, 60%, 50%)` }}
          >
            {section}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default App;