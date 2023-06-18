import { classNames } from "shared/lib/classNames";
import { useTheme } from "../providers/ThemeProvider";
import { RoutesApp } from "pages";
import "./index.scss";

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <RoutesApp />
    </div>
  );
};

export default AppContent;
