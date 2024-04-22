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
      className="w-16 h-16 rounded-full flex items-center justify-center fixed bottom-7 right-7 dark:hover:bg-gray-800 bg-neutral-900 hover:bg-neutral-800"
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
