import { StoryFn } from "@storybook/react";
import { ThemeProvider, useTheme } from "app/providers/ThemeProvider";
import { ReactNode, useEffect, useLayoutEffect } from "react";
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

  console.log(th, theme);

  useEffect(() => {
    if (th !== theme) {
      toggleTheme();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [th]);

  useLayoutEffect(() => {
    if (theme === Theme.DARK) {
      document.body.classList.add(Theme.DARK);
    } else {
      document.body.classList.remove(Theme.DARK);
    }
  }, [theme]);

  return <div>{children}</div>;
};

export const ThemeDecorator = (StoryComponent: StoryFn, context: any) => {
  const theme = context.parameters.theme || context.globals.theme;

  console.log('context', context);
  return (
    <ThemeProvider startTheme={Theme.LIGHT}>
      <ComponentWrap th={theme}>
        <StoryComponent />
      </ComponentWrap>
    </ThemeProvider>
  );
};
