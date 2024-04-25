"use client";
import React from "react";
import { motion } from "framer-motion";

const HeaderText = () => {
  return (
    <div>
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="md:text-5xl font-bold text-center font-sans text-white dark:text-black mb-5"
      >
        Contact Me
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75, delay: 0.1 }}
        className="px-7 md:px-0 md:text-xl mx-auto text-center font-sans text-white dark:text-black md:max-w-[600px] mb-5"
      >
        Send your ideas, questions or projects you need help with here. I will
        try to respond as soon as possible.
      </motion.p>
    </div>
  );
};

export default HeaderText;
