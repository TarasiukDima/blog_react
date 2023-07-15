import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Input as InputComponent } from "./Input";

const meta: Meta<typeof InputComponent> = {
  title: "shared/Input",
  component: InputComponent,
  tags: ["shared"],
};

export default meta;
type Story = StoryObj<typeof InputComponent>;

export const Input: Story = {
  args: {
    placeholder: "Name",
    value: "Author",
    onChange: action("change value input"),
  },
};
