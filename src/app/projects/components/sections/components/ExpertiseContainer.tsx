"use client";
import React, { ReactNode } from "react";

export interface ExpertiseContainerProps {
  title: string;
  icon: ReactNode;
  content: string;
}

const ExpertiseContainer: React.FC<ExpertiseContainerProps> = ({
  content,
  icon,
  title,
}) => {
  return (
    <div className="border border-white p-7 w-full grid place-items-center">
      <div className="flex gap-3 items-center mb-7">
        {icon}
        <p className="font-bold md:text-lg font-sans text-white dark:text-black">
          {title}
        </p>
      </div>
      <p className="font-sans text-white dark:text-black">{content}</p>
    </div>
  );
};

export default ExpertiseContainer;
