interface RoutesInterface {
  name: string;
  path: string;
}

export const routesMapping: RoutesInterface[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Education",
    path: "/education",
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
