"use client";
import React from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <motion.div
      className="fixed w-full top-0 right-0 h-screen md:w-96 bg-neutral-900"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.2, bounce: 0 }}
    ></motion.div>
  );
};

export default Sidebar;
