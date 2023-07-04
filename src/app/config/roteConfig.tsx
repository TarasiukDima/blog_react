import { TRouteObject } from "shared/types";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  ARTICLES = "articles",
  ONE_ARTICLE = "one_article",

  ERROR_PAGE = "error",
  NOT_FOUND = "not_found",
}

export const routesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile", // /:id
  [AppRoutes.ARTICLES]: "/articles",
  [AppRoutes.ONE_ARTICLE]: "/articles", // /:id

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
  {
    id: "3",
    path: routesPath.articles,
    routeTextKey: "header.articles",
  },
];
