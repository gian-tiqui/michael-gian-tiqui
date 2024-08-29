import React from "react";
import { LuCircle } from "react-icons/lu";

("bg-teal-400 dark:bg-blue-600");

const Lolipop = () => {
  return (
    <div className="flex flex-col items-center">
      <LuCircle className="h-6 w-auto text-black dark:text-white" />
      <div className="border border-black dark:border-white h-full -mt-[1px]"></div>
    </div>
  );
};

export default Lolipop;
