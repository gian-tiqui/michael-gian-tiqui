import React from "react";
import TextContainer from "./TextContainer";
import { playlist } from "@/app/utils/About";

const Playlist = () => {
  return (
    <div className="mb-5 md:mb-16">
      <p className="text-white dark:text-black md:text-2xl font-bold font-sans fontbold mb-5">
        Playlist
      </p>
      {playlist.map((list, index) => (
        <TextContainer key={index} playlist={true} {...list} />
      ))}
    </div>
  );
};

export default Playlist;
