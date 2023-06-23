import type { Meta, StoryObj } from "@storybook/react";
import AboutPage from "./AboutPage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/types";

const meta: Meta<typeof AboutPage> = {
  title: "pages/AboutPage",
  component: AboutPage,
  tags: ["pages"],
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const AboutPageLightTheme: Story = {
  args: {},
};

export const AboutPageDarkTheme: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
