"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import { motion } from "framer-motion";
import { variants } from "../../footer/components/IconContainer";

const ContactMeButton = () => {
  const [animate, setAnimate] = useState("rest");

  const float = () => setAnimate("float");
  const rest = () => setAnimate("rest");
  return (
    <motion.div
      animate={animate}
      variants={variants}
      onMouseEnter={float}
      onMouseLeave={rest}
    >
      <Link
        href={"/contact"}
        className="bg-neutral-800 dark:bg-white md:h-14 px-2 w-32 h-10 md:w-52 mx-auto flex justify-center items-center rounded-xl hover:bg-neutral-700 gap-x-2 md:gap-x-5 dark:hover:bg-gray-100"
      >
        <p className="font-mono text-sm md:text-lg font-bold text-white dark:text-black">
          Contact me
        </p>
        <BsArrowDown className="text-white dark:text-black h-4 md:h-5 w-auto" />
      </Link>
    </motion.div>
  );
};

export default ContactMeButton;
