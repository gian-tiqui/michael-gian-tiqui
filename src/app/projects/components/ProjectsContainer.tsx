"use client";
import React, { useContext } from "react";
import Menu from "./menu/Menu";
import ProjectContext, {
  SelectedSectionContext,
} from "./context-provider/ProjectContext";
import ProjectsContent from "./ProjectsContent";

const ProjectsContainer = () => {
  const { selectedSection, setSelectedSection } = useContext(
    SelectedSectionContext
  );

  return (
    <ProjectContext>
      <div className="w-full flex flex-col items-center">
        <Menu setSelectedSection={setSelectedSection} />
      </div>
      <div className="mb-12">
        <ProjectsContent selectedSection={selectedSection} />
      </div>
    </ProjectContext>
  );
};

export default ProjectsContainer;
