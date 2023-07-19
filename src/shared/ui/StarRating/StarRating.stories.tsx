import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { StarRating } from "./StarRating";

const meta = {
  title: "shared/StarRating",
  component: StarRating,
  tags: ["shared"],
  args: {},
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    onSelect: action("Chose start"),
  },
};

export const WithSize: Story = {
  args: {
    onSelect: action("Chose start"),
    size: 150,
  },
};

export const Choosen: Story = {
  args: {
    selectedStars: 5,
  },
};
