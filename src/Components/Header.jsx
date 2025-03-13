import React, { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [buttonVisible, setButtonVisible] = useState(false);

  return (
    <div
      className="h-screen w-full flex flex-col justify-between overflow-hidden"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2017/02/21/16/48/tokyo-2086596_1280.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Logo & Button Section */}
      <div className="flex items-center justify-between p-4 relative">
        {/* Animated Logo */}
        <motion.img
          src="https://thinkgrowmedia.com/wp-content/uploads/2024/10/Layer_32.png"
          alt="Logo"
          className="h-20"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 12,
          }}
        />

        {/* Ball Animation */}
        {!buttonVisible && (
          <motion.div
            className="w-10 h-10 bg-red-500 rounded-full absolute right-0"
            initial={{ x: "-100vw", opacity: 1 }}
            animate={{
              x: "calc(100vw - 4rem)", // Moves to button area
              opacity: 1,
              scaleX: [1, 1.3, 1], // Stretch effect
              scaleY: [1, 0.7, 1], // Squash effect
            }}
            transition={{
              duration: 3,
              type: "spring",
              stiffness: 80,
              damping: 10,
              ease: "easeOut",
            }}
            onAnimationComplete={() => setButtonVisible(true)} // Change to button
          />
        )}

        {/* Contact Button Appears After Animation */}
        {buttonVisible && (
          <motion.button
            className="border font-bold text-white px-4 py-2"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Contact
          </motion.button>
        )}
      </div>

      {/* Hero Section */}
      <div className="flex items-end w-full p-4">
        {/* Animated Text Section with Bounce Effect */}
        <motion.div
          className="w-3/4 relative"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 10,
          }}
        >
          <h1 className="text-8xl md:text-9xl font-extrabold text-white">Think</h1>
          <span
            className="absolute text-red-900 leading-none"
            style={{ fontSize: "285px", top: "-213px", left: "19.46%", transform: "translateX(-50%)" }}
          >
            .
          </span>
          <h1 className="text-8xl md:text-9xl font-extrabold text-white">Grow Media</h1>
        </motion.div>

        {/* Animated Description Section (Slides in from Right) */}
        <motion.div
          className="w-3/12"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 12, delay: 1 }}
        >
          <p className="text-white font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, earum assumenda ipsam
            fuga dolorem tenetur sed quidem hic. Ut quasi quibusdam rerum dignissimos, sequi earum
            expedita id ipsa et a.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
