import React from "react";
import { LuCircle } from "react-icons/lu";

("bg-teal-400 dark:bg-blue-600");

const Lolipop = () => {
  return (
    <div className="flex flex-col items-center">
      <LuCircle className="h-5 w-auto text-white dark:text-black" />
      <div className="border-l border-white dark:border-black h-full"></div>
    </div>
  );
};

export default Lolipop;
