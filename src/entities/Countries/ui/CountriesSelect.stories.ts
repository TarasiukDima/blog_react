import type { Meta, StoryObj } from "@storybook/react";
import { CountriesSelect as CountriesSelectComponent } from "./CountriesSelect";

const meta: Meta<typeof CountriesSelectComponent> = {
  title: "entities/CountriesSelect",
  component: CountriesSelectComponent,
  tags: ["pages"],
};

export default meta;
type Story = StoryObj<typeof CountriesSelectComponent>;

export const CountriesSelect: Story = {
  args: {},
};

export const CountriesSelectDisabled: Story = {
  args: {
    disabled: true,
  },
};
