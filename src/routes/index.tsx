import Home from "../Pages/Home";
import CardDetail from "../Pages/Rented/inxdex";
import Rented from "../Pages/Rented/inxdex";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import { ROUTE_PATHS } from "./paths";

export interface IRoute {
  path: string;
  component: JSX.Element | JSX.Element[];
}

const { HOME } = ROUTE_PATHS;

export const PRIVATE_ROUTES: IRoute[] = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: HOME,
    component: <Home />,
  },
];

export const PUBLIC_ROUTES: IRoute[] = [
  {
    path: "/",
    component: <SignIn />,
  },
  {
    path: "/sign-in",
    component: <SignIn />,
  },
  {
    path: "/sign-up",
    component: <SignUp />,
  },
  {
    path: "/rented",
    component: <Rented />,
  },
  {
    path: "/card-detial",
    component: <CardDetail />,
  },
];
