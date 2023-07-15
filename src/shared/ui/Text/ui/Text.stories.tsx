import { Meta, StoryObj } from "@storybook/react";
import { Text as TextComponent } from "./Text";

const meta: Meta<typeof TextComponent> = {
  title: "shared/Text",
  component: TextComponent,
  tags: ["shared"],
};

export default meta;
type Story = StoryObj<typeof TextComponent>;

const title = "Title lorem ipsun";
const text = "Description Description Description Description";

export const Primary: Story = {
  args: {
    title,
    text,
  },
};

export const Error: Story = {
  args: {
    title,
    text,
    theme: "error",
  },
};

export const OnlyTitle: Story = {
  args: {
    title,
  },
};

export const OnlyText: Story = {
  args: {
    text,
  },
};
