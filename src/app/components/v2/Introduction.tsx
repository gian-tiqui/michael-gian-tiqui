import Image from "next/image";
import React from "react";
import gian from "../../assets/michael-gian-tiqui-bg.jpg";
import { HtmlAttributes } from "@/app/types/Types";
import Link from "next/link";

export default function Introduction({ id }: HtmlAttributes) {
  return (
    <section
      id={id ? id : ""}
      className="flex flex-col-reverse md:flex-row w-full gap-10 md:gap-0 justify-between"
    >
      <div className="text-black font-serif md:w-2/4 flex flex-col gap-4">
        <p className="md:text-md">Hello there 👋, my name is</p>
        <h1 className="text-2xl md:text-3xl font-bold font-sans">
          Michael Gian Tiqui
        </h1>
        <p className="md:text-md">
          I create things on the web and mobile. I find it fun learning new
          conceepts, libraries, and frameworks which I can utilize in developing
          apps.
        </p>
        <div className="flex gap-4">
          <Link
            href="#projects"
            className="grid place-content-center w-32 h-8 md:w-40 text-sm md:text-md md:h-10 rounded-lg bg-black text-white font-semibold hover:opacity-85"
          >
            Projects
          </Link>
          <button className="w-32 h-8 md:w-40 text-sm md:h-10 md:text-md rounded-lg border-2 border-black text-black font-semibold hover:opacity-85">
            Resume
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center md:justify-end">
        <Image
          src={gian}
          className="rounded-full h-52 w-52 md:h-72 md:w-72 border-2 dark:border-2 border-neutral-900 dark:border-white pointer-events-none"
          alt="Michael Gian M. Tiqui"
          priority
        />
      </div>
    </section>
  );
}
