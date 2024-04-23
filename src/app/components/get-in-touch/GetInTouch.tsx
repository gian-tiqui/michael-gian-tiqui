import React from "react";
import ContactContainer from "./components/ContactContainer";
import ContactMeButton from "./components/ContactMeButton";

const GetInTouch = () => {
  return (
    <div className="mt-24">
      <p className="font-sans text-center text-2xl md:text-3xl font-extrabold text-white mb-10 dark:text-black">
        Get in touch
      </p>
      <hr className="border-t border-t-gray-500 mb-12 md:mb-16" />
      <div className="md:px-44">
        <h1 className="font-sans text-2xl md:text-5xl text-white mb-10 md:mb-10 dark:text-black max-w-96 md:max-w-[660px]">
          Got any ideas, questions or projects you need help with? Contact me!
        </h1>

        <div className="flex flex-col items-start gap-5">
          <ContactContainer />
          <ContactMeButton />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
