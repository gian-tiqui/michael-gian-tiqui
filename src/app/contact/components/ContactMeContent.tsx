"use client";
import React from "react";
import ContactForm from "./ContactForm";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { GoLocation } from "react-icons/go";
import { ContactInfoInterface } from "../page";
import { IconsRouteInterface } from "@/app/components/footer/Footer";
import InfoContainer from "./InfoContainer";
import { SiGmail } from "react-icons/si";

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
    name: "Gmail",
    info: "meow@gmail.com",
    icon: <SiGmail className={iconStyle} />,
  },
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

const ContactMeContent = () => {
  return (
    <div className="flex flex-col gap-14 md:gap-0 md:flex-row md:justify-between mt-14 mx-10">
      <div className="flex justify-between items-start pl-8 md:pl-32 flex-col flex-1 pt-6">
        <div className="flex flex-col gap-6">
          {contactInfo.map((info, index) => (
            <InfoContainer {...info} key={index} />
          ))}
        </div>
      </div>

      <div className="flex justify-center flex-1">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactMeContent;
