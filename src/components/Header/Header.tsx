import { Link } from "react-router-dom";
import { useTheme } from "../../providers/ThemeProvider";
import css from "./header.module.scss";

const Header = () => {
  const { toggleTheme } = useTheme();

  return (
    <header className={css.header}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
    </header>
  );
};

export default Header;
