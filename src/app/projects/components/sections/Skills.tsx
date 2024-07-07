import MotionTemplate from "@/app/components/motion/MotionTemplate";
import React, { ReactNode } from "react";
import { FaFlask, FaLaravel, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiAndroidstudio,
  SiCanva,
  SiCplusplus,
  SiCsharp,
  SiDotnet,
  SiExpress,
  SiFastapi,
  SiJquery,
  SiMui,
  SiPostman,
  SiSpringboot,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiXampp,
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
  DiGoogleCloudPlatform,
  DiJava,
  DiJavascript,
  DiMongodb,
  DiMysql,
  DiPhp,
  DiPostgresql,
  DiPython,
} from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import CategorizedTechs from "./components/CategorizedTechs";
import { FaGolang } from "react-icons/fa6";

export interface TechStacksInterface {
  icon?: ReactNode;
  name: string;
  category?: string;
}

export const categories: string[] = [
  "Frameworks & Libraries",
  "Programming Languages",
  "Development Tools",
  "Databases",
  "Design Tool",
];

const iconStyle = "h-5 md:h-7 w-auto text-white dark:text-black";

export const techStacks: TechStacksInterface[] = [
  {
    icon: <FaReact className={iconStyle} />,
    name: "React",
    category: "Frameworks & Libraries",
  },
  {
    icon: <TbBrandNextjs className={iconStyle} />,
    name: "NextJs",
    category: "Frameworks & Libraries",
  },
  {
    icon: <SiSpringboot className={iconStyle} />,
    name: "Spring Boot",
    category: "Frameworks & Libraries",
  },
  {
    icon: <TbBrandReactNative className={iconStyle} />,
    name: "React Native",
    category: "Frameworks & Libraries",
  },
  {
    icon: <SiTailwindcss className={iconStyle} />,
    name: "Tailwind CSS",
    category: "Frameworks & Libraries",
  },
  {
    icon: <TbBrandFramerMotion className={iconStyle} />,
    name: "Framer Motion",
    category: "Frameworks & Libraries",
  },
  {
    icon: <BsBootstrap className={iconStyle} />,
    name: "Bootstrap",
    category: "Frameworks & Libraries",
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
    icon: <DiJava className={iconStyle} />,
    name: "Java",
    category: "Programming Languages",
  },
  {
    icon: <DiPhp className={iconStyle} />,
    name: "Php",
    category: "Programming Languages",
  },
  {
    icon: <DiPython className={iconStyle} />,
    name: "Python",
    category: "Programming Languages",
  },
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
    icon: <DiGoogleCloudPlatform className={iconStyle} />,
    name: "Google Cloud Console",
    category: "Development Tools",
  },

  {
    icon: <SiPostman className={iconStyle} />,
    name: "Postman",
    category: "Development Tools",
  },
  {
    icon: <SiXampp className={iconStyle} />,
    name: "XAMPP",
    category: "Development Tools",
  },
  {
    icon: <TbSql className={iconStyle} />,
    name: "SQL",
    category: "Programming Languages",
  },
  {
    icon: <FaNodeJs className={iconStyle} />,
    name: "NodeJs",
    category: "Frameworks & Libraries",
  },
  {
    icon: <SiJquery className={iconStyle} />,
    name: "JQuery",
    category: "Frameworks & Libraries",
  },
  {
    icon: <FaLaravel className={iconStyle} />,
    name: "Laravel",
    category: "Frameworks & Libraries",
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
    icon: <DiDjango className={iconStyle} />,
    name: "Django",
    category: "Frameworks & Libraries",
  },
  {
    icon: <SiFastapi className={iconStyle} />,
    name: "FastAPI",
    category: "Frameworks & Libraries",
  },
  {
    icon: <SiDotnet className={iconStyle} />,
    name: ".Net",
    category: "Frameworks & Libraries",
  },
  {
    icon: <DiPostgresql className={iconStyle} />,
    name: "Postgre SQL",
    category: "Databases",
  },
  {
    icon: <DiMongodb className={iconStyle} />,
    name: "MongoDB",
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
    category: "Databases",
  },
  {
    icon: <SiAndroidstudio className={iconStyle} />,
    name: "Android Studio",
    category: "Development Tools",
  },
  {
    icon: <SiExpress className={iconStyle} />,
    name: "ExpressJs",
    category: "Frameworks & Libraries",
  },
  {
    icon: <SiMui className={iconStyle} />,
    name: "Material UI",
    category: "Frameworks & Libraries",
  },
  {
    icon: <FiFigma className={iconStyle} />,
    name: "Figma",
    category: "Design Tool",
  },
  {
    icon: <SiCanva className={iconStyle} />,
    name: "Canva",
    category: "Design Tool",
  },
];

const Skills = () => {
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

export default Skills;
