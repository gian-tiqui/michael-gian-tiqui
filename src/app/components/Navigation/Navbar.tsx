import React from "react";
import { routesMapping } from "../../utils/Routes";
import Link from "next/link";
import { TbPokeball } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="hidden h-14 px-5 border-b border-b-gray-800 md:flex md:justify-between">
      <div className="flex">
        <Link href={"/"} className="flex items-center gap-2">
          <TbPokeball className="h-7 w-auto text-white" />
          <p className="font-mono text-white text-2xl font-bold italic">
            Michael Gian Tiqui
          </p>
        </Link>
      </div>

      <div className="flex justify-end gap-10">
        {routesMapping.map((route, index) => (
          <Link
            href={route.path}
            className="font-mono text-white text-lg my-auto"
            key={index}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
