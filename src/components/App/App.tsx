import { useTheme } from "../../providers/ThemeProvider";
import { classNames } from "../../helpers/classNames";
import RoutesApp from "./RoutesApp";
import Header from "../Header";
import "../../assets/scss/index.scss";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Header />
      <RoutesApp />
    </div>
  );
};

export default App;
