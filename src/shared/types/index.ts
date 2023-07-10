import { RouteObject } from "react-router-dom";

export type TRouteObject = RouteObject & { routeTextKey: string };

export enum Theme {
  LIGHT = "light_theme",
  DARK = "dark_theme",
}

export enum ButtonSize {
  S = "size_s",
  M = "size_m",
  L = "size_l",
}

export enum OrderVariants {
  ASC = "asc",
  DESC = "desc",
}

export type TArticleOrder = OrderVariants;
