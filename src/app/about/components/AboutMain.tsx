import React from "react";
import Introduction from "./Introduction";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "@/app/projects/components/sections/Skills";

const AboutMain = () => {
  return (
    <>
      <Introduction />
      <Education />
      <Experience />
      <Skills />
    </>
  );
};

export default AboutMain;
