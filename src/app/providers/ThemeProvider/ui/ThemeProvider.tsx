import { FC, ReactNode, useMemo, useState } from "react";
import { Theme } from "shared/const/common";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "../lib/ThemeContext";

const getDefaultTheme = (startTheme: Theme) => {
  try {
    const themeInLocalStorage = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || "";

    return (Object.values(Theme) as Array<string>).includes(themeInLocalStorage) ?
      (themeInLocalStorage as Theme) :
      startTheme;
  } catch (error) {
    return startTheme;
  }
};

interface IThemeProps {
  children?: ReactNode;
  startTheme?: Theme;
}

const ThemeProvider: FC<IThemeProps> = ({
  children,
  startTheme = Theme.LIGHT,
}) => {
  const [theme, setTheme] = useState<Theme>(getDefaultTheme(startTheme));

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
