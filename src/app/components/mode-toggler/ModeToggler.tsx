"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

const ModeToggler = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [scrolledDown, setScrolledDown] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(0.7);

  const increaseOpacity = () => {
    setOpacity(1);
  };

  const decreaseOpacity = () => {
    setOpacity(0.5);
  };

  const changeMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark");
  };

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
    scrolledDown && (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.001 }}
          animate={{ opacity: opacity, scale: 1 }}
          exit={{ opacity: 0, scale: 0.001 }}
          onMouseEnter={increaseOpacity}
          onMouseLeave={decreaseOpacity}
          className="w-16 h-16 rounded-full flex items-center justify-center fixed bottom-7 right-7 dark:hover:bg-neutral-700 bg-neutral-200 dark:bg-black hover:bg-neutral-100"
          onClick={changeMode}
        >
          {darkMode ? (
            <IoMoon className="text-white h-7 w-auto" />
          ) : (
            <IoSunny className="h-7 w-auto text-black" />
          )}
        </motion.div>
      </AnimatePresence>
    )
  );
};

export default ModeToggler;
