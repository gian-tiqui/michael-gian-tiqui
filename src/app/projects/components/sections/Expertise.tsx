import MotionTemplate from "@/app/components/motion/MotionTemplate";
import React from "react";
import ExpertiseContainer, {
  ExpertiseContainerProps,
} from "./components/ExpertiseContainer";
import { CiMobile3, CiMonitor } from "react-icons/ci";
import { DiReact } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { BsDatabase } from "react-icons/bs";

const iconStyle: string = "h-10 w-auto text-white dark:text-black";

const expertises: ExpertiseContainerProps[] = [
  {
    title: "Front-end Development",
    content:
      "Almost 1 year of development experience with Front-end Libraries/Frameworks like React, NextJS, TailwindCSS, Bootstrap, Framer Motion, Material UI",
    icon: <DiReact className={iconStyle} />,
  },
  {
    title: "Back-end Development",
    content:
      "Almost 1 year of development experience with Back-end Frameworks like Laravel, Spring boot, PHP",
    icon: <TbApi className={iconStyle} />,
  },
  {
    title: "Database Management",
    content:
      "Almost 1 year of Database Management Activities in Databases like SQLite, MySQL, PostgreSQL",
    icon: <BsDatabase className={iconStyle} />,
  },
  {
    title: "Mobile Development",
    content:
      "Almost 1 year of development experience using Android Studio for developing Mobile Apps",
    icon: <CiMobile3 className={iconStyle} />,
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
