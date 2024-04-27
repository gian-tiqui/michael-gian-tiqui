import MotionTemplate from "@/app/components/motion/MotionTemplate";
import React, { ReactNode } from "react";
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
  SiVercel,
} from "react-icons/si";
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
import CategorizedTechs from "./components/CategorizedTechs";

export interface TechStacksInterface {
  icon: ReactNode;
  name: string;
  category: string;
}

export const categories: string[] = [
  "Frameworks",
  "Development Tools",
  "Design Tool",
  "Tech Stacks",
  "Backend-As-A-Service",
  "Database",
  "Libraries",
  "Microcontroller Platform",
];

const iconStyle = "h-5 md:h-7 w-auto text-white dark:text-black";

export const techStacks: TechStacksInterface[] = [
  {
    icon: <FaReact className={iconStyle} />,
    name: "React",
    category: "Libraries",
  },
  {
    icon: <TbBrandNextjs className={iconStyle} />,
    name: "NextJs",
    category: "Frameworks",
  },
  {
    icon: <FaLaravel className={iconStyle} />,
    name: "Laravel",
    category: "Frameworks",
  },
  {
    icon: <SiTailwindcss className={iconStyle} />,
    name: "Tailwind CSS",
    category: "Frameworks",
  },
  {
    icon: <DiGithub className={iconStyle} />,
    name: "Github",
    category: "Development Tools",
  },
  {
    icon: <SiVercel className={iconStyle} />,
    name: "Vercel",
    category: "Development Tools",
  },
  {
    icon: <TbBrandFramerMotion className={iconStyle} />,
    name: "Framer Motion",
    category: "Frameworks",
  },
  {
    icon: <SiSpringboot className={iconStyle} />,
    name: "Spring Boot",
    category: "Tech Stacks",
  },
  {
    icon: <DiDjango className={iconStyle} />,
    name: "Django",
    category: "Tech Stacks",
  },
  {
    icon: <SiFastapi className={iconStyle} />,
    name: "FastAPI",
    category: "Tech Stacks",
  },
  {
    icon: <SiDotnet className={iconStyle} />,
    name: ".Net",
    category: "Tech Stacks",
  },
  {
    icon: <SiArduino className={iconStyle} />,
    name: "Arduino",
    category: "Microcontroller Platform",
  },
  {
    icon: <DiMongodb className={iconStyle} />,
    name: "MongoDB",
    category: "Database",
  },
  {
    icon: <DiPostgresql className={iconStyle} />,
    name: "Postgre SQL",
    category: "Database",
  },
  {
    icon: <DiMysql className={iconStyle} />,
    name: "MySQL",
    category: "Database",
  },
  {
    icon: <DiFirebase className={iconStyle} />,
    name: "Firebase",
    category: "Backend-As-A-Service",
  },
  {
    icon: <SiAndroidstudio className={iconStyle} />,
    name: "Android Studio",
    category: "Development Tools",
  },
  {
    icon: <TbBrandReactNative className={iconStyle} />,
    name: "React Native",
    category: "Frameworks",
  },
  {
    icon: <FaNodeJs className={iconStyle} />,
    name: "NodeJs",
    category: "Tech Stacks",
  },
  {
    icon: <SiExpress className={iconStyle} />,
    name: "ExpressJs",
    category: "Frameworks",
  },
  {
    icon: <BsBootstrap className={iconStyle} />,
    name: "Bootstrap",
    category: "Frameworks",
  },
  {
    icon: <SiElectron className={iconStyle} />,
    name: "Electron",
    category: "Frameworks",
  },
  {
    icon: <DiMaterializecss className={iconStyle} />,
    name: "Material UI",
    category: "Libraries",
  },
  {
    icon: <FiFigma className={iconStyle} />,
    name: "Figma",
    category: "Design Tool",
  },
];

const Expertise = () => {
  return (
    <MotionTemplate>
      <div>
        {categories.map((category, index) => (
          <CategorizedTechs
            category={category}
            key={index}
            techStacks={techStacks}
          />
        ))}
      </div>
    </MotionTemplate>
  );
};

export default Expertise;
