import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { TRouteObject } from "shared/types/common";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const routesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

export const routesApp: Array<TRouteObject> = [
  {
    id: "1",
    path: routesPath.main,
    element: <MainPage />,
    routeName: "Home",
  },
  {
    id: "2",
    path: routesPath.about,
    element: <AboutPage />,
    routeName: "About",
  },
];


export const navigationApp: Array<TRouteObject> = [
  {
    id: "1",
    path: routesPath.main,
    routeName: "Home",
  },
  {
    id: "2",
    path: routesPath.about,
    routeName: "About",
  },
];
