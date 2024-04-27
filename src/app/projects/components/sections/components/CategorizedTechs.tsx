import React from "react";
import { TechStacksInterface } from "../Skills";

interface CategorizedTechsProps {
  category: string;
  techStacks: TechStacksInterface[];
}

const CategorizedTechs: React.FC<CategorizedTechsProps> = ({
  category,
  techStacks,
}) => {
  const categorizedStacks: TechStacksInterface[] = techStacks.filter(
    (techStack) => techStack.category == category
  );

  return (
    <div className="mb-7">
      <h1 className="md:text-2xl font-sans font-bold text-white dark:text-black mb-4">
        {category}
      </h1>
      <div className="flex flex-wrap gap-2">
        {categorizedStacks.map((categorizedStack, index) => (
          <div
            key={index}
            className="flex items-center gap-2 py-2 px-4 rounded-full bg-neutral-800 dark:bg-white shadow-xl"
          >
            {categorizedStack.icon}
            <p className="text-white dark:text-black font-sans">
              {categorizedStack.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorizedTechs;
