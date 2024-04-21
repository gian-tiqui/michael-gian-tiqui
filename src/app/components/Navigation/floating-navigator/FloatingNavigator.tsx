"use client";
import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SidebarToggler from "./components/SidebarToggler";
import exp from "constants";
import Sidebar from "../sidebar/Sidebar";

const FloatingNavigator = () => {
  const [scrolledDown, setScrolledDown] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleExpand = () => {
    setExpanded((prevVal) => !prevVal);
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

  useEffect(() => {
    setExpanded(false);
  }, [scrolledDown]);

  return (
    <>
      <AnimatePresence>
        {scrolledDown && (
          <motion.div
            initial={{ opacity: 0, scale: 0.001 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.001 }}
            className={`fixed top-7 right-7 z-50 cursor-pointer rounded-full p-4 ${
              expanded ? "bg-black" : "bg-neutral-900"
            }`}
            onClick={handleExpand}
          >
            <SidebarToggler expanded={expanded} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {expanded && scrolledDown && <Sidebar />}
      </AnimatePresence>
      {expanded && (
        <div
          className="h-screen w-screen bg-black opacity-70 inset-0 fixed z-10"
          onClick={handleExpand}
        ></div>
      )}
    </>
  );
};

export default FloatingNavigator;
