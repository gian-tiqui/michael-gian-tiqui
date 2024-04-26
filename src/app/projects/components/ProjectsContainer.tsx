"use client";
import React, { useContext } from "react";
import Menu from "./menu/Menu";
import ProjectContext, {
  SelectedSectionContext,
} from "./context-provider/ProjectContext";
import Tools from "./sections/Tools";
import Techstacks from "./sections/Techstacks";
import ProjectsContent from "./ProjectsContent";

const ProjectsContainer = () => {
  const { selectedSection, setSelectedSection } = useContext(
    SelectedSectionContext
  );

  return (
    <ProjectContext>
      <div className="w-full">
        <Menu setSelectedSection={setSelectedSection} />
        <ProjectsContent selectedSection={selectedSection} />
      </div>
    </ProjectContext>
  );
};

export default ProjectsContainer;
