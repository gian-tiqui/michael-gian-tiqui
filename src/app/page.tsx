import React from "react";
import Introduction from "./components/introduction/Introduction";
import TechStacks from "./components/tech-stacks/TechStacks";
import GetInTouch from "./components/get-in-touch/GetInTouch";

const Home = () => {
  return (
    <div className="px-10 pt-24 md:pt-64 md: pb-32">
      <Introduction />
      <TechStacks />
      <GetInTouch />
    </div>
  );
};

export default Home;
