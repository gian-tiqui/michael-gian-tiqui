import React from "react";
import Techstacks from "./sections/Techstacks";
import Tools from "./sections/Tools";
import Projects from "./sections/Projects";
import Others from "./sections/Others";

interface ProjectsContentInterface {
  selectedSection: string;
}

const ProjectsContent: React.FC<ProjectsContentInterface> = ({
  selectedSection,
}) => {
  return (
    <div className="mt-10">
      {selectedSection === "projects" && <Projects />}
      {selectedSection === "tech-stacks" && <Techstacks />}
      {selectedSection === "tools" && <Tools />}
      {selectedSection === "others" && <Others />}
    </div>
  );
};

export default ProjectsContent;
