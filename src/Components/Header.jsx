import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
//   const [buttonVisible, setButtonVisible] = useState(false); 
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  const titleVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const words = ["Think", "Grow Media"];

  return (
    <motion.div
      style={{ opacity }}
      className="h-screen w-full flex flex-col justify-between overflow-hidden relative"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2017/02/21/16/48/tokyo-2086596_1280.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          scale,
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-[#043148]/90 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-between h-full">
        {/* Logo & Button Section */}
        <div className="flex items-center justify-between p-8">
          <motion.img
            src="https://thinkgrowmedia.com/wp-content/uploads/2024/10/Layer_32.png"
            alt="Logo"
            className="h-20"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 20 }}
          />

          <motion.button
            className="px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-white font-medium
                     hover:bg-white/20 transition-all duration-300 border border-white/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </div>

        {/* Hero Content */}
        <motion.div 
          className="p-8 mb-20"
          style={{ y }}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col gap-4">
            {words.map((word, i) => (
              <motion.div
                key={word}
                className="overflow-hidden"
                variants={letterVariants}
              >
                <motion.h1 
                  className="text-8xl md:text-9xl font-extrabold text-white"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  {word}
                </motion.h1>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-white/80 max-w-xl mt-8 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam earum 
            assumenda ipsam fuga dolorem tenetur sed quidem hic.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;