import { RouteObject } from "react-router-dom";

export type TRouteObject = RouteObject & { routeTextKey: string };

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export enum ButtonSize {
  S = "size_s",
  M = "size_m",
  L = "size_l",
}
