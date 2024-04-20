interface RoutesInterface {
  name: string;
  path: string;
}

export const routesMapping: RoutesInterface[] = [
  {
    name: "Education",
    path: "/education",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
