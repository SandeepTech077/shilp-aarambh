"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface RegisterSectionData {
  leftIcon: StaticImageData;
  centerContent: string;
  rightIcon: StaticImageData;
  buttonText: string;
}

interface RegisterNowProps {
  data: RegisterSectionData;
}

const RegisterNow: React.FC<RegisterNowProps> = ({ data }) => {
  const { leftIcon, centerContent, rightIcon, buttonText } = data;

  return (
    <div className="w-full text-[#1D3A69] py-20 px-4 flex items-center justify-between flex-col md:flex-row gap-4 md:gap-0 overflow-hidden">
      
      {/* Left Icon */}
      <motion.div
        className="w-20 h-20 md:w-50 md:h-50 relative"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image src={leftIcon} alt="Left Icon" fill className="object-contain" />
      </motion.div>

      {/* Center Content */}
      <motion.div
        className="text-center flex flex-col items-center justify-center max-w-[700px] px-4"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="text-[24px] lg:text-[30px] font-semibold mb-10">{centerContent}</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-[#1D3A69] text-white px-14 py-3 text-[16px] lg:text-[20px] rounded-md font-medium cursor-pointer transition"
        >
          {buttonText}
        </motion.button>
      </motion.div>

      {/* Right Icon */}
      <motion.div
        className="w-20 h-20 md:w-50 md:h-50 relative"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image src={rightIcon} alt="Right Icon" fill className="object-contain" />
      </motion.div>
    </div>
  );
};

export default RegisterNow;
