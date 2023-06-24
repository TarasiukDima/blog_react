import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/types";
import { AppLink } from "./AppLink";
import css from "./AppLink.module.scss";

const meta: Meta<typeof AppLink> = {
  title: "shared/AppLink",
  component: AppLink,
  tags: ["shared"],
  args: { to: "/" }
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const LightTheme: Story = {
  args: {
    className: css.dark,
    children: "Link 1"
  },
};

export const DarkTheme: Story = {
  args: {
    className: "",
    children: "Link 2"
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
