import React from "react";
import Introduction from "./components/introduction/Introduction";
import MotionTemplate from "./components/motion/MotionTemplate";

// renovation starts here

function HomeV2() {
  return <main></main>;
}

export default function Home() {
  return (
    <MotionTemplate>
      <div className="pt-40 pb-5 md:pb-10">
        <Introduction />
      </div>
    </MotionTemplate>
  );
}
