"use client";
import { ModeContext } from "@/app/context-provider/ContextProvider";
import React, { useContext, useEffect, useState } from "react";
import MessageBox from "./MessageBox";

const ContactForm = () => {
  const { darkMode } = useContext(ModeContext);
  const [delayedDarkMode, setDelayedDarkMode] = useState(darkMode);

  useEffect(() => {
    const timerId = setTimeout(() => setDelayedDarkMode(darkMode), 500);

    return () => clearTimeout(timerId);
  }, [darkMode]);

  return (
    <div className={` h-[500px] w-80 md:h-[600px] md:w-[500px] rounded-lg`}>
      <div className="relative z-10 m-5">
        <MessageBox />
      </div>
    </div>
  );
};

export default ContactForm;
