import { Metadata } from "next";
import React from "react";
import HeaderText from "./components/HeaderText";

export const metadata: Metadata = {
  title: "Gian • Education",
  description: "Michael Gian Tiqui's Contact Details",
};

const Education = () => {
  return (
    <div className="pt-52 mb-20">
      <HeaderText />
    </div>
  );
};

export default Education;
