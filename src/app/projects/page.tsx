import { Metadata } from "next";
import React from "react";
import HeaderText from "./components/HeaderText";
import MotionTemplate from "../components/motion/MotionTemplate";
import ProjectsContainer from "./components/ProjectsContainer";
import ProjectContext from "./components/context-provider/ProjectContext";

export const metadata: Metadata = {
  title: "Projects • Michael Gian Tiqui",
  description: "Michael Gian Tiqui's Projects",
};

const Projects = () => {
  return (
    <div className="pt-52 mb-20 px-7 md:px-44">
      <MotionTemplate>
        <ProjectContext>
          <HeaderText />
          <ProjectsContainer />
        </ProjectContext>
      </MotionTemplate>
    </div>
  );
};

export default Projects;
