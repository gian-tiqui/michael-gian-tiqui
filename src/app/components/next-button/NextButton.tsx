import Link from "next/link";
import React from "react";
import { BsArrowUp } from "react-icons/bs";
import ScrollMotionTemplate from "../motion/ScrollMotion";

interface NextButtonProps {
  name: string;
  link: string;
}

const NextButton: React.FC<NextButtonProps> = ({ name, link }) => {
  return (
    <ScrollMotionTemplate>
      <Link
        href={link}
        className="flex gap-2 items-center text-white dark:text-black"
      >
        <p className=" hover:underline font-sans">{name}</p>
        <span className="rotate-90">
          <BsArrowUp className="animate-bounce h-4 w-auto" />
        </span>
      </Link>
    </ScrollMotionTemplate>
  );
};

export default NextButton;
