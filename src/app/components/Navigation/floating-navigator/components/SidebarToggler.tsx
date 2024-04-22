"use client";
import React from "react";
import { CgClose, CgMenu } from "react-icons/cg";

interface SidebarTogglerProps {
  expanded: boolean;
}

const SidebarToggler: React.FC<SidebarTogglerProps> = ({ expanded }) => {
  return (
    <>
      {expanded ? (
        <CgClose className="text-white h-8 w-auto dark:text-black" />
      ) : (
        <CgMenu className="text-white h-8 w-auto dark:text-black" />
      )}
    </>
  );
};

export default SidebarToggler;
