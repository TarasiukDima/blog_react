import type { Meta, StoryObj } from "@storybook/react";
import { Popover as PopoverComponent } from "./Popover";

const meta = {
  title: "shared/Popover",
  component: PopoverComponent,
  tags: ["shared"],
  args: {},
} satisfies Meta<typeof PopoverComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Popover: Story = {
  args: {
    children: "Content for show in popover",
    trigger: "trigger popover",
  },
};
