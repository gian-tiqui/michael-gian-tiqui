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

export interface TechStacksInterface {
  icon: ReactNode;
  name: string;
  category?: string;
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
    icon: <FiFigma className={iconStyle} />,
    name: "Figma",
  },
];

const Techstacks = () => {
  return (
    <MotionTemplate>
      <div className="text-white dark:text-black">tech stacks</div>
    </MotionTemplate>
  );
};

export default Techstacks;
