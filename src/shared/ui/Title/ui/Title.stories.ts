import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/types";
import { Title } from "./Title";

const meta: Meta<typeof Title> = {
  title: "shared/Title",
  component: Title,
  tags: ["shared"],
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const TitleLightTheme: Story = {
  args: {
    Tag: "h1",
    className: "",
    children: "Text title with light background.",
  },
};

export const TitleDarkTheme: Story = {
  args: {
    Tag: "h1",
    className: "",
    children: "Text title with dark background.",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
