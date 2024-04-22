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
    <div className="rounded-xl bg-neutral-900 h-20 px-10 w-64 flex justify-center items-center gap-3 dark:bg-white">
      {children}
      <p className="text-white font-mono text-2xl font-bold dark:text-black">
        {name}
      </p>
    </div>
  );
};

export default TechStackContainer;
