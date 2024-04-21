import React from "react";

const Home = () => {
  return (
    <div className="px-10 pt-48 md:px-64 md:pt-72 md: pb-32 h-[1500px]">
      <div className="md:max-w-[950px] mx-auto">
        <p className="text-3xl cursor-default font-mono md:text-5xl text-justify text-white font-extrabold leading-relaxed">
          Hello there 👋, I am{" "}
          <span className="text-blue-500">Michael Gian Tiqui</span>. An Aspiring
          Software Engineer from the City of San Pedro, Laguna, Philippines
        </p>
      </div>
    </div>
  );
};

export default Home;
