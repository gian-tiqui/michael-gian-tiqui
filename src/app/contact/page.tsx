import { Metadata } from "next";
import React, { ReactNode, useContext } from "react";

import HeaderText from "./components/HeaderText";
import ContactMeContent from "./components/ContactMeContent";
import MotionTemplate from "../components/motion/MotionTemplate";
import NextButton from "../components/next-button/NextButton";

export const metadata: Metadata = {
  title: "Contact • Michael Gian Tiqui",
  description: "Michael Gian Tiqui's Contact Details",
};

export interface ContactInfoInterface {
  name: string;
  info: string;
  icon: ReactNode;
}

const Contact = () => {
  return (
    <div className="pt-40 md:pt-52 mb-20 px-7 md:px-44">
      <MotionTemplate>
        <HeaderText />
        <ContactMeContent />
        <NextButton link="/" name="Go back Home?" />
      </MotionTemplate>
    </div>
  );
};

export default Contact;
