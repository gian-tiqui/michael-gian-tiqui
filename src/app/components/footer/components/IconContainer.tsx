"use client";
import { motion } from "framer-motion";
import React, { ReactNode, useState } from "react";

export const variants = {
  float: { y: -7 },
  rest: { y: 0 },
};

const IconContainer = ({ children }: { children: ReactNode }) => {
  const [animate, setAnimate] = useState("rest");

  const float = () => setAnimate("float");
  const rest = () => setAnimate("rest");

  return (
    <motion.div
      animate={animate}
      variants={variants}
      className="rounded-full shadow-md p-2 bg-white cursor-pointer hover:bg-gray-300 dark:bg-black"
      onMouseEnter={float}
      onMouseLeave={rest}
    >
      {children}
    </motion.div>
  );
};

export default IconContainer;
