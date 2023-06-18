import { Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import css from "./Header.module.scss";

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
