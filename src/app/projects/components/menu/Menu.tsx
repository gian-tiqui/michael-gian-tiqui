"use client";
import React, { Dispatch, SetStateAction, useContext, useState } from "react";

interface SectionsInterface {
  name: string;
  sectionName: string;
}

const sections: SectionsInterface[] = [
  {
    name: "Projects",
    sectionName: "projects",
  },
  {
    name: "Expertise",
    sectionName: "expertise",
  },
  {
    name: "Skills",
    sectionName: "skills",
  },
];

interface MenuProps {
  setSelectedSection: Dispatch<SetStateAction<string>>;
}

const Menu: React.FC<MenuProps> = ({ setSelectedSection }) => {
  const [selected, setSelected] = useState<string>("projects");

  return (
    <nav className="rounded-full bg-neutral-800 h-10 md:h-12 flex items-center justify-between gap-3 md:gap-7 px-7 md:px-12 shadow-md hover:shadow-xl dark:bg-white">
      {sections.map((section, index) => (
        <p
          key={index}
          className={`text-md md:text-lg font-bold text-white dark:text-black cursor-pointer hover:border-y hover:border-y-white dark:hover:border-y dark:hover:border-y-black px-1 ${
            section.sectionName == selected
              ? "border-y border-y-white dark:border-y dark:border-y-black"
              : ""
          }`}
          onClick={() => {
            setSelected(section.sectionName);
            setSelectedSection(section.sectionName);
          }}
        >
          {section.name}
        </p>
      ))}
    </nav>
  );
};

export default Menu;
