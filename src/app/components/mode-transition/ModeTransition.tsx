"use client";
import React from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import moonAnimation from "../../assets/moon-animation.json";
import sunAnimation from "../../assets/sun-animation.json";

interface ModeTransitionProps {
  darkMode: boolean;
}

const ModeTransition: React.FC<ModeTransitionProps> = ({ darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
      className={`inset-0 z-50 fixed h-screen w-screen flex justify-center items-center ${
        darkMode ? "bg-neutral-200" : "bg-neutral-900"
      }`}
    >
      <div>
        <Player
          autoplay
          loop
          src={darkMode ? sunAnimation : moonAnimation}
          style={{ height: "300px", width: "300px" }}
          className="mb-20"
        />
        <p
          className={`${
            darkMode ? "text-black" : "text-white"
          } font-mono text-xl md:text-3xl font-bold text-center`}
        >
          Switching to {darkMode ? "Light Mode" : "Dark Mode"}...
        </p>
      </div>
    </motion.div>
  );
};

export default ModeTransition;
