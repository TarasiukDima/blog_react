import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Select as SelectComponent } from "./Select";

const meta: Meta<typeof SelectComponent> = {
  title: "shared/Select",
  component: SelectComponent,
  tags: ["shared"],
  args: {
    value: "Country 1",
    placeholder: "Choose the country",
    onChange: action("Change select item"),
    options: [
      {
        content: "Country 1",
        value: "Country 1",
      },
      {
        content: "Country 2",
        value: "Country 2",
      },
      {
        content: "Country 3",
        value: "Country 3",
      },
      {
        content: "Country 4",
        value: "Country 4",
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof SelectComponent>;

export const Normal: Story = {
  args: {
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
