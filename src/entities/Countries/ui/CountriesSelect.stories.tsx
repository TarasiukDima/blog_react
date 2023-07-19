import type { Meta, StoryObj } from "@storybook/react";
import { WrapDecorator } from "@/shared/config/storybook/WrapDecorator/WrapDecorator";
import { CountriesSelect as CountriesSelectComponent } from "./CountriesSelect";

const meta: Meta<typeof CountriesSelectComponent> = {
  title: "entities/CountriesSelect",
  component: CountriesSelectComponent,
  tags: ["pages"],
  args: {},
  decorators: [WrapDecorator("150px")],
};

export default meta;
type Story = StoryObj<typeof CountriesSelectComponent>;

export const Normal: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
