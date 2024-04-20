"use client";
import React from "react";
import { motion } from "framer-motion";

const Motion = () => {
  return (
    <div>
      <motion.div
        className="m-96"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          loop: Infinity,
        }}
      >
        hi
      </motion.div>
    </div>
  );
};

export default Motion;
