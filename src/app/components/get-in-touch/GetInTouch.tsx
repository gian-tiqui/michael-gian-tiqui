"use client";
import React from "react";
import ContactContainer from "./components/ContactContainer";
import ContactMeButton from "./components/ContactMeButton";
import { Player } from "@lottiefiles/react-lottie-player";
import contactAnimation from "../../assets/contact-me-animation.json";
import { motion } from "framer-motion";

const GetInTouch = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        transform: "translateY(10%)",
      }}
      whileInView={{
        opacity: 1,
        transform: "translateY(0)",
      }}
      className="mt-24"
    >
      <p className="font-sans text-center text-2xl md:text-3xl font-extrabold text-white mb-10 dark:text-black">
        Get in touch
      </p>
      <hr className="border-t border-t-gray-500 mb-12 md:mb-16" />

      <div className="grid grid-cols-1 md:grid-cols-3 md:px-44 mb-5 md:mb-16">
        <div className="md:col-span-2">
          <h1 className="font-sans text-2xl md:text-5xl text-white mb-10 md:mb-10 dark:text-black max-w-96 md:max-w-[660px]">
            Got any ideas, questions or projects you need help with? Contact me!
          </h1>

          <div className="flex flex-col items-start gap-5">
            <ContactContainer />
          </div>
        </div>
        <div className="md:col-span-1 pt-10 md:pt-0">
          <Player
            autoplay
            loop
            src={contactAnimation}
            className="md:h-[400px] md:w-[400px]"
          />
        </div>
      </div>
      <ContactMeButton />
    </motion.div>
  );
};

export default GetInTouch;
