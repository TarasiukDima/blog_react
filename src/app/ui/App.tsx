import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "../providers/ThemeProvider";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { appRouter } from "./AppRouter";
import "./index.scss";

const App = () => (
  <ErrorBoundary>
    <ThemeProvider>
      <RouterProvider router={appRouter()} />
    </ThemeProvider>
  </ErrorBoundary>
);

export { App };
