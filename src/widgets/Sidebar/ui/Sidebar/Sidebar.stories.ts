import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/types";

const meta: Meta<typeof Sidebar> = {
  title: "widgets/Sidebar",
  component: Sidebar,
  tags: ["widgets"],
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const SidebarLightTheme: Story = {
  args: {},
};

export const SidebarDarkTheme: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
