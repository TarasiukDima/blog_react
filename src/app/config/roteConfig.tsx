import { TRouteObject } from "shared/types";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",

  ERROR_PAGE = "error",
  NOT_FOUND = "not_found",
}

export const routesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.ERROR_PAGE]: "/error",
  [AppRoutes.NOT_FOUND]: "*",
};

export const navigationApp: Array<TRouteObject> = [
  {
    id: "1",
    path: routesPath.main,
    routeTextKey: "header.home",
  },
  {
    id: "2",
    path: routesPath.about,
    routeTextKey: "header.about",
  },
];
