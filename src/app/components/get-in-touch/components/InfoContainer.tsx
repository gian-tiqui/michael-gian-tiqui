import React from "react";
import { ContactInterface } from "./ContactContainer";
import Link from "next/link";

const InfoContainer: React.FC<ContactInterface> = ({ name, path }) => {
  return path ? (
    <Link
      href={path}
      className="rounded-full bg-neutral-900 px-5 md:px-10 h-10 flex items-center dark:bg-white"
    >
      <p className="text-white dark:text-black font-mono text-xs md:text-lg">
        {name}
      </p>
    </Link>
  ) : (
    <div className="rounded-full bg-neutral-900 px-5 md:px-10 h-10 flex items-center dark:bg-white">
      <p className="text-white dark:text-black font-mono text-xs md:text-lg">
        {name}
      </p>
    </div>
  );
};

export default InfoContainer;
