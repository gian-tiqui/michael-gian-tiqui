import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface TechStackProps {
  children: ReactNode;
  name: string;
}

const TechStackContainer: React.FC<TechStackProps> = ({ children, name }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.001 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.001 }}
      className="rounded-xl bg-neutral-900 w-32 h-14 px-3 md:h-20 md:px-10 md:w-64 flex md:justify-center shadow-xl items-center gap-3 dark:bg-white"
    >
      {children}
      <p className="text-white font-mono md:text-2xl md:font-bold dark:text-black">
        {name}
      </p>
    </motion.div>
  );
};

export default TechStackContainer;
