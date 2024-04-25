import { Metadata } from "next";
import React from "react";
import HeaderText from "./components/HeaderText";

export const metadata: Metadata = {
  title: "Gian • Projects",
  description: "Michael Gian Tiqui's Projects",
};

const Projects = () => {
  return (
    <div className="pt-52 mb-20">
      <HeaderText />
    </div>
  );
};

export default Projects;
