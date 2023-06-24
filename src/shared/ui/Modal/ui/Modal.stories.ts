import type { Meta, StoryObj } from "@storybook/react";
import { Modal as ModalComponent } from "./Modal";

const meta: Meta<typeof ModalComponent> = {
  title: "shared/Modal",
  component: ModalComponent,
  tags: ["shared"],
};

export default meta;
type Story = StoryObj<typeof ModalComponent>;

export const Modal: Story = {
  args: {
    isOpen: true,
    children: "Modal content",
  },
};
