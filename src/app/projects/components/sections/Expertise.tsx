import MotionTemplate from "@/app/components/motion/MotionTemplate";
import React, { ReactNode } from "react";
import { FaLaravel, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiAndroidstudio,
  SiArduino,
  SiCplusplus,
  SiCsharp,
  SiDotnet,
  SiElectron,
  SiExpress,
  SiFastapi,
  SiJquery,
  SiKotlin,
  SiPrisma,
  SiSpringboot,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import {
  TbBrandFramerMotion,
  TbBrandNextjs,
  TbBrandReactNative,
  TbSql,
} from "react-icons/tb";
import {
  DiDjango,
  DiFirebase,
  DiGithub,
  DiJava,
  DiJavascript,
  DiMaterializecss,
  DiMongodb,
  DiMysql,
  DiPhp,
  DiPostgresql,
  DiPython,
  DiRuby,
} from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import CategorizedTechs from "./components/CategorizedTechs";
import { FaGolang } from "react-icons/fa6";

export interface TechStacksInterface {
  icon: ReactNode;
  name: string;
  category: string;
}

export const categories: string[] = [
  "Frameworks",
  "Development Tools",
  "Programming Languages",
  "Design Tool",
  "Tech Stacks",
  "Backend-As-A-Service",
  "Databases",
  "Libraries",
  "Microcontroller Platform",
  "Object Relational Mapping",
];

const iconStyle = "h-5 md:h-7 w-auto text-white dark:text-black";

export const techStacks: TechStacksInterface[] = [
  {
    icon: <SiCplusplus className={iconStyle} />,
    name: "C++",
    category: "Programming Languages",
  },
  {
    icon: <SiCsharp className={iconStyle} />,
    name: "C#",
    category: "Programming Languages",
  },
  {
    icon: <DiJava className={iconStyle} />,
    name: "Java",
    category: "Programming Languages",
  },
  {
    icon: <SiKotlin className={iconStyle} />,
    name: "Kotlin",
    category: "Programming Languages",
  },
  {
    icon: <DiPython className={iconStyle} />,
    name: "Python",
    category: "Programming Languages",
  },
  {
    icon: <DiPhp className={iconStyle} />,
    name: "Php",
    category: "Programming Languages",
  },
  {
    icon: <SiTypescript className={iconStyle} />,
    name: "Typescript",
    category: "Programming Languages",
  },
  {
    icon: <DiJavascript className={iconStyle} />,
    name: "Javascript",
    category: "Programming Languages",
  },
  {
    icon: <DiRuby className={iconStyle} />,
    name: "Ruby",
    category: "Programming Languages",
  },
  {
    icon: <FaGolang className={iconStyle} />,
    name: "Go",
    category: "Programming Languages",
  },
  {
    icon: <TbSql className={iconStyle} />,
    name: "SQL",
    category: "Programming Languages",
  },
  {
    icon: <SiJquery className={iconStyle} />,
    name: "JQuery",
    category: "Libraries",
  },
  {
    icon: <SiPrisma className={iconStyle} />,
    name: "Prisma",
    category: "Object Relational Mapping",
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
    category: "Databases",
  },
  {
    icon: <DiPostgresql className={iconStyle} />,
    name: "Postgre SQL",
    category: "Databases",
  },
  {
    icon: <SiSqlite className={iconStyle} />,
    name: "SQLite",
    category: "Databases",
  },
  {
    icon: <DiMysql className={iconStyle} />,
    name: "MySQL",
    category: "Databases",
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
