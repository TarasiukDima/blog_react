import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Drawer as DrawerComponent } from "./Drawer";

const meta = {
  title: "shared/Drawer",
  component: DrawerComponent,
  tags: ["shared"],
  args: {},
} satisfies Meta<typeof DrawerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Drawer: Story = {
  args: {
    isOpen: true,
    lazy: false,
    onClose: action("Drawer close"),
    children: "Drawer Content",
  },
};
