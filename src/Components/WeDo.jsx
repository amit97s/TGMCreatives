import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WeDo = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="w-full bg-gradient-to-b from-[#043148] to-[#033047] py-24"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          variants={itemVariants}
          className="text-5xl font-bold text-white mb-16 text-center"
        >
          What We <span className="text-red-500">Do</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Our Approach
            </h3>
            <p className="text-white/80 leading-relaxed">
            We create engaging reels and videos that help businesses capture attention, boost brand awareness, and drive customer engagement. In today’s fast-paced digital world, standing out is essential, and visually compelling content is the key to making a lasting impression. Our videos not only showcase your products but also spark conversations, encourage interactions, and turn viewers into loyal customers.
<br />
<br />  
By understanding your brand’s vision and target audience, we craft high-quality, trend-driven content that resonates with potential buyers. Using creative storytelling, eye-catching visuals, and strategic messaging, we ensure your brand reaches the right people and leaves a lasting impact. Let’s elevate your business with content that engages, inspires, and converts!
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-2xl"
            style={{ scale }}
          >
            <motion.img
              src="https://cdn.pixabay.com/photo/2024/01/07/10/56/belem-tower-8492812_1280.jpg"
              className="w-full h-[400px] object-cover"
              alt="What we do"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default WeDo;