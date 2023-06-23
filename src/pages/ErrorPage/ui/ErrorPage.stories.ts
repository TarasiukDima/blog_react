import type { Meta, StoryObj } from "@storybook/react";
import { ErrorPage } from "./ErrorPage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/types";

const meta: Meta<typeof ErrorPage> = {
  title: "pages/ErrorPage",
  component: ErrorPage,
  tags: ["pages"],
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};

export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const ErrorPageLightTheme: Story = {
  args: {},
};

export const ErrorPageDarkTheme: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
