import Image from "next/image";
import React from "react";
import gian from "./assets/michael-gian-tiqui.png";

const Home = () => {
  return (
    <div className="h-[1000px]">
      <Image
        height={10000}
        width={10000}
        src={gian}
        alt="Michael Gian Tiqui"
        className="h-full w-auto mx-auto"
      />
    </div>
  );
};

export default Home;
