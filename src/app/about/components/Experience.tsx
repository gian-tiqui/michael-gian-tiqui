import ScrollMotionTemplate from "@/app/components/motion/ScrollMotion";
import React from "react";
import TextContainer from "./TextContainer";
import { experience } from "@/app/utils/About";

const Experience = () => {
  return (
    <ScrollMotionTemplate>
      <div className="mb-5 md:mb-16">
        <p className="text-white dark:text-black md:text-2xl font-bold font-sans fontbold mb-5">
          Experience
        </p>
        {experience.map((exp, index) => (
          <TextContainer key={index} {...exp} />
        ))}
      </div>
    </ScrollMotionTemplate>
  );
};

export default Experience;
