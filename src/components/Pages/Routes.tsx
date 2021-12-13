import { ReactElement, JSXElementConstructor } from "react";

import Home from "../Home/Home";
import Create from "../Create/Create";
import Edit from "../Edit/Edit";
import Story from "../Story/Story";

export interface IRoute {
  path: string;
  element: ReactElement<any, string | JSXElementConstructor<any>>;
  navbar: boolean;
  title?: string;
}

export interface IRoutes {
  [key: string]: IRoute;
}

export const routes: IRoutes = {
  home: {
    path: "/",
    element: <Home />,
    navbar: true,
    title: "Navbar.home",
  },
  create: {
    path: "/create",
    element: <Create />,
    navbar: true,
    title: "Navbar.create",
  },
  edit: {
    path: "/edit/:id",
    element: <Edit />,
    navbar: true,
  },
  story: {
    path: "/story/:id",
    element: <Story />,
    navbar: true,
  },
};
