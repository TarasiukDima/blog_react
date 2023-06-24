import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/types";
import { navigationApp } from "app/config/roteConfig";
import { Navigation } from "./Navigation";

const meta: Meta<typeof Navigation> = {
  title: "widgets/Navigation",
  component: Navigation,
  tags: ["widgets"],
  args: { navigationApp },
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const NavigationLightTheme: Story = { args: {}, };

export const NavigationDarkTheme: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
