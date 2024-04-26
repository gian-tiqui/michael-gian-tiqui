import React from "react";
import TextContainer from "./TextContainer";
import { education } from "@/app/utils/About";

const Education = () => {
  return (
    <div className="mb-5 md:mb-16">
      <p className="text-white dark:text-black md:text-2xl font-bold font-sans fontbold mb-5">
        Education
      </p>
      {education.map((educ, index) => (
        <TextContainer key={index} {...educ} />
      ))}
    </div>
  );
};

export default Education;
