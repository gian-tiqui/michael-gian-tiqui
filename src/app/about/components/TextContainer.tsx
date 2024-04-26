import React from "react";
import Lolipop from "./Lolipop";

interface TextContainerProps {
  title: string;
  content: string;
  link?: string;
  year?: string;
  playlist?: string;
}

const TextContainer = () => {
  return (
    <div className="flex gap-3">
      <Lolipop />
      <div className="mb-10">
        <h4 className="text-white dark:text-black font-bold md:text-lg">
          Lorem Ipsum
        </h4>
        <p className="text-white dark:text-black md:text-sm mb-4">
          Lorem Ipsum
        </p>
        <p className="text-white dark:text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ex
          massa, consequat et efficitur a, mattis laoreet nulla. Sed iaculis
          placerat erat id scelerisque. Sed a tristique velit. Quisque faucibus
          lectus ut lorem dapibus, a imperdiet augue semper. Morbi vitae tempor
          tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          In in odio sem. Sed vitae mollis urna, quis mattis justo. Integer
          tempus tellus est. Mauris ante mauris, scelerisque at vestibulum
          consequat, scelerisque sit amet nisi. Ut malesuada consequat ex sed
          suscipit.
        </p>
      </div>
    </div>
  );
};

export default TextContainer;
