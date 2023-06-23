import type { Meta, StoryObj } from "@storybook/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/types";
import css from "./ThemeSwitcher.module.scss";

const meta: Meta<typeof ThemeSwitcher> = {
  title: "shared/ThemeSwitcher",
  component: ThemeSwitcher,
  tags: ["shared"],
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const LightTheme: Story = {};

export const DarkThemeActiveSwitcher: Story = {
  args: {
    className: css.dark,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
