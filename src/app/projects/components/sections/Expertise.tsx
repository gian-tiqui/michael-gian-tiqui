import MotionTemplate from "@/app/components/motion/MotionTemplate";
import React from "react";
import ExpertiseContainer, {
  ExpertiseContainerProps,
} from "./components/ExpertiseContainer";
import { CiMobile3, CiMonitor } from "react-icons/ci";
import { DiReact } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { BsDatabase } from "react-icons/bs";
import { GiArtificialIntelligence } from "react-icons/gi";

const iconStyle: string = "h-10 w-auto text-white dark:text-black";

const expertises: ExpertiseContainerProps[] = [
  {
    title: "Front-end Development",
    content:
      "Over 2 years of development experience with Front-end Libraries/Frameworks like React, NextJS, TailwindCSS, Bootstrap, Framer Motion, Material UI",
    icon: <DiReact className={iconStyle} />,
  },
  {
    title: "Back-end Development",
    content:
      "Over 1 year of development experience with Back-end Frameworks like Laravel, Spring boot, Django, PHP, ExpressJS",
    icon: <TbApi className={iconStyle} />,
  },
  {
    title: "Database Management",
    content:
      "Over 2 years of Database Management Activities in Databases like MongoDB, SQLite, MySQL, PostgreSQL",
    icon: <BsDatabase className={iconStyle} />,
  },
  {
    title: "Mobile Development",
    content:
      "Over 1 year of development experience using Android Studio and React-Native for developing Mobile Apps",
    icon: <CiMobile3 className={iconStyle} />,
  },
  {
    title: "Machine Learning",
    content:
      "Our chosen Capstone Project made a bridge for me to get ideas on how Machine Learning works throughout the development period.",
    icon: <GiArtificialIntelligence className={iconStyle} />,
  },
  {
    title: "Software Development",
    content:
      "Experienced in functional programming and OOP. Using C#, Java, Python, JS, and TS",
    icon: <CiMonitor className={iconStyle} />,
  },
];

const Expertise = () => {
  return (
    <MotionTemplate>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {expertises.map((expertise, index) => (
          <ExpertiseContainer {...expertise} key={index} />
        ))}
      </div>
    </MotionTemplate>
  );
};

export default Expertise;
