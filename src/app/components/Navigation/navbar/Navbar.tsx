"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { routesMapping } from "@/app/utils/Routes";

const Navbar = () => {
  const [scrolledDown, setScrolledDown] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolledDown(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 1, y: "50%" }}
      animate={{ opacity: scrolledDown ? 0 : 1, y: scrolledDown ? 0 : "50%" }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.3 }}
      className="hidden fixed top-0 left-0 w-full h-14 pt-14 md:flex md:justify-center"
    >
      <div className="rounded-full bg-neutral-900 h-14 flex items-center justify-between gap-10 px-20 shadow-md">
        {routesMapping.map((route, index) => (
          <Link
            className="font-mono text-white text-xl hover:underline"
            href={route.path}
            key={index}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
