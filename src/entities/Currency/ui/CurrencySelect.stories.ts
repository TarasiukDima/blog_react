import type { Meta, StoryObj } from "@storybook/react";
import { WrapDecorator } from "@/shared/config/storybook/WrapDecorator/WrapDecorator";
import { CurrencySelect } from "./CurrencySelect";

const meta: Meta<typeof CurrencySelect> = {
  title: "entities/CurrencySelect",
  component: CurrencySelect,
  tags: ["pages"],
  args: {},
  decorators: [WrapDecorator("150px")],
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Normal: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
