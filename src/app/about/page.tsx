import { Metadata } from "next";
import React from "react";
import MotionTemplate from "../components/motion/MotionTemplate";
import NextButton from "../components/next-button/NextButton";
import AboutMain from "./components/AboutMain";

export const metadata: Metadata = {
  title: "About • Michael Gian Tiqui",
  description: "Gian's Background",
};

const About = () => {
  return (
    <div className="pt-40 md:pt-52 mb-10 px-7 md:px-44">
      <MotionTemplate>
        <AboutMain />
        <NextButton link="/projects" name="See Gian's projects" />
      </MotionTemplate>
    </div>
  );
};

export default About;
