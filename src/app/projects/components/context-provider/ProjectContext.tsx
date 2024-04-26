"use client";
import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { createContext } from "react";

interface ProjectContextProps {
  children: ReactNode;
}

interface SelectedSectionInterface {
  selectedSection: string;
  setSelectedSection: Dispatch<SetStateAction<string>>;
}

export const SelectedSectionContext = createContext<SelectedSectionInterface>({
  selectedSection: "",
  setSelectedSection: () => {},
});

const ProjectContext: React.FC<ProjectContextProps> = ({ children }) => {
  const [selectedSection, setSelectedSection] = useState<string>("tech-stacks");

  return (
    <SelectedSectionContext.Provider
      value={{
        selectedSection: selectedSection,
        setSelectedSection: setSelectedSection,
      }}
    >
      {children}
    </SelectedSectionContext.Provider>
  );
};

export default ProjectContext;
