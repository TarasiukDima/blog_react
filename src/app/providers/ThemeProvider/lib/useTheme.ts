import { Theme } from "shared/types/common";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "./ThemeContext";
import { useContext } from "react";

interface IUseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): IUseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
}
