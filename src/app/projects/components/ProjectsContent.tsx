import React from "react";
import Techstacks from "./sections/Techstacks";
import Tools from "./sections/Tools";

interface ProjectsContentInterface {
  selectedSection: string;
}

const ProjectsContent: React.FC<ProjectsContentInterface> = ({
  selectedSection,
}) => {
  return (
    <div>
      {selectedSection === "tech-stacks" && <Techstacks />}
      {selectedSection === "tools" && <Tools />}
    </div>
  );
};

export default ProjectsContent;
