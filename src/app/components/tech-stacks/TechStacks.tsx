"use client";
import React, { ReactNode, useState } from "react";
import { FaLaravel, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiAndroidstudio,
  SiArduino,
  SiExpress,
  SiJquery,
  SiMaterialdesign,
  SiPrisma,
  SiSpringboot,
  SiTailwindcss,
  SiTensorflow,
  SiVercel,
} from "react-icons/si";
import TechStackContainer from "./components/TechStackContainer";
import {
  TbBrandFramerMotion,
  TbBrandNextjs,
  TbBrandReactNative,
} from "react-icons/tb";
import {
  DiDjango,
  DiDocker,
  DiDotnet,
  DiFirebase,
  DiGithub,
  DiMaterializecss,
  DiMongodb,
  DiMysql,
  DiPostgresql,
} from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";

export interface TechStacksInterface {
  icon: ReactNode;
  name: string;
}

const iconStyle = "h-7 md:h-10 w-auto text-white dark:text-black";

const techStacks: TechStacksInterface[] = [
  {
    icon: <FaReact className={iconStyle} />,
    name: "React",
  },
  {
    icon: <TbBrandNextjs className={iconStyle} />,
    name: "NextJs",
  },
  {
    icon: <FaLaravel className={iconStyle} />,
    name: "Laravel",
  },
  {
    icon: <SiTailwindcss className={iconStyle} />,
    name: "Tailwind CSS",
  },
  {
    icon: <DiGithub className={iconStyle} />,
    name: "Github",
  },
  {
    icon: <SiVercel className={iconStyle} />,
    name: "Vercel",
  },
  {
    icon: <TbBrandFramerMotion className={iconStyle} />,
    name: "Framer Motion",
  },
  {
    icon: <SiSpringboot className={iconStyle} />,
    name: "Spring Boot",
  },
  {
    icon: <DiDjango className={iconStyle} />,
    name: "Django",
  },
  {
    icon: <DiDotnet className={iconStyle} />,
    name: ".Net",
  },
  {
    icon: <SiArduino className={iconStyle} />,
    name: "Arduino",
  },
  {
    icon: <SiPrisma className={iconStyle} />,
    name: "Prisma",
  },
  {
    icon: <DiMongodb className={iconStyle} />,
    name: "MongoDB",
  },
  {
    icon: <DiPostgresql className={iconStyle} />,
    name: "Postgre SQL",
  },
  {
    icon: <DiMysql className={iconStyle} />,
    name: "MySQL",
  },
  {
    icon: <DiFirebase className={iconStyle} />,
    name: "Firebase",
  },
  {
    icon: <SiAndroidstudio className={iconStyle} />,
    name: "Android Studio",
  },
  {
    icon: <TbBrandReactNative className={iconStyle} />,
    name: "React Native",
  },
  {
    icon: <FaNodeJs className={iconStyle} />,
    name: "NodeJs",
  },
  {
    icon: <SiExpress className={iconStyle} />,
    name: "ExpressJs",
  },
  {
    icon: <SiJquery className={iconStyle} />,
    name: "Jquery",
  },
  {
    icon: <BsBootstrap className={iconStyle} />,
    name: "Bootstrap",
  },

  {
    icon: <DiMaterializecss className={iconStyle} />,
    name: "Material UI",
  },
  {
    icon: <SiTensorflow className={iconStyle} />,
    name: "Tensor flow",
  },
  {
    icon: <FiFigma className={iconStyle} />,
    name: "Figma",
  },
];

/*

  TASK: Ongoing

  On Mobile View, do not show all the tech stacks then add a show more button that will expand 
  the list of tech stacks.

  
*/

const TechStacks = () => {
  const [shownItems, setShownItems] = useState<number>(5);

  const increaseItems = () => {
    if (shownItems < techStacks.length) {
      setShownItems((prevVal) => prevVal + 3);
    }
  };

  return (
    <div className="mt-32">
      <h1 className="font-mono text-3xl md:text-5xl font-extrabold text-white mb-3 md:mb-6 dark:text-black">
        Tech Stacks
      </h1>
      <hr className="border-t border-t-gray-500 mb-12 mx-auto" />
      <div className="md:hidden flex flex-wrap gap-5 justify-center">
        {techStacks.slice(0, shownItems).map((techStack, index) => (
          <TechStackContainer name={techStack.name} key={index}>
            {techStack.icon}
          </TechStackContainer>
        ))}
      </div>

      <div className="hidden md:flex flex-wrap gap-5 justify-center">
        {techStacks.map((techStack, index) => (
          <TechStackContainer name={techStack.name} key={index}>
            {techStack.icon}
          </TechStackContainer>
        ))}
      </div>
      <div className="md:hidden flex justify-between">
        <button
          className="text-white font-mono dark:text-black"
          onClick={increaseItems}
        >
          Show More
        </button>
        <button className="text-white font-mono dark:text-black">
          Show Less
        </button>
      </div>
    </div>
  );
};

export default TechStacks;
