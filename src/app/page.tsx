import React from "react";
import Introduction from "./components/introduction/Introduction";
import { BiGlobe } from "react-icons/bi";
import Link from "next/link";
import Location from "./components/location/Location";
import IgnorePicture from "./components/ignore-picture/IgnorePicture";

const Home = () => {
  return (
    <div className="px-10 pt-48 md:px-64 md:pt-64 md: pb-32 h-[1500px]">
      <div className="inset-0 absolute -left-5 top-72">
        <Location />
      </div>
      <IgnorePicture />
      <Introduction />
    </div>
  );
};

export default Home;
