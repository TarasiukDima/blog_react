import { Meta, StoryObj } from "@storybook/react";
import { Select as SelectComponent } from "./Select";

const meta: Meta<typeof SelectComponent> = {
  title: "shared/Select",
  component: SelectComponent,
  tags: ["shared"],
};

export default meta;
type Story = StoryObj<typeof SelectComponent>;

export const Primary: Story = {
  args: {
    placeholder: "Name",
  },
};
