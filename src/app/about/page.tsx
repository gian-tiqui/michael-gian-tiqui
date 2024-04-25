import { Metadata } from "next";
import React from "react";
import Introduction from "./components/Introduction";
import ThingsIDo from "./components/ThingsIDo";

export const metadata: Metadata = {
  title: "Gian • About",
  description: "The Story of Gian",
};

const About = () => {
  return (
    <div className="pt-52 mb-20 px-7 md:px-20">
      <Introduction />
      <ThingsIDo />
    </div>
  );
};

export default About;
