"use client";
import Image from "next/image";
import React from "react";
import gian from "../../assets/michael-gian-tiqui-bg.jpg";
import NextButton from "../next-button/NextButton";
import Link from "next/link";

const Introduction = () => {
  const handleDownloadCvClick = () => {};

  return (
    <div className="px-7 mb-16 md:mb-0 md:px-44 md:pt-10">
      <div className="flex gap-3 md:gap-7 mb-12">
        <Image
          src={gian}
          className="rounded-full h-24 w-24 md:h-32 md:w-32 border-2 dark:border-2 border-neutral-200 dark:border-black pointer-events-none"
          alt="Michael Gian M. Tiqui"
          priority
        />
        <div className="flex flex-col gap-3">
          <p className="font-sans md:text-3xl text-white dark:text-black">
            Hello there 👋, my name is
          </p>
          <p className="font-sans font-bold text-3xl md:text-6xl text-white dark:text-black">
            Gian
          </p>
        </div>
      </div>

      <p className="font-sans md:text-2xl text-justify text-white dark:text-black mb-5">
        I create things on the web and mobile. I find it fun learning new
        concepts, libraries, and frameworks which I can utilize in developing
        different applications.
      </p>
      <div className="flex justify-start gap-3">
        <button
          onClick={handleDownloadCvClick}
          className="hover:bg-neutral-700 text-sm mb-5 w-44 h-12 text-md dark:bg-white text-white dark:text-black bg-neutral-800 rounded-full shadow"
        >
          Download CV
        </button>
        <Link
          href={"/projects"}
          className="hover:bg-neutral-700 text-sm dark:bg-white mb-5 w-44 h-12 grid place-content-center text-md text-white dark:text-black bg-neutral-800 rounded-full shadow"
        >
          Projects
        </Link>
      </div>

      <NextButton link="/about" name="Know more about Gian" />
    </div>
  );
};

export default Introduction;
