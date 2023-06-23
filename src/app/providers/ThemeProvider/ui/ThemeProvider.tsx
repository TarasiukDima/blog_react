import { FC, ReactNode, useMemo, useState } from "react";
import { Theme } from "shared/types";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "../lib/ThemeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface IThemeProps {
  children?: ReactNode;
}

const ThemeProvider: FC<IThemeProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
