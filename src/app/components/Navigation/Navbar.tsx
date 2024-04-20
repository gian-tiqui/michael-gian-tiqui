import React from "react";
import { routesMapping } from "../../utils/Routes";
import Link from "next/link";
import { TbPokeball } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="hidden h-14 pt-14 md:flex md:justify-center">
      <div className="rounded-lg shadow-2xl bg-neutral-950 h-14 flex items-center justify-between gap-10 px-20">
        {routesMapping.map((route, index) => (
          <Link
            className="font-mono text-white text-xl"
            href={route.path}
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
