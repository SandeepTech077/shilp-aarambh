"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface YoutubeSectionProps {
  data: {
    Logo: StaticImageData;
    youtubeLink: string;
    description: string;
  };
}

const YoutubeSection: React.FC<YoutubeSectionProps> = ({ data }) => {
  const { Logo, youtubeLink, description } = data;

  return (
    <div className="w-full bg-gray-100 py-12 mx-auto">
      <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-16">
        {/* Left Section: Video */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col gap-4 order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Logo (Mobile Only) */}
          <motion.div
            className="block md:hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src={Logo}
              alt="Event Logo"
              width={300}
              height={300}
              className="object-contain w-full mx-auto"
            />
          </motion.div>

          {/* YouTube Video */}
          <motion.div
            className="aspect-video w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <iframe
              src={youtubeLink}
              title="Event Video"
              className="w-full h-full rounded-md"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>

          {/* Description (Mobile Only) */}
          <motion.p
            className="block md:hidden text-[#1D3A69] text-[14px] md:text-[16px] leading-[26px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Right Section: Desktop Logo and Description */}
        <motion.div
          className="hidden md:flex flex-col w-full md:w-1/2 order-1 md:order-2 gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src={Logo}
              alt="Event Logo"
              width={400}
              height={400}
              className="object-contain w-full max-w-[300px]"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-[#1D3A69] text-[16px] leading-[40px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default YoutubeSection;
