"use client";
import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CgMenu } from "react-icons/cg";

const FloatingNavigator = () => {
  const [scrolledDown, setScrolledDown] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 100;

      setScrolledDown(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {scrolledDown && (
          <motion.div
            initial={{ opacity: 0, scale: 0.001 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.001 }}
            className="hidden md:block fixed top-7 right-7 z-50 cursor-pointer border bg-white rounded-lg p-1"
            onClick={() => alert("hi")}
          >
            <CgMenu className="h-8 w-auto" />
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className="block md:hidden fixed top-7 right-7 z-50 cursor-pointer border bg-white rounded-lg p-1"
        onClick={() => alert("hi")}
      >
        <CgMenu className="h-8 w-auto" />
      </div>
    </>
  );
};

export default FloatingNavigator;
