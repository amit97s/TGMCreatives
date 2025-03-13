import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brands = () => {
  const brandsLeft = [
    "https://i.pinimg.com/474x/18/5e/ce/185ecef768d84854d8b116f62b6c6383.jpg",
    "https://i.pinimg.com/474x/80/6d/00/806d0042b00eb1c34cdb30e58f717f77.jpg",
    "https://i.pinimg.com/474x/2c/f6/38/2cf638560e6c14b58fc20cfb6c8aa97a.jpg",
    "https://i.pinimg.com/474x/58/9c/d4/589cd4729f7243ea6cf99600bcf63e99.jpg",
    "https://i.pinimg.com/474x/fe/d1/b3/fed1b3844d38e8b87fd8958f406fff70.jpg",
  ];

  const brandsRight = [
    "https://i.pinimg.com/474x/50/7b/9d/507b9d0e1ad9d33e9c6659b1d35c25e1.jpg",
    "https://i.pinimg.com/736x/56/47/85/564785c08d507a7f1b43fe26d5ab5e0b.jpg",
    "https://i.pinimg.com/474x/b6/49/31/b6493124593051d81e784a40aef57d67.jpg",
    "https://i.pinimg.com/474x/55/62/07/5562076823a9aeaae6522765cef75c52.jpg",
    "https://i.pinimg.com/474x/eb/8d/ec/eb8decd2551e45925a3366624a00aaa0.jpg",
  ];

  const settingsLeft = {
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const settingsRight = {
    ...settingsLeft,
    rtl: true,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      className="w-full bg-gradient-to-b from-[#033047] to-[#021f2d] py-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl font-bold text-white text-center mb-16"
        variants={itemVariants}
      >
        Trusted by <span className="text-red-500">Leading Brands</span>
      </motion.h2>

      <div className="space-y-12">
        <motion.div
          className="overflow-hidden"
          variants={itemVariants}
        >
          <Slider {...settingsLeft}>
            {brandsLeft.map((item, index) => (
              <motion.div
                key={index}
                className="px-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/10 backdrop-blur-lg overflow-hidden rounded-xl">
                  <img
                    src={item}
                    alt="brand"
                    className="w-full h-44 object-cover "
                  />
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>

        <motion.div
          className="overflow-hidden"
          variants={itemVariants}
        >
          <Slider {...settingsRight}>
            {brandsRight.map((item, index) => (
              <motion.div
                key={index}
                className="px-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/10 backdrop-blur-lg overflow-hidden  rounded-xl">
                  <img
                    src={item}
                    alt="brand"
                    className="w-full h-44 object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Brands;