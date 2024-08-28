"use client";

import useIdStore from "@/app/store/useIdStore";
import { Navkit as NavkitType } from "@/app/types/Types";
import Link from "next/link";
import { BiHome, BiPhone } from "react-icons/bi";
import { BsPuzzle } from "react-icons/bs";
import { FaSchool } from "react-icons/fa";
import { GiJourney, GiSkills } from "react-icons/gi";

export default function Navkit() {
  const iconStyle: string = "text-white h-auto w-5";
  const navItems: NavkitType[] = [
    {
      id: "introduction",
      icon: <BiHome className={iconStyle} />,
    },
    {
      id: "education",
      icon: <FaSchool className={iconStyle} />,
    },
    {
      id: "experience",
      icon: <GiJourney className={iconStyle} />,
    },
    {
      id: "skills",
      icon: <GiSkills className={iconStyle} />,
    },
    {
      id: "projects",
      icon: <BsPuzzle className={iconStyle} />,
    },
    {
      id: "contact",
      icon: <BiPhone className={iconStyle} />,
    },
  ];

  const { id } = useIdStore();

  return (
    <div className="fixed flex flex-col top-[30%] right-0 me-3 gap-3">
      {navItems.map((nav) => (
        <Link
          href={`#${nav.id}`}
          key={nav.id}
          className={`h-9 w-9 grid place-content-center ${
            nav.id === id ? "rounded-xl" : "rounded-full"
          } bg-black`}
        >
          {nav.icon}
        </Link>
      ))}
    </div>
  );
}
