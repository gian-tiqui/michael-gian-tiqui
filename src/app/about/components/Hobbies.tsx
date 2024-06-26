import React from "react";
import TextContainer from "./TextContainer";
import { hobbies } from "@/app/utils/About";
import ScrollMotionTemplate from "@/app/components/motion/ScrollMotion";

const Hobbies = () => {
  return (
    <ScrollMotionTemplate>
      <div className="mb-5 md:mb-16">
        <p className="text-white dark:text-black md:text-2xl font-bold font-sans fontbold mb-5">
          Hobbies
        </p>
        {hobbies.map((hobby, index) => (
          <TextContainer key={index} {...hobby} />
        ))}
      </div>
    </ScrollMotionTemplate>
  );
};

export default Hobbies;
