import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Gian • Education",
  description: "Michael Gian Tiqui's Contact Details",
};

const Education = () => {
  return (
    <div className="pt-52 mb-20">
      <h1 className="text-white dark:text-black text-center md:text-5xl font-sans font-bold mb-20">
        Education
      </h1>
    </div>
  );
};

export default Education;
