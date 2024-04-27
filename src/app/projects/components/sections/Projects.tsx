import MotionTemplate from "@/app/components/motion/MotionTemplate";
import React from "react";

const Projects = () => {
  return (
    <MotionTemplate>
      <div className="grid grid-cols-3 gap-y-2 place-items-center">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <div className="h-72 w-72 bg-black" key={index} />
          ))}
      </div>
    </MotionTemplate>
  );
};

export default Projects;
