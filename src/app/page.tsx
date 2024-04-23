import React from "react";
import Introduction from "./components/introduction/Introduction";
import Location from "./components/location/Location";
import IgnorePicture from "./components/ignore-picture/IgnorePicture";
import TechStacks from "./components/tech-stacks/TechStacks";
import GetInTouch from "./components/get-in-touch/GetInTouch";

const Home = () => {
  return (
    <div className="px-10 pt-24 md:pt-64 md: pb-32">
      <div className="inset-0 absolute -left-5 top-72">
        <Location />
      </div>
      <Introduction />
      <GetInTouch />
      <TechStacks />
    </div>
  );
};

export default Home;
