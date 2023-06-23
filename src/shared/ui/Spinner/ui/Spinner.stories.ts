import type { Meta, StoryObj } from "@storybook/react";

import { Spinner } from "./Spinner";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/types";

const meta: Meta<typeof Spinner> = {
  title: "shared/Spinner",
  component: Spinner,
  tags: ["shared"],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const LightTheme: Story = {};

export const DarkTheme: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
