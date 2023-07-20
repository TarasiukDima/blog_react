import type { Meta, StoryObj } from "@storybook/react";
import { Card as CardComponent } from "./Card";

const meta = {
  title: "shared/Card",
  component: CardComponent,
  tags: ["shared"],
  args: {},
} satisfies Meta<typeof CardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    children: "children card",
  },
};
