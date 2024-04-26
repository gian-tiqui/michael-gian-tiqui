"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface MotionTemplateProps {
  children: ReactNode;
}

const MotionTemplate: React.FC<MotionTemplateProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionTemplate;
