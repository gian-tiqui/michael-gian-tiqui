"use client";
import React, { Dispatch, SetStateAction, useContext } from "react";

interface SectionsInterface {
  name: string;
  sectionName: string;
}

const sections: SectionsInterface[] = [
  {
    name: "Tech Stacks",
    sectionName: "tech-stacks",
  },
  {
    name: "Tools",
    sectionName: "tools",
  },
];

interface MenuProps {
  setSelectedSection: Dispatch<SetStateAction<string>>;
}

const Menu: React.FC<MenuProps> = ({ setSelectedSection }) => {
  return (
    <nav className="flex gap-2">
      {sections.map((section, index) => (
        <button
          key={index}
          className="text-white"
          onClick={() => {
            setSelectedSection(section.sectionName);
          }}
        >
          {section.name}
        </button>
      ))}
    </nav>
  );
};

export default Menu;
