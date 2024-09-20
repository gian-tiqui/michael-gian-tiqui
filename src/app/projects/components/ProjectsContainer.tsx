"use client";
import React, { useContext } from "react";
import ProjectContext, {
  SelectedSectionContext,
} from "./context-provider/ProjectContext";
import Projects from "./sections/Projects";

const ProjectsContainer = () => {
  const { selectedSection, setSelectedSection } = useContext(
    SelectedSectionContext
  );

  return (
    <ProjectContext>
      <div className="mb-12">
        <Projects />
      </div>
    </ProjectContext>
  );
};

export default ProjectsContainer;
