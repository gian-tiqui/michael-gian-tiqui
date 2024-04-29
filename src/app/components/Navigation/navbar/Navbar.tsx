"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { RoutesInterface, routesMapping } from "@/app/utils/Routes";
import { HiHome } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { TbChecklist } from "react-icons/tb";
import { BsPersonCircle } from "react-icons/bs";

export const routesMappingV2: RoutesInterface[] = [
  {
    name: "Home",
    path: "/",
    icon: <HiHome className="h-7 w-auto text-white dark:text-black" />,
  },

  {
    name: "About",
    path: "/about",
    icon: <BsPersonCircle className="h-7 w-auto text-white dark:text-black" />,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: <TbChecklist className="h-7 w-auto text-white dark:text-black" />,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <IoCall className="h-7 w-auto text-white dark:text-black" />,
  },
];

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
      className={`fixed top-0 left-0 z-50 md:z-0 w-full h-14 pt-2 md:pt-6 flex justify-center ${
        scrolledDown && "hidden"
      }`}
    >
      <div className="rounded-full bg-neutral-800 h-14 flex items-center justify-between gap-2 md:gap-14 px-7 md:px-20 shadow-md hover:shadow-xl dark:bg-white">
        {routesMappingV2.map((route, index) => (
          <Link href={route.path} key={index}>
            <motion.div className="hover:border-y hover:border-y-white dark:hover:border-y dark:hover:border-y-black px-1">
              <p className="font-sans font-bold text-white text-md md:text-xl dark:text-black">
                {route.name}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
