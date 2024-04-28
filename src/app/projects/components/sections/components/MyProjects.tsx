"use client";
import React, { useState } from "react";
import { TechStacksInterface } from "../Skills";
import unk from "../../../../assets/unknown-website.png";
import Image, { StaticImageData } from "next/image";
import { DiFirebase, DiJava, DiReact } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import {
  SiAndroidstudio,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import { BsBootstrap, BsWordpress } from "react-icons/bs";
import { AnimatePresence } from "framer-motion";
import MotionTemplate from "@/app/components/motion/MotionTemplate";
import { FiFigma } from "react-icons/fi";

interface ProjectCardProps {
  name: string;
  description: string;
  stacks: TechStacksInterface[];
  image: StaticImageData;
}

const iconStyle: string = "text-white dark:text-black h-5 w-auto";

const projects: ProjectCardProps[] = [
  {
    name: "City Government of Tanauan",
    description: "City Government of Tanauan Website",
    stacks: [
      {
        name: "React",
        icon: <DiReact className={iconStyle} />,
      },
      {
        name: "TailwindCss",
        icon: <SiTailwindcss className={iconStyle} />,
      },
      {
        name: "HTML",
        icon: <FaHtml5 className={iconStyle} />,
      },
      {
        name: "Wordpress",
        icon: <BsWordpress className={iconStyle} />,
      },
      {
        name: "Typescript",
        icon: <SiTypescript className={iconStyle} />,
      },
      {
        name: "Figma",
        icon: <FiFigma className={iconStyle} />,
      },
    ],
    image: unk,
  },
  {
    name: "GeoFacia",
    description: "Events attendance tracker using Biometrics",
    stacks: [
      {
        name: "Android Studio",
        icon: <SiAndroidstudio className={iconStyle} />,
      },
      {
        name: "Java",
        icon: <DiJava className={iconStyle} />,
      },
      {
        name: "Firebase",
        icon: <DiFirebase className={iconStyle} />,
      },
      {
        name: "Tensorflow",
        icon: <SiTensorflow className={iconStyle} />,
      },
      {
        name: "Figma",
        icon: <FiFigma className={iconStyle} />,
      },
    ],
    image: unk,
  },
  {
    name: "GeoFacia Dashboard",
    description: "Dashboard designed to track GeoFacia Activities",
    stacks: [
      {
        name: "React",
        icon: <DiReact className={iconStyle} />,
      },
      {
        name: "Bootstrap",
        icon: <BsBootstrap className={iconStyle} />,
      },
      {
        name: "HTML",
        icon: <FaHtml5 className={iconStyle} />,
      },
      {
        name: "Firebase",
        icon: <DiFirebase className={iconStyle} />,
      },
      {
        name: "Typescript",
        icon: <SiTypescript className={iconStyle} />,
      },
    ],
    image: unk,
  },
  {
    name: "City Government of Tanauan",
    description: "City Government of Tanauan Website",
    stacks: [
      {
        name: "React",
        icon: <DiReact className={iconStyle} />,
      },
      {
        name: "TailwindCss",
        icon: <SiTailwindcss className={iconStyle} />,
      },
      {
        name: "HTML",
        icon: <FaHtml5 className={iconStyle} />,
      },
      {
        name: "Wordpress",
        icon: <BsWordpress className={iconStyle} />,
      },
    ],
    image: unk,
  },
  {
    name: "City Government of Tanauan",
    description: "City Government of Tanauan Website",
    stacks: [
      {
        name: "React",
        icon: <DiReact className={iconStyle} />,
      },
      {
        name: "TailwindCss",
        icon: <SiTailwindcss className={iconStyle} />,
      },
      {
        name: "HTML",
        icon: <FaHtml5 className={iconStyle} />,
      },
      {
        name: "Wordpress",
        icon: <BsWordpress className={iconStyle} />,
      },
    ],
    image: unk,
  },
  {
    name: "City Government of Tanauan",
    description: "City Government of Tanauan Website",
    stacks: [
      {
        name: "React",
        icon: <DiReact className={iconStyle} />,
      },
      {
        name: "TailwindCss",
        icon: <SiTailwindcss className={iconStyle} />,
      },
      {
        name: "HTML",
        icon: <FaHtml5 className={iconStyle} />,
      },
      {
        name: "Wordpress",
        icon: <BsWordpress className={iconStyle} />,
      },
    ],
    image: unk,
  },
];

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  stacks,
  image,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`rounded-lg shadow-md overflow-hidden cursor-pointer relative`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={image}
        alt={name}
        priority
        className={`w-full bg-cover bg-center ${isHovered && "opacity-25"}`}
      />
      <AnimatePresence>
        {isHovered && (
          <MotionTemplate duration={0.3}>
            <div className="details absolute bottom-0 p-4">
              <p className="text-white dark:text-black font-sans font-extrabold md:text-xl">
                {name}
              </p>
              <p className="text-white dark:text-black font-bold font-sans mb-2">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {stacks.map((stack, index) => (
                  <div
                    className="py-1 px-3 rounded-full bg-white dark:bg-neutral-900"
                    key={index}
                  >
                    <p className="font-sans text-black dark:text-white text-xs">
                      {stack.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </MotionTemplate>
        )}
      </AnimatePresence>
    </div>
  );
};

const MyProjects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default MyProjects;
