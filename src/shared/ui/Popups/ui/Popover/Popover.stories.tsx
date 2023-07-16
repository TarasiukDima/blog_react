import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";

const meta = {
  title: "shared/Popover",
  component: Popover,
  tags: ["shared"],
  args: {},
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: "Content for show in popover",
    trigger: "trigger popover"
  },
};
