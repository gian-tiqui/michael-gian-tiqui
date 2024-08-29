import React from "react";
import { TechStacksInterface } from "../Skills";
import ScrollMotionTemplate from "@/app/components/motion/ScrollMotion";

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
    <div className="mb-7 font-serif">
      <h1 className="md:text-xl font-bold text-black dark:text-white mb-4">
        {category}
      </h1>
      <div className="flex flex-wrap gap-2">
        {categorizedStacks.map((categorizedStack, index) => (
          <div
            key={index}
            className="flex items-center gap-2 py-2 px-4 rounded-full bg-white dark:bg-black shadow-xl"
          >
            {categorizedStack.icon}
            <p className="text-black dark:text-white text-sm">
              {categorizedStack.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorizedTechs;
