"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { MotionTemplateProps } from "./MotionTemplate";

const ScrollMotionTemplate: React.FC<MotionTemplateProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollMotionTemplate;
