"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RoutesInterface, routesMapping } from "@/app/utils/Routes";
import { HiHome } from "react-icons/hi";
import { IoCall, IoSchool } from "react-icons/io5";
import { TbChecklist } from "react-icons/tb";
import { BsPersonCircle } from "react-icons/bs";

export const routesMappingV2: RoutesInterface[] = [
  {
    name: "Home",
    path: "/",
    icon: <HiHome className="h-6 w-auto text-white" />,
  },
  {
    name: "Education",
    path: "/education",
    icon: <IoSchool className="h-6 w-auto text-white" />,
  },
  {
    name: "About",
    path: "/about",
    icon: <BsPersonCircle className="h-6 w-auto text-white" />,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: <TbChecklist className="h-6 w-auto text-white" />,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <IoCall className="h-6 w-auto text-white block" />,
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
      className="fixed top-0 left-0 w-full pt-96 h-14 md:pt-14 flex justify-center"
    >
      <div className="rounded-full bg-neutral-900 h-16 md:h-14 flex items-center justify-between gap-5 md:gap-10 px-7 md:px-20 shadow-md">
        {routesMappingV2.map((route, index) => (
          <Link href={route.path} key={index}>
            <p className="hidden md:block font-mono text-white text-xl hover:underline">
              {route.name}
            </p>
            <div className="md:hidden flex flex-col gap-1 items-center">
              <>{route.icon}</>
              <p className="md:hidden text-xs text-white font-mono">
                {route.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
