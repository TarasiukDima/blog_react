import type { Meta, StoryObj } from "@storybook/react";
import { RatingCard } from "./RatingCard";

const meta = {
  title: "entities/Rating/RatingCard",
  component: RatingCard,
  tags: ["entities"],
  args: {},
} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};

export const WithTitle: Story = {
  args: {
    feedbackTitle: "Title for feedback",
    title: "Title for stars",
  },
};
