import React, { ReactNode } from "react";
import IconContainer from "./components/IconContainer";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsDot, BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import { routesMapping } from "@/app/utils/Routes";
import { CgCopyright } from "react-icons/cg";

interface IconsRouteInterface {
  icon: ReactNode;
  path: string;
  name: string;
}

export const iconsMapping: IconsRouteInterface[] = [
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

const Footer = () => {
  return (
    <footer className="bg-neutral-900 h-80 grid place-items-center dark:bg-white">
      <div className="flex flex-col gap-7 items-center">
        <div className="flex gap-6">
          {iconsMapping.map((iconMap, index) => (
            <Link href={iconMap.path} key={index}>
              <IconContainer>{iconMap.icon}</IconContainer>
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 md:gap-2 items-center">
          {routesMapping.map((route, index) => (
            <React.Fragment key={index}>
              <Link
                className="font-mono text-white text-md hover:underline dark:text-black"
                href={route.path}
              >
                {route.name}
              </Link>
              {index + 1 !== routesMapping.length && (
                <BsDot className="text-white hidden md:block dark:text-black" />
              )}
            </React.Fragment>
          ))}
        </div>
        <hr className="border-t border-t-gray-500 w-72" />
        <div className="flex gap-2 items-center">
          <p className="text-white font-mono dark:text-black">
            Michael Gian Tiqui
          </p>
          <CgCopyright className="text-white dark:text-black" />
          <p className="text-white font-mono dark:text-black">2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
