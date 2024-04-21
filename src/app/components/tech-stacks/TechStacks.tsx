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
  link: string;
}

const techStacks: TechStacksInterface[] = [
  {
    icon: <FaReact className="h-10 w-auto text-white" />,
    name: "React",
    link: "/",
  },
  {
    icon: <TbBrandNextjs className="h-10 w-auto text-white" />,
    name: "NextJs",
    link: "/",
  },
  {
    icon: <FaLaravel className="h-10 w-auto text-white" />,
    name: "Laravel",
    link: "/",
  },
  {
    icon: <SiTailwindcss className="h-10 w-auto text-white" />,
    name: "Tailwind CSS",
    link: "/",
  },
  {
    icon: <DiGithub className="h-10 w-auto text-white" />,
    name: "Github",
    link: "/",
  },
  {
    icon: <SiVercel className="h-10 w-auto text-white" />,
    name: "Vercel",
    link: "/",
  },
  {
    icon: <TbBrandFramerMotion className="h-10 w-auto text-white" />,
    name: "Framer Motion",
    link: "/",
  },
  {
    icon: <SiSpringboot className="h-10 w-auto text-white" />,
    name: "Spring Boot",
    link: "/",
  },
  {
    icon: <DiDjango className="h-10 w-auto text-white" />,
    name: "Django",
    link: "/",
  },
  {
    icon: <DiDotnet className="h-10 w-auto text-white" />,
    name: ".Net",
    link: "/",
  },
  {
    icon: <SiArduino className="h-10 w-auto text-white" />,
    name: "Arduino",
    link: "/",
  },
  {
    icon: <SiPrisma className="h-10 w-auto text-white" />,
    name: "Prisma",
    link: "/",
  },
  {
    icon: <DiMongodb className="h-10 w-auto text-white" />,
    name: "MongoDB",
    link: "/",
  },
  {
    icon: <DiPostgresql className="h-10 w-auto text-white" />,
    name: "PostgreSQL",
    link: "/",
  },
  {
    icon: <DiMysql className="h-10 w-auto text-white" />,
    name: "MySQL",
    link: "/",
  },
  {
    icon: <DiFirebase className="h-10 w-auto text-white" />,
    name: "Firebase",
    link: "/",
  },
  {
    icon: <SiAndroidstudio className="h-10 w-auto text-white" />,
    name: "Android Studio",
    link: "/",
  },
  {
    icon: <TbBrandReactNative className="h-10 w-auto text-white" />,
    name: "React Native",
    link: "/",
  },
  {
    icon: <FaNodeJs className="h-10 w-auto text-white" />,
    name: "NodeJs",
    link: "/",
  },
  {
    icon: <SiExpress className="h-10 w-auto text-white" />,
    name: "ExpressJs",
    link: "/",
  },
  {
    icon: <SiJquery className="h-10 w-auto text-white" />,
    name: "Jquery",
    link: "/",
  },
  {
    icon: <BsBootstrap className="h-10 w-auto text-white" />,
    name: "Bootstrap",
    link: "/",
  },

  {
    icon: <DiMaterializecss className="h-10 w-auto text-white" />,
    name: "Material UI",
    link: "/",
  },
  {
    icon: <SiTensorflow className="h-10 w-auto text-white" />,
    name: "Tensorflow",
    link: "/",
  },
  {
    icon: <FiFigma className="h-10 w-auto text-white" />,
    name: "Figma",
    link: "/",
  },
];

const TechStacks = () => {
  return (
    <div className="mt-32">
      <h1 className="font-mono text-5xl font-extrabold text-white mb-6">
        Tech Stacks
      </h1>
      <hr className="border-t border-t-gray-500 mb-12 mx-auto" />
      <div className="flex flex-wrap gap-5 justify-center">
        {techStacks.map((techStack, index) => (
          <TechStackContainer
            name={techStack.name}
            link={techStack.link}
            key={index}
          >
            {techStack.icon}
          </TechStackContainer>
        ))}
      </div>
    </div>
  );
};

export default TechStacks;
