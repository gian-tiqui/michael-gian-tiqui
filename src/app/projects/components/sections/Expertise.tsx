import MotionTemplate from "@/app/components/motion/MotionTemplate";
import React from "react";
import ExpertiseContainer, {
  ExpertiseContainerProps,
} from "./components/ExpertiseContainer";
import { VscCode } from "react-icons/vsc";

const expertises: ExpertiseContainerProps[] = [
  {
    title: "Full-Stack Development",
    content:
      "jnasdjnasjdsnan jandsjdasnj adjnkdjnsanjdsa jnasdjnasjdsnan jandsjdasnj adjnkdjnsanjdsa",
    icon: <VscCode className="text-white dark:text-black" />,
  },
  {
    title: "Application Development",
    content:
      "jnasdjnasjdsnan jandsjdasnj adjnkdjnsanjdsa jnasdjnasjdsnan jandsjdasnj adjnkdjnsanjdsa",
    icon: <VscCode className="text-white dark:text-black" />,
  },
  {
    title: "Software Development",
    content:
      "jnasdjnasjdsnan jandsjdasnj adjnkdjnsanjdsa jnasdjnasjdsnan jandsjdasnj adjnkdjnsanjdsa",
    icon: <VscCode className="text-white dark:text-black" />,
  },
];

const Expertise = () => {
  return (
    <MotionTemplate>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {expertises.map((expertise, index) => (
          <ExpertiseContainer {...expertise} key={index} />
        ))}
      </div>
    </MotionTemplate>
  );
};

export default Expertise;
