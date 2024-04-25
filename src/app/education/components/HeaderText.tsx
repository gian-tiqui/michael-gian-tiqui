"use client";
import React from "react";
import { motion } from "framer-motion";

const HeaderText = () => {
  return (
    <>
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="text-white dark:text-black text-center md:text-5xl font-sans font-bold mb-20"
      >
        Education
      </motion.h1>
    </>
  );
};

export default HeaderText;
