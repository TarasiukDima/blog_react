import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { ThemeProvider } from "../providers/ThemeProvider";
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
