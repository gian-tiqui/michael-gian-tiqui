"use client";
import Image from "next/image";
import React from "react";
import gian from "../../assets/michael-gian-tiqui.png";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <div className="md:max-w-[950px] mx-auto">
      <div className="flex flex-col items-center md:justify-center gap-9">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
        >
          <Image
            src={gian}
            className="rounded-full bg-gray-400 h-72 w-72 pt-10"
            alt="Michael Gian M. Tiqui"
            priority
          />
        </motion.div>

        <div className="flex flex-col gap-4 items-center justify-center">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75, delay: 0.1 }}
            className="font-sans text-white text-sm md:text-lg dark:text-black"
          >
            Hey there 👋, I am
          </motion.p>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75, delay: 0.15 }}
            className="font-sans font-extrabold text-2xl md:text-4xl text-white dark:text-black"
          >
            Michael Gian Tiqui
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75, delay: 0.2 }}
            className="font-sans text-white text-md md:text-xl font-bold dark:font-light dark:text-black"
          >
            An Aspiring Software Engineer
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
