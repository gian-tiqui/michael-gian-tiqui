import React from "react";
import ContactContainer from "./components/ContactContainer";
import ContactMeButton from "./components/ContactMeButton";

const GetInTouch = () => {
  return (
    <div className="mt-36">
      <p className="font-mono text-2xl md:text-3xl font-extrabold text-white mb-3 dark:text-black">
        Get in touch
      </p>
      <hr className="border-t border-t-gray-500 mb-12" />
      <h1 className="font-mono text-2xl md:text-5xl font-extrabold text-white mb-3 dark:text-black max-w-96 md:max-w-[660px] text-start">
        Got any ideas, questions or projects you need help with?
      </h1>
      <h1 className="font-mono text-2xl md:text-5xl font-extrabold mb-10 md:mb-32 text-white dark:text-black max-w-96 md:max-w-[600px] text-start">
        Contact me!
      </h1>

      <div className="flex-col md:flex-row items-center md:flex md:justify-between md:items-end">
        <ContactContainer />
        <ContactMeButton />
      </div>
    </div>
  );
};

export default GetInTouch;
