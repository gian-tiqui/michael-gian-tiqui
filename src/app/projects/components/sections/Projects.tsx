import MotionTemplate from "@/app/components/motion/MotionTemplate";
import React from "react";
import ProjectsContainer from "../ProjectsContainer";

const Projects = () => {
  return (
    <MotionTemplate>
      <div className="text-white dark:text-black text-center">
        this is underdevelopment so view my projects on my github first hehe
        <ProjectsContainer />
      </div>
    </MotionTemplate>
  );
};

export default Projects;
