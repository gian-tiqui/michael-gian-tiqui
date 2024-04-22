import React, { ReactNode } from "react";

const IconContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="rounded-full shadow-md p-2 bg-white cursor-pointer hover:bg-gray-300 dark:bg-black">
      {children}
    </div>
  );
};

export default IconContainer;
