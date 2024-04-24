import { Metadata } from "next";
import React from "react";
import Introduction from "./components/Introduction";
import ThingsIDo from "./components/ThingsIDo";

export const metadata: Metadata = {
  title: "Gian • About",
  description: "The Story of Gian",
};

const About = () => {
  const birthDate = new Date(2001, 4, 7);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthDate.getFullYear();

  const hasHadBirthday =
    currentDate.getMonth() > birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() >= birthDate.getDate());

  if (!hasHadBirthday) {
    age--;
  }

  return (
    <div className="pt-52 mb-20">
      <Introduction />
      <ThingsIDo />
    </div>
  );
};

export default About;
