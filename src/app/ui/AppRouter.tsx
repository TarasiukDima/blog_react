import { createBrowserRouter } from "react-router-dom";
import { routesApp, routesPath } from "../config/roteConfig";
import Layout from "./AppLayout";

export const appRouter = () => createBrowserRouter([
  {
    path: routesPath.main,
    element: <Layout />,
    errorElement: <div>error</div>,
    children: routesApp,
  },
]);
