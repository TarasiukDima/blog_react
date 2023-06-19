import { RouteObject } from "react-router-dom";

export type TRouteObject = RouteObject & { routeName: string };

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}
