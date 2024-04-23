import React from "react";
import ContactContainer from "./components/ContactContainer";
import ContactMeButton from "./components/ContactMeButton";

const GetInTouch = () => {
  return (
    <div className="mt-36">
      <p className="font-mono text-2xl md:text-3xl font-extrabold text-white mb-3 dark:text-black">
        Get in touch
      </p>
      <hr className="border-t border-t-gray-500 mb-12 md:mb-24" />
      <h1 className="mx-auto font-serif text-2xl md:text-5xl font-extrabold text-white mb-10 md:mb-20 dark:text-black max-w-96 md:max-w-[660px]">
        Got any ideas, questions or projects you need help with? Contact me!
      </h1>

      <div className="flex flex-col items-center gap-5 md:gap-10">
        <ContactContainer />
        <ContactMeButton />
      </div>
    </div>
  );
};

export default GetInTouch;
