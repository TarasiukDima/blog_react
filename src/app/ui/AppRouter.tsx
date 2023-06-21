import { createBrowserRouter } from "react-router-dom";
import { routesApp, routesPath } from "../config/roteConfig";
import { AppLayout } from "./AppLayout";
import { ErrorBoundaryRoute } from "./ErrorBoundaryRoute";

export const appRouter = () =>
  createBrowserRouter([
    {
      path: routesPath.main,
      element: <AppLayout />,
      errorElement: <ErrorBoundaryRoute />,
      children: routesApp,
    },
  ]);
