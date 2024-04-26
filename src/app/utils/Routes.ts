import { ReactNode } from "react";

export interface RoutesInterface {
  name: string;
  path: string;
  icon?: ReactNode;
}

export const routesMapping: RoutesInterface[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
