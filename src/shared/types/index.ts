import { RouteObject } from "react-router-dom";

export type TRouteObject = RouteObject & { routeTextKey: string };

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}
