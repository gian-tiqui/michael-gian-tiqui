import { Metadata } from "next";
import React, { ReactNode, useContext } from "react";
import ContactForm from "./components/ContactForm";
import { BiSolidPhoneCall } from "react-icons/bi";
import InfoContainer from "./components/InfoContainer";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

import { FaMobileScreenButton } from "react-icons/fa6";
import { IconsRouteInterface } from "../components/footer/Footer";
import Link from "next/link";
import IconContainer from "../components/footer/components/IconContainer";
import { GoLocation } from "react-icons/go";

export const metadata: Metadata = {
  title: "Gian • Contact",
  description: "Michael Gian Tiqui's Contact Details",
};

export interface ContactInfoInterface {
  name: string;
  info: string;
  icon: ReactNode;
}

const iconsMapping: IconsRouteInterface[] = [
  {
    icon: <FaFacebook className="h-6 w-auto dark:text-white" />,
    path: "https://www.facebook.com/michaelgiantiqui/",
    name: "Facebook",
  },
  {
    icon: <FaLinkedin className="h-6 w-auto dark:text-white" />,
    path: "https://www.linkedin.com/in/michael-gian-tiqui-780344283/",
    name: "LinkedIn",
  },
  {
    icon: <FaGithub className="h-6 w-auto dark:text-white" />,
    path: "https://github.com/gian-tiqui",
    name: "Github",
  },
];

const iconStyle: string = "dark:text-white text-neutral-800 h-8 w-auto";

const contactInfo: ContactInfoInterface[] = [
  {
    name: "WhatsApp",
    info: "+63 923-180-3011",
    icon: <BsWhatsapp className={iconStyle} />,
  },
  {
    name: "Phone",
    info: "+63 923-180-3011",
    icon: <FaMobileScreenButton className={iconStyle} />,
  },
  {
    name: "Telephone",
    info: "815-06-56",
    icon: <BiSolidPhoneCall className={iconStyle} />,
  },
  {
    name: "Location",
    info: "San Pedro, Laguna, Philippines",
    icon: <GoLocation className={iconStyle} />,
  },
];

const Contact = () => {
  return (
    <div className="pt-52 mb-20">
      <h1 className="md:text-5xl font-bold text-center font-sans text-white dark:text-black mb-5">
        Contact Me
      </h1>
      <p className="px-7 md:px-0 md:text-xl mx-auto text-center font-sans text-white dark:text-black md:max-w-[600px] mb-5">
        Send your ideas, questions or projects you need help with here. I will
        try to respond as soon as possible.
      </p>
      <div className="flex flex-col gap-14 md:gap-0 md:flex-row md:justify-between mt-14">
        <div className="flex justify-between items-start pl-8 md:pl-32 flex-col flex-1 pt-6">
          <div className="flex flex-col gap-6">
            {contactInfo.map((info, index) => (
              <InfoContainer {...info} key={index} />
            ))}
          </div>
          <div className="pt-10 md:pt-0">
            <p className="md:px-0 md:text-xl font-sans text-white dark:text-black md:max-w-[600px] mb-5">
              Stay Connected
            </p>
            <div className="flex gap-3">
              {iconsMapping.map((iconMap, index) => (
                <Link href={iconMap.path} key={index}>
                  <IconContainer>{iconMap.icon}</IconContainer>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-1">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
