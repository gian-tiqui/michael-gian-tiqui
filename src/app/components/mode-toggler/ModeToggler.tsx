"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import ModeTransition from "../mode-transition/ModeTransition";
import { ModeContext } from "@/app/context-provider/ContextProvider";

const ModeToggler = () => {
  const { darkMode, setDarkMode } = useContext(ModeContext);
  const [scrolledDown, setScrolledDown] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(0.7);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const increaseOpacity = () => {
    setOpacity(1);
  };

  const decreaseOpacity = () => {
    setOpacity(0.5);
  };

  const changeMode = () => {
    setDarkMode((prevMode) => !prevMode);
    setTimeout(() => {
      document.documentElement.classList.toggle("dark");
    }, 500);

    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolledDown(scrollY > 0);
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
            animate={{ opacity: opacity, scale: 1 }}
            exit={{ opacity: 0, scale: 0.001 }}
            onMouseEnter={increaseOpacity}
            onMouseLeave={decreaseOpacity}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full z-50 hover:shadow-xl flex items-center justify-center fixed bottom-7 right-7 dark:hover:bg-neutral-700 bg-neutral-200 dark:bg-black hover:bg-neutral-100"
            onClick={changeMode}
          >
            {darkMode ? (
              <IoMoon className="text-white h-7 w-auto" />
            ) : (
              <IoSunny className="h-7 w-auto text-black" />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isTransitioning && <ModeTransition darkMode={darkMode} />}
      </AnimatePresence>
    </>
  );
};

export default ModeToggler;
