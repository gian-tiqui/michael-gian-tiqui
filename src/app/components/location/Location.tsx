"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BiGlobe } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const Location = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const locationVariant = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: "-100%", opacity: 0 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, bounce: 0 }}
          variants={locationVariant}
        >
          <Link
            href={"https://maps.app.goo.gl/XcrqQ9deFkXtfisP6"}
            className="hidden text-white h-16 w-52 bg-neutral-900 -rotate-6 hover:rotate-6 rounded-e-full md:flex justify-center items-center gap-2 dark:bg-white shadow-md"
          >
            <BiGlobe className="text-white h-12 w-auto dark:text-black" />
            <p className="font-serif text-white text-lg dark:text-black">
              Locate me
            </p>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Location;
