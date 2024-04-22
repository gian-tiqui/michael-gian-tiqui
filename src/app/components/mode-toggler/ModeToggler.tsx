"use client";
import React, { useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

const ModeToggler = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const changeMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className="w-16 h-16 rounded-full bg-black flex items-center justify-center"
      onClick={changeMode}
    >
      {darkMode ? (
        <IoSunny className="text-white h-7 w-auto" />
      ) : (
        <IoMoon className="text-white h-7 w-auto" />
      )}
    </div>
  );
};

export default ModeToggler;
