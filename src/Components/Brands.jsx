import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
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

  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
    ],
  };

  const stats = [
    { value: 150, label: "Brands", description: "Collaborated with over 150 brands." },
    { value: 23, label: "Countries", description: "Working across many markets internationally." },
    { value: 12, label: "Network", description: "Spanning a dozen key capitals." },
    { value: 10, label: "Years of Expertise", description: "A decade of impactful results." },
  ];

  return (
    <motion.div className="w-full bg-gradient-to-b from-[#033047] to-[#021f2d] py-24">
      <motion.h2 className="text-4xl font-bold text-white text-center mb-16">
        Trusted by <span className="text-red-500">Leading Brands</span>
      </motion.h2>

      <div className="space-y-12">
        <div className="overflow-hidden">
          <Slider {...settings}>
            {brandsLeft.map((item, index) => (
              <div key={index} className="px-1.5"> {/* Adjust spacing */}
                <img
                  src={item}
                  alt="brand"
                  className="w-full h-44 object-cover rounded-2xl"
                  style={{ marginRight: "10px" }} // Additional margin support
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="overflow-hidden">
          <Slider {...settings} rtl>
            {brandsRight.map((item, index) => (
              <div key={index} className="px-1.5"> {/* Adjust spacing */}
                <img
                  src={item}
                  alt="brand"
                  className="w-full h-44 object-cover rounded-2xl"
                  style={{ marginRight: "10px" }} // Additional margin support
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 text-center mt-20 px-10 gap-10 text-white">
        {stats.map((stat, index) => (
          <motion.div key={index} className="space-y-2">
            <Counter target={stat.value} />
            <h3 className="text-lg font-bold">{stat.label}</h3>
            <p className="text-sm text-gray-300">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = Math.ceil(target / 50);
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(interval);
        }
        setCount(start);
      }, 30);
    }
  }, [isInView, target]);

  return (
    <h2 ref={ref} className="text-5xl font-bold">
      {count}+
    </h2>
  );
};

export default Brands;
