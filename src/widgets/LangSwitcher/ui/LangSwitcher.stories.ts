import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/types";
import { LangSwitcher } from "./LangSwitcher";

const meta: Meta<typeof LangSwitcher> = {
  title: "widgets/LangSwitcher",
  component: LangSwitcher,
  tags: ["widgets"],
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const LangSwitcherLightTheme: Story = { args: { theme: Theme.DARK }, };

export const LangSwitcherDarkTheme: Story = {
  args: { theme: Theme.LIGHT },
  decorators: [ThemeDecorator(Theme.DARK)],
};
