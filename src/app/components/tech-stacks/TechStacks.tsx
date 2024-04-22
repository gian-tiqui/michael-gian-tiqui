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
import { AnimatePresence } from "framer-motion";

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

const TechStacks = () => {
  const [shownItems, setShownItems] = useState<number>(5);

  const increaseItems = () => {
    if (shownItems < techStacks.length) {
      setShownItems((prevVal) => prevVal + 3);
    }
  };

  const decreaseItems = () => {
    if (shownItems > 5) {
      setShownItems((prevVal) => prevVal - 3);
    }
  };

  return (
    <div className="mt-36">
      <h1 className="font-mono text-2xl md:text-5xl font-extrabold text-white mb-3 md:mb-6 dark:text-black">
        Tech Stacks
      </h1>
      <hr className="border-t border-t-gray-500 mb-12 mx-auto" />

      <div className="hidden md:flex flex-wrap gap-5 justify-center mb-20">
        {techStacks.map((techStack, index) => (
          <TechStackContainer name={techStack.name} key={index}>
            {techStack.icon}
          </TechStackContainer>
        ))}
      </div>

      <div className="md:hidden">
        <AnimatePresence>
          <div className="flex flex-wrap gap-5 justify-center mb-20">
            {techStacks.slice(0, shownItems).map((techStack, index) => (
              <TechStackContainer name={techStack.name} key={index}>
                {techStack.icon}
              </TechStackContainer>
            ))}
          </div>
        </AnimatePresence>

        <div className="flex justify-center gap-5 md:gap-10 inset-0">
          <button
            className="text-white text-lg font-mono font-bold dark:text-black bg-neutral-900 rounded-md h-10 md:h-12 w-32 md:w-40 dark:bg-white shadow-xl"
            onClick={increaseItems}
          >
            {shownItems === techStacks.length ? "Show All" : "Show More"}
          </button>
          <button
            className="text-white text-lg  font-mono font-bold dark:text-black bg-neutral-900 rounded-md h-10 md:h-12 w-32 md:w-40 dark:bg-white shadow-xl"
            disabled={shownItems <= 5}
            onClick={decreaseItems}
          >
            Show Less
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
