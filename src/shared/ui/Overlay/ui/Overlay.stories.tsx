import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Overlay as OverlayComponent } from "./Overlay";

const meta = {
  title: "shared/Overlay",
  component: OverlayComponent,
  tags: ["shared"],
  args: {},
} satisfies Meta<typeof OverlayComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overlay: Story = {
  args: {
    onClick: action("OverlayComponent"),
  },
};
