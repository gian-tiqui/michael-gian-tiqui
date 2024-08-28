import React from "react";
import MotionTemplate from "./components/motion/MotionTemplate";
import Main from "./components/v2/Main";

export default function HomeV2() {
  return (
    <MotionTemplate>
      <Main />
    </MotionTemplate>
  );
}

function Home() {
  return (
    <MotionTemplate>
      <div className="pt-40 pb-5 md:pb-10"></div>
    </MotionTemplate>
  );
}
