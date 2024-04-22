import Link from "next/link";
import React, { ReactNode } from "react";

const TechStackContainer = ({
  children,
  name,
}: {
  children: ReactNode;
  name: string;
}) => {
  return (
    <div className="rounded-xl bg-neutral-900 w-32 h-14 px-3 md:h-20 md:px-10 md:w-64 flex md:justify-center shadow-xl items-center gap-3 dark:bg-white">
      {children}
      <p className="text-white font-mono md:text-2xl md:font-bold dark:text-black">
        {name}
      </p>
    </div>
  );
};

export default TechStackContainer;
