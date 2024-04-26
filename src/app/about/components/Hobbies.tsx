import React from "react";
import TextContainer from "./TextContainer";
import { hobbies } from "@/app/utils/About";

const Hobbies = () => {
  return (
    <div className="md:mb-16">
      <p className="text-white dark:text-black md:text-2xl font-bold font-sans fontbold mb-5">
        Hobbies
      </p>
      {hobbies.map((hobby, index) => (
        <TextContainer key={index} {...hobby} />
      ))}
    </div>
  );
};

export default Hobbies;
