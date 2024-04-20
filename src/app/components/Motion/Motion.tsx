"use client";
import React from "react";
import { motion } from "framer-motion";

const Motion = () => {
  return (
    <div>
      <motion.div
        className="h-52 w-52 bg-black"
        animate={{
          opacity: [0, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          loop: Infinity,
        }}
      ></motion.div>
    </div>
  );
};

export default Motion;
