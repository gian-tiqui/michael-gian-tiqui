import React from "react";
import Projects from "./sections/Projects";
import Expertise from "./sections/Expertise";
import Skills from "./sections/Skills";

interface ProjectsContentInterface {
  selectedSection: string;
}

const ProjectsContent: React.FC<ProjectsContentInterface> = ({
  selectedSection,
}) => {
  return (
    <div className="mt-10">
      {selectedSection === "projects" && <Projects />}
      {selectedSection === "expertise" && <Expertise />}
      {selectedSection === "skills" && <Skills />}
    </div>
  );
};

export default ProjectsContent;
