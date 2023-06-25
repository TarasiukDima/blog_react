import { StrictMode, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "../providers/ErrorBoundary";
import { StoreProvider } from "../providers/StoreProvider";
import { ThemeProvider } from "../providers/ThemeProvider";
import { appRouter } from "./AppRouter";
import "./index.scss";

const App = () => (
  <StrictMode>
    <ErrorBoundary>
      <StoreProvider>
        <ThemeProvider>
          <Suspense fallback={null}>
            <RouterProvider router={appRouter()} />
          </Suspense>
        </ThemeProvider>
      </StoreProvider>
    </ErrorBoundary>
  </StrictMode>
);

export { App };
