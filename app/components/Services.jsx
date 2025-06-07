import React from "react";
import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Services = ({ isDarkMode }) => {
  return (
    <motion.div
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        What I Offer
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My Services
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        I am a Frontend Developer from UP, India with 1 years of experience in
        building responsive and user-friendly web applications. My expertise
        includes HTML, CSS, JavaScript, and various frontend frameworks. I am
        passionate about delivering high-quality code and continuously improving
        my skills to stay updated with the latest industry trends.
      </motion.p>
      <motion.div
        className="grid gap-6 my-10"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-10 hover:shadow-black cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
            whileHover={{ scale: 1.05 }}
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {description}
            </p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read More{" "}
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
