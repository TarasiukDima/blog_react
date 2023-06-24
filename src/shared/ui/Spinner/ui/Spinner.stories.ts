import type { Meta, StoryObj } from "@storybook/react";
import { Spinner as SpinnerComponent } from "./Spinner";

const meta: Meta<typeof SpinnerComponent> = {
  title: "shared/Spinner",
  component: SpinnerComponent,
  tags: ["shared"],
};

export default meta;
type Story = StoryObj<typeof SpinnerComponent>;

export const Spinner: Story = {};
