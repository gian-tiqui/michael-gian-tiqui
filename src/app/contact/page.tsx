import { Metadata } from "next";
import React, { ReactNode, useContext } from "react";

import HeaderText from "./components/HeaderText";
import ContactMeContent from "./components/ContactMeContent";

export const metadata: Metadata = {
  title: "Gian • Contact",
  description: "Michael Gian Tiqui's Contact Details",
};

export interface ContactInfoInterface {
  name: string;
  info: string;
  icon: ReactNode;
}

const Contact = () => {
  return (
    <div className="pt-52 mb-20">
      <HeaderText />
      <ContactMeContent />
    </div>
  );
};

export default Contact;
