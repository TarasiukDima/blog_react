import { Meta, StoryObj } from "@storybook/react";
import { Text as TextComponent, TextTheme } from "./Text";

const meta: Meta<typeof TextComponent> = {
  title: "shared/Text",
  component: TextComponent,
  tags: ["shared"],
};

export default meta;
type Story = StoryObj<typeof TextComponent>;

export const Primary: Story = {
  args: {
    title: "Title lorem ipsun",
    text: "Description Description Description Description",
  },
};

export const Error: Story = {
  args: {
    title: "Title lorem ipsun",
    text: "Description Description Description Description",
    theme: TextTheme.ERROR,
  },
};

export const OnlyTitle: Story = {
  args: {
    title: "Title lorem ipsun",
  },
};

export const OnlyText: Story = {
  args: {
    text: "Description Description Description Description",
  },
};
