import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/types";

const meta: Meta<typeof Footer> = {
  title: "widgets/Footer",
  component: Footer,
  tags: ["widgets"],
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const FooterLightTheme: Story = {
  args: {},
};

export const FooterDarkTheme: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
