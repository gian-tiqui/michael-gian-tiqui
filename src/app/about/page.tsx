import React from "react";

const About = () => {
  const birthDate = new Date(2001, 4, 7);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthDate.getFullYear();

  const hasHadBirthday =
    currentDate.getMonth() > birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() >= birthDate.getDate());

  if (!hasHadBirthday) {
    age--;
  }

  return (
    <div className="pt-52 mb-20">
      <div className="flex flex-col items-center md:flex-row justify-center gap-5">
        <div className="grid place-content-center">
          <div className="h-52 w-52 md:h-96 md:w-96 bg-neutral-900 dark:bg-white rounded-3xl"></div>
        </div>
        <div className="grid place-content-center">
          <div className="h-52 w-52 md:h-96 md:w-96 bg-neutral-900 dark:bg-white rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
