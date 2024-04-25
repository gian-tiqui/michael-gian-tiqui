"use client";
import React, { ReactNode, useState } from "react";
import { FaLaravel, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiAndroidstudio,
  SiArduino,
  SiDotnet,
  SiElectron,
  SiExpress,
  SiFastapi,
  SiJquery,
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
  DiFirebase,
  DiGithub,
  DiMaterializecss,
  DiMongodb,
  DiMysql,
  DiPostgresql,
} from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import TechStacksController from "./components/TechStacksController";

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
    icon: <SiFastapi className={iconStyle} />,
    name: "FastAPI",
  },
  {
    icon: <SiDotnet className={iconStyle} />,
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
    icon: <SiElectron className={iconStyle} />,
    name: "Electron",
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

  const showAllItems = () => {
    setShownItems(techStacks.length);
  };

  const collapseItems = () => {
    setShownItems(5);
  };

  return (
    <motion.div
      initial={{
        y: 20,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mt-40 md:mt-36"
    >
      <h1 className="font-sans text-center text-2xl md:text-3xl font-extrabold text-white mb-10 dark:text-black">
        Tech Stacks
      </h1>
      <hr className="border-t border-t-gray-500 mb-12" />

      <div className="hidden md:flex flex-wrap gap-5 justify-center mb-20">
        {techStacks.map((techStack, index) => (
          <TechStackContainer name={techStack.name} key={index}>
            {techStack.icon}
          </TechStackContainer>
        ))}
      </div>

      <div className="md:hidden">
        <AnimatePresence>
          <div className="flex flex-wrap gap-5 justify-center mb-16">
            {techStacks.slice(0, shownItems).map((techStack, index) => (
              <TechStackContainer name={techStack.name} key={index}>
                {techStack.icon}
              </TechStackContainer>
            ))}
          </div>
        </AnimatePresence>

        <TechStacksController
          increaseItems={increaseItems}
          decreaseItems={decreaseItems}
          showAllItems={showAllItems}
          collapseItems={collapseItems}
        />
      </div>
    </motion.div>
  );
};

export default TechStacks;
