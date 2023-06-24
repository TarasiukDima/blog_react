import type { Meta, StoryObj } from "@storybook/react";
import { Footer as FooterComponent } from "./Footer";

const meta: Meta<typeof FooterComponent> = {
  title: "widgets/Footer",
  component: FooterComponent,
  tags: ["widgets"],
};

export default meta;
type Story = StoryObj<typeof FooterComponent>;

export const Footer: Story = { args: {} };
