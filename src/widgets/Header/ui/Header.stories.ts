import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/types";
import { navigationApp } from "app/config/roteConfig";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "widgets/Header",
  component: Header,
  tags: ["widgets"],
  args: { navigationApp },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const HeaderLightTheme: Story = { args: {}, };

export const HeaderDarkTheme: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
