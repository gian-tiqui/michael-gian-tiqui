import React from "react";

const Introduction = () => {
  return (
    <>
      <h1 className="text-white dark:text-black text-center md:text-5xl font-sans font-bold mb-20">
        I&apos;m Gian
      </h1>
      <div className="flex flex-col items-center md:items-start md:flex-row justify-center gap-20 mb-20">
        <div className="grid place-content-center">
          <div className="h-52 w-52 md:h-[400px] md:w-[400px] bg-neutral-900 dark:bg-white rounded-3xl"></div>
        </div>
        <div className="md:pt-3">
          <div className="md:max-w-[600px]">
            <p className="font-sans text-white dark:text-black md:text-4xl font-bold mb-8 text-start">
              I&apos;m a 4th Year College Student residing in City of San Pedro,
              Laguna, Philippines
            </p>
            <p className="font-sans text-white dark:text-black md:text-lg text-justify mb-3">
              Over the past 3+ years in college, I have explored different tech
              stacks that are included in Web Development, Mobile Application
              Development, Arduino Development, Database Management, Machine
              Learning, and Desktop Application Development. I am glad that I
              checked on each of them.
            </p>
            <p className="font-sans text-white dark:text-black md:text-lg text-justify">
              These days, I am currently focusing on developing web applications
              using NextJS as frontend, Laravel/Spring Boot as the backend,
              React-Native for Mobile, MySQL/PostgreSQL/MongoDB as the Database.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
