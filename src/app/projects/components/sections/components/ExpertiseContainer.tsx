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
    <div className="border border-white mx-auto md:mx-none dark:border-black py-10 md:py-7 px-7 w-72 md:w-full">
      <div className="flex gap-3 items-center mb-5">
        {icon}
        <p className="font-bold text-md md:text-lg font-sans text-white dark:text-black">
          {title}
        </p>
      </div>
      <p className="font-sans text-sm md:text-md text-neutral-300 dark:text-neutral-800">
        {content}
      </p>
    </div>
  );
};

export default ExpertiseContainer;
