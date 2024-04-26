"use client";
import React from "react";
import { motion } from "framer-motion";
import { routesMapping } from "@/app/utils/Routes";
import Link from "next/link";
import { iconsMapping } from "../../footer/Footer";

interface SidebarProps {
  handleExpand: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ handleExpand }) => {
  return (
    <motion.div
      className="fixed w-full top-0 right-0 h-screen md:w-96 bg-neutral-800 z-20 pt-24 pb-16 px-20 flex flex-col justify-between dark:bg-white"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.2, bounce: 0 }}
    >
      <div>
        <p className="text-gray-400 font-sans mb-3 dark:text-gray-700">
          Navigation
        </p>
        <hr className="border-t border-t-gray-400 dark:border-t-gray-700  mb-6" />
        <ul>
          {routesMapping.map((route, index) => (
            <li key={index} className="mb-7">
              <Link
                className="text-white text-3xl font-sans font-bold hover:underline dark:text-black"
                href={route.path}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-gray-400 font-sans mb-3 dark:text-gray-700">
          Stay Connected
        </p>
        <hr className="border-t border-t-gray-400 dark:border-t-gray-700 mb-2" />

        <div className="flex gap-3 flex-wrap">
          {iconsMapping.map((icon, index) => (
            <Link
              className="font-sans text-white hover:underline text-sm dark:text-black"
              href={icon.path}
              key={index}
              onClick={handleExpand}
            >
              {icon.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
