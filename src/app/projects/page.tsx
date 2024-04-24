import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Gian • Projects",
  description: "Michael Gian Tiqui's Projects",
};

const Projects = () => {
  return (
    <div className="pt-52 mb-20">
      <h1 className="text-white dark:text-black text-center md:text-5xl font-sans font-bold mb-20">
        Projects
      </h1>
    </div>
  );
};

export default Projects;
