import { StoryFn } from "@storybook/react";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { Theme } from "shared/types";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
  <ThemeProvider>
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>
);
