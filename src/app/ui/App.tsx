import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../providers/ThemeProvider";
import AppContent from "./AppContent";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
