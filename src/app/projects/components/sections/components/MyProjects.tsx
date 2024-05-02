"use client";
import React, { useState } from "react";
import { TechStacksInterface } from "../Skills";
import unk from "../../../../assets/temp-pic.jpg";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence } from "framer-motion";
import MotionTemplate from "@/app/components/motion/MotionTemplate";

interface ProjectCardProps {
  name: string;
  description: string;
  stacks: TechStacksInterface[];
  image: StaticImageData;
}

const projects: ProjectCardProps[] = [
  {
    name: "City Government of Tanauan",
    description: "City Government of Tanauan Website",
    stacks: [
      {
        name: "React",
      },
      {
        name: "TailwindCss",
      },
      {
        name: "HTML",
      },
      {
        name: "Wordpress",
      },
      {
        name: "Typescript",
      },
      {
        name: "Figma",
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
      },
      {
        name: "Java",
      },
      {
        name: "Firebase",
      },
      {
        name: "Tensorflow",
      },
      {
        name: "Figma",
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
      },
      {
        name: "Bootstrap",
      },
      {
        name: "HTML",
      },
      {
        name: "Firebase",
      },
      {
        name: "Typescript",
      },
    ],
    image: unk,
  },
  {
    name: "Booklist CMS",
    description: "A Library Website where you can manage Books",
    stacks: [
      {
        name: "ASP.NET",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "Javascript",
      },
      {
        name: "C#",
      },
      {
        name: "PHP",
      },
      {
        name: "MySQL",
      },
    ],
    image: unk,
  },
  {
    name: "Employee CMS",
    description: "A Website where you can manage Employees",
    stacks: [
      {
        name: "ASP.NET",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "Javascript",
      },
      {
        name: "C#",
      },
      {
        name: "PHP",
      },
      {
        name: "MySQL",
      },
    ],
    image: unk,
  },
  {
    name: "Blog Website",
    description: "Posts your thoughts in this website",
    stacks: [
      {
        name: "React",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "Firebase",
      },
    ],
    image: unk,
  },
  {
    name: "Todo Web Application",
    description: "A todo app that is accessible in the web",
    stacks: [
      {
        name: "React",
      },
      {
        name: "ExpressJS",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "HTML",
      },
    ],
    image: unk,
  },
  {
    name: "Toys Storage Website",
    description: "A web app that let you store your toy data",
    stacks: [
      {
        name: "Laravel",
      },
      {
        name: "HTML",
      },
      {
        name: "MySQL",
      },
      {
        name: "PHP",
      },
      {
        name: "Javascript",
      },
      {
        name: "Bootstrap",
      },
    ],
    image: unk,
  },
  {
    name: "Batangas.net",
    description: "The News Website of Batangas",
    stacks: [
      {
        name: "NextJS",
      },
      {
        name: "React",
      },
      {
        name: "TailwindCss",
      },
      {
        name: "Typescript",
      },
      {
        name: "HTML",
      },
      {
        name: "Laravel",
      },
      {
        name: "PHP",
      },
      {
        name: "SQLite",
      },
    ],
    image: unk,
  },
  {
    name: "Batangas.net CMS",
    description: "The CMS for the News Website of Batangas",
    stacks: [
      {
        name: "NextJS",
      },
      {
        name: "React",
      },
      {
        name: "TailwindCss",
      },
      {
        name: "Typescript",
      },
      {
        name: "HTML",
      },
      {
        name: "Laravel",
      },
      {
        name: "PHP",
      },
      {
        name: "SQLite",
      },
    ],
    image: unk,
  },
  {
    name: "Urban Bistro",
    description: "An Ordering Mobile Application",
    stacks: [
      {
        name: "Android Studio",
      },
      {
        name: "SQLite",
      },
      {
        name: "Java",
      },
      {
        name: "XML",
      },
    ],
    image: unk,
  },
  {
    name: "Locatio",
    description: "A Travel Mobile App",
    stacks: [
      {
        name: "React-Native",
      },
      {
        name: "Typescript",
      },
    ],
    image: unk,
  },
  {
    name: "Schat",
    description: "A Simple Chat Application",
    stacks: [
      {
        name: "React",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "Firebase",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "Javascript",
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
        className={`w-full bg-cover h-72 bg-center pointer-events-none ${
          isHovered && "opacity-25"
        }`}
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
  const [shown, setShown] = useState<number>(4);

  const handleClick = () => {
    if (shown < projects.length) {
      setShown((prevVal) => prevVal + 4);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full mb-3 md:mb-10">
        {projects.slice(0, shown).map((project, index) => (
          <MotionTemplate key={index}>
            <ProjectCard {...project} />
          </MotionTemplate>
        ))}
      </div>
      <button
        className="mx-auto bg-neutral-800 dark:bg-white shadow-xl hover:bg-neutral-700 dark:hover:bg-gray-100 py-2 px-5 text-white dark:text-neutral-900 rounded-md font-bold font-sans text-lg"
        onClick={handleClick}
      >
        Load more
      </button>
    </div>
  );
};

export default MyProjects;
