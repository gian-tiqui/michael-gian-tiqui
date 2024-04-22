"use client";
import React, { ReactNode } from "react";
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

const techStacks: TechStacksInterface[] = [
  {
    icon: <FaReact className="h-10 w-auto text-white dark:text-black" />,
    name: "React",
  },
  {
    icon: <TbBrandNextjs className="h-10 w-auto text-white dark:text-black" />,
    name: "NextJs",
  },
  {
    icon: <FaLaravel className="h-10 w-auto text-white dark:text-black" />,
    name: "Laravel",
  },
  {
    icon: <SiTailwindcss className="h-10 w-auto text-white dark:text-black" />,
    name: "Tailwind CSS",
  },
  {
    icon: <DiGithub className="h-10 w-auto text-white dark:text-black" />,
    name: "Github",
  },
  {
    icon: <SiVercel className="h-10 w-auto text-white dark:text-black" />,
    name: "Vercel",
  },
  {
    icon: (
      <TbBrandFramerMotion className="h-10 w-auto text-white dark:text-black" />
    ),
    name: "Framer Motion",
  },
  {
    icon: <SiSpringboot className="h-10 w-auto text-white dark:text-black" />,
    name: "Spring Boot",
  },
  {
    icon: <DiDjango className="h-10 w-auto text-white dark:text-black" />,
    name: "Django",
  },
  {
    icon: <DiDotnet className="h-10 w-auto text-white dark:text-black" />,
    name: ".Net",
  },
  {
    icon: <SiArduino className="h-10 w-auto text-white dark:text-black" />,
    name: "Arduino",
  },
  {
    icon: <SiPrisma className="h-10 w-auto text-white dark:text-black" />,
    name: "Prisma",
  },
  {
    icon: <DiMongodb className="h-10 w-auto text-white dark:text-black" />,
    name: "MongoDB",
  },
  {
    icon: <DiPostgresql className="h-10 w-auto text-white dark:text-black" />,
    name: "PostgreSQL",
  },
  {
    icon: <DiMysql className="h-10 w-auto text-white dark:text-black" />,
    name: "MySQL",
  },
  {
    icon: <DiFirebase className="h-10 w-auto text-white dark:text-black" />,
    name: "Firebase",
  },
  {
    icon: (
      <SiAndroidstudio className="h-10 w-auto text-white dark:text-black" />
    ),
    name: "Android Studio",
  },
  {
    icon: (
      <TbBrandReactNative className="h-10 w-auto text-white dark:text-black" />
    ),
    name: "React Native",
  },
  {
    icon: <FaNodeJs className="h-10 w-auto text-white dark:text-black" />,
    name: "NodeJs",
  },
  {
    icon: <SiExpress className="h-10 w-auto text-white dark:text-black" />,
    name: "ExpressJs",
  },
  {
    icon: <SiJquery className="h-10 w-auto text-white dark:text-black" />,
    name: "Jquery",
  },
  {
    icon: <BsBootstrap className="h-10 w-auto text-white dark:text-black" />,
    name: "Bootstrap",
  },

  {
    icon: (
      <DiMaterializecss className="h-10 w-auto text-white dark:text-black" />
    ),
    name: "Material UI",
  },
  {
    icon: <SiTensorflow className="h-10 w-auto text-white dark:text-black" />,
    name: "Tensorflow",
  },
  {
    icon: <FiFigma className="h-10 w-auto text-white dark:text-black" />,
    name: "Figma",
  },
];

/*

  TASK:

  On Mobile View, do not show all the tech stacks then add a show more button that will expand 
  the list of tech stacks.

  
*/

const TechStacks = () => {
  return (
    <div className="mt-32">
      <h1 className="font-mono text-5xl font-extrabold text-white mb-6 dark:text-black">
        Tech Stacks
      </h1>
      <hr className="border-t border-t-gray-500 mb-12 mx-auto" />
      <div className="flex flex-wrap gap-5 justify-center">
        {techStacks.map((techStack, index) => (
          <TechStackContainer name={techStack.name} key={index}>
            {techStack.icon}
          </TechStackContainer>
        ))}
      </div>
    </div>
  );
};

export default TechStacks;
