import React from "react";
import Introduction from "./components/introduction/Introduction";
import MotionTemplate from "./components/motion/MotionTemplate";
import Footer from "./components/footer/Footer";

const Home = () => {
  return (
    <MotionTemplate>
      <div className="pt-40 pb-5 md:pb-10">
        <Introduction />
      </div>
    </MotionTemplate>
  );
};

export default Home;
