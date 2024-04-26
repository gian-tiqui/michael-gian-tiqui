import { Metadata } from "next";
import React from "react";
import Introduction from "./components/Introduction";
import MotionTemplate from "../components/motion/MotionTemplate";
import Education from "./components/Education";
import Playlist from "./components/Playlist";
import Hobbies from "./components/Hobbies";

export const metadata: Metadata = {
  title: "About • Michael Gian Tiqui",
  description: "Gian's Background",
};

const About = () => {
  return (
    <div className="pt-52 mb-20 px-7 md:px-44">
      <MotionTemplate>
        <Introduction />
        <Education />
        <Playlist />
        <Hobbies />
      </MotionTemplate>
    </div>
  );
};

export default About;
