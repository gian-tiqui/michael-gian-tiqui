"use client";
import Link from "next/link";
import React from "react";
import { BiDownArrow } from "react-icons/bi";
import { BsArrowDown } from "react-icons/bs";

const ContactMeButton = () => {
  return (
    <Link
      href={"/contact"}
      className="bg-neutral-900 dark:bg-white md:h-14 px-2 w-32 h-10 ml-auto mr-3 md:mx-0 mt-14 md:mt-0 md:w-52 flex justify-center items-center md:mr-10 rounded-full hover:bg-neutral-800 gap-x-2 md:gap-x-5 dark:hover:bg-gray-100"
    >
      <p className="font-mono text-sm md:text-xl font-extrabold text-white dark:text-black">
        Contact me
      </p>
      <BsArrowDown className="text-white dark:text-black h-4 md:h-5 w-auto" />
    </Link>
  );
};

export default ContactMeButton;
