import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Listbox as ListboxComponent } from "./Listbox";

const meta: Meta<typeof ListboxComponent> = {
  title: "shared/Listbox",
  component: ListboxComponent,
  tags: ["shared"],
  args: {
    items: [
      { id: 1, value: "Durward Reynolds", content: "Durward Reynolds" },
      { id: 2, value: "Kenton Towne", content: "Kenton Towne" },
      { id: 3, value: "Therese Wunsch", content: "Therese Wunsch" },
      {
        id: 4,
        value: "Benedict Kessler",
        content: "Benedict Kessler",
        disabled: true,
      },
      { id: 5, value: "Katelyn Rohan", content: "Katelyn Rohan" },
    ],
    onChange: action("Listbox change"),
    value: "Durward Reynolds",
  },
};

export default meta;
type Story = StoryObj<typeof ListboxComponent>;

export const Primary: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    readonly: true,
  },
};
