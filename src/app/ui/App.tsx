import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "../providers/ThemeProvider";
import { appRouter } from "./AppRouter";
import "./index.scss";

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={appRouter()} />
    </ThemeProvider>
  );
};

export default App;