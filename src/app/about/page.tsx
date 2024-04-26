import { Metadata } from "next";
import React from "react";
import Introduction from "./components/Introduction";
import TextContainer from "./components/TextContainer";
import MotionTemplate from "../components/motion/MotionTemplate";

export const metadata: Metadata = {
  title: "Gian • About",
  description: "Gian's Background",
};

const About = () => {
  return (
    <div className="pt-52 mb-20 px-7 md:px-44">
      <MotionTemplate>
        <Introduction />
        <TextContainer />
        <TextContainer />
        <TextContainer />
        <TextContainer />
      </MotionTemplate>
    </div>
  );
};

export default About;
