import type { Meta, StoryObj } from "@storybook/react";
import { Navigation } from "./Navigation";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/types";
import { navigationApp } from "app/config/roteConfig";

const meta: Meta<typeof Navigation> = {
  title: "widgets/Navigation",
  component: Navigation,
  tags: ["widgets"],
  args: {
    navigationApp: navigationApp
  },
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const NavigationLightTheme: Story = {
  args: {},
};

export const NavigationDarkTheme: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
