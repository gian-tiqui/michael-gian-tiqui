import React from "react";
import Lolipop from "./Lolipop";
import Link from "next/link";

interface TextContainerProps {
  name: string;
  content: string;
  link?: string;
  year?: string;
  playlist?: boolean;
}

const TextContainer: React.FC<TextContainerProps> = ({
  name,
  content,
  link,
  year,
  playlist,
}) => {
  return (
    <div className="flex gap-3">
      <Lolipop />
      <div className="mb-10 w-full">
        <div className="flex justify-between">
          <h4 className="text-white dark:text-black font-bold md:text-lg">
            {name}
          </h4>
          {link && (
            <Link href={link}>
              <p className="text-white dark:text-black underline md:text-md font-bold">
                {playlist ? "View Playlist" : "Visit"}
              </p>
            </Link>
          )}
        </div>

        <p className="text-white dark:text-black md:text-sm mb-4">{year}</p>
        <p className="text-white dark:text-black">{content}</p>
      </div>
    </div>
  );
};

export default TextContainer;
