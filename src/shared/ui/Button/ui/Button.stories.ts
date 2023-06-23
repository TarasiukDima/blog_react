import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/types";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  tags: ["shared"],
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const LightTheme: Story = {
  args: {
    className: "Button",
    children: "Button1",
  },
};

export const DarkTheme: Story = {
  args: {
    className: "Button2",
    children: "Button2",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

