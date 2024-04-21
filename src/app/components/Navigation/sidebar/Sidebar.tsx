"use client";
import React from "react";
import { motion } from "framer-motion";
import { routesMapping } from "@/app/utils/Routes";
import Link from "next/link";
import { iconsMapping } from "../../footer/Footer";

const Sidebar = () => {
  return (
    <motion.div
      className="fixed w-full top-0 right-0 h-screen md:w-96 bg-neutral-900 z-20 pt-40 pb-16 px-20 flex flex-col justify-between"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.2, bounce: 0 }}
    >
      <div>
        <p className="text-gray-400 font-mono mb-3">Navigation</p>
        <hr className="border-t border-t-gray-400 mb-6" />
        <ul>
          {routesMapping.map((route, index) => (
            <li key={index} className="mb-7">
              <Link
                className="text-white text-3xl font-mono hover:underline"
                href={route.path}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-gray-400 font-mono mb-3">Stay Connected</p>
        <div className="flex gap-3">
          {iconsMapping.map((icon, index) => (
            <Link
              className="font-mono text-white hover:underline text-sm"
              href={icon.path}
              key={index}
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
