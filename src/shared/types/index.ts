import { RouteObject } from "react-router-dom";
import { OrderVariants } from "shared/const/common";

export type TRouteObject = RouteObject & { routeTextKey: string };

export type TArticleOrder = OrderVariants;
