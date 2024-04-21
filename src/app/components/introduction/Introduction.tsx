import Image from "next/image";
import React from "react";
import gian from "../../assets/michael-gian-tiqui.png";

const Introduction = () => {
  return (
    <div className="md:max-w-[950px] mx-auto">
      <div className="flex flex-col items-center md:justify-center gap-9">
        <Image
          src={gian}
          className="rounded-full bg-gray-400 h-72 w-72 pt-10"
          alt="Michael Gian M. Tiqui"
        />
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="font-mono text-white text-sm md:text-lg">
            Hey there 👋, I am
          </p>
          <h2 className="font-mono font-extrabold text-2xl md:text-4xl text-indigo-500">
            Michael Gian Tiqui
          </h2>
          <p className="font-mono text-white text-md md:text-xl font-bold">
            An Aspiring Software Engineer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
