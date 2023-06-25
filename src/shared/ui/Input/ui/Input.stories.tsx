import { Meta, StoryObj } from "@storybook/react";
import { Input as InputComponent } from "./Input";

const meta: Meta<typeof InputComponent> = {
  title: "shared/Input",
  component: InputComponent,
  tags: ["shared"],
};

export default meta;
type Story = StoryObj<typeof InputComponent>;

export const Primary: Story = {
  args: {
    placeholder: "Name",
    value: "Author",
  },
};
