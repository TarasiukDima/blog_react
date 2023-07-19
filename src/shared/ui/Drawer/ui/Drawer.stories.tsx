import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Drawer } from "./Drawer";

const meta = {
  title: "shared/Drawer",
  component: Drawer,
  tags: ["shared"],
  args: {},
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    isOpen: true,
    lazy: false,
    onClose: action("Drawer close"),
    children: "Drawer Content"
  },
};
