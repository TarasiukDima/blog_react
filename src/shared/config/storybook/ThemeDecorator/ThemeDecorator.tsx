import { StoryFn } from "@storybook/react";
import { ThemeProvider, useTheme } from "app/providers/ThemeProvider";
import { ReactNode, useEffect } from "react";
import { Theme } from "shared/types";

// for update state button on change global option  in storybook's tools
const ComponentWrap = ({
  th,
  children,
}: {
  th: Theme;
  children: ReactNode;
}) => {
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    if (th !== theme) {
      toggleTheme();
    }
  }, [th, theme, toggleTheme]);
  // }, [th]);

  return <div className={`app ${theme}`}>{children}</div>;
};

export const ThemeDecorator = (StoryComponent: StoryFn, context: any) => {
  const theme = context.parameters.theme || context.globals.theme;
  return (
    <ThemeProvider startTheme={Theme.LIGHT}>
      <ComponentWrap th={theme}>
        <StoryComponent />
      </ComponentWrap>
    </ThemeProvider>
  );
};
