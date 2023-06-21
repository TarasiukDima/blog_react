import { RouteObject } from "react-router-dom";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { ErrorPage } from "pages/ErrorPage";
import { NotFoundPage } from "pages/NotFoundPage/";
import { TRouteObject } from "shared/types/common";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  ERROR_PAGE = "error",
  NOT_FOUND = "not_found",
}

export const routesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.ERROR_PAGE]: "/error",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routesApp: Array<RouteObject> = [
  {
    id: "1",
    path: routesPath.main,
    element: <MainPage />,
  },
  {
    id: "2",
    path: routesPath.about,
    element: <AboutPage />,
  },
  {
    id: "9",
    path: routesPath.error,
    element: <ErrorPage />,
  },
  {
    id: "10",
    path: routesPath.not_found,
    element: <NotFoundPage />,
  },
];

export const navigationApp: Array<TRouteObject> = [
  {
    id: "1",
    path: routesPath.main,
    routeTextKey: "home",
  },
  {
    id: "2",
    path: routesPath.about,
    routeTextKey: "about",
  },
];
