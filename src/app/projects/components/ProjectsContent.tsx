import React from "react";
import Tools from "./sections/Tools";
import Projects from "./sections/Projects";
import Others from "./sections/Others";
import Expertise from "./sections/Expertise";

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
      {selectedSection === "tools" && <Tools />}
      {selectedSection === "others" && <Others />}
    </div>
  );
};

export default ProjectsContent;
