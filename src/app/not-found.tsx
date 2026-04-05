import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="pt-40 md:pt-60 mb-32 px-7 md:px-44 grid place-items-center">
      <div className="container flex flex-col items-center">
        <h1 className="text-white dark:text-black text-7xl font-bold mb-6">
          404
        </h1>
        <p className="text-white dark:text-black text-3xl text-center mb-3">
          Oops something went{" "}
          <span className="font-extrabold text-red-700">wrong</span>
        </p>
        <p className="text-gray-400 dark:text-neutral-800 text-lg text-center mb-10">
          Maybe this page did not exist in the first place...
        </p>
        <Link
          href={"/"}
          className="text-white dark:text-black font-bold md:text-xl rounded-xl hover:text-gray-400 dark:hover:text-neutral-800 border border-white hover:border-gray-400 dark:hover:border-neutral-800 dark:border-black px-4 py-2"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
