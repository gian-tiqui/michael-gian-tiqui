import Link from "next/link";
import React, { ReactNode } from "react";

const TechStackContainer = ({
  children,
  name,
  link,
}: {
  children: ReactNode;
  name: string;
  link: string;
}) => {
  return (
    <Link href={link}>
      <div className="rounded-xl bg-neutral-900 h-20 px-10 flex justify-center items-center gap-3">
        {children}
        <p className="text-white font-mono text-2xl font-bold">{name}</p>
      </div>
    </Link>
  );
};

export default TechStackContainer;
