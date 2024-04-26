import React from "react";
import { ContactInfoInterface } from "../page";

const InfoContainer: React.FC<ContactInfoInterface> = ({
  name,
  info,
  icon,
}) => {
  return (
    <div className="flex gap-3">
      <div className="h-12 md:w-12 p-2 bg-teal-400 dark:bg-blue-600">
        {icon}
      </div>
      <div>
        <p className="font-sans font-bold text-teal-400 dark:text-blue-600 mb-1">
          {name}
        </p>
        <p className="font-sans text-white dark:text-black max-w-52">{info}</p>
      </div>
    </div>
  );
};

export default InfoContainer;
