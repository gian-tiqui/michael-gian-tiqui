"use client";
import Image from "next/image";
import React from "react";
import gian from "../../assets/michael-gian-tiqui-bg.jpg";
import NextButton from "../next-button/NextButton";

const Introduction = () => {
  return (
    <div className="px-7 mb-16 md:mb-0 md:px-44 md:pt-14">
      <div className="flex gap-3 md:gap-7 mb-12">
        <Image
          src={gian}
          className="rounded-full h-24 w-24 md:h-32 md:w-32 dark:border-2 dark:border-black pointer-events-none"
          alt="Michael Gian M. Tiqui"
          priority
        />
        <div className="flex flex-col gap-3">
          <p className="font-sans md:text-3xl text-white dark:text-black">
            Hello there 👋, my name is
          </p>
          <p className="font-sans font-bold text-3xl md:text-6xl text-white dark:text-black">
            Michael Gian Tiqui
          </p>
        </div>
      </div>

      <p className="font-sans md:text-2xl text-justify text-white dark:text-black mb-10">
        Welcome, I am <span className="font-bold">Gian</span> and I create
        things on the Web and Mobile. I find it fun learning new concepts,
        libraries, and frameworks which I can utilize in developing apps. You
        might catch me playing Online Games, Sports or doing expirements on
        something through coding. Well, those are just my hobbies.
      </p>
      <NextButton link="/about" name="Know more about Gian" />
    </div>
  );
};

export default Introduction;
