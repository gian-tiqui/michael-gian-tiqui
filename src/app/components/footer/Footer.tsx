import React, { ReactNode } from "react";
import IconContainer from "./components/IconContainer";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import ScrollMotionTemplate from "../motion/ScrollMotion";

export interface IconsRouteInterface {
  icon: ReactNode;
  path: string;
  name: string;
}

const iconStyle = "h-5 w-auto dark:text-white";

export const iconsMapping: IconsRouteInterface[] = [
  {
    icon: <FaFacebook className={iconStyle} />,
    path: "https://www.facebook.com/michaelgiantiqui/",
    name: "Facebook",
  },
  {
    icon: <FaInstagram className={iconStyle} />,
    path: "https://www.instagram.com/giantiquiii/",
    name: "Instagram",
  },
  {
    icon: <BsTwitterX className={iconStyle} />,
    path: "https://twitter.com/gian_tiqui",
    name: "Twitter",
  },
  {
    icon: <FaLinkedin className={iconStyle} />,
    path: "https://www.linkedin.com/in/michael-gian-tiqui-780344283/",
    name: "LinkedIn",
  },
  {
    icon: <FaGithub className={iconStyle} />,
    path: "https://github.com/gian-tiqui",
    name: "Github",
  },
];

const Footer = () => {
  return (
    <ScrollMotionTemplate>
      <footer className="flex flex-wrap justify-center md:flex md:justify-start mb-7 px-10 md:px-44 gap-6">
        {iconsMapping.map((iconMap, index) => (
          <Link href={iconMap.path} key={index}>
            <IconContainer>{iconMap.icon}</IconContainer>
          </Link>
        ))}
      </footer>
    </ScrollMotionTemplate>
  );
};

export default Footer;
