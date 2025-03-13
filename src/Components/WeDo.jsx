import React from "react";
import { motion } from "framer-motion";

const WeDo = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#043148] to-[#033047] py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-semibold text-white mb-6"
        >
          What We Do <span className="text-gray-300">-</span>
        </motion.h2>
        <div className="flex flex-col md:flex-row h-80 items-center gap-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="md:w-3/5 p-6 bg-white/10 backdrop-blur-lg h-80 rounded-lg shadow-lg"
          >
            <p className="text-white text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              odit minus. Facilis odio optio sint, accusantium harum sit,
              repellendus ex autem nostrum asperiores debitis quae, neque
              ducimus aliquam. Rem eveniet sapiente voluptatum aperiam!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="md:w-2/5 relative"
          >
            <img
              src="https://cdn.pixabay.com/photo/2024/01/07/10/56/belem-tower-8492812_1280.jpg"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
              alt="What we do"
            />
            <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WeDo;
