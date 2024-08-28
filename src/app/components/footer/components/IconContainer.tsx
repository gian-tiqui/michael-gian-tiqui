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
      className="rounded-full shadow-md p-2 bg-black cursor-pointer hover:opacity-80 dark:bg-white"
      onMouseEnter={float}
      onMouseLeave={rest}
    >
      {children}
    </motion.div>
  );
};

export default IconContainer;
